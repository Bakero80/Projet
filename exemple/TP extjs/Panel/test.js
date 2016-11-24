Ext.onReady(function () {
   var childPanel1 = Ext.create('Ext.Panel', {
       html: 'First Panel'
   });

   var childPanel2 = Ext.create('Ext.Panel', {
       html: 'Another Panel'
   });

   var childPanel3 = Ext.create('Ext.Panel', {
       html: 'Again Another Panel'
   });

   Ext.create('Ext.panel.Panel', {
   renderTo: Ext.getBody(),
      width: 125,
      height : 100,
      border : true,
      frame : true,
      items: [ childPanel1, childPanel2 ]
   });
});
