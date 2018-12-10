function loginValidation(){
		
			var username = document.getElementById("username").value;
			var password = document.getElementById("password").value;
			
			
            if (username.length == 0){
                document.getElementById("errorMessage").innerHTML = "<em><small> *Please enter Username</small> </em>";
                return false;
            }
			if(password.length == 0){
				document.getElementById("errorMessage").innerHTML = "<em> <small>*Please enter Password</small> </em>";
                return false;
			}
    }      

	function registerValidation(){
			
			var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

			var username = document.getElementById("r-username").value;
			var password = document.getElementById("r-password").value;
			var checkBox = document.getElementById("checkBox").checked;
			var email = document.getElementById("email").value;
			var confirmPassword = document.getElementById("confirmPassword").value;
			var address = document.getElementById("address").value;
			var city = document.getElementById("city").value;
			var postCode = document.getElementById("postCode").value;
			
            if (username.length == 0){
                document.getElementById("message").innerHTML = "<em><small> *Please enter Username</small> </em>";
                return false;
            }
			if(password.length == 0){
				document.getElementById("message").innerHTML = "<em> <small>*Please enter Password</small> </em>";
                return false;
			}
			if(password.length == 0){
				document.getElementById("message").innerHTML = "<em> <small>*Please enter Password</small> </em>";
                return false;
			}
			if(confirmPassword.length == 0){
				document.getElementById("message").innerHTML = "<em> <small>*Please enter Confirm Password</small> </em>";
                return false;
			}
			if(confirmPassword != password){
				document.getElementById("message").innerHTML = "<em> <small>*Password and Confirm password are not matching</small> </em>";
                return false;
			}
			if(!re.test(String(email).toLowerCase())){
				document.getElementById("message").innerHTML = "<em> <small>*Please enter valid email</small> </em>";
                return false;
			}
			if(address.length == 0){
				document.getElementById("message").innerHTML = "<em> <small>*Please enter Address</small> </em>";
                return false;
			}
			if(city.length == 0){
				document.getElementById("message").innerHTML = "<em> <small>*Please enter City</small> </em>";
                return false;
			}
			if(postCode.length == 0){
				document.getElementById("message").innerHTML = "<em> <small>*Please enter Post code</small> </em>";
                return false;
			}
			if (!checkBox){
				document.getElementById("message").innerHTML = "<em> <small>*Check the Terms and Condition</small> </em>";
                return false;
			}
    }   