<?php
	$con=@mysql_connect("localhost","root","");  
	if (!$con)
	{
	    die('Could not connect: ' . mysql_error());
	}  
	
	mysql_select_db("rst",$con);
//display the data
//--cat
$result=mysql_query("select * from cat",$con);

echo "<ul><li style='float: left'><table border='1' >
<tr>
<td align=center> <b>id</b></td>
<td align=center><b>item</b></td>";

while($data = mysql_fetch_row($result))
{   
    echo "<tr>";
    echo "<td align=center>$data[0]</td>";
    echo "<td align=center>$data[1]</td>";
    echo "</tr>";
}
echo "</table></li>";

//--rel
$result=mysql_query("select * from rel",$con);

echo "<li style='float: left'><table border='1' >
<tr>
<td align=center> <b>cat</b></td>
<td align=center><b>gids</b></td>";

while($data = mysql_fetch_row($result))
{   
    echo "<tr>";
    echo "<td align=center>$data[0]</td>";
    echo "<td align=center>$data[1]</td>";
    echo "</tr>";
}
echo "</table></li>";
//--gids
$result=mysql_query("select * from gids",$con);

echo "<li style='float: left'><table border='1' >
<tr>
<td align=center> <b>id</b></td>
<td align=center><b>item</b></td>";

while($data = mysql_fetch_row($result))
{   
    echo "<tr>";
    echo "<td align=center>$data[0]</td>";
    echo "<td align=center>$data[1]</td>";
    echo "</tr>";
}
echo "</table></li>";

//

	$result=mysql_query("select * from cat",$con);

	
	echo "<ul>";
	$i = 0;
	while($data = mysql_fetch_row($result)){
	   
		echo "<li><input id='checkbox$i' type='checkbox' name='vehicle' value='$data[1]'>$data[1]</li>";
		$i ++;
	}
	echo "</ul>";

?>