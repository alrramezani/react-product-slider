import styled from "styled-components";
type sliderContainerProps = {
  zoomStatus?: boolean;
  reverse?: boolean;
};
type selectedPictureProps = {
  background: string;
  zoomStatus?: boolean;
};
type thumbnailsProps = {
  zoomStatus?: boolean;
};
export const SliderContainer = styled.div<sliderContainerProps>`
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  max-height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  box-sizing: border-box;
  z-index: 999;
  flex-direction: ${({ reverse }) => (reverse ? "row-reverse" : "row")};
  ${({ zoomStatus }) =>
    zoomStatus
      ? `
    padding: 64px;
    position: fixed;
  `
      : ""}
  .close-but {
    display: ${({ zoomStatus }) => (zoomStatus ? "block" : "none")};
    font-size: 24px;
    position: absolute;
    top: 16px;
    left: 16px;
    color: #000;
    cursor: pointer;
  }
`;
export const SelectedPicture = styled.div<selectedPictureProps>`
  width: ${({ zoomStatus }) => (zoomStatus ? "90%" : "80%")};
  height: 100%;
  display: flex;
  justify-content: center;
  cursor: ${({ zoomStatus }) => (zoomStatus ? "default" : "zoom-in")};
  background-image: url(${({ background }) => background});
  background-repeat: no-repeat;
  background-position: center;
  background-size: ${({ zoomStatus }) => (zoomStatus ? "contain" : "cover")};
  transition: 0.3s all;
  position: relative;
`;
export const Thumbnails: any = styled.div<thumbnailsProps>`
  width: ${({ zoomStatus }) => (zoomStatus ? "8%" : "18%")};
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  overflow-y: auto;
  justify-content: flex-start;
  cursor: ns-resize;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  .thumbnail {
    margin-bottom: 16px;
    cursor: pointer;
    opacity: 0.5;
    img {
      width: 100%;
    }
    &:last-child {
      margin-bottom: 0;
    }
  }
  .selected {
    opacity: 1;
    cursor: ns-resize;
  }
`;
