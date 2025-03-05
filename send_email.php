<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "your_email@example.com"; // Replace with your email address
    $subject = "Wellness Cell Site Daily Report";

    $message = "Wellness Cell Site Daily Report:\n\n";

    // Get the labels from the form (you might need to adjust the selectors)
    $labels = [
        "name" => "Wellness Cell Site Member Name",
        "title" => "Title",
        "date" => "Today’s Date",
        "join_date" => "Date you joined the WCS",
        "objectives" => "Major Objective(s) you want to attain",
        "food_type" => "Type of Foods",
        "food_time" => "Time of Foods",
        "portion_size" => "Portion Size (Small or Medium only)",
        "nutrition_score" => "Nutrition Self Score (1-5)",
        "exercise_comments" => "Exercise & Physical Activity Comments/Reflections",
        "exercise_score" => "Exercise & Physical Activity Self Score (1-5)",
        "Rest_&_Restoration_comments" => "Rest & Restoration Comments/Reflections",
        "Stress_Management_comments" => "Stress Management Comments/Reflections",
        "Social_Support_&_Intimacy_comments" => "Social Support & Intimacy Comments/Reflections",
        "Avoidance_of_Toxic_Substances_comments" => "Avoidance of Toxic Substances Comments/Reflections",
        "Overall_Reflection_comments" => "Overall Reflection Comments",
        "signature" => "Signature",
    ];

    foreach ($_POST as $key => $value) {
        $question = isset($labels[$key]) ? $labels[$key] : $key; // Use label if available, otherwise use field name
        $message .= "$question: $value\n";
    }

    $headers = "From: wellness_report@example.com"; // Replace with a sender email

    if (mail($to, $subject, $message, $headers)) {
        echo "Thank you for your submission!";
    } else {
        echo "There was an error sending your message.";
    }
}
?>
