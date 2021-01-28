/**
* Registers a new block provided a unique name and an object defining its behavior.
*
* @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
*/
import { registerBlockType } from '@wordpress/blocks';

/**
* Retrieves the translation of text.
*
* @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
*/
import { __ } from '@wordpress/i18n'

/**
* Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
* All files containing `style` keyword are bundled together. The code used
* gets applied both to the front of your site and to the editor.
*
* @see https://www.npmjs.com/package/@wordpress/scripts#using-css
*/
import './style.scss'



import $ from 'jquery'
import 'slick-carousel'
//require("slick-carousel/slick/slick");
//require("slick-carousel/slick/slick-theme");
window.jQuery = window.$ = $;


/**
* Internal dependencies
*/
import Edit from './edit'
import Save from './save'

console.log('im here')

/**
* Every block starts by registering a new block type definition.
*
* @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
*/
registerBlockType( 'create-block/slideshow', {
	/**
	* @see https://make.wordpress.org/core/2020/11/18/block-api-version-2/
	*/
	apiVersion: 2,

	/**
	* This is the display title for your block, which can be translated with `i18n` functions.
	* The block inserter will show this name.
	*/
	title: __( 'Slideshow', 'slideshow' ),

	/**
	* This is a short description for your block, can be translated with `i18n` functions.
	* It will be shown in the Block Tab in the Settings Sidebar.
	written with ESNext standard and JSX support – build step required
	*/
	description: __(
		'Gutenberg Slideshow block.',
		'slideshow'
		),

	keywords: [
	__( 'Slider' ),
	__( 'Repeatable' ),
	__( 'ACF' ),
	__( 'Background' ),
	],
	/**
	* Blocks are grouped into categories to help users browse and discover them.
	* The categories provided by core are `common`, `embed`, `formatting`, `layout` and `widgets`.
	*/
	category: 'widgets',

	/**
	* An icon property should be specified to make it easier to identify a block.
	* These can be any of WordPress’ Dashicons, or a custom svg element.
	*/
	icon: <svg xmlns="http://www.w3.org/2000/svg" width="218.2" height="163.7" viewBox="0 0 218.2 163.7">  <title>slider-icon</title>  <g>    <path d="M214.3,27.3H3.9A3.8,3.8,0,0,0,0,31.2V187a3.8,3.8,0,0,0,3.9,3.9H214.3a3.8,3.8,0,0,0,3.9-3.9V31.2A3.8,3.8,0,0,0,214.3,27.3ZM7.8,59.3H31.9v99.2H7.8Zm202.6,99.2H198.7V59.3h11.7Zm0-106.9H194.8a3.9,3.9,0,0,0-3.9,3.8v107a4,4,0,0,0,3.9,3.9h15.6v16.8H7.8V166.3h28a4,4,0,0,0,3.9-3.9V55.4a3.9,3.9,0,0,0-3.9-3.8H7.8V35.1H210.4Z" transform="translate(0 -27.3)"/>    <path d="M55.2,166.3H175.3a3.9,3.9,0,0,0,3.9-3.9V55.4a3.8,3.8,0,0,0-3.9-3.8H55.2a3.9,3.9,0,0,0-3.9,3.8v107A4,4,0,0,0,55.2,166.3Zm3.9-107H171.4v99.2H59.1Z" transform="translate(0 -27.3)"/>  </g>  <path d="M55.9,142.8s34.6-29.6,42.9-30.5c6.2-.6,18,13.8,24.3,13.9s21.8-26.5,27.7-27.9,23.7,24.4,23.7,24.4" transform="translate(0 -27.3)" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="6"/>  <circle cx="91.4" cy="61.8" r="8.6" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="6"/></svg>,

	/**
	* Optional block extended support features.
	*/
	supports: {
		// Removes support for an HTML mode.
		html: false,
		align: true,

	},
	attributes: {
		align: {
			type: 'string',
			default: 'full'
		},
		slides:{
			type: 'array',
			default: [],
		},
	},
	/**
	* @see ./edit.js
	*/
	edit: Edit,

	/**
	* @see ./save.js
	*/
	save: Save,
} );
