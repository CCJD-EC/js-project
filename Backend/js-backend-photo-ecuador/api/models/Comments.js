/**
 * Comments.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    description:{
      type: 'string',
    },
    user_created:{
      model: 'user',
    },
    post:{
      model: 'post'
    }

  },

};

