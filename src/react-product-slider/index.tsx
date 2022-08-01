import { useState } from "react";
import { SliderContainer, SelectedPicture, Thumbnails } from "./style";
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
  return (
    <SliderContainer>
      <SelectedPicture background={items.images[selectedIndex]["src"]} />
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
