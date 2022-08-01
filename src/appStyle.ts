import styled from "styled-components";
export const AppContainer = styled.div`
  width: 70%;
  height: 700px;
  display: flex;
  justify-content: space-between;
  margin: auto;
  margin-top: 64px;
  .slider {
    height: 100%;
    width: 60%;
  }
  .content {
    height: 100%;
    width: 39%;
    .link-to-photographer {
      text-decoration: none;
      color: #575757;
      border: 1px solid;
      border-radius: 6px;
      border-color: #dfdfe0;
      background: #f7f7f7;
      padding: 8px;
    }
  }
`;
