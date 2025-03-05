<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "healthritenig@gmail.com";
    $userEmail = $_POST['email'];
    $subject = "Daily Wellness Report Submission";
    
    $message = "Name: " . $_POST['name'] . "\n";
    $message .= "Title: " . $_POST['title'] . "\n";
    $message .= "Today's Date: " . $_POST['date'] . "\n";
    $message .= "Major Objectives: " . $_POST['objectives'] . "\n";
    
    $headers = "From: no-reply@wellness.com\r\n";
    $headers .= "Reply-To: $userEmail\r\n";
    
    mail($to, $subject, $message, $headers);
    mail($userEmail, "Copy of Your Wellness Report", $message, $headers);
    
    echo "<script>alert('Form submitted successfully!');</script>";
}
?>
