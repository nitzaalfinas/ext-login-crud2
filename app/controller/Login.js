Ext.define('UserApp.controller.Login', {
    extend: 'Ext.app.Controller',
    //stores: ['User'],
    views: [
	'login'
    ],
    
    init: function() {
        console.log('Initialized Users! This happens before the Application launch function is called');
        
        this.control({
            'viewport > panel': {
                render: this.onPanelRendered
            },
	    'loginForm button[action=masuk]': {
		click: this.masukUser
	    }
        });
    },
    
    onPanelRendered: function() {
        console.log('The panel was rendered');
    },
    
    masukUser: function(){
	alert("OK");
           
    }
    
});
