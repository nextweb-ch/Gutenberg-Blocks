import { __ } from '@wordpress/i18n'


import edit from './edit'
import save from './save'

export const name = 'un-block/country-filter'
export const settings = {

	apiVersion: 2,

	title: __( 'Country Filer', 'un-block' ),

	description: __(
		'Filer by country.',
		'un-block'
		),

	keywords: [
	__( 'Filter' ),
	__( 'Country' ),
	],
	category: 'filter',
	icon: 'dashicons-admin-site-alt3',

	supports: {
		html: false,
		align: false,

	},
	attributes: {
		countries: {
			type: 'array',
			default: [],
		},
	},
	edit,
	save,
}
