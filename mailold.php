<?php
//error_reporting(-1);
require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

//header('Content-Type: text/html; charset=utf-8');

    // Only process POST reqeusts.

    /*if ($_SERVER["REQUEST_METHOD"] == "POST") {

        // Get the form fields and remove whitespace.

        $name = strip_tags(trim($_POST["name"]));

				$name = str_replace(array("\r","\n"),array(" "," "),$name);

        $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);

        $message = trim($_POST["message"]);*/


        // Check that data was sent to the mailer.

        if ( empty($name) OR empty($message) OR !filter_var($email, FILTER_VALIDATE_EMAIL)) {

            // Set a 400 (bad request) response code and exit.

           http_response_code(400);

            echo "Пожалуйста, заполните форму и повторите попытку.";
            exit;

        }

        $mail->isSMTP();
        $mail->Host = 'smtp.mail.ru';
        $mail->SMTPAuth = true;
        $mail->Username = 'digitalkrsk@mail.ru';
        $mail->Password = 'Wbahjdjq1301';
        $mail->SMTPSecure = 'ssl';
        $mail->Port = 465;


        // Set the recipient email address.

        // FIXME: Update this to your desired email address.

        //$recipient = "aa_tikhonov@mail.ru";
        $mail->setFrom("digitalkrsk@mail.ru");
        $mail->addAddress("tikhonov.art@mail.ru");
        $mail->isHTML(true);


       $email_content = "Имя: $name\n";
       $email_content .= "<br>Email:\n$email\n";
       $email_content .= "<br>Сообщение:\n$message\n";

        $mail->Subject = 'Новое сообщение с сайта';
        $mail->Body = ''.$subject . "\n".$email_content;
        $mail->AltBody = '';

        //$subject = "Новое сообщение от $name";

/*
            $email_headers= "From: $name <$email>";

 
        if (mail($recipient, $subject, $email_content,  $email_headers)) {
             
            http_response_code(200);
         
            echo "Спасибо Ваше сообщение было отправлено";  
         
        } 
        else {

            http_response_code(500);
           echo "error";
          
        }
    }*/

    

?>