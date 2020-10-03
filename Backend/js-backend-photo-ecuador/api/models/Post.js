/**
 * Post.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    ranking: {
      type: 'number',
      max: 5,
      min:0,
    },
    album:{
      model : 'album'
    },
    comments:{
      collection: 'comments',
      via: 'post'
    }
  },

};

