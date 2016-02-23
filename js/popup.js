document.addEventListener( "DOMContentLoaded", function( )
{
    var btnLaunch = document.getElementById( "btnLaunch" );
    btnLaunch.addEventListener( "click", launchTouran );
	var btnExperiment = document.getElementById( "experiment" );
	btnExperiment.addEventListener( "click", experiment );

} );


function resetVariables( )
{
    chrome.runtime.sendMessage( { method: MSG_DMMCOOKIE } );
    chrome.runtime.sendMessage( { method: MSG_SET, key: LSV_AREA_ERROR, value: "0" } );
    chrome.runtime.sendMessage( { method: MSG_SET, key: LSV_GAME_START, value: "true" } );
    chrome.runtime.sendMessage( { method: MSG_SET, key: LSV_LOGIN_PAGE, value: "false" } );
    chrome.runtime.sendMessage( { method: MSG_SET, key: LSV_SWF_LOADED, value: "false" } );
}


function launchTouran( )
{
    resetVariables( );
    chrome.windows.create( POPUP_CLIENT_CREATE_DATA );
    window.close( );
	var aidi = chrome.windows.WINDOW_ID_CURRENT;
	chrome.windows.update(aidi,{
       state: 'maximized'
   });
}


function experiment( )
{
	resetVariables( );
	document.getElementById("stats").innerHTML = "sukses";
}

