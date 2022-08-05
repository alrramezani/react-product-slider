import { useState, useEffect } from "react";
import { SliderContainer, SelectedPicture, Thumbnails } from "./style";
import Navigator from "./components/navigator";
type Props = {
  items: { src: string; thumbnail?: string; alt: string }[];
  classNamePrefix?: string;
  initialSelected?: number;
  reverse?: boolean;
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
      if (selectedIndex < items.length - 1) {
        newSelected = selectedIndex + 1;
      }
    }
    if (direction === "prev") {
      if (selectedIndex !== 0) {
        newSelected = selectedIndex - 1;
      } else {
        newSelected = items.length - 1;
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
      {zoomStatus && (
        <span
          className={`close-but ${classNameMaker("close-but")}`}
          onClick={() => {
            setZoomStatus(false);
          }}
        >
          &#x2715;
        </span>
      )}
      <SelectedPicture
        className={classNameMaker("selected-picture")}
        background={items[selectedIndex]["src"]}
        zoomStatus={zoomStatus}
        onClick={() => {
          setZoomStatus(true);
        }}
      >
        <Navigator
          className={classNameMaker("navigator")}
          selected={selectedIndex}
          count={items.length}
          navigate={navigate}
        />
      </SelectedPicture>
      <Thumbnails
        zoomStatus={zoomStatus}
        className={classNameMaker("thumbnails")}
      >
        {items.map((img, index: number) => (
          <div
            className={`thumbnail${selectedIndex === index ? " selected" : ""}`}
            key={index}
            id={`thumbnail-${index}`}
          >
            <img
              src={img["thumbnail"] ? img["thumbnail"] : img["src"]}
              alt={img["alt"]}
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
