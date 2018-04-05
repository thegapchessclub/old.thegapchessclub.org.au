<?php
if ($_GET['randomId'] != "emUI92FWcqhgW093pqUUWY7juzdKD0jMTfz4odAXA1Np5vXcS9SZpG3ybHVkHhbp") {
    echo "Access Denied";
    exit();
}

// display the HTML code:
echo stripslashes($_POST['wproPreviewHTML']);

?>  
