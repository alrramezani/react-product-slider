import styled from "styled-components";
export const SliderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  max-height: 100%;
`;
export const SelectedPicture = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  img {
    cursor: pointer;
  }
`;
export const Thumbnails = styled.div`
  width: 18%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  overflow-y: auto;
  justify-content: flex-start;
  .thumbnail {
    margin-bottom: 16px;
    cursor: pointer;
    img {
      width: 100%;
    }
  }
`;
