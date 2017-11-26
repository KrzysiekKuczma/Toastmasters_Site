<?php

function wp_api() {

    wp_enqueue_script('wp-api')
    wp_enqueue_script('bundle_js', get_template_directory.uri() . 'dist/bundle.js', array('wp-api') );
}
add_action( 'init', 'wp-api');

?>