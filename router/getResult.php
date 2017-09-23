<?php


$con = mysqli_connect('localhost','root','arnob','borouter');
if (!$con) {
    die('Could not connect: ' . mysqli_error($con));
}


$sql="SELECT * FROM useraction";
$result = mysqli_query($con,$sql);


while($row = mysqli_fetch_array($result)) {
    echo "<tr>";
    echo "<td>" . $row['id'] . "</td>";
    echo "<td>" . $row['name'] . "</td>";
    echo "<td>" . $row['Todaydate'] . "</td>";
    echo "<td>" . $row['type'] . "</td>";
    echo "</tr>";
}

mysqli_close($con);
?>