/**
 * Create a new `Ti.UI.TabGroup`.
 */








//var tabGroup = Ti.UI.createTabGroup();




/**
 * Add the two created tabs to the tabGroup object.
 */
// tabGroup.addTab(createTab("Tab 1", "Eu sou a janela 1", "assets/images/tab1.png"));
// tabGroup.addTab(createTab("Tab 2", "Eu sou a janela 2", "assets/images/tab2.png"));
// tabGroup.addTab(createTab("Tab 3", "Eu sou a janela 3", "assets/images/tab2.png"));

/**
 * Open the tabGroup
 *
 */





var telaInicial = Ti.UI.createWindow({
    // title: 'tab1',
    backgroundColor: '#fff'
});

var utils = {}
var webview = Ti.UI.createWebView({ url: 'html/index.html' });
telaInicial.add(webview);

var telaGlobal = null; 


utils.abriNovaJanela = function(url){
    var telaGlobal = Ti.UI.createWindow({
        // title: 'tab1',
        backgroundColor: '#fff'
    });

var webviewNovo =  Ti.UI.createWebView({
        url: url
    });

    telaGlobal.add(webviewNovo);
    telaGlobal.open()



}


telaInicial.open()



/**
 * Creates a new Tab and configures it.
 *
 * @param  {String} title The title used in the `Ti.UI.Tab` and it's included `Ti.UI.Window`
 * @param  {String} message The title displayed in the `Ti.UI.Label`
 * @return {String} icon The icon used in the `Ti.UI.Tab`
 */
// function createTab(title, message, icon) {
    

//     return tab;
// }



