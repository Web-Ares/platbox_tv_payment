<?php


$json_data = '{
    "massage": "ok"
}';



//var_dump($_GET[ 'amount' ]);


$json_data = str_replace("\r\n",'',$json_data);
$json_data = str_replace("\n",'',$json_data);

echo $json_data;
exit;
?>