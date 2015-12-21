<?php
    use Silex\Provider\UrlGeneratorServiceProvider;
    //TWIG
    $app->register(new Silex\Provider\TwigServiceProvider(), array(
        'twig.path' => __DIR__.'/../app/views',
    ));

    //CONFIG
    $app->register(new Devspark\Silex\ServiceProvider\ConfigServiceProvider( APLICATION_PATH . '/app/config/config_'. APPLICATION_ENV .'.yml'));
 ?>
