if( !chrome.cookies )
{
    chrome.cookies = chrome.experimental.cookies;
}


$(document).ready( function( )
{
    localStorage[LSV_AREA_ERROR] = "0";
    localStorage[LSV_GAME_START] = "false";
    localStorage[LSV_LOGIN_PAGE] = "false";
    localStorage[LSV_SWF_LOADED] = "false";
    onUpdateCookie( );
    chrome.cookies.onChanged.addListener( onCookieChanged );
    chrome.runtime.onMessage.addListener( onMessageReceived );
});


function onCookieChanged( info )
{
    if( info.cookie.name == "ckcy" && info.cookie.value != "1" )
    {
        onUpdateCookie( );
    }
}


function onMessageReceived( request, sender, sendResponse )
{
    var result = { success: true };
    if( request.method === MSG_GET )
    {
        if( request.key in localStorage )
        {
            result = { value: localStorage[request.key], success: true };
        }
        else
        {
            result = { value: undefined, success: false };
        }
    }
    else if( request.method === MSG_SET )
    {
        localStorage[request.key] = request.value;
    }
    else if( request.method === MSG_SETCOOKIE )
    {
        setDMMCookie( request.name, request.value );
    }
    else if( request.method === MSG_DMMCOOKIE )
    {
        onUpdateCookie( );
    }
    else if( request.method === MSG_CLOSE_POPUP )
    {
        chrome.tabs.remove( sender.tab.id );
        if( request.url !== undefined )
        {
            chrome.tabs.create( { url: request.url } );
        }
    }
    else if( request.method === MSG_REOPEN_POPUP )
    {
        chrome.tabs.remove( sender.tab.id, function( )
        {
            localStorage[LSV_SWF_LOADED] = "false";
            chrome.windows.create( POPUP_CLIENT_CREATE_DATA );
        } );
    }
    else if( request.method === MSG_REDIRECT )
    {
        chrome.tabs.update( sender.tab.id, { url: request.url } );
    }
    else
    {
        result = { success: false };
    }
    if( sendResponse && {}.toString.call( sendResponse ) === '[object Function]' )
    {
        sendResponse( result );
    }
}


function onUpdateCookie( )
{
    setDMMCookie( "cklg", "ja" );
    setDMMCookie( "ckcy", "1" );
    setDMMCookie( "foreign_service_list", "1" );
}


function setDMMCookie( cName, cValue )
{
    try
    {
        chrome.cookies.set(
        {
            url: "http://www.dmm.com",
            name: cName,
            value: cValue,
            domain: ".dmm.com",
            expirationDate: (new Date( )).getTime( )
        } );
    }
    catch( error )
    {
        console.log( "Failed to set cookie: " + error.message );
    }
}

