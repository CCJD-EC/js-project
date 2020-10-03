/**
 * Album.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    name:{
      type: 'string',
      unique: true,
      required: true,
      maxLength: 40,
    },

    user_album:{
      collection: 'user',
      via: 'albums'
    },

    photos:{
      collection: 'photo',
      via: 'album_photo',
    },

    album_posts:{
      collection: 'post',
      via: 'album'
    }

  },

};
