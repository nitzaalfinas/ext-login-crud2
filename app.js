Ext.Loader.setConfig({ enabled: true });
Ext.application({
    name: 'UserApp',
    
    appFolder: 'app',
    controllers: ['Login'], 

    launch: function() {
        Ext.create('Ext.container.Viewport', {
            
            items: [
                {
                    width: 300,
                    height: 300,
                    xtype: 'loginForm'
                }
            ]
        });
    }
});