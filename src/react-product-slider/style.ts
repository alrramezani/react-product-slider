import styled from "styled-components";
type selectedPictureProps = {
  background: string;
};
export const SliderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  max-height: 100%;
`;
export const SelectedPicture = styled.div<selectedPictureProps>`
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: center;
  cursor: pointer;
  background-image: url(${({ background }) => background});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;
export const Thumbnails = styled.div`
  width: 18%;
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
