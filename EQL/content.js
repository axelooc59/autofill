// function clickDesadv(){
//     setTimeout(() => {
//         document.getElementsByTagName('a')[3].click();
//         console.log(`clicked to desadv`);
//         },1000);
// }


//chrome.runtime.onMessage.addListener(

function getMessage(request, sender, sendResponse) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            console.log("message recu");

            try {
                document.getElementById("username").value = request.username;
                document.getElementById("password1").value = request.password;
                console.log("click on button");
                document.getElementsByClassName("btn")[0].click();
                sendResponse({ status: "Success!" });
                resolve("success");
            } catch (error) {
                console.log(error)
                sendResponse({ status: "Exception occurred!" });
                reject();
            }
        },2000);
    }
    )
}





chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    getMessage(request, sender, sendResponse).then((response) => {
        console.log(response);
        document.getElementsByTagName('a')[3].click();
    })
}


);
// window.addEventListener('locationchange', function() {
//      document.getElementsByTagName('a')[3].click();
//     console.log("click on <a>");
//  });


// console.log(username,password);
// document.getElementById('username').value =password;// username;
// document.getElementById('password1').value =username;// pwd;












