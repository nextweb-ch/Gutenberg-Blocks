import { __ } from '@wordpress/i18n'
import $ from 'jquery'
import 'slick-carousel'
//import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//require("slick-carousel/slick/slick");
//require("slick-carousel/slick/slick-theme");
window.jQuery = window.$ = $;

import edit from './edit'
import save from './save'

export const name = 'un-block/slider'
export const settings = {

	apiVersion: 2,

	title: __( 'Slideshow', 'slideshow' ),

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
	category: 'formatting',
	icon: <svg xmlns="http://www.w3.org/2000/svg" width="218.2" height="163.7" viewBox="0 0 218.2 163.7">  <title>slider-icon</title>  <g>    <path d="M214.3,27.3H3.9A3.8,3.8,0,0,0,0,31.2V187a3.8,3.8,0,0,0,3.9,3.9H214.3a3.8,3.8,0,0,0,3.9-3.9V31.2A3.8,3.8,0,0,0,214.3,27.3ZM7.8,59.3H31.9v99.2H7.8Zm202.6,99.2H198.7V59.3h11.7Zm0-106.9H194.8a3.9,3.9,0,0,0-3.9,3.8v107a4,4,0,0,0,3.9,3.9h15.6v16.8H7.8V166.3h28a4,4,0,0,0,3.9-3.9V55.4a3.9,3.9,0,0,0-3.9-3.8H7.8V35.1H210.4Z" transform="translate(0 -27.3)"/>    <path d="M55.2,166.3H175.3a3.9,3.9,0,0,0,3.9-3.9V55.4a3.8,3.8,0,0,0-3.9-3.8H55.2a3.9,3.9,0,0,0-3.9,3.8v107A4,4,0,0,0,55.2,166.3Zm3.9-107H171.4v99.2H59.1Z" transform="translate(0 -27.3)"/>  </g>  <path d="M55.9,142.8s34.6-29.6,42.9-30.5c6.2-.6,18,13.8,24.3,13.9s21.8-26.5,27.7-27.9,23.7,24.4,23.7,24.4" transform="translate(0 -27.3)" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="6"/>  <circle cx="91.4" cy="61.8" r="8.6" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="6"/></svg>,

	supports: {
		html: false,
		align: true,

	},
	attributes: {
		align: {
			type: 'string',
			default: 'full'
		},
		minHeight: {
			type: 'string',
			default: '50vh'
		},

		slides:{
			type: 'array',
			default: [],
		},
	},
	edit,
	save,
}
