<?php

function deu_blocks_activate_plugin(){
    //Compare version to 6.0 < 5.9
    if(version_compare(get_bloginfo('version'), '5.9', '<')){
        wp_die(__('You must update WordPress, to use the plugin', 'deu-blocks'));
    }

    //Flush routes

    //flush_rewrite_rules();
}