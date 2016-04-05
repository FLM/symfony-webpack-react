<?php

namespace ApiBundle\Controller;

use FOS\RestBundle\Controller\FOSRestController;
use Nelmio\ApiDocBundle\Annotation\ApiDoc;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Security;

class UserController extends FOSRestController
{
    /**
     * @Security(expression="is_authenticated()")
     * @ApiDoc(description="A test action")
     */
    public function getUserAction()
    {
        return array(
            "user" => $this->getUser(),
        );
    }
}
