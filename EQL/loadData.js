
const myTimeout = setTimeout(submiting, 200);

function submiting() {
  document.getElementById("submit").click(); 
  console.log("click after 200ms");
}

document.body.onload = function(){
  var data;
        
        
  Papa.parse("accounts.csv", {
    header: true,
    download: true,
    delimiter: ";",
    dynamicTyping: true,
    complete: function(results) {
      //console.log(results);
      data = results.data;
      data.forEach(element => {

        $('#account-select').append($('<option>', {
          value: element["username"] + "<@>" + element["mdp"],
          text: element["username"] 
        }));


      });



    }
  });
 

};
    
 
  