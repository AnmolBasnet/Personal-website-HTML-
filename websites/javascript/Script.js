function feedback() {

	// body...
	var firstName,secondName,subject,email,message;
 	firstName = document.forms["form"]["First Name"].value;
	secondName = document.forms["form"]["Second Name"].value;
	subject= document.forms["form"]["Subject"].value;
	email=document.forms["form"]["E-mail"].value;
	message=document.forms["form"]["Message"].value;


	if(firstName==""||secondName==""||subject==""||email==""||message==""){

		alert('\tAlert!\n Please Fill all the boxes first.');

	}

}


