/**
 * Category
 *
 * @module      :: Model
 * @description :: Main categories with choices and points system
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {

    attributes: {
        orderNum: 'integer',
        points: 'integer',
        name: 'string', // system name
        title: 'string',
        correctChoice: 'string',
        choices: 'array'
    }

};
