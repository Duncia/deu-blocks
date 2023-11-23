<?php 

//Functions called in index.php file
function deu_blocks_register_blocks(){
    $blocks = [
        ['name' => 'deu-header','options' => [
            'render_callback' => 'deu_blocks_deu_header_render_cb'
        ]],
        ['name' => 'deu-footer','options' => [
            'render_callback' => 'deu_blocks_deu_footer_render_cb'
        ]],
    ];

    foreach($blocks as $block){
        register_block_type(
            UP_PLUGIN_DIR . 'build/blocks/' . $block['name'],
            isset($block['options']) ? $block['options'] : []
        );
    };

};