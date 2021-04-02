<?php

// PHP CONFIG
$_SERVER["REQUEST_METHOD"] == "POST";
$hostname = "db5002129461.hostin-data.io";
$username = "dbu96360";
$password = "KQ6UHi&Jn?kWKPpXv-!";
$db = "dbs1727879";

// connects to DB
$dbconnect=mysqli_connect($hostname,$username,$password,$db);

if ($dbconnect->connect_error) {
  die("Database connection failed: " . $dbconnect->connect_error);
}

if(isset($_POST['submit'])) {
  $surname=$_POST['surname'];
  $firstname=$_POST['firstname'];
  $adress=$_POST['adress'];
  $email=$_POST['email'];
  $dropdown=$_POST['dropdown'];
  $comment=$_POST['comment'];

  $query = "INSERT INTO user_review (surname, firstname, adress, email, dropdown, comment)
  VALUES ('$surname', '$firstname', '$adress', '$email', '$dropdown', '$comment')";

    if (!mysqli_query($dbconnect, $query)) {
        die('An error occurred. Your review has not been submitted.');
    } else {
      echo "Thanks for your review.";
    }

}
?>
