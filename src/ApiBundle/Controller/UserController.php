<?php

namespace ApiBundle\Controller;

use FOS\RestBundle\Controller\FOSRestController;
use Nelmio\ApiDocBundle\Annotation\ApiDoc;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Security;

class UserController extends FOSRestController
{
    /**
     * @ApiDoc()
     */
    public function getUserAction()
    {
        return array(
            "user" => $this->getUser(),
        );
    }

    /**
     * @Security(expression="is_authenticated()")
     * @ApiDoc()
     */
    public function getProtectedStuffAction()
    {
        return array(
            "secret" => "You need to be authenticated to reach this data",
        );
    }
}
