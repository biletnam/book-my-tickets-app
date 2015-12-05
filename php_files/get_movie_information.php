<?php

	$request="http://api.myapifilms.com/imdb/idIMDB?title=matrix&token=044b26e6-1836-40ce-bd76-e32e112b1ebf";

	$response = file_get_contents($request);

	echo $response;


?>