<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Laravel Vue SPA</title>
    <style>
        body{
            font-family: sans-serif;
            margin: 10%;
        }
        [v-cloak]{
            display: none;
        }
    </style>
</head>
<body>
    
<div id="app" v-cloak>  
    <!-- cara 1 paggil data di app.js -->
    <h1>Hello, Vue! Im @{{title}}</h1>
    <!-- cara 2 paggil data di app.js -->
    <!-- <h1 v-text="'Hello, Im ' +title"></h1> -->
    <header-component></header-component>
    <router-view></router-view>
    <footer-component></footer-component>
</div>

<script src=" {{ asset('js/app.js')}} "></script>

</body>
</html>