import { useState, useRef } from "react";
import { SliderContainer, SelectedPicture, Thumbnails } from "./style";
import Navigator from "./components/navigator";
type imageType = {
  src: string;
  alt?: string;
};
type Props = {
  items: { images: imageType[]; thumbnails: imageType[] };
  classNamePrefix?: string;
  rtl?: boolean;
};
const ReactProductSlider: React.FC<Props> = ({ items }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const thumbnailsRef = useRef<null | HTMLDivElement>(null);

  const navigate = (direction: string) => {
    let newSelected: number = 0;
    if (direction === "next") {
      if (selectedIndex < items.images.length - 1) {
        newSelected = selectedIndex + 1;
      }
    }
    if (direction === "prev") {
      if (selectedIndex !== 0) {
        newSelected=selectedIndex - 1;
      } else {
        newSelected=items.images.length - 1;
      }
    }
    setSelectedIndex(newSelected);
    let item = window.document.getElementById(`thumbnail-${newSelected}`);
    item?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <SliderContainer>
      <SelectedPicture background={items.images[selectedIndex]["src"]} />
      <Navigator
        selected={selectedIndex}
        count={items.images.length}
        navigate={navigate}
      />
      <Thumbnails ref={thumbnailsRef}>
        {items.thumbnails.map((thumbnail: imageType, index: number) => (
          <div
            className={`thumbnail${selectedIndex === index ? " selected" : ""}`}
            key={index}
            id={`thumbnail-${index}`}
          >
            <img
              src={thumbnail["src"]}
              alt={thumbnail["alt"]}
              onClick={() => {
                setSelectedIndex(index);
              }}
            />
          </div>
        ))}
      </Thumbnails>
    </SliderContainer>
  );
};
export default ReactProductSlider;
