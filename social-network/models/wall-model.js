'use strict';

const mongoose = require('mongoose');

const { Schema } = mongoose;

const wallSchema = new Schema ({
    owner: {
        type: String,
        unique: true,
      },
      posts:[{ type: Schema.ObjectId }],
});

const Wall = mongoose.model('Wall', wallSchema);

module.exports = Wall;