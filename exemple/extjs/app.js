Ext.require("Ext.container.Viewport");

Ext.application({
  name: 'OBJISGP',
  appFolder: 'app',

  controllers: [
    'Employes'
  ],

  launch: function(){
    Ext.create('Ext.container.Viewport', {
      layout: 'fit',
      items: [
        {
          xtype: 'employelist'
      }]
    });
  }
});
