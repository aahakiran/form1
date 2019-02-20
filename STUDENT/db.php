<?php

$servername = "localhost";
$username 	= "root";
$password 	= "";
$dbname 	= "student";

$lr_conn	= new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($lr_conn->connect_error) {
    die("Connection failed");
}
if($_POST["token"] === 'insert'){
	$First_Name 	= $_POST["First_Name"];
	$Last_Name 		= $_POST['Last_Name'];
	$Email_Id 		= $_POST['Email_Id'];
	$Phone_Number 	= $_POST['Phone_Number'];
	$Password 		= $_POST['Password'];
	$result 		= insterData($lr_conn,$First_Name,$Last_Name,$Email_Id,$Phone_Number,$Password);
	echo json_encode($result);
}else if($_POST["token"] == 'get'){
	$result			= false;
	$Name 	= $_POST["Name"];
	$result 		= getData($lr_conn,$Name);
	echo json_encode($result);
}


function insterData($fr_conn,$First_Name,$Last_Name,$Email_Id,$Phone_Number,$Password){
	$ls_query = "INSERT INTO studentdetails (FirstName,LastName,Email,PhoneNumber,Password) VALUES ('$First_Name','$Last_Name','$Email_Id',$Phone_Number,'$Password')";
	if ($fr_conn->query($ls_query) === TRUE) {
		return "New record created successfully";
	}else{
		return "Record not inserted. Try again";
	}
}

function getData($lr_conn,$Name){
	$sql = "SELECT FirstName,LastName,Email,PhoneNumber,Password FROM studentdetails WHERE FirstName='".$Name."'";
	$result = $lr_conn->query($sql);
	if ($result->num_rows > 0) {
    	while($row = $result->fetch_assoc()) {  
    		$output[] = $row;
    	}
    }
    return $output;
}

?>