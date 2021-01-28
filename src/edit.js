/**
* Retrieves the translation of text.
*
* @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
*/
import { __ } from '@wordpress/i18n';
const {	InspectorControls,RichText,ColorPalette,MediaUpload,} = wp.blockEditor;
const {	Button,	IconButton,	PanelBody,	TextControl, SelectControl,Flex, FlexItem, FlexBlock} = wp.components;
const {	Fragment,} = wp.element;
/**
* React hook that is used to mark the block wrapper element.
* It provides all the necessary props like the class name.
*
* @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
*/
import { useBlockProps } from '@wordpress/block-editor';

/**
* Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
* Those files can contain any CSS code that gets applied to the editor.
*
* @see https://www.npmjs.com/package/@wordpress/scripts#using-css
*/
import './editor.scss';

/**
* The edit function describes the structure of your block in the context of the
* editor. This represents what the editor will render when the block is used.
*
* @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
*
* @return {WPElement} Element to render.
*/
export default function Edit(props){
	const blockProps = useBlockProps()
	console.log('_',blockProps,props)

	const handleAddSlide = () => {
		const slides = [ ...props.attributes.slides ];
		/*slides.push( {
			title: 'Title',
			description: 'description',
			backgroundImage:'',
		} );*/
		slides.push( {"title":"Title","description":"Description","backgroundImage":null,"v":"middle","h":"left","align":"left","link":"link"} );
		props.setAttributes( { slides } );
	};
	const handleSlideProp =(value,prop)=>{
		const _prop={}
		_prop[prop]=value
		console.log(value,prop,_prop)
		props.setAttributes( {_prop} )
		//props.setAttributes( prop,value)
	}
	const handleRemoveSlide = ( index ) => {
		const slides = [ ...props.attributes.slides ];
		slides.splice( index, 1 );
		props.setAttributes( { slides } );
	};

	const handleSlideChange = ( newContent, index,key ) => {
		const slides = [ ...props.attributes.slides ];
		slides[ index ][key] = newContent;
		props.setAttributes( { slides } );
	};

	const handleMoveSlide = (index,dir) => {
		const slides = [ ...props.attributes.slides ];
		var slide = slides.splice(index, 1)[0];
		slides.splice(index+dir, 0, slide);
		props.setAttributes( { slides } );
	};
	const onSelectImage = (index,newImage) => {
		console.log(index,newImage)
		const slides = [ ...props.attributes.slides ];
		slides[ index ].backgroundImage = newImage;
		props.setAttributes( { slides } );
	}
	let SliderProps, 
	SliderSlides;

	/*SliderProps = props.attributes.slides.map( ( slide, index ) => {
		return <Fragment key={ index }>
		<TextControl className="gsp__minHeight" placeholder="50vh" value={ props.attributes.minHeight } onChange={ ( minHeight ) => handleSlideProp( minHeight, 'minHeight' ) } />
		<Button className="gsp__remove-slide" icon="no-alt" label="Delete slide" onClick={ () => handleRemoveSlide( index ) } />
		</Fragment>
		;
	} );*/
	SliderProps = () => {
		return <Fragment key={ 'attributes' }>
		<label>Min Height <TextControl className="gsp__minHeight" placeholder="50vh" value={ props.attributes.minHeight } onChange={ ( minHeight ) => handleSlideProp( minHeight, 'minHeight' ) } /></label>
		</Fragment>
		;
	}

	SliderSlides = props.attributes.slides.map( ( slide, index ) => {

		let backgroundImage=props.attributes.slides[ index ].backgroundImage.url,
		backgroundStyle={}
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

		<FlexItem>
		<MediaUpload
		onSelect={ (newImage) => onSelectImage( index,newImage ) }
		type="image"
		value={ props.attributes.slides[ index ].backgroundImage }
		render={ ( { open } ) => (
		<Button
		className="editor-media-placeholder__button is-button is-default is-large"
		icon="upload"
		onClick={ open }>
		Background Image
		</Button>
		)}/>

		</FlexItem>
		<FlexBlock style={{minWidth:'300px'}}>

		<FlexItem>
		<SelectControl
		label={ __( 'Vertical' ) }
		labelPosition={'top'}
		value={ props.attributes.slides[ index ].v }
		onChange={ ( newContent ) => handleSlideChange( newContent, index,'v' )}
		options={ [
			{ value: 'top', label: 'Top' },
			{ value: 'middle', label: 'Middle' },
			{ value: 'bottom', label: 'Bottom' },
			] }
			/>
			</FlexItem>
			<FlexItem>
			<SelectControl
			label={ __( 'Horizontal' ) }
			labelPosition={'top'}
			value={ props.attributes.slides[ index ].h }
			onChange={ ( newContent ) => handleSlideChange( newContent, index,'h' )}
			options={ [
				{ value: 'left', label: 'Left' },
				{ value: 'center', label: 'Center' },
				{ value: 'right', label: 'Right' },
				] }
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
					<Button
					className="gsp__remove-slide"
					icon="no-alt"
					label="Delete slide"
					onClick={ () => handleRemoveSlide( index ) }
					/>
					<Button
					className="gsp__move-up"
					icon="arrow-up-alt2"
					label="Move up"
					onClick={ () => handleMoveSlide( index,-1 ) }
					/>
					<Button
					className="gsp__move-down"
					icon="arrow-down-alt2"
					label="Move down"
					onClick={ () => handleMoveSlide( index,1 ) }
					/>
					</FlexItem>
					</Flex>
					<div>{JSON.stringify(props.attributes.slides[ index ].backgroundImage.url)}</div>
					<TextControl className="gsp__slide-link" placeholder="link" value={ props.attributes.slides[ index ].link } onChange={ ( newContent ) => handleSlideChange( newContent, index,'link' ) }></TextControl>

					</div>;
				} );


				return ([
				<InspectorControls key="1">
				<PanelBody title={ __( 'Slideshow' ) }>
				{SliderProps}
				</PanelBody>
				</InspectorControls>
				,
				<div { ...blockProps }>
				<div>{ SliderSlides }</div>
				<div>
				<Button	isSecondary onClick={ handleAddSlide.bind( this ) }>{ __( 'Add Slide' ) }</Button>
				</div>
				<div class="carousel">

				{JSON.stringify(props.attributes)}
				
				</div>
				</div>
				]);
			}
			/*
			{props.attributes.slides.map( ( slide, index ) => {
				return <div>{JSON.stringify(slide)}</div>
			} )}
			*/