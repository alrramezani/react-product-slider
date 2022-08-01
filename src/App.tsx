import ReactProductSlider from "./react-product-slider";
import { AppContainer } from "./appStyle";
const items = {
  images: [
    { src: "mockImages/slide-1.jpg", alt: "slide-1" },
    { src: "mockImages/slide-2.jpg", alt: "slide-2" },
    { src: "mockImages/slide-3.jpg", alt: "slide-3" },
    { src: "mockImages/slide-4.jpg", alt: "slide-4" },
    { src: "mockImages/slide-5.jpg", alt: "slide-5" },
    { src: "mockImages/slide-6.jpg", alt: "slide-6" },
    { src: "mockImages/slide-7.jpg", alt: "slide-7" },
    { src: "mockImages/slide-8.jpg", alt: "slide-8" },
    { src: "mockImages/slide-9.jpg", alt: "slide-9" },
  ],
  thumbnails: [
    { src: "mockImages/slide-1.jpg", alt: "thumbnail-1" },
    { src: "mockImages/slide-2.jpg", alt: "thumbnail-2" },
    { src: "mockImages/slide-3.jpg", alt: "thumbnail-3" },
    { src: "mockImages/slide-4.jpg", alt: "thumbnail-4" },
    { src: "mockImages/slide-5.jpg", alt: "thumbnail-5" },
    { src: "mockImages/slide-6.jpg", alt: "thumbnail-6" },
    { src: "mockImages/slide-7.jpg", alt: "thumbnail-7" },
    { src: "mockImages/slide-8.jpg", alt: "thumbnail-8" },
    { src: "mockImages/slide-9.jpg", alt: "thumbnail-9" },
  ],
};

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
// Photo by Godisable Jacob: https://www.pexels.com/photo/person-looking-up-while-sitting-on-a-yellow-chair-10481316/
