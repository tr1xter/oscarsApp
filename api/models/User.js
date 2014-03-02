/**
 * User
 *
 * @module      :: Model
 * @description :: User which makes choices
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {

    attributes: {
  	    name: 'string',
        choices: {type: 'json', defaultsTo: {}},

        // Count points for correct answers
        getPoints: function() {
            var points = 0;
            var choices = this.choices;

            for (var categoryName in choices) {
                if (choices.hasOwnProperty(categoryName)) {
                    Category.findOne({name: categoryName}).done(function(err, category) {
                        // Check choice
                        if (!err) {
                            if (category && category.correctChoice == choices[category]) {
                                points += category.points;
                            }
                        } else {
                            console.log(err);
                        }
                    });
                }
            }

            return points;
        },

        toJSON: function() {
            var user = this.toObject();
            user.data = [this.getPoints()];
            return user;
        }
    }

};
