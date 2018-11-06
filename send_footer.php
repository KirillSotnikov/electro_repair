<?php
    $project_name = "Почта";
    $from_email = "i@up-site.com.ua";
    $to_email = "sotnikov_k@outlook.com";
    
    $footer_mail = trim($_POST["footer_mail"]);
    
    $footer_message = "E-mail: $footer_mail " ;.
    $headers = "From: $from_email \r\n";
    $headers .= "Content-type: text/html; charset=\"utf-8\"";
    
    $send_mail_footer = mail($to_email, $project_name, $footer_message, $headers);
?>
