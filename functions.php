<?php
/* ==========================================================================
 *  Theme settings
 * ========================================================================== */
if ( ! function_exists( 'register_menus' ) ) :
	function register_menus() {

		register_nav_menus( array(
			'top'    => __( 'Main Menu'),
			'bottom' => __( 'Footer Menu' )
		) );


	}
endif;
add_action( 'init', 'register_menus' );

/* ==========================================================================
 *  Styles and Scripts
 * ========================================================================== */
if ( ! function_exists( 'scriptsAndStyles' ) ) :
	function scriptsAndStyles() {

		global $post, $wp_query;

		// STYLES
		wp_enqueue_style( 'style', trailingslashit( get_template_directory_uri() ) . '/style.css');


		// SCRIPTS
		wp_enqueue_script('react_theme', trailingslashit
		( get_template_directory_uri() ) . '/js/bundle.js', array(), "1.0.0", true);

	
	}
endif;	
    add_action( 'wp_enqueue_scripts', 'scriptsAndStyles' )


?>
