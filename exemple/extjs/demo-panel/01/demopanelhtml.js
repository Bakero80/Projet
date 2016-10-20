function creationpanel() {
	new Ext.Panel({
		renderTo: Ext.getBody(),
		   title: 'Panel avec contenu pre-existant',
		height: 200,
		 width: 600,
           cls: 'mon-panel-class',
		contentEl: 'contenu'
	});
}

Ext.onReady(creationpanel);                                                                      