<?php session_start();

class Admin
{
    function hello()
    {
        echo 'Здравствуйте, ' . $_SESSION['role'] . ' ' . $_SESSION['name'] . ' ' . $_SESSION['surname'];
    }
}

class Manager
{
    function hello()
    {
        echo 'Здравствуйте, ' . $_SESSION['role'] . ' ' . $_SESSION['name'] . ' ' . $_SESSION['surname'];
    }
}

class Client
{
    function hello()
    {
        echo 'Здравствуйте, ' . $_SESSION['role'] . ' ' . $_SESSION['name'] . ' ' . $_SESSION['surname'];
    }
}

switch ($_SESSION['role']) {
    case 'Admin': {
            $users = new Admin();
            break;
        }
    case 'Manager': {
            $users = new Manager();
            break;
        }
    case 'Client': {
            $users = new Client();
            break;
        }
}
