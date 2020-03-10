<?php session_start();
if (!$_SESSION) {
    header('Location: ../index.php');
}

include('../db/roles.php');
include('head.php');
?>

<body>
    <div class="container info">
        <?php $users->hello(); ?>
        <a class="btn btn-outline-primary ml-2 mt-3 " href="../scripts/logout.php">Exit</a>

    </div>
</body>