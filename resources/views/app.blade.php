<!DOCTYPE html>
<html lang="en">
<head>
	<head>
	    <meta charset="utf-8">
	    <meta http-equiv="X-UA-Compatible" content="IE=edge">
	    <meta name="viewport" content="width=device-width, initial-scale=1">

	    <!-- CSRF Token -->
	    <meta name="csrf-token" content="{{ csrf_token() }}">

	    <title>{{ config('app.name', 'Laravel') }}</title>

	    <!-- Styles -->
	    <link href="css/app.css" rel="stylesheet" />
	</head>
</head>
<body>
	<div id="app">

	</div>
	<script charset="utf8" src="js/vendor.js"></script>
	<script charset="utf8" src="js/app.js"></script>
</body>
</html>
