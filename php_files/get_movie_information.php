<?php

	$data = array();
	$request=array();
	$movies = array("Spectre","Creed");
	$movies_length= count($movies);
	echo $movies_length;
	for($i=0;$i<$movies_length;$i++){
		$url = "http://api.myapifilms.com/imdb/idIMDB?title=";
		$api_key="&token=044b26e6-1836-40ce-bd76-e32e112b1ebf";
		$request[$i]= $url.$movies[$i].$api_key;
		array_push($data, $request);
	}

	

	$response = file_get_contents($data);

	echo $response;


?>