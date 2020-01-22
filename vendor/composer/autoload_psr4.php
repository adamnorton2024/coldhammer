<?php

$vendorDir = dirname(dirname(__FILE__));
$baseDir = dirname($vendorDir);

return array(
    'Gregwar\\Captcha\\' => array($vendorDir . '/gregwar/captcha'),
    'FormGuide\\PHPFormValidator\\' => array($vendorDir . '/FormGuide/PHPFormValidator/src'),
    'FormGuide\\Handlx\\' => array($baseDir . '/src'),
);
