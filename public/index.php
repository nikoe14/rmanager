<?php
    //PATH
    defined ('APLICATION_PATH') || define('APLICATION_PATH', dirname(__DIR__));

    defined('APPLICATION_ENV') || define('APPLICATION_ENV', (getenv('APPLICATION_ENV') ? getenv('APPLICATION_ENV') : 'production'));

    require_once __DIR__.'/../vendor/autoload.php';

    $app = new Silex\Application();

    require_once __DIR__.'/../app/bootstrap.php';

    $app->run();

?>
