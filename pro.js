function hello(){
    document.getElementById('addbtn').click();
}
        fetch("http://localhost:3000/employees")
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            const table = document.getElementById("tableEmployee");
            table.innerHTML="";
            var i=1;
            data.forEach((data) => {
                const row = table.insertRow();
                const serialNumber = row.insertCell();
                serialNumber.innerHTML=i;
                const firstNameCell =row.insertCell();
                firstNameCell.innerHTML=data.firstName +" "+data.lastName;
                const emailCell = row.insertCell();
                emailCell.innerHTML=data.email;
                const numberCell = row.insertCell();
                numberCell.innerHTML=data.phone;
                const genderCell = row.insertCell();
                genderCell.innerHTML=data.gender;
                const stateCell = row.insertCell();
                stateCell.innerHTML=data.state;
                const countryCell = row.insertCell();
                countryCell.innerHTML=data.country;
                var dot =row. insertCell();
                dot.innerHTML= ". . .";
                i++
            })
          });
   const form = document.getElementById("save");

   form.addEventListener('submit',function(e){
   e.preventDefault();

   alert("check console");
      var salutation = document.getElementById('Salutation').value;

      var firstName = document.getElementById('fname').value;

      var lastName = document.getElementById('lname').value;

      var birthday = document.getElementById('birthday').value;

      var dob = changeformat(birthday);

         function changeformat(val){
          const dobstore = val.split("-");
            let year = dobstore[0];
            let month = dobstore[1];
            let day = dobstore[2];
            let formattebirthday = day + "-" + month + "-" + year;
            return formattebirthday;
         }

      var gender = document.getElementsByName('optradio');
      
      for (i=0 ; i<gender.length ;i++){
        if(gender[i].checked)
            var savegender=gender[i].value;
      };

      var qualification = document.getElementById('Qualifications').value;

      var email  = document.getElementById('email').value;

      var phonenumber = document.getElementById('mobile').value;

      var username = document.getElementById('Username').value;
      
      var password = document.getElementById('inputPassword5').value;

      var address = document.getElementById('Address').value;

      var country = document.getElementById('countryid').value;
      
      var state = document.getElementById('inputState').value;

      var city = document.getElementById('cityid').value;
     
      var pinzip = document.getElementById('inputpinzip').value;

      console.log(salutation,firstName,lastName,birthday,savegender,password, qualification,email,phonenumber,username,address,country,state,city,pinzip);
   
      const server = {
        address:address,
        city:city,
        country:country,
        dob:dob,
        email:email,
        firstName:firstName,
        gender:savegender,
        lastName:lastName,
        password:password,
        phone:phonenumber,
        qualifications:qualification,
        salutation:salutation,
        state:state,
        username:username,
        pinzip:pinzip
      }
       
      fetch("http://localhost:3000/employees",{
    method:'POST', headers:{
        'content-type':'application/json'
    },
    body:JSON.stringify(server)
     })
      .then((response) => response.json())
      .then(date=>{
        console.log(date);
      })
      console.log(server);
    })

    
// function validate(){
//   // ===========================================================//
//   var fnamevalidation =  document.getElementById("fname").value;
//   var fsnamevalidation =  (/^[A-Za-z]/);

//   if(fsnamevalidation.test(fnamevalidation)){
//     document.getElementById("fname").style.border= "1px solid green";
//   }
//   else{
//     document.getElementById("fname").style.border= "1px solid red";
//     document.getElementById("fname").focus();
//   }
// // ===========================================================//
//   var lnamevalidation =  document.getElementById("fname").value;
//   var lsnamevalidation =  (/^[A-Za-z]/);

//   if(lsnamevalidation.test(lnamevalidation)){
//     document.getElementById("lname").style.border= "1px solid green";
//   }
//   else{
//     document.getElementById("lname").style.border= "1px solid red";
//     document.getElementById("lname").focus();
//   }
// // ===========================================================//
//   var fnamevalidation =  document.getElementById("fname").value;
//   var fsnamevalidation =  (/^[A-Za-z]/);

//   if(fsnamevalidation.test(fnamevalidation)){
//     document.getElementById("fname").style.border= "1px solid green";
//   }
//   else{
//     document.getElementById("fname").style.border= "1px solid red";
//     document.getElementById("fname").focus();
//   }
// // ===========================================================//




















// var salutationvalidation = document.forms["save"]["Salutation"];

