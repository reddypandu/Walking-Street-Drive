<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect form data
    $name = strip_tags(htmlspecialchars($_POST['name']));
    $email = strip_tags(htmlspecialchars($_POST['email']));
    $subject = strip_tags(htmlspecialchars($_POST['subject']));
    $message = strip_tags(htmlspecialchars($_POST['message']));

    // Set recipient email address
    $to = "pandureddypatterns@gmail.com"; // Replace with your email address

    // Set email subject
    $email_subject = "New Contact Form Submission: $subject";

    // Compose email body
    $email_body = "You have received a new message from your website contact form.\n\n"
        . "Name: $name\n"
        . "Email: $email\n"
        . "Subject: $subject\n"
        . "Message:\n$message";

    // Set headers
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";

    // Send email
    if (mail($to, $email_subject, $email_body, $headers)) {
        echo "Success! Your message has been sent.";
    } else {
        echo "Error! Unable to send message.";
    }
} else {
    // Handle invalid form submission
    echo "Invalid form submission.";
}
