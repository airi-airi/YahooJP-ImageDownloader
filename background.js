chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
    if (request.greeting == "hello")
      sendResponse({farewell: "goodbye"});
	if (request.action == "dl")
      sendResponse({farewell: "down"});
	if (request.action == "dl2"){
		chrome.downloads.download({
			url: request.ur,
		});
      sendResponse({farewell: "tried"});
	}
	if (request.action == "dl3"){
		var x = request.ur;
		for(var i = 0; i < x.length; i++){
			var y = x[i];
			chrome.downloads.download({
				url: y,
			});
		}
		
      sendResponse({farewell: "tried"});
	}
  });







