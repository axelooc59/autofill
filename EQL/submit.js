

document.getElementById('submit').addEventListener('click', function(){
    console.log("log click !!!!");
    var sel = document.getElementById("account-select");
    var opt = sel.options[sel.selectedIndex];
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		chrome.tabs.sendMessage(tabs[0].id, { //prevent listener
        username: opt.value.split("<@>")[0],
		password: opt.value.split("<@>")[1],
        },function(){
          console.log("message send !!!!");
          chrome.tabs.executeScript({
            file: "content.js"
          });

        })
    });
    
    
    
    

  

    // var sel = document.getElementById("account-select");
    // var opt = sel.options[sel.selectedIndex];
    // if ($('#response').length == 0) {


    //   var response = document.createElement("div");
    //   response.id = "response";
    //   response.setAttribute('style', 'white-space: pre;');
    //   var newContent = document.createTextNode("");

    //   response.appendChild(newContent);
    //   document.body.appendChild(response);
    //   response.textContent = "You have chosen the following account: " + opt.value.split("<@>")[0] + "\r\n" ;
    //   response.textContent+= "Password is: "+ opt.value.split("<@>")[1];
    // } else {
    //   div = document.getElementById("response");

    //   div.textContent = "You have chosen the following account: " + opt.value.split("<@>")[0] + "\r\n" ;
    //   div.textContent+= "Password is: "+ opt.value.split("<@>")[1];
    // }


  });