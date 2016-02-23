$(document).ready( function( )
{
    chrome.runtime.sendMessage( { method: MSG_SET, key: LSV_LOGIN_PAGE, value: "true" } );
} );
