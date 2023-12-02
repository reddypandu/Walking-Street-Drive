<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the submitted email
    $email = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);

    // Validate the email
    if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
        // Process the subscription (you might store it in a database)

        // Send an email notification
        $to = "pandureddypatterns@gmail.com"; // Replace with your email address
        $subject = "New Newsletter Subscription";
        $message = "A new user subscribed to the newsletter.\nEmail: $email";
        $headers = "From: pandureddypatterns@gmail.com"; // Replace with your email or use a valid one

        mail($to, $subject, $message, $headers);

        // You can also use third-party libraries like PHPMailer for better email handling

        echo "Subscription successful. Thank you!";
    } else {
        echo "Invalid email address. Please try again.";
    }
}
