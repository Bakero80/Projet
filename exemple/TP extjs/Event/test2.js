Ext.onReady(function(){
      Ext.get('tag2').hide()
      Ext.create('Ext.Button', {
         renderTo: Ext.getElementById('helloWorldPanel'),
         text: 'My Button',
         listeners: {
            click: function() {
               this.hide();
            },
            hide: function() {
               Ext.get('tag1').hide();
               Ext.get('tag2').show();
            }
         }
      });
   });
