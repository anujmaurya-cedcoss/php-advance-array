<?php
include('./data.php');
if (isset($_POST)) {
    $type = $_POST['type'];
}
switch ($type) {
    case 'gen_dropdown':
        $res = "<option>--select--</option>";
        foreach ($products as $key => $value) {
            $res .= "<option id = '$key'>$key</option>";
        }
        echo $res;
        break;

    case 'sub_dropdown':
        $res = "";
        if ($_POST['category'] == '--select--') {
            $res = "<option>--select--</option>";
        }
        echo "$_POST[category]";
        foreach ($products[$_POST['category']] as $key => $value) {
            $res .= "<option id = '$key'>$key</option>";
        }
        echo $res;
    default:
        break;
}
?>