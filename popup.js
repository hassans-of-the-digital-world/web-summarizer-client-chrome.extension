
$(function(){

  $("div#btn-summary").click(function() {
    
    // Extract html tags of current page
    chrome.tabs.query({
      active: true,
      currentWindow: true
    }, function(tabs) {
      var tab_url = tabs[0].url;
      $.ajax({
          type: "POST",
          url: "http://202.30.23.211:8000/article/summarize/",
          data: {"url" : tab_url},
          dataType : "json",
          success : function() {

          }

      });
    });
    
  });

  function handleContent(results) {
    console.log(results);
  }

  $("#btn-history").click(function() {

  });
})