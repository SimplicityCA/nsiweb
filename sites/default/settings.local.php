<?php

/**
 * @file
 * Local settings.
 * Copy this file and name it settings.local.php.
 *
 * The sites/default/settings.php includes this file by default if it exists.
 */
$databases['default']['default'] = array(
  'database' => 'nsiweb', // Your database name.
  'username' => 'root', // Your MySQL username.
  'password' => 'root', // Your MySQL password.
  'host' => 'localhost', // Usually localhost or 127.0.0.1
  'port' => '',
  'driver' => 'mysql',
  'prefix' => '',
);
