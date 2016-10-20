Ext.require("Ext.container.Viewport");

Ext.application({
  name: 'OBJISGP',
  appFolder: 'app',

  launch: function(){
    Ext.create('Ext.container.Viewport', {
      layout: 'fit',
      items: [
        {
          xtype: 'panel',
          title: 'Employes'
          html: 'Liste des employés ici'

      }]
    });
  }
});
