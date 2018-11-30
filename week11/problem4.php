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

   $sourceValue = $source[$_POST['input4']] 
   ?? 'The English cardinal "' . $_POST['input4'] . '" is not between "one" and "twenty"';

?>

<html>
   <head>
      <title>Week 11 : Problem 4</title>
   </head>
   <body>
         <h1> <?php print $sourceValue; ?> </h1>
   </body>
</html>


