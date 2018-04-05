<?php
if ($_GET['randomId'] != "edDP6cWfNl2eOZT8vqGzFSpircdvl8bDUkKRVVpSKT0dmy4AZvgs0vfougQtVjML") {
    echo "Access Denied";
    exit();
}

// display the HTML code:
echo stripslashes($_POST['wproPreviewHTML']);

?>  
