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
    @env('prodution')
      <link href="{{ mix('app.css') }}" rel="stylesheet" />
    @endenv

    @env('local')
      <link href="{{ asset('/css/app.css') }}" rel="stylesheet" />
    @endenv
  </head>
</head>
<body class="bg-grey-lightest m-0 p-0 font-sans">
  <div id="app">

  </div>

  @env('prodution')
  <script charset="utf8" src="{{ mix('app.js') }}"></script>
  <script charset="utf8" src="{{ mix('vendors~app.js') }}"></script>
  @endenv

  @env('local')
  <script charset="utf8" src="{{ asset('/js/app.js') }}"></script>
  <script charset="utf8" src="{{ asset('/js/vendors~app.js') }}"></script>
  @endenv
</body>
</html>
