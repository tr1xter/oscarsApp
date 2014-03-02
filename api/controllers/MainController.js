/**
 * MainController
 *
 * @module      :: Controller
 * @description	:: Main page
 *
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */

module.exports = {

    index: function(req, res) {
        console.log('here');
        return res.view({
            title: "Oscars Scoreboard"
        });
    },


  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to MainController)
   */
  _config: {}

  
};
