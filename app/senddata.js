var secondary_extension_id = 'enhmkbefjnlahgdgdfpfghppmkapjcaa';
chrome.runtime.onMessageExternal.addListener(
  function(request, sender, response) {
    // Verify the request is coming from the Add-On.
    if (sender.id != secondary_extension_id)
      return;

    // Handle the request.
    if (request.getLocalStorage) {
      response({result: localStorage});
    } else {
      response({}); // Snub them.
    }
  }
);