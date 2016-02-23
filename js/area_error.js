chrome.runtime.sendMessage( { method: MSG_DMMCOOKIE }, function( response )
{
    chrome.runtime.sendMessage( { method: MSG_GET, key: LSV_GAME_START }, function( response )
    {
        if( response.value == "true" )
        {
            chrome.runtime.sendMessage( { method: MSG_DMMCOOKIE } );
            chrome.runtime.sendMessage( { method: MSG_GET, key: LSV_AREA_ERROR }, function( response )
    	    {
                var errorCount = parseInt( response.value );
            	if( errorCount < MAX_AREA_ERRORS )
        		{
            		chrome.runtime.sendMessage( { method: MSG_SET, key: LSV_AREA_ERROR, value: String( errorCount + 1 ) } );
                    if( window.location !== window.parent.location )
                    {
                        chrome.runtime.sendMessage( { method: MSG_REOPEN_POPUP } );
                    }
                    else
                    {
                        chrome.runtime.sendMessage( { method: MSG_REDIRECT, url: TOURAN_GAME_URL } );
                    }
        		}
            	else
            	{   // sering terjadi redirect Area Error beberapa kali
            	    // variabel di reset dan di redirect ke halaman utama
            	    chrome.runtime.sendMessage( { method: MSG_SET, key: LSV_AREA_ERROR, value: "0" } );
            	    chrome.runtime.sendMessage( { method: MSG_SET, key: LSV_GAME_START, value: "false" } );
            	    chrome.runtime.sendMessage( { method: MSG_SET, key: LSV_LOGIN_PAGE, value: "false" } );
            	    chrome.runtime.sendMessage( { method: MSG_SET, key: LSV_SWF_LOADED, value: "false" } );
                    if( window.location !== window.parent.location )
                    {
                        chrome.runtime.sendMessage( { method: MSG_CLOSE_POPUP, url: TOURAN_MAIN_URL } );
                    }
                    else
                    {
                        chrome.runtime.sendMessage( { method: MSG_REDIRECT, url: TOURAN_MAIN_URL } );
                    }
            	}
    	    } );
        }
    } );
} );
