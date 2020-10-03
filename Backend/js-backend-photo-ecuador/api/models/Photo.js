/**
 * Photo.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    name:{
      type: 'string',
      required: true,
      maxLength: 40,
    },

    description:{
      type: 'string',
      unique: true,
      required: false,
      maxLength: 400,
    },

    url:{
      type: 'string',
      unique: true,
      required: true,
    },

    status:{
      type: 'string',
      isIn: ['Disponible', 'No Disponible', 'Eliminada', 'En Actualiación'],
      defaultsTo: 'Disponible',
    },

    album_photo:{
      collection: 'album',
      via: 'photos',
    },
  },

};
