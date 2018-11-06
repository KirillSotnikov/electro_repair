<?php
    $project_name = "Позвонить";
    $from_email = "i@up-site.com.ua";
    $to_email = "sotnikov_k@outlook.com";
    
    $modal_name = trim($_POST["modal_name"]);
    $modal_phone = trim($_POST["modal_phone"]); 
    
    $modal_message = "Имя: $modal_name \nТелефон: $modal_phone" ;.
    $headers = "From: $from_email \r\n";
    $headers .= "Content-type: text/html; charset=\"utf-8\"";
    
    $send_mail_modal = mail($to_email, $project_name, $modal_message, $headers);
?>
