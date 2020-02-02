<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

require_once './vendor/autoload.php';

use FormGuide\Handlx\FormHandler;


$pp = new FormHandler();

$validator = $pp->getValidator();
$validator->fields(['name-mobile', 'email-mobile', 'subject-mobile'])->areRequired()->maxLength(50);
$validator->field('email-mobile')->isEmail();
$validator->field('message-mobile')->maxLength(5000);


$pp->sendEmailTo('dan@coldhammerstills.com'); // ← Your email here

echo $pp->process($_POST);
