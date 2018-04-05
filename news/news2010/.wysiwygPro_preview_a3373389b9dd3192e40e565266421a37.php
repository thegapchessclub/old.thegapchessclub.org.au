<?php
if ($_GET['randomId'] != "DzHrnt7dp44jkcsGEtGaFSWiFsqOJ2eD_FV3ewhPWxDRcLiP7ylcp337NWE0wJDk") {
    echo "Access Denied";
    exit();
}

// display the HTML code:
echo stripslashes($_POST['wproPreviewHTML']);

?>  
