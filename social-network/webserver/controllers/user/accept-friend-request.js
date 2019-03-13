'use strict';

const Joi = require('joi');
const UserModel = require('../../../models/user-model');

async function validate(payload) {
  const schema = {
    uuid: Joi.string().guid({
      version: ['uuidv4'],
    }),
  };

  return Joi.validate(payload, schema);
}

async function acceptFriendRequest(req, res, next) {
  // destructuring
  const { uuid: friendUuid } = req.body;
  console.log(friendUuid)
  const { uuid: me } = req.claims;
  console.log(me)

  try {
    await validate({ uuid: friendUuid });
  } catch (e) {
    return res.status(400).send(e);
  }

  /**
   * tengo que buscar en mi usuario y mi array de friends, el amigo que me hizo la peticion,
   * si se encuentra entonces actualizar el field confirmedAt
   */
  const filter = {
    uuid: me,
    'friends.uuid': friendUuid,
    'friends.confirmedAt': null,
  };

  const op = {
    $set: {
      'friends.$.confirmedAt': Date.now(),
    },
  };

  const filter2 = {
      uuid: friendUuid,
  }

  const op2 = {
      $addToSet: {
        friends: {
            uuid: me,
            createdAt: Date.now(),
            confirmedAt: Date.now(),
          }
      },
  }

  try {
    console.log("El filter 1 "+ filter);
    console.log("El filter 2 "+ filter2);
    const result = await UserModel.findOneAndUpdate(filter, op, { rawResult: true });

    const friendResult = await UserModel.findOneAndUpdate(filter2, op2, { rawResult : true });
    

    console.log(result);
    console.log(friendResult);
  } catch (e) {
    return res.status(500).send(e.message);
  }

  return res.send();
}

module.exports = acceptFriendRequest;

