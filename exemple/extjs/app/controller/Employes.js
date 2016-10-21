Ext.define('OBJISGP.controller.Employes', {
  extend: 'Ext.app.Controller',

  init: function(){
    this.control({
      'viewport > panel': {
        render: this.onPanelRendered
      }
    });
  },

  onPanelRendered: function() {
    console.log('Affichage du panel');
  }
});
