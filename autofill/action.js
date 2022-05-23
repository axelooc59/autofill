document.getElementById('fillForm').addEventListener('click', function(){
    console.log("log click !!!!");
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		chrome.tabs.sendMessage(tabs[0].id, { //prevent listener
        username: document.getElementById('username2').value,
		password: document.getElementById('password2').value,
        },function(){
          console.log("message send !!!!");
          chrome.tabs.executeScript({
            file: "filler.js"
          });

        })
    });
    
    
    
    
  });
  