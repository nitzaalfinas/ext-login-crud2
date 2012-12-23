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
	var me = this;
	form.getForm().waitMsgTarget = form.up('loginForm').getEl();
        form.getForm().submit({
            params: {task: 'login'},
            url: 'store/login.php',
            waitMsg: 'Login...',
            success:function(f, action) {
		alert("Sukses");
//                formUtama.up('utama').down('#tablogin').close();
//                formUtama.up('utama').down('#laputama').close();
//                formUtama.myMask = new Ext.LoadMask(formUtama.up('utama').getEl(), {msg:"Loading..."});
//                formUtama.up('utama').aksesStore.loadPage(1);
//                formUtama.myMask.show();
                
            }
	});
    }
    
});