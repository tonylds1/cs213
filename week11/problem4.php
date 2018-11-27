<?php 
   $source = [
      'zero'      =>   'cero',
      'one'       =>   'uno',
      'two'       =>   'dos',
      'three'     =>   'tres',
      'four'      =>   'cuatro',
      'five'      =>   'cinco',
      'six'       =>   'seis',
      'seven'     =>   'siete',
      'eight'     =>   'ocho',
      'nine'      =>   'nueve',
      'ten'       =>   'diez',
      'eleven'    =>   'once',
      'twelve'    =>   'doce',
      'thirteen'  =>   'trece',
      'fourteen'  =>   'catorce',
      'fifteen'   =>   'quince',
      'sixteen'   =>   'dieciséis',
      'seventeen' =>   'diecisiete',
      'eighteen'  =>   'dieciocho',
      'nineteen'  =>   'diecinueve',
      'twenty'    =>   'veinte'
   ];

   $translated = isset($source[$_POST['input4']]) 
      ?  $source[$_POST['input4']] 
      : "it is Not a Number in Spanish.";
?>

<html>
   <head>
      <title>Week 11 : Problem 3</title>
   </head>
   <body>
         <h1> <?php echo $translated; ?> </h1>
   </body>
</html>


