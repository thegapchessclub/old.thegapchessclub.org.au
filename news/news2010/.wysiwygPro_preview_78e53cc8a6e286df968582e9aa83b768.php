<?php
if ($_GET['randomId'] != "5zjQjZurOSCePlEude_MMw_cajTc9tDnDjUjkakAaCHRApWgmBQrInLPdH9vKWBM") {
    echo "Access Denied";
    exit();
}

// display the HTML code:
echo stripslashes($_POST['wproPreviewHTML']);

?>  
