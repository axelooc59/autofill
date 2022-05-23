


chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        console.log("message recu");
        try {
            document.getElementById("username").value = request.username;
            document.getElementById("password1").value = request.password;
            
            document.getElementsByClassName("btn")[0].click();
            sendResponse({status: "Success!"});
        } catch (error) {
            console.log(error)
            sendResponse({status: "Exception occurred!"});
        }
    }
)

// console.log(username,password);
// document.getElementById('username').value =password;// username;
// document.getElementById('password1').value =username;// pwd;











