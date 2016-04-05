<?php

namespace AppBundle\EventListener;

use FOS\RestBundle\Controller\Annotations\View;
use JMS\DiExtraBundle\Annotation\Observe;
use JMS\DiExtraBundle\Annotation\Service;
use Symfony\Component\HttpKernel\Event\GetResponseForControllerResultEvent;

/**
 * @Service("app.view_response_listener")
 */
class ViewResponseListener
{
    /**
     * @Observe(event="kernel.view", priority=110)
     * {@inheritdoc}
     */
    public function onKernelView(GetResponseForControllerResultEvent $event)
    {
        $request = $event->getRequest();
        $request->getSession()->save();

        if (!$request->attributes->has('_view')) {
            $configuration = new View([]);
            $configuration->setSerializerEnableMaxDepthChecks(true);
            $request->attributes->set('_view', $configuration);
        }
    }
}
