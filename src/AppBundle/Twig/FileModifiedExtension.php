<?php

namespace AppBundle\Twig;

use JMS\DiExtraBundle\Annotation\Inject;
use JMS\DiExtraBundle\Annotation\Service;
use JMS\DiExtraBundle\Annotation\Tag;

/**
 * @Service("app.twig.file_modified")
 * @Tag("twig.extension")
 */
class FileModifiedExtension extends \Twig_Extension
{
    /**
     * @Inject("%kernel.root_dir%")
     */
    public $rootDir;

    /**
     * @return array
     */
    public function getFunctions()
    {
        return [
            'filemtime' => new \Twig_Function_Method($this, 'filemtime'),
        ];
    }

    /**
     * @param string $filePath
     *
     * @return string
     */
    public function filemtime($filePath)
    {
        return filemtime($this->rootDir . '/../web/' . $filePath);
    }

    /**
     * @return string
     */
    public function getName()
    {
        return 'app_file_modified_extension';
    }
}
