Ext.onReady(function(){
   var button = Ext.create('Ext.Button', {
      renderTo: Ext.getElementById('helloWorldPanel'),
      text: 'My Button',
      listeners: {
         myEvent: function(button) {
            Ext.MessageBox.alert('Alert box', 'My custom event is called');
         }
      }
   });
   Ext.defer(function() {
      button.fireEvent('myEvent');
   }, 3000);
});
