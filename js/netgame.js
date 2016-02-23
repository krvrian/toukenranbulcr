$(document).ready( function( )
{
    var bCompactView = false;
    try
    {
        bCompactView = window.location !== window.parent.location;
    }
    catch( error )
    {
        bCompactView = false;
    }
    chrome.runtime.sendMessage( { method: MSG_SET, key: LSV_AREA_ERROR, value: "0" } );
    chrome.runtime.sendMessage( { method: MSG_SET, key: LSV_GAME_START, value: "false" } );
    if( bCompactView )
    {
        initUI( );
        chrome.runtime.sendMessage( { method: MSG_GET, key: LSV_LOGIN_PAGE }, function( response )
        {
            if( response.value == "true" )
            {   //menghilangkan page history dengan popup
                chrome.runtime.sendMessage( { method: MSG_SET, key: LSV_LOGIN_PAGE, value: "false" } );
                chrome.runtime.sendMessage( { method: MSG_REOPEN_POPUP } );
            }
        } );
    }
    else
    {
        chrome.runtime.sendMessage( { method: MSG_SET, key: LSV_LOGIN_PAGE, value: "false" } );
    }
} );


function initUI( )
{
    var game_frame = $("#game_frame");
    game_frame.siblings( ).css( { display: "none" } );
    game_frame.parents( ).each( function( )
    {
        $(this).siblings( ).css( { display: "none" } );
        $(this).css(
        {
            "min-width": "0px",
            "min-height": "0px",
            margin: "0px 0px 0px 0px",
            padding: "0px 0px 0px 0px",
            height: "100%"
        } );
    } );
    game_frame.attr( "width", "960" );
    game_frame.attr( "height", "580" );
    game_frame.css(
    {
        position: "absolute",
        margin: "0px 0px 0px 0px",
        top: "0px",
        left: "0px",
        width: "960px",
        height: "580px",
    } );
    $("html, body").css( { overflow: "hidden" } );
    checkLoadFlag( 120, 500, resizeFrame );
}


function resizeFrame( )
{
    $("#game_frame").css(
    {
        width: "100%",
        height: "100%",
    } );
}


function checkLoadFlag( trials, timeout, callback )
{
    chrome.runtime.sendMessage( { method: MSG_GET, key: LSV_SWF_LOADED }, function( response )
    {
        if( response.value == "false" )
        {
            if( --trials > 0 )
            {
                setTimeout( function( )
                {
                    checkLoadFlag( trials, timeout, callback );
                }, timeout );
            }
            else
            {
            }
        }
        else
        {
            chrome.runtime.sendMessage( { method: MSG_SET, key: LSV_SWF_LOADED, value: "false" } );
            if( response.value == "true" )
            {
                callback( );
            }
        }
    } );
}

