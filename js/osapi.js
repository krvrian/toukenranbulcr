$(document).ready( function( )
{
    var bCompactView = false;
    try
    {
        bCompactView = window.parent !== window.top;
    }
    catch( error )
    {
        bCompactView = false;
    }
    if( bCompactView )
    {
        $("html, body").css( { overflow: "hidden" } );
        tryUntil( 120, 500, checkSWFLoaded, "#externalswf", initUI, initUI_Failed );
    }
} );


function initUI( embedid )
{
    var extswf = $(embedid);
    extswf.css(
    {
        position: "absolute",
        margin: "0px 0px 0px 0px",
        top: "0px",
        left: "0px",
        width: "100%",
        height: "100%",
    } );
    extswf.siblings( ).css( { display: "none" } );
    extswf.parents( ).each( function( )
    {
        $(this).siblings( ).css( { display: "none" } );
    } );
    chrome.runtime.sendMessage( { method: MSG_SET, key: LSV_SWF_LOADED, value: "true" } ); // say we finished loading
}


function initUI_Failed( )
{
    console.log( "Failed to initialize UI" );
    chrome.runtime.sendMessage( { method: MSG_SET, key: LSV_SWF_LOADED, value: "" } ); // say we failed to load
}


function checkSWFLoaded( embedid )
{
    var embedElement = $(embedid);
    return embedElement.length;
}


function isFunction( functionToCheck )
{   // stackoverflow.com/questions/5999998/how-can-i-check-if-a-javascript-variable-is-function-type
    var getType = {};
    return functionToCheck && getType.toString.call( functionToCheck ) === '[object Function]';
}


function tryUntil( numTrials, retryTimeout, workFunction, workParams, callbackSuccess, callbackError )
{
    if( isFunction( workFunction ) )
    {
        if( workFunction( workParams ) )
        {   // berhasil
            if( isFunction( callbackSuccess ) )
            {
                callbackSuccess( workParams );
            }
        }
        else
        {   // gagal
            if( --numTrials > 0 )
            {   // cek pengulangan
                setTimeout( function( )
                {
                    tryUntil( numTrials, retryTimeout, workFunction, workParams, callbackSuccess, callbackError );
                }, retryTimeout );
            }
            else
            {   // tidak ada pengulangan, memanggil error
                if( isFunction( callbackError ) )
                {
                    callbackError( workParams );
                }
            }
        }
    }
    else
    {   //harus menjadi function
        if( isFunction( callbackError ) )
        {
            callbackError( workParams );
        }
    }
}

