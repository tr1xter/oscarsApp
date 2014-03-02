/**
 * CategoryController
 *
 * @module      :: Controller
 * @description	:: Voting categories and choices
 *
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */

module.exports = {
    /**
     * Marks one choice as correct one
     *
     * @param req
     * @param res
     */
    select: function(req, res) {
        var categoryId = req.param('category');
        var choiceId = req.param('choice');

        Category.update(categoryId, {
            correctChoice_id: choiceId
        }, function(err, categories) {
            if (err) {
                console.log(err);
            } else {
                Category.publishUpdate(categoryId, categories[0].toJSON());

                // Update user points
                User.find().done(function(err, users) {
                    for (var i = 0; i < users.length; i++) {
                        var user = users[i];
                        User.publishUpdate(user.id, user.toJSON());
                    }
                });
            }
        });

        res.send();
    },
  


  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to CategoryController)
   */
  _config: {}

  
};
