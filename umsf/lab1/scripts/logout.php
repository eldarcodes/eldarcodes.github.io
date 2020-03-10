<?php session_start();

unset($_SESSION['name']);
unset($_SESSION['role']);
unset($_SESSION['surname']);

header('Location: ../index.php');
