<?php

	ini_set( 'display_errors', 'On' );
	ini_set( 'display_startup_errors', 'On' );
	error_reporting( E_ALL )

	$Fp = fopen ('test.txt', 'r+');
	
	//fwrite($Fp, 'Hello');

/*	while (!feof($Fp)) {

		$Sym = fgetc($Fp);
		echo $Sym;
		
		$Text = fgets($Fp,255);
		echo $Text;
		
		return;

	}*/

	$text = file_get_contents('test.txt');
	echo $text;
	fclose($Fp);
	
?>