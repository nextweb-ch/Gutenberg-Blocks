/**
* Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
* All files containing `style` keyword are bundled together. The code used
* gets applied both to the front of your site and to the editor.
*
* @see https://www.npmjs.com/package/@wordpress/scripts#using-css
*/
import './style.scss'

import { registerBlockType } from '@wordpress/blocks';

import * as slider from './blocks/slider';
//import * as quote from './quote';
//import * as code from './code';
console.log(slider)
const blocks = [
    slider,
    //quote,
    //code
];

function registerBlock( block ) {
    const { name, settings } = block;
    registerBlockType( name, settings );
}

blocks.forEach( registerBlock );
