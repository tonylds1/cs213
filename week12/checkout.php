<?php
$name = strip_tags($_POST['firstName']);
?>
<!doctype html>
<html>
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Tony Moraes' Assingments</title>
        <link rel="stylesheet" href="../css/cs213-w07.css" /> 
    </head>
   <body> 
   <!--  <body>-->
        <h1>CS 213 assingment - Week 10</h1>
        <div>
            <a href="../index.html">Home</a>
        </div>
        <ul>
            <li>
                <a href="../week08/index.html">Previus</a>
            </li>
            <li>
                <a href="../week11/index.html">Next</a>
            </li>
        </ul>
        <div id="container">
            <h1>Your purchase was completed!!!</h1>
            <p>Hello <?=$name; ?>, We are processing your data and soon we will give you some notice.</p>
        </div>
    </body>
</html>