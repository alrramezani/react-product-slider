import { useState } from "react";
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
  const navigate = (direction: string) => {
    if (direction === "next") {
      if (selectedIndex < items.images.length - 1) {
        setSelectedIndex(selectedIndex + 1);
      } else {
        setSelectedIndex(0);
      }
    }
    if (direction === "prev") {
      if (selectedIndex !== 0) {
        setSelectedIndex(selectedIndex - 1);
      } else {
        setSelectedIndex(items.images.length - 1);
      }
    }
  };
  console.log(selectedIndex, items.images.length);

  return (
    <SliderContainer>
      <SelectedPicture background={items.images[selectedIndex]["src"]} />
      <Navigator
        selected={selectedIndex}
        count={items.images.length}
        navigate={navigate}
      />
      <Thumbnails>
        {items.thumbnails.map((thumbnail: imageType, index: number) => (
          <div
            className={`thumbnail${selectedIndex === index ? " selected" : ""}`}
            key={index}
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
