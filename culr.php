<?php
	
$data = 	"tfo=(51)+99239-9880";
$data_string = json_encode($data);                                                                                   
 
$ch = curl_init('https://www.verisure.com.br/lp/tools/blacklist/blacklist.php');
curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");
curl_setopt($ch, CURLOPT_POSTFIELDS, $data_string);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, array(
    'Content-Type: application/json',
    'Content-Length: ' . strlen($data_string))
);                                                                                                                   
 
$result = curl_exec($ch);


var_dump('css',$result);