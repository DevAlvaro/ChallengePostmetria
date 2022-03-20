<?php
include("connectDB.php");
$login = $_POST['login'];

$query = "select * from users where login = '$login'";
$result = mysqli_query($connection, $query);
$row = mysqli_num_rows($result);


while ($row = mysqli_fetch_assoc($result)) {
    echo $row['login'] . "|" .
        $row['avatar'] . "|" .
        $row['url'] . "|" .
        $row['followers'] . "|" .
        $row['following'] . "|" .
        $row['repos'] . "|" .
        $row['created'] . "|" .
        $row['bio'] . "|";
}

exit;
