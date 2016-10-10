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
	alias: "widget.cktestwindow",

	text: "",
	tooltip: '',
	iconCls: 'fa fa-plus-square',

	itemId: 'testwindow',

	config: {
		panels: ["wmc", "wms", "wfs"]
	},

	/**
	 * Update geolocationMarker's position via GPS if pressed == true.
	 * Zoom to user location
	 */
	doAction: function(btn) {
		if(Ext.isEmpty(this.win) || this.win.isDestroyed) {
			this.mainPanel = this.createMainPanel();

			this.win = Ck.create("Ext.window.Window", {
				title		: "window",
				height		: 350,
				width		: 500,
				layout		: "fit",
				maximizable	: true,
				collapsible	: true,
				items		: [this.mainPanel]
			});
		}

		this.win.show();
	},

	createMainPanel: function() {
		var cls, conf, config, items = [], panels = this.getPanels();

		for(var i in panels) {
			conf = panels[i];
			conf.xtype = "cktestwindow"
			items.push(conf)
		}

		if(items.length > 1) {
			cls = "Ext.tab.Tab";
			config = {items: items}
		} else {
			cls = "Ext.panel.Panel";
			config = {
				items: items,
				layout: "fit"
			}
		}

		return Ck.create(cls, config);
	}
});
