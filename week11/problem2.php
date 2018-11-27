<?php 
   $today = new DateTime();
   $fToday = $today->format('l, M jS h:i:s');
?>

<html>
   <head>
      <title>Week 11 : Problem 2</title>
   </head>
   <body>
         <h1> <?php echo $fToday; ?>
         </h1>
   </body>
</html>