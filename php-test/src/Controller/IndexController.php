<?php

namespace App\Controller;

use App\Repository\DataRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class IndexController extends AbstractController
{
    public function __construct(private DataRepository $dataRepository)
    {
    }

    #[Route('/', name: 'app_index')]
    public function index(): Response
    {
        $data = $this->dataRepository->findAll();
        $response = new Response();

//        foreach ($data as $value) {
//            printf("%d %d\n", $value->getValue(), $value->getId());
//        }
        $presentation = json_encode($data);
        $response->setContent($presentation);
        $response->headers->set('Access-Control-Allow-Origin', '*');
//        dd($data);
        return $response;
    }

    #[Route('/index', name: 'app_index2')]
    public function newIndex(): Response
    {
        return $this->render('index/index.html.twig', [
            'controller_name' => 'IndexController',
            'aplication' => "trouxa"
        ]);
    }
}
/*

 */
