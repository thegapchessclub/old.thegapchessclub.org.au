<?php
if ($_GET['randomId'] != "DgwjhmJEoZY9H8tplnz7Glhsb5OlZIxQlT4BXJuIVK7iVlHM60HOb4finvtHqXkX") {
    echo "Access Denied";
    exit();
}

// display the HTML code:
echo stripslashes($_POST['wproPreviewHTML']);

?>  
