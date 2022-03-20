<?php
include("connectDB.php");
$login = $_POST['login'];

$query = "select * from users where login = '$login'";
$result = mysqli_query($connection, $query);
$row = mysqli_num_rows($result);


while ($row = mysqli_fetch_assoc($result)) {
    echo $row['name'] . "|" .
        $row['login'] . "|" .
        $row['avatar'] . "|" .
        $row['bio'] . "|" .
        $row['created'] . "|" .
        $row['repos'] . "|" .
        $row['followers'] . "|" .
        $row['following'] . "|" .
        $row['url'] . "|";
}

exit;
