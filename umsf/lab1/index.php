<?php session_start();
if ($_SESSION) {
	header('Location: blocks/main.php');
}
include('blocks/head.php');
?>

<body>
	<div class="wrapper">
		<form method="POST" action="scripts/auth.php">
			<div class="form-group">
				<label>Login</label>
				<input name="login" type="text" class="form-control" placeholder="Enter login">
			</div>
			<div class="form-group">
				<label>Password</label>
				<input name="password" type="password" class="form-control" placeholder="Password">
			</div>
			<button type="submit" class="btn btn-primary">Submit</button>
		</form>
	</div>
</body>

</html>