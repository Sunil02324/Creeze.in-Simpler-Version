<html>
<head>
	<link href="form.css" rel="stylesheet">
	</head>
<style>
body
{
	background-image: url("bg.jpg");
	background-size: 804px 603px;

}
#class1
{
    background-position: center;
	height: 94%;
	background-image: url("back_2.jpg");
	background-size: 804px 603px;
	background-repeat: no-repeat;

}
#class2
{
text-align: center;
height: 6%;

}
</style>
<body >

<div id="class1">
	
</div>
	<div id="class2">
		<?php
$servername = "localhost";
$username = "root";
$password = "";

// Create connection
$link = mysql_connect($servername, $username, $password);
if (!$link) {
    die('Not connected : ' . mysql_error());
}

// make foo the current db
$db_selected = mysql_select_db('refer', $link);
if (!$db_selected) {
    die ('Can\'t use foo : ' . mysql_error());
}
if(isset($_POST['number'])){
$number = $_POST['number'];

$sql= "SELECT * FROM users WHERE numb = $number";

$result = mysql_query($sql);
if (mysql_num_rows ( $result ) > 0) {
    // output data of each row
     while ($row = mysql_fetch_assoc($result)) {
		echo "<b><font color='green'>Hi " . $row["first_name"]. ", your referral code is " . $row["code"]. " and is valid till 20 Feb 2016.<br><br><br>";
	    }
    
} else {
    echo "<font color='red'><b>Sorry ".$number." is not registered with us.</b><br><br><br></font>";
}

mysql_free_result($result);

/* close connection */
mysql_close($link);
}
//echo "Your registered number is ".$number;
?>
		<form action="refer-a-friend.php" method="post">
<input id="contact" placeholder="Contact Number" type="text" name= "number">
<input id="submit" type="submit" value="Submit">
</form>
	
	





</div>
</body>
</html>