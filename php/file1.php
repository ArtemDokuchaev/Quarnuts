<?php

	$Zip = new ZipArchive();
	$Res = $Zip -> open('test.zip');
	if ($Res === TRUE) {
		
		echo 'Archive opened';
		$Zip -> extractTo('test');

	}

?>