# React Product Slider &middot; [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/alrramezani/react-product-slider/blob/master/LICENSE)

## Demo

[click here for demo](https://alrramezani.github.io/react-product-slider/)

## Installation

The easiest way to use react-product-slider is to install it from npm.

```
npm install react-product-slider
```

## usage

```jsx
import ReactProductSlider from "react-product-slider";
const items = [
  {
    src: "mockImages/slide.jpg",
    alt: "slide",
    thumbnail: "mockImages/thumbnail.jpg",
  },
];
function App() {
  return (
    <div>
      <div className="slider">
        <ReactProductSlider items={items} />
      </div>
      <div className="content">
        <h4>React Product Slider</h4>
      </div>
    </div>
  );
}
export default App;
```

## Props

| Property          | Required | Default | Example                                                       |
| ----------------- | -------- | ------- | ------------------------------------------------------------- |
| `items`           | **yes**  | --      | `[{src: "slide.jpg",alt: "slide",thumbnail:"thumbnail.jpg"}]` |
| `classNamePrefix` | _no_     | --      | `my-rps`                                                      |
| `reverse`         | _no_     | false   | true                                                          |
| `initialSelected` | _no_     | 0       | 3                                                             |

---

### License

[MIT licensed](./LICENSE).
