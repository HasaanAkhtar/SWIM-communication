<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $email = $_POST['email'];
  $image = $_POST['image'];

  $to = $email;
  $subject = 'Random Ocean Image';
  $message = "<html><body><img src='{$image}'></body></html>";
  $headers = "MIME-Version: 1.0" . "\r\n";
  $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

  if (mail($to, $subject, $message, $headers)) {
    echo 'Email sent successfully';
  } else {
    echo "'$to', Failed to send email'";
  }
} else {
  echo 'Invalid request';
}
?>
