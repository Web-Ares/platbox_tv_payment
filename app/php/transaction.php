<?php

$paymentType =  $_GET[ 'paymentType' ];

if($paymentType == 1){
    $json_data = '{
        "id": 15481,
        "date": "07-09-2015 13:11:44",
        "price": "214 руб. 50 коп."
    }';
} else {
    $json_data = '{
        "id": 15481,
        "date": "07-09-2015 13:11:44",
        "price": "214 руб. 50 коп."
    }';
}


//var_dump($_GET[ 'amount' ]);


$json_data = str_replace("\r\n",'',$json_data);
$json_data = str_replace("\n",'',$json_data);

echo $json_data;
exit;
?>