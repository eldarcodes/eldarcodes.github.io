<?php session_start();

include('../db/roles.php');
include('../db/db.php');

$INPUT_LOGIN = $_POST['login'];
$INPUT_PASSWORD = $_POST['password'];

function checkUser($users, $INPUT_LOGIN, $INPUT_PASSWORD)
{
    for ($j = 0; $j < count($users); $j++) {
        for ($i = 0; $i < count($users[$j]); $i++) {
            if ($INPUT_LOGIN === $users[$j][$i]['login'] && $INPUT_PASSWORD === $users[$j][$i]['password']) {
                $_SESSION['name'] = $users[$j][$i]['name'];
                $_SESSION['role'] = $users[$j][$i]['role'];
                $_SESSION['surname'] =  $users[$j][$i]['surname'];
                header('Location: ../blocks/main.php');
            } else {
                header('Location: ../index.php');
            }
        }
    }
}
checkUser($users, $INPUT_LOGIN, $INPUT_PASSWORD);
