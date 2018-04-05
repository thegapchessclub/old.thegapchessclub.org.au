<?php
if ($_GET['randomId'] != "Ihiph02NZd6QLgr0u1ng57CAvtfLGk9JM0TySqb9AGbBxPzTxNftn2hNFOqy6bIh") {
    echo "Access Denied";
    exit();
}

// display the HTML code:
echo stripslashes($_POST['wproPreviewHTML']);

?>  
