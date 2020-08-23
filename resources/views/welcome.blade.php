<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Laravel</title>

    <link rel="stylesheet" href="{{ asset('css/app.css') }}">
</head>

<body>
    <div>
        <h1 class="text-5xl">Hello World com Tailwind</h1>

        <button class="btn">
            Botão Default
        </button>
        <button class="btn primary">
            Botão Default
        </button>

        <input type="text" class="form-input" placeholder="Placeholder">
    </div>
</body>

</html>
