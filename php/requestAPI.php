<?php
$search = $_POST['search'];

$url = "https://api.github.com/users/" . $search;
$curl = curl_init($url);

curl_setopt($curl, CURLOPT_HTTPHEADER, [
    'Content-Type: application/json',
    'user-agent: node.js'
]);

$response = curl_exec($curl);
curl_close($curl);
exit;
