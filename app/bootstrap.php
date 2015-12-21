<?php

    //include_once __DIR__.'/../app/controller/controller.php';
    use Silex\Provider\UrlGeneratorServiceProvider;
    use App\Controllers\controller;
$app['debug'] = true;
    //REGISTER
    require __DIR__.'/../app/register.php';


    $app->get('/{name}', 'App\Controllers\\controller::hola');

    $app->get('/', function() use ($app) {
        return $app->json( array('Hello!'));
    });


    $app->get('/hello/{name}', function ($name) use ($app) {
        return $app['twig']->render('hello.twig', array(
            'name' => $name,
        ));
    });

    $app->get('/nico', function() use ($app) {
        return $app->json( array('Hello Nico!'));
    });
 ?>
