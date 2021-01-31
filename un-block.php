<?php
/**
 * Plugin Name:     Un-Block
 * Description:     Gutenberg blocks set written with ESNext standard and JSX support.
 * Version:         0.1.0
 * Author:          The WordPress Contributors
 * License:         GPL-2.0-or-later
 * License URI:     https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:     un-block
 *
 * @package         un-block
 */

/**
 * Registers all block assets so that they can be enqueued through the block editor
 * in the corresponding context.
 *
 * @see https://developer.wordpress.org/block-editor/tutorials/block-tutorial/applying-styles-with-stylesheets/
 */
function un_block_init() {
	$dir = __DIR__;
	$index_asset_path = "$dir/build/index.asset.php";
	if ( ! file_exists( $index_asset_path ) ) {
		throw new Error('You need to run `npm start` or `npm run build` for the "un-block/un-block" block first.');
	}
	$index_js     = 'build/index.js';
	$index_asset = require( $index_asset_path );

	$script_asset_path = "$dir/build/script.asset.php";
	if ( ! file_exists( $script_asset_path ) ) {
		throw new Error('You need to run `npm start` or `npm run build` for the "un-block/un-block" block first.');
	}
	$script_js     = 'build/script.js';
	$script_asset = require( $script_asset_path );


	wp_register_script(
		'un-block-editor',
		plugins_url( $index_js, __FILE__ ),
		$index_asset['dependencies'],
		$index_asset['version']
	);
	wp_register_script(
		'un-block',
		plugins_url( 'build/script.js', __FILE__ ),
		$script_asset['dependencies'],
		$script_asset['version']
	);
	wp_set_script_translations( 'un-block-editor', 'un-block' );

	$editor_css = 'build/index.css';
	wp_register_style(
		'un-block-editor',
		plugins_url( $editor_css, __FILE__ ),
		array('wp-components'),
		file_exists("$dir/$editor_css")?filemtime( "$dir/$editor_css" ):rand()
	);

	$style_css = 'build/style-index.css';
	wp_register_style(
		'un-block',
		plugins_url( $style_css, __FILE__ ),
		array(),
		file_exists("$dir/$style_css")?filemtime( "$dir/$style_css" ):rand()
	);

	register_block_type( 'un-block/slideshow', array(
		'editor_script' => 'un-block-editor',
		'editor_style'  => 'un-block-editor',
		'style'         => 'un-block',
		'script'		=> 'un-block'
	) );
}
add_action( 'init', 'un_block_init' );

/*add_filter('the_content','enqueue_slider_script_if_block_is_used');
function enqueue_slider_script_if_block_is_used($content = ""){
	if(!is_admin() && has_block('un-block/slideshow')){
		//$dir = __DIR__;
		//$href=plugin_dir_url(__FILE__);
		//$js='library/owl_carousel/owl.carousel.min.js';
		//$do='library/owl_carousel/do-carousel.js';
		//$css='library/owl_carousel/assets/owl.carousel.min.css';
		//$theme='library/owl_carousel/assets/owl.theme.default.min.css';
		//wp_enqueue_script('owl_carousel',"$href$js",['jquery'],filemtime( "$dir/$js" ),true);
		//wp_enqueue_script('owl_carousel',"$href$js",['jquery','owl_carousel'],filemtime( "$dir/$js" ),true);
		//wp_enqueue_style('owl_carousel',"$href$css",[],filemtime( "$dir/$css" ),true);
		//wp_enqueue_style('owl_carousel_theme',"$href$theme",[],filemtime( "$dir/$theme" ),true);
		//wp_enqueue_script('do-owl_carousel',"$href$do",['jquery','owl_carousel'],filemtime( "$dir/$do" ),true);
	}
	return $content;
	}*/
