<?php
    // Require system config file
    require '../../system/config.php';

    session_start();
    // Validate a user has logged in
    // If not logged in, redirect to the log in page
    if(!isset($_SESSION['login_id']))
    {
        header('Location:../../');
    }
    else
    {
        // If user has logged in
        require '../db_auth/db_con.php';

        $id = $_GET['user'];
        $data = array();
        $login_details = "SELECT * FROM login WHERE user_id = '$id'";
        $result = mysqli_query($conn,$login_details);
        if(mysqli_num_rows($result)>0)
        {
            while($row = mysqli_fetch_assoc($result)) 
            {
                $data[] = $row;
            }

            $return = json_encode($data);
            echo $return;
        }
        mysqli_close($conn);

    }
?> 