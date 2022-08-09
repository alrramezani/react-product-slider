import ReactProductSlider from "./react-product-slider";
import { AppContainer } from "./appStyle";
const items = [
  {
    src: "mockImages/slide-1.jpg",
    thumbnail: "mockImages/thumbnail-1.jpg",
    alt: "slide-1",
  },
  {
    src: "mockImages/slide-2.jpg",
    thumbnail: "mockImages/thumbnail-2.jpg",
    alt: "slide-2",
  },
  {
    src: "mockImages/slide-3.jpg",
    thumbnail: "mockImages/thumbnail-3.jpg",
    alt: "slide-3",
  },
  {
    src: "mockImages/slide-4.jpg",
    thumbnail: "mockImages/thumbnail-4.jpg",
    alt: "slide-4",
  },
  {
    src: "mockImages/slide-5.jpg",
    thumbnail: "mockImages/thumbnail-5.jpg",
    alt: "slide-5",
  },
  {
    src: "mockImages/slide-6.jpg",
    thumbnail: "mockImages/thumbnail-6.jpg",
    alt: "slide-6",
  },
  {
    src: "mockImages/slide-7.jpg",
    thumbnail: "mockImages/thumbnail-7.jpg",
    alt: "slide-7",
  },
  {
    src: "mockImages/slide-8.jpg",
    thumbnail: "mockImages/thumbnail-8.jpg",
    alt: "slide-8",
  },
  {
    src: "mockImages/slide-9.jpg",
    thumbnail: "mockImages/thumbnail-9.jpg",
    alt: "slide-9",
  },
];

function App() {
  return (
    <AppContainer>
      <div className="slider">
        <ReactProductSlider items={items} />
      </div>
      <div className="content">
        <h4>React Product Slider</h4>
        <a
          href="https://www.pexels.com/@godisable-jacob-226636"
          target="_blank"
          rel="noreferrer"
          className="link-to-photographer"
        >
          Photos by Godisable Jacob
        </a>
      </div>
    </AppContainer>
  );
}
export default App;
