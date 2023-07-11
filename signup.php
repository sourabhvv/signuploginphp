<?php
// Establish database connection
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "formdatabase";

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

// Retrieve form data
$username = $_POST['username'];
$email = $_POST['email'];
$passworduser = $_POST['password'];

// Insert user data into database
$stmt = $conn->prepare("INSERT INTO user (username, email, passworduser) VALUES (?, ?, ?)");
$stmt->bind_param("sss", $username, $email, $password);
$stmt->execute();

if ($stmt->affected_rows > 0) {
  echo "User registered successfully";
} else {
  echo "Error occurred while registering user";
}

$stmt->close();
$conn->close();
?>
