chrome.commands.onCommand.addListener(function(command) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(
        tabs[0].id,
        {code: 'document.querySelectorAll(".SingleTaskPaneSpreadsheet a.TaskStoryFeed-expandLink").forEach(a => a.click())'});
    chrome.tabs.executeScript(
        tabs[0].id,
        {code: 'document.querySelectorAll(".SingleTaskPaneSpreadsheet a.TruncatedRichText-expand").forEach(a => a.click())'});
  });
});
