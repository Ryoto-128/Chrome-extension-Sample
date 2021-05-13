chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
    console.log(sender.tab ?
        "from a content script:" + sender.tab.url :
        "from the extension");

    switch(request.action){
        case "read":
            sendResponse({status: "read: ok"});
            exportTabsDetail();
            break;
        default:
            sendResponse({status: "Request action is not defind"});
            break;
    };

    
});

function exportTabsDetail(){
    chrome.storage.local.get(['data'], function(result){
        let tabs_list;
        tabs_list = result.data;
    });
};