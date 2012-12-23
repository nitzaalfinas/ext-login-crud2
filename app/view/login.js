Ext.define('UserApp.view.login', {
    extend: 'Ext.window.Window',
    alias : 'widget.loginForm',
    title : 'Edit User',
    layout: 'fit',
    autoShow: true,
    dragable: true,

    initComponent: function() {
        this.items = [
            {
                xtype: 'form',
		bodyPadding: 10,
                items: [
                    {
                        xtype: 'textfield',
                        name : 'name',
                        fieldLabel: 'Name'
                    },
		    {
			xtype: 'textfield',
			inputType: 'password',
			name: 'password2',
			fieldLabel: 'Password'
		    }
                ]
            }
        ];

        this.buttons = [
            {
                text: 'Login',
                action: 'masuk'
            },
            {
                text: 'Cancel',
                scope: this,
                handler: this.close
            }
        ];

        this.callParent(arguments);
    }
});