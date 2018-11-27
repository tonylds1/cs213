<?php 
   $n = (int) $_POST['n'];
   $x = (int) $_POST['x'];
?>

<html>
   <head>
      <title>Week 11 : Problem 5</title>
   </head>
   <body>
         <h1> First <?= $n ?> powers of <?= $x; ?> </h1>
         <table style="border: 1px solid black;">
            <thead>
               <th>n</th>
               <th>x</th>
            </thead>
            <tbody>
               <?php for ($i = 0; $i <= $n; $i++) { ?>
                  <tr>
                     <td><?= $i; ?></td>
                     <td><?= pow($x, $i); ?></td>
                  </tr>
               <?php } ?>
            </tbody>
         </table>
   </body>
</html>


