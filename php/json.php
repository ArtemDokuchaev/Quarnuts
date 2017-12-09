<?php

	$Json = '{ "Model": "Pixel", "Display": "5", "Memory": "64GB", "RAM": "4GB" }';
	$Array = json_decode($Json, true);
	//var_dump($Array);
	$ArrayToJson = json_encode($Array);
	var_dump($ArrayToJson)

?>