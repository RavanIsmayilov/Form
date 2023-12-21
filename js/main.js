  var form1 = document.querySelector(".registerForm")
  var form2 = document.querySelector(".loginForm")
  var btnNewhesab = document.querySelector(".btn2") 
  var btnDaxilol = document.querySelector(".btn") 
  var message = document.querySelectorAll(".message")
  var firstnameInput = document.getElementById("firstname");
  var passwordInput = document.getElementById("password");
  var backArrow = document.querySelector(".back-arrow");
  var eyeImage = document.querySelector(".eye")

function togglePasswordVisibility(password) {
   
  
    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      eyeImage.src = 'assets/visible.png';
    } else {
      passwordInput.type = 'password';
      eyeImage.src = 'assets/eye-close.png';
    }
  }


  btnDaxilol.addEventListener("click", function(e){
   
    e.preventDefault();
    if(firstnameInput.value === "" ){
      message[0].textContent = 'Bu saheni bos saxlamayin'
      message[0].style.color = 'red' 
  
    } 
    
    if(passwordInput.value === ""){
      message[1].textContent = 'Bu saheni bos saxlamayin'
      message[1].style.color = 'red' 
  
    } 

  })

  backArrow.addEventListener("click", function(){
    
  })

 