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
  rtl?: boolean;
};
const ReactProductSlider: React.FC<Props> = ({ items }) => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [zoomStatus, setZoomStatus] = useState<boolean>(false);
  useEffect(() => {
    let item = window.document.getElementById(`thumbnail-${selectedIndex}`);
    item?.scrollIntoView({ behavior: "smooth" });
  }, [zoomStatus]);
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
    let item = window.document.getElementById(`thumbnail-${newSelected}`);
    item?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <SliderContainer zoomStatus={zoomStatus}>
      <span
        className="close-but"
        onClick={() => {
          setZoomStatus(false);
        }}
      >
        &#x2715;
      </span>
      <SelectedPicture
        background={items.images[selectedIndex]["src"]}
        zoomStatus={zoomStatus}
        onClick={() => {
          setZoomStatus(true);
        }}
      >
        <Navigator
          selected={selectedIndex}
          count={items.images.length}
          navigate={navigate}
        />
      </SelectedPicture>
      <Thumbnails zoomStatus={zoomStatus}>
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
