/**
 * UserController
 *
 * @module      :: Controller
 * @description	:: Users
 *
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */

module.exports = {
    /**
     * Select choice from category for user
     *
     * @param req
     * @param res
     */
    choose: function(req, res) {
        User.findOne(req.param('id')).done(function(err, user) {
            if (!err) {
                user.choices[req.param('category')] = req.param('choice');
                user.save(function(err) {
                    if (!err) {
                        User.publishUpdate(user.id, user.toJSON());
                    } else {
                        console.log(err);
                    }
                });
            } else {
                console.log(err);
            }
        });

        res.send();
    },


  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to UserController)
   */
  _config: {}

  
};
