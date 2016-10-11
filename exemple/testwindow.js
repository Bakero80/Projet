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

			this.win = Ck.create("Ext.window.Window", {
				title		: "window",
				height		: 350,
				width		: 500,
				maximizable	: true,
				collapsible	: true,
				items		: [{
						xtype   : "sliderwidget",
						width: 200,
		    		value: 50,
		    		minValue: 0,
		    		maxValue: 100
					}]
			});
		}

		this.win.show();
	}
});
