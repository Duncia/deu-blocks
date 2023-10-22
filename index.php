<?php
/*
 * Plugin Name:       DEU Blocks
 * Plugin URI:        https://duncia.eu
 * Description:       WordPress DEU Theme custom Gutenberg blocks plugin.
 * Version:           1.0.0
 * Requires at least: 6.2
 * Requires PHP:      8.0
 * Author:            Robke
 * Author URI:        https://duncia.eu
 * Text Domain:       deu-blocks
 * Domain Path:       /languages
 */

 if(!function_exists('add_action')){
    exit;
 };

 //Setup
 //Absolute path created
 define('UP_PLUGIN_DIR', plugin_dir_path(__FILE__));

//Includes
//Globs function to include all files
$rootFiles = glob(UP_PLUGIN_DIR . 'includes/*.php');
$subdirectoryFiles = glob(UP_PLUGIN_DIR . 'includes/**/*.php');
$allFiles = array_merge($rootFiles, $subdirectoryFiles);

foreach($allFiles as $filename){
   include_once($filename);
};

 //Hooks
 //Hook to register CPT and activate plugin
 register_activation_hook(__FILE__, 'deu_blocks_activate_plugin');

 //Init hook to call functions from includes
 add_action('init', 'deu_blocks_register_blocks');

 //Upload translations
 add_action('init', 'deu_blocks_load_php_translations');