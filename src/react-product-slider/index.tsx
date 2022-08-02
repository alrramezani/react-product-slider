import { useState, useEffect } from "react";
import { SliderContainer, SelectedPicture, Thumbnails } from "./style";
import Navigator from "./components/navigator";
type imageType = {
  src: string;
  alt?: string;
};
type Props = {
  items: { images: imageType[]; thumbnails: imageType[] };
  classNamePrefix?: string;
  initialSelected?: number;
  reverse?: boolean;
  rtl?: boolean;
};
const ReactProductSlider: React.FC<Props> = ({
  items,
  classNamePrefix,
  reverse,
  initialSelected,
}) => {
  const [selectedIndex, setSelectedIndex] = useState<number>(
    initialSelected ? initialSelected : 0
  );
  const [zoomStatus, setZoomStatus] = useState<boolean>(false);
  useEffect(() => {
    let item = window.document.getElementById(`thumbnail-${selectedIndex}`);
    item?.scrollIntoView({ behavior: "smooth" });
  }, [zoomStatus, selectedIndex]);
  const navigate = (direction: string) => {
    let newSelected: number = 0;
    if (direction === "next") {
      if (selectedIndex < items.images.length - 1) {
        newSelected = selectedIndex + 1;
      }
    }
    if (direction === "prev") {
      if (selectedIndex !== 0) {
        newSelected = selectedIndex - 1;
      } else {
        newSelected = items.images.length - 1;
      }
    }
    setSelectedIndex(newSelected);
  };
  const classNameMaker = (elementName: string): string => {
    if (classNamePrefix) {
      return classNamePrefix + "__" + elementName;
    }
    return "";
  };
  return (
    <SliderContainer
      zoomStatus={zoomStatus}
      reverse={reverse}
      className={classNameMaker("slider-container")}
    >
      <span
        className={`close-but ${classNameMaker("close-but")}`}
        onClick={() => {
          setZoomStatus(false);
        }}
      >
        &#x2715;
      </span>
      <SelectedPicture
        className={classNameMaker("selected-picture")}
        background={items.images[selectedIndex]["src"]}
        zoomStatus={zoomStatus}
        onClick={() => {
          setZoomStatus(true);
        }}
      >
        <Navigator
          className={classNameMaker("navigator")}
          selected={selectedIndex}
          count={items.images.length}
          navigate={navigate}
        />
      </SelectedPicture>
      <Thumbnails
        zoomStatus={zoomStatus}
        className={classNameMaker("thumbnails")}
      >
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
