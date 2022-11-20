
document.getElementById("input").addEventListener("keypress", (e) =>{
   if(e.keyCode >= 97 && e.keyCode <= 122 ){
      return;
   } else if (e.keyCode >= 60 && e.keyCode <= 90) {
      console.log("This is nonequal to string");
   } else (
      confirm("Kindly input only numbers")
   )
})