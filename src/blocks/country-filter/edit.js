import { __ } from '@wordpress/i18n';
const {	InspectorControls,RichText,ColorPalette,MediaUpload,} = wp.blockEditor;
const {	Button,	IconButton,	PanelBody,	TextControl, SelectControl,Flex, FlexItem, FlexBlock} = wp.components;
const { Fragment, } = wp.element;
import {countries} from './countries'
import { useBlockProps } from '@wordpress/block-editor';
import '../../editor.scss';
export default function Edit(props){
	const blockProps = useBlockProps()
	console.log('_',blockProps,props)
	const handleAddCountry = (value) => {
		const countries = [ ...props.attributes.countries ];
		countries.push( {"title":"Title","description":"Description","backgroundImage":null,"v":"middle","h":"left","align":"left","link":"link"} );
		props.setAttributes( { countries } );
	}
	const handleRemoveCountry = ( index ) => {
		const countries = [ ...props.attributes.countries ];
		countries.splice( index, 1 );
		props.setAttributes( { countries } );
	}
	let SliderProps,
	CountriesSettings
	SliderProps = () => {
		return (
			<Fragment key={'attributes'}>
				<label>Min Height <TextControl className="gsp__minHeight" placeholder="50vh" value={ props.attributes.minHeight } onChange={ ( minHeight ) => handleSlideProp( minHeight, 'minHeight' ) } /></label>
			</Fragment>
		)
	}
	CountriesSettings = props.attributes.slides.map( ( slide, index ) => {
		let backgroundImage
			if(props.attributes.slides[index].backgroundImage)backgroundImage = props.attributes.slides[index].backgroundImage.url
			let backgroundStyle
				backgroundStyle = {}
		if(backgroundImage && backgroundImage.trim()!='')backgroundStyle={
			backgroundImage:`url(${backgroundImage})`,
			backgroundSize:'cover',
			backgroundPosition:'center center'
		}
		return <div key={ index } style={{borderBottom:'1px solid #000',}}>{ index }
		<div style={backgroundStyle}>
		<RichText tagname="h2"
		className="gsp__slide-title"
		value={ props.attributes.slides[ index ].title }
		onChange={ ( newContent ) => handleSlideChange( newContent, index,'title' ) }
		/>
		<RichText tagname="h3"
		className="gsp__slide-description"
		value={ props.attributes.slides[ index ].description }
		onChange={ ( newContent ) => handleSlideChange( newContent, index,'description' ) }
		/>
		<RichText tagname="button"
		className="gsp__slide-button"
		value={ props.attributes.slides[ index ].button }
		onChange={ ( newContent ) => handleSlideChange( newContent, index,'description' ) }
		/>
		</div>
		<Flex style={{flexWrap:'wrap'}}>
		<FlexBlock style={ {minWidth:'300px'} }>
		<FlexItem>
		<SelectControl
		label={ __( 'Vertical' ) }
		labelPosition={'top'}
		value={ props.attributes.slides[ index ].v }
		onChange={ ( newContent ) => handleSlideChange( newContent, index,'v' ) }
		options={countries}
		/>
		</FlexItem>
		<FlexItem>
			<SelectControl
			label={ __( 'Horizontal' ) }
			labelPosition={'top'}
			value={ props.attributes.slides[ index ].h }
			onChange={ ( newContent ) => handleSlideChange( newContent, index,'h' )}
							options={
								[
				{ value: 'left', label: 'Left' },
				{ value: 'center', label: 'Center' },
				{ value: 'right', label: 'Right' },
								]
							}
				/>
				</FlexItem>
				<FlexItem>
				<SelectControl
				label={ __( 'Text alignment' ) }
				labelPosition={'top'}
				value={ props.attributes.slides[ index ].align }
				onChange={ ( newContent ) => handleSlideChange( newContent, index,'align' )}
				options={ [
					{ value: 'left', label: 'Left' },
					{ value: 'center', label: 'Center' },
					{ value: 'right', label: 'Right' },
					] }
					/>
					</FlexItem>
					</FlexBlock>
					<FlexItem style={{textAlign:'right'}}>
					<Button className="gsp__remove-slide" icon="no-alt" label="Delete slide" onClick={ () => handleRemoveSlide( index ) } />
					<Button className="gsp__move-up" icon="arrow-up-alt2" label="Move up" onClick={ () => handleMoveSlide( index,-1 ) } />
					<Button className="gsp__move-down" icon="arrow-down-alt2" label="Move down" onClick={ () => handleMoveSlide( index,1 ) } />
					</FlexItem>
					</Flex>
					<div>{JSON.stringify(props.attributes.slides[ index ].backgroundImage?props.attributes.slides[ index ].backgroundImage.url:'')}</div>
					<TextControl className="gsp__slide-link" placeholder="link" value={ props.attributes.slides[ index ].link } onChange={ ( newContent ) => handleSlideChange( newContent, index,'link' ) }></TextControl>

					</div>;
				} )
				return ([
				<InspectorControls key="1">
				<PanelBody title={ __( 'Slideshow' ) }>
				{SliderProps}
				</PanelBody>
				</InspectorControls>
				,
				<div { ...blockProps }>
				<div>{ CountriesSettings }</div>
				<div>
				<Button	isSecondary onClick={ handleAddSlide.bind( this ) }>{ __( 'Add Slide' ) }</Button>
				</div>
				<div class="carousel">
				{JSON.stringify(props.attributes)}
				</div>
				</div>
				])
			}
