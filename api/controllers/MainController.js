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
        return res.view({
            title: "Oscars Scoreboard",
            // Seriously quick and dirty
            globalControl: false
        });
    },

    control: function(req, res) {
        return res.view('main/index', {
            title: "Oscars Scoreboard Control",
            globalControl: true
        });
    },

  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to MainController)
   */
  _config: {}

};
