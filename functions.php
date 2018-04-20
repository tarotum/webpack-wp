<?php

/**
 * Enqueue scripts and styles.
 */
function webpack_wp_scripts() {
	wp_enqueue_style( 'webpack-wp-style', get_stylesheet_uri() );

	wp_enqueue_style( 'webpack-wp-bundle-style', get_template_directory_uri() . '/build/css/styles.css' );

	wp_enqueue_script( 'webpack-wp-bundle-scripts', get_template_directory_uri() . '/build/js/bundle.js', array(), '20151215', true );
}
add_action( 'wp_enqueue_scripts', 'webpack_wp_scripts' );

