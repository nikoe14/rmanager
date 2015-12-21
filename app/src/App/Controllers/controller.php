<?php namespace App\Controllers;

    use Silex\Application;
    use Symfony\Component\HttpFoundation\Request;

    class Controller {// implements ServiceProviderInterface {

        public function hola($name, Request $request, Application $app) {
            $twig =$app['twig'];
            $content = $twig->render('hello.twig', array(
                'name' => $name,
                'ending' => $request->query->get('ending', '!')
            ));
            return $content;
        }
/*
        public function register(Application $app) {
        }

        public function boot(Application $app) {
        }
        */
    }
 ?>
