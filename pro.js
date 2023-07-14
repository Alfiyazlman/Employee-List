function hello(){
    document.getElementById('addbtn').click();
}
        fetch("http://localhost:3000/employees")
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            const table = document.getElementById("tableEmployee");
            table.innerHTML="";
            data.forEach((data) => {
                const row = table.insertRow();
                const serialNumber = row.insertCell();
                serialNumber.innerHTML= "01";
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
            })
          })
   const form = document.getElementById("save");

   form.addEventListener('submit',function(e){
   e.preventDefault();

   alert("check console");
      var salutation = document.getElementById('Salutation').value;
      console.log(salutation);

      var firstName = document.getElementById('fname').value;
      console.log(firstName); 

      var lastName = document.getElementById('lname').value;
      console.log(lastName); 

      var email  = document.getElementById('email').value;
      console.log(email); 

      var phonenumber = document.getElementById('mobile').value;
      console.log(phonenumber); 

      var birthday = document.getElementById('birthday').value;
      console.log(birthday); 

      var gender = document.getElementsByName('optradio');
      
      for (i=0 ; i<gender.length ;i++){
        if(gender[i].checked)
            var savegender=gender[i].value;
        console.log(savegender)
    };

      var qualification = document.getElementById('Qualification').value;
      console.log(qualification);  

      var address = document.getElementById('Address').value;
      console.log(address); 

      var country = document.getElementById('countryid').value;
      console.log(country);






   })




