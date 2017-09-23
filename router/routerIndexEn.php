<?php

require('routeros_api_class.php');



$API = new RouterosAPI();
$id = $_GET["id"];
$name = $_GET["name"];
//$API->debug = true;
$ip = $_GET["ip"];
$username = $_GET["username"];
$pass =  $_GET["password"];
$type =  $_GET["type"];


		
////////////////////// For Enable PPPOE InterFace
$Connects = $API->userActive($ip,$username,$pass,$id);


	if ($Connects){
		echo "success";
	}
	else{
		echo '<script language="javascript">';
        echo 'alert("Eable Not Happerned")';
        echo '</script>';
	}




date_default_timezone_set("Asia/Dhaka");
	$servername = "localhost";
	$username = "root";
	$password = "arnob";
	$dbname = "BORouter";
	
	$date = date("d:m:y");
	
	
	// Create connection
	$conn = new mysqli($servername, $username, $password, $dbname);
	// Check connection
	if ($conn->connect_error) {
		die("Connection failed: " . $conn->connect_error);
	}
	
	$sql = "INSERT INTO userAction (id, name,Todaydate,type) VALUES ('$id', '$name','$date','$type');";
	
	if ($conn->query($sql) === TRUE) {
		echo "New record created successfully";
	} else {
		echo '<script language="javascript">';
		echo 'alert("There is an Error to enter data to DB")';
		echo '</script>';
	}
	
	$conn->close();






?>