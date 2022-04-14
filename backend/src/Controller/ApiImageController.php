<?php

namespace App\Controller;

use App\Entity\Image;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Serializer\SerializerInterface;

class ApiImageController extends AbstractController
{
    private $entityManager;

    public function __construct(EntityManagerInterface $entityManager){
        $this->entityManager = $entityManager;
    }

    /**
     * @Route("/api/image", name="app_api_image", methods={"GET","HEAD"})
     */
    public function index(SerializerInterface $serializer, Request $request): Response
    {

        $images = $this->entityManager->getRepository(Image::class)->findAll();


        foreach( $images as $image){
        
            $baseurl = $request->getScheme() . '://' . $request->getHttpHost() . $request->getBasePath();
            $img = $image->getIllustration();
            $link = $baseurl."/img/".$img;

            $image->setIllustration($link);

        }

        $data = $serializer->serialize(
            $images,
            'json',
            ['groups' => 'image']
        );

        $response = new Response($data);
        $response->headers->set('Content-Type', 'application/json');

        return $response;
    }
}
