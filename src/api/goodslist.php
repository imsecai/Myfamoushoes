<?php
    require('connect.php');

    $id = isset($_GET['id']) ? $_GET['id'] : null;
    $pageNo = isset($_GET['pageNo']) ? $_GET['pageNo'] : 1;
    $qty = isset($_GET['qty']) ? $_GET['qty'] : 10;

    $sql = "select * from goods";

    if($id){
        $sql .= "where id='$id'";
    }

    $result = $conn->query($sql);

    $row = $result->fetch_all(MYSQL_ASSOC);

    $res = array(
        'data' => array_slice($row, ($pageNo-1)*$qty,$qty),
        'total' => count($row)
    );

    $res = json_encode($res,JSON_UNESCAPED_UNICODE);

    echo "$res";
?>