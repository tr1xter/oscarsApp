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
        }, function(err, users) {
            if (err) {
                console.log(err);
            } else {
                Category.publishUpdate(categoryId, users[0].toJSON());
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
