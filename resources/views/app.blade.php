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
      <link href="/css/app.css" rel="stylesheet" />
  </head>
</head>
<body class="bg-grey-lightest m-0 p-0 font-sans">
  <div id="app">

  </div>
  <script charset="utf8" src="/js/app.js"></script>
  <script charset="utf8" src="/js/vendors~app.js"></script>
</body>
</html>
