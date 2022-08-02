# React Product Slider &middot; [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/alrramezani/react-product-slider/blob/master/LICENSE)
![react product slider](https://github.com/alrramezani/react-product-slider/raw/master/public/rps.gif)


## Installation
The easiest way to use react-product-slider is to install it from npm.
```
npm install react-product-slider
```

## usage


```jsx
import ReactProductSlider from 'react-product-slider';
const  items  = {
	images: [
		{ src:  "mockImages/slide.jpg", alt:  "slide" }
	],
	thumbnails: [
		{ src:  "mockImages/thumbnail.jpg", alt:  "thumbnail" }
	],
};
function  App() {
	return (
		<div>
			<div  className="slider">
				<ReactProductSlider  items={items} />
			</div>
			<div  className="content">
				<h4>React Product Slider</h4>
			</div>
		</div>
	);
}
export  default  App;
```
## Props

Property             | Required | Example
-------------------- | -------------------- | -----------------------------------------------------------------------------------------
`items`              | **yes**              | `{ images: [{ src:  "mockImages/slide.jpg", alt:  "slide" }],thumbnails: [{ src:  "mockImages/thumbnail.jpg", alt:  "thumbnail" }],}`


--------------------------------------------------------------------------------

### License
[MIT licensed](./LICENSE).