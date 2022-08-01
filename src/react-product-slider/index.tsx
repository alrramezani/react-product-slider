import { useState } from "react";
import { SliderContainer, SelectedPicture, Thumbnails } from "./style";
type imageType = {
  src: string;
  alt?: string;
};
type reactProductSliderTypes = {
  items: { images: imageType[]; thumbnails: imageType[] };
  classNamePrefix?: string;
  rtl?: boolean;
};
const ReactProductSlider = ({
  items,
}: reactProductSliderTypes): JSX.Element => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <SliderContainer>
      <SelectedPicture>
        <img
          src={items.images[selectedIndex]["src"]}
          alt={items.images[selectedIndex]["alt"]}
        />
      </SelectedPicture>
      <Thumbnails>
        {items.thumbnails.map((thumbnail: imageType, index: number) => (
          <div className="thumbnail" key={index}>
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
