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
               <th>N</th>
               <th>X<sup>n</sup></th>
            </thead>
            <tbody>
               <?php for ($i = 1; $i <= $n; $i++) { ?>
                  <tr>
                     <td><?= $i; ?></td>
                     <td><?= pow($x, $i); ?></td>
                  </tr>
               <?php } ?>
            </tbody>
         </table>
   </body>
</html>


