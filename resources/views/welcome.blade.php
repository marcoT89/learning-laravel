<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Laravel</title>

    <link rel="stylesheet" href="{{ mix('css/app.css') }}">
</head>

<body>
    <div id="app">
        {{-- <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore reiciendis, id quo odio nam, sapiente
            perferendis beatae officia nemo quaerat repellendus dolorum eum, dolores quisquam minima labore et quis
            amet!</p> --}}
        <welcome></welcome>
    </div>
    <script defer src="{{ mix('js/app.js') }}"></script>
</body>

</html>
