document.getElementById("saving").addEventListener("click", () => {
	chrome.storage.sync.set({ //saving in storage
		username: document.getElementById('username2').value,
		password: document.getElementById('password2').value,
		
	}, function() {
		console.log("Saved!");
        document.getElementById("div1").style.visibility = "visible";
	});
});

   

































// function sleep(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }



// function doSave(){
// username=document.getElementById("username2").value;// problem here
// password=document.getElementById("password2").value;

// if(username!="" && password!="" ){ 
//     localStorage.setItem("password",password);
//     localStorage.setItem("username",username);

//     //we send data to the web page
//     tab=getCurrentTab();
//     console.log(tab);  
    
//     chrome.tabs.sendMessage(tabs[0].id, {password: password,username:username}, function(response) {
//         console.log(response.status);
//     });
   
  
    // chrome.storage.sync.set({"username": username}, () => {});
    // chrome.storage.sync.set({"password": password}, () => {console.log("Username="+username+" password="+password)});
    document.getElementById("div1").style.visibility = "visible";
//    console.log(username,password);
 //   sleep(3000);
  //  document.getElementById("div1").style.visibility = "hidden";
// }
// else{
//     console.log(username,password);
// }
// }
