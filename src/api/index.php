<?php
    require('connect.php');

    $id = isset($_GET['id']) ? $_GET['id'] : null;
    $qty = isset($_GET['qty']) ? $_GET['qty'] : 10;

    $sql = "select * from goods";

    if($id){
        $sql .= "where id='$id'";
    }

    $result = $conn->query($sql);

    $row = $result->fetch_all(MYSQL_ASSOC);

    $res = json_encode($row,JSON_UNESCAPED_UNICODE);

    echo "$res";
?>