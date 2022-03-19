<?php
include("connectDB.php");
$objResult = $_POST['objResult'];

$login = $objResult['login'];
$avatar = $objResult['avatar_url'];
$url = $objResult['url'];
$followers = $objResult['followers'];
$following = $objResult['following'];
$repos = $objResult['public_repos'];
$created = $objResult['created_at'];

$stringDate = serialize($created);
$date =  explode('"', (explode("T", $stringDate))[0]);

$sql = "insert into users values ('$login', '$avatar', '$url', '$followers', '$following', '$repos', '$date[1]')";
$result = mysqli_query($connection, $sql);
exit;
