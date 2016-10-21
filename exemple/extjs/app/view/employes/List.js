Ext.define('OBJISGP.view.employe.List' ,{
  extend: 'Ext.grid.Panel',

  alias: 'widget.employelist',

  title: 'Tous les Employes',

  initComponent: function() {
    this.store = {
      fields: ['nom', 'email'],
      data : [
        {nom: 'Douglas', email: 'douglas@objis.com'},
        {nom: 'Morad', email: 'morad@objis.com'}
      ]
    };

    this.columns = [
      {header: 'Nom', dataIndex: 'nom', flex: 1},
      {header: 'Email', dataIndex: 'email', flex: 1}
    ];

    this.callParent(arguments);
  }
});
