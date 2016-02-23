$(document).ready( function( )
{
    var xBorder = POPUP_CLIENT_WIDTH - $(window).width( );
    var yBorder = POPUP_CLIENT_HEIGHT - $(window).height( );
    var width = POPUP_CLIENT_WIDTH + xBorder;
    var height = POPUP_CLIENT_HEIGHT + yBorder;
    try
    {
        window.resizeTo( width, height );
    }
    catch( error )
    {
        console.log( "Failed to resize window: " + error.message );
    }
} );

