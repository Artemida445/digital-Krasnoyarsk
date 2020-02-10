<?php
namespace Gender;
$o = $_POST['pole1'];
$p = $_POST['pole2'];
$l = $_POST['pole3'];
$t = $_POST['pole4'];


$gender = new Gender;

$country = Gender::RUSSIA;
$q = $gender->similarNames($t, $country);
var_dump($q);
// $u = gender();
// echo $u;

function discriminant($a,$b,$c)
{
	$D = $b*$b-4*$a*$c;
	return $D;

}

function searchXX ($a,$b,$D1)
{
	$x[] = (-$b +sqrt($D1))/2*$a;
	$x[] = (-$b -sqrt($D1))/2*$a;
	return $x;
}

function searchX ($a,$b,$D1)
{
	$x = -$b/2*$a;
	return $x;
}

$D1 = discriminant($o,$p,$l);
if($D1 > 0)
{
	$i = searchXX($o,$p,$l);
	foreach ($i as $value) {
		echo '<br> ' . $value . '<br>';
	}
	
 }elseif($D1 == 0){
	$i = searchX($o,$p,$l);
	echo $i;
}else
 {
 	echo "Уравнение не имеет корней";
 }