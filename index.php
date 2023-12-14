<?php
if (isset($POST['POST'])) {
    $mailto = "pandureddypatterns@gmail.com";
    $from = $_POST['email'];
    $name = $_POST['name'];
    $subject = $_POST['POST'];
    $subject2 = $_POST['subject'];
    $message = "Client Name: " . $name . "Wrote the following Message" . "\n\n" . $_POST['message'];
    $message2 = "Dear " . $name . "\n\n" . "Thank YOu for contacting";
    $headers = "From: " . $from;
    $headers2 = "From: " . $mailto;
    $result = mail($mailto, $subject, $message, $headers);
    $result2 = mail($from, $subject2, $message2, $headers2);
    if ($result) {
        echo '<script type="text/javascript">alert("sent")</script>';
    } else {
        echo '<script type="text/javascript">alert("fail")</script>';
    }
}
