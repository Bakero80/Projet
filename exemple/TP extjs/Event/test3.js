Ext.onReady(function(){
   var button = Ext.create('Ext.Button', {
      renderTo: Ext.getElementById('helloWorldPanel'),
   text: 'My Button'
   });

   // This way we can attach event to the button after the button is created.
   button.on('click', function() {
      Ext.MessageBox.alert('Alert box', 'Button is clicked');
   });
});
