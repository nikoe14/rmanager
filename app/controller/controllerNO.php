<?php namespace Prueba;

    use Silex\Application;
    use Symfony\Component\HttpFoundation\Request;

    class Controller {

        public function hola($name, Request $request, Application $app) {
            $twig =$app['twig'];
            $content = $twig->render('hello.twig', array(
                'name' => $name,
                'ending' => $request->query->get('ending', '!')
            ));
            return $content;
        }
    }
 ?>
