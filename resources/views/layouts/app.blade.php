<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>{{ env('APP_NAME', 'Lara') }}</title>

    @stack('before_styles')

    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">

    <link rel="stylesheet" href="{{ asset('css/app.css') . '?v=' . config('backpack.base.cachebusting_string') }}">

    <style>
        body {
            font-family: 'Nunito', sans-serif;
        }
    </style>
    @stack('after_styles')
</head>
<body class="antialiased">
    @yield('content')

    @stack('before_scripts')
    <script src="{{ asset('js/app.js') . '?v=' . config('backpack.base.cachebusting_string') }}"></script>
    @stack('after_scripts')
</body>
</html>
