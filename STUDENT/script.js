$(document).ready(function(){
	
	$("#register_student").click(function(){
		$("#search_form").hide();
		$("#result").empty();
		$("#form").show();
	});

	$("#submit").click(function(){
		var First_Name = $('#First_Name').val();
		var Last_Name = $('#Last_Name').val();
		var Email_Id = $('#Email_Id').val();
		var Phone_Number = $('#Phone_Number').val();
		var Password = $('#Password').val();

		$.ajax({
	       type: "POST",
	       url: "db.php",
	       data: {'token':'insert','First_Name':First_Name, 'Last_Name':Last_Name, 'Email_Id':Email_Id, 'Phone_Number':Phone_Number, 'Password':Password},
	       success: function(data) {
	       	//alert(data);
	         $("#form").hide();
	         $("#result").empty().append(`<p id="insert">`+data+`</p>`);
	       }
	    });
		return false;
	    //$("#form").show();
	});


 	$("#find_student").click(function(){
 		$("#form").hide();
 		$("#result").empty();
    	$("#search_form").show();
  	});

 	$("#search").click(function(){
		var Name = $('#Name').val();
		$.ajax({
	       type: "POST",
	       url: "db.php",
	       data: {'token':'get','Name':Name},
	       success: function(data) {
	         $("#form").hide();
	         $("#search_form").hide();
	         data = JSON.parse(data);
	         console.log(data);
	         table = `<table align="center"><tr>
	         	<th>First Name</th>
	         	<th>Last Name</th>
	         	<th>Email</th>
	         	<th>Phone Number</th>
	         	</tr>`; 
	         for(var i = 0 ; i < data.length; i++){
	         	//alert(data[i]["FirstName"]);
	         	table += `<tr>
	         	<td>`+data[i]["FirstName"]+`</td>
	         	<td>`+data[i]["LastName"]+`</td>
	         	<td>`+data[i]["Email"]+`</td>
	         	<td>`+data[i]["PhoneNumber"]+`</td>
	         	</tr>`;
	         }
	         table +=`</table>`;
	         $("#result").empty().append(table);
	       }
	    });
		return false;
	    //$("#form").show();
	});

});