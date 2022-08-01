import styled from "styled-components";
export const NavigatorContainer = styled.div`
  display: flex;
  position: absolute;
  z-index: 1;
  bottom: 16px;
  left: 16px;
  color: #fff;
  text-shadow: 0 0 black;
  font-size: 18px;
  .map{
    margin:0 4px ;
  }
  .next,.prev {
    cursor: pointer;
  }
`;
