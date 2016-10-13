/**
 *
 *
 *
 *
 *
 *
 *
 */
Ext.define('Ck.action.testwindow', {
	extend: 'Ck.Action',
	alias: 'widget.cktestwindow',

	text: '',
	tooltip: '',
	iconCls: 'fa fa-plus-square',

	itemId: 'testwindow',

	config: {
		panels: ["wmc", "wms", "wfs"]
	},


	doAction: function(btn) {
			this.win = Ck.create("Ext.window.Window", {
				title		: "window",
				height		: 350,
				width		: 500,
				maximizable	: true,
				collapsible	: true,
				items		: [{
						xtype   : "multislider",
						width: 500,
		    		value: 50,
		    		minValue: 0,
		    		maxValue: 100
					}]
			});
		this.win.show();
	},
});
