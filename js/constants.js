// FILE INI BERISI KONSTANTA YANG PENTING

//--------------------------------------------------
// COMMANDS
//--------------------------------------------------
// chrome.runtime.sendMessage( { method: METHOD, ... }, [opt] callback );
var MSG_GET         = "getLocalStorage";    // { kunci(key), nilai }   => { nilai, sukses }
var MSG_SET         = "setLocalStorage";    // { kunci(key) }          => { sukses }
var MSG_SETCOOKIE   = "setCookie";          // { nama, nilai }  => { sukses }
var MSG_DMMCOOKIE   = "setDMMCookie";       // { }              => { sukses }
var MSG_CLOSE_POPUP = "closePopup";         // { url }          => { sukses }
var MSG_REOPEN_POPUP= "reopenPopup";        // { }              => { sukses }
var MSG_REDIRECT    = "redirect";           // { url }          => { sukses }


// --------------------------------------------------
// VARIABEL DATA LOKAL
// --------------------------------------------------
var LSV_AREA_ERROR = "areaError"; // integer: berapa kali di redirect ke halaman area error?
var LSV_GAME_START = "gameStart"; // boolean: apakah aplikasi bisa memulai game?
var LSV_LOGIN_PAGE = "loginPage"; // boolean: sudahkan masuk ke login page?
var LSV_SWF_LOADED = "swfloaded"; // boolean: SWF sudah load?


// --------------------------------------------------
// KONSTANTA LAIN
// --------------------------------------------------
var TOURAN_MAIN_URL = "https://www.dmm.com/netgame_s/tohken/";
var TOURAN_GAME_URL = "https://www.dmm.com/netgame/social/-/gadgets/=/app_id=825012/";
var MAX_AREA_ERRORS = 3;
var POPUP_CLIENT_WIDTH = 1366;
var POPUP_CLIENT_HEIGHT = 730;
var POPUP_CLIENT_CREATE_DATA =
{
    url: chrome.extension.getURL( "/pages/touran.html" ),
    focused: true,
    type: "popup",
	state: 'fullscreen',
};