// var fnamevalidation = document.forms["save"]["fname"];

// var lnamevalidation = document.forms["save"]["lname"];

// var birthdayvalidation = document.forms["save"]["birthday"];

// var qualificationvalidation = document.forms["save"]["Qualifications"];

// var emailvalidation = document.forms["save"]["email"];

// var phonenumbervalidation = document.forms["save"]["mobile"];

// var uservalidation = document.forms["save"]["Username"];

// var passwordvalidation = document.forms["save"]["inputPassword5"];

// var addressvalidation = document.forms["save"]["Address"];

// var countryvalidation = document.forms["save"]["countryid"];

// var statevalidation = document.forms["save"]["inputState"];

// var cityvalidation = document.forms["save"]["cityid"];  

// var pinzipvalidation = document.forms["save"]["inputpinzip"];  

// function loop(){
//   // alert("warning")
//     if(salutationvalidation.value==""){
//       salutationvalidation.style.border = "1px solid red "
//       salutationvalidation.focus();
//       return false;
//     }
//     else
//     salutationvalidation.style.border = "1px solid green ";
// // ==============================================================
//     if (fnamevalidation.value == ""){
//       fnamevalidation.style.border = "1px solid red ";
//       fnamevalidation.focus();
//       return false;
//     }
//     else
//     fnamevalidation.style.border = "1px solid green ";
// // ===============================================================

//      if (lnamevalidation.value == ""){
//       lnamevalidation.style.border = "1px solid red ";
//       lnamevalidation.focus();
//       return false;
//     }
//     else
//     lnamevalidation.style.border = "1px solid green ";
// // ================================================================ 

//      if (birthdayvalidation.value == ""){
//       birthdayvalidation.style.border = "1px solid red ";
//       birthdayvalidation.focus();
//       return false;
//     }
//     else
//     birthdayvalidation.style.border = "1px solid green ";
// // ================================================================ 
//     if (qualificationvalidation.value == ""){
//       qualificationvalidation.style.border = "1px solid red ";
//       qualificationvalidation.focus();
//       return false;
//     }
//     else
//     qualificationvalidation.style.border = "1px solid green ";
// // ================================================================    
//       if (emailvalidation.value == ""){
//         emailvalidation.style.border = "1px solid red ";
//         emailvalidation.focus();
//       return false;
//     }
//     else
//     emailvalidation.style.border = "1px solid green ";
// // ================================================================   
//       if (phonenumbervalidation.value == ""){
//         phonenumbervalidation.style.border = "1px solid red ";
//         phonenumbervalidation.focus();
//       return false;
//     }
//     else
//     phonenumbervalidation.style.border = "1px solid green ";
// // ================================================================  
//        if (uservalidation.value == ""){
//         uservalidation.style.border = "1px solid red ";
//         uservalidation.focus();
//       return false;
//     }
//     else
//     uservalidation.style.border = "1px solid green ";
// // ================================================================  

//       if (passwordvalidation.value == ""){
//         passwordvalidation.style.border = "1px solid red ";
//         passwordvalidation.focus();
//       return false;
//     }
//     else
//     passwordvalidation.style.border = "1px solid green ";
// // ================================================================  

//     if (addressvalidation.value == ""){
//       addressvalidation.style.border = "1px solid red ";
//       addressvalidation.focus();
//       return false;
//     }
//     else
//     addressvalidation.style.border = "1px solid green ";
// // ================================================================  

//       if (countryvalidation.value == ""){
//         countryvalidation.style.border = "1px solid red ";
//         countryvalidation.focus();
//       return false;
//     }
//     else
//     countryvalidation.style.border = "1px solid green ";
// // ================================================================  

//     if (statevalidation.value == ""){
//       statevalidation.style.border = "1px solid red ";
//       statevalidation.focus();
//       return false;
//     }
//     else
//     statevalidation.style.border = "1px solid green ";
// // ================================================================  
//     if (cityvalidation.value == ""){
//       cityvalidation.style.border = "1px solid red ";
//       cityvalidation.focus();
//       return false;
//     }
//     else
//     cityvalidation.style.border = "1px solid green ";
// // ================================================================  

//       if (pinzipvalidation.value == ""){
//         pinzipvalidation.style.border = "1px solid red ";
//         pinzipvalidation.focus();
//       return false;
//     }
//     else
//     pinzipvalidation.style.border = "1px solid green ";
// // ================================================================ 
//   }