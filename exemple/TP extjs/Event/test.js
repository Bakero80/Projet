Ext.onReady(function(){
      Ext.create('Ext.Button', {
         renderTo: Ext.getElementById('helloWorldPanel'),
         text: 'My Button',
         listeners: {
            click: function() {
               Ext.MessageBox.alert('Alert box', 'Button is clicked');
          }
        }
    });
});
