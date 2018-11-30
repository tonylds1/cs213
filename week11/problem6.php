<?php 
   $values = explode (', ', $_POST['input6']);
   asort($values);
?>

<html>
   <head>
      <title>Week 11 : Problem 5</title>
   </head>
   <body>
         <h1> Alphabetical Ordered Values: </h1>
         <table style="border: 1px solid black;">
            <thead>
               <th>#</th>
               <th>Value</th>
            </thead>
            <tbody>
               <?php while ($value =  each($values)) { ?>
                  <tr>
                     <td><?= $value['key']; ?></td>
                     <td><?= $value['value']; ?></td>
                  </tr>
               <?php } ?>
            </tbody>
         </table>
   </body>
</html>


