<?php

namespace ApiBundle\Controller;

use FOS\RestBundle\Controller\FOSRestController;
use FOS\RestBundle\Controller\Annotations\Route;
use Nelmio\ApiDocBundle\Annotation\ApiDoc;
use FOS\RestBundle\Controller\Annotations\RequestParam;

class OauthController extends FOSRestController
{
    /**
     * This action will never be reached. It is only used to generate the api documentation.
     * (FOSOAuthServerBundle uses the same route with higher priority. See app/config/routing.yml.)
     *
     * @Route("/oauth/v2/token")
     * @ApiDoc(description="Create a access token")
     * @RequestParam(name="grant_type", default="password", strict=false, allowBlank=false, description="")
     * @RequestParam(name="client_id", default="", strict=false, allowBlank=false, description="")
     * @RequestParam(name="client_secret", default="", strict=false, allowBlank=false, description="")
     * @RequestParam(name="username", default="", strict=false, allowBlank=false, description="")
     * @RequestParam(name="password", default="", strict=false, allowBlank=false, description="")
     */
    public function postOauthTokenAction()
    {
        return null;
    }
}
