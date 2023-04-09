import { createGlobalStyle } from "styled-components";
import px2vw from "../util/px2vw";
export const Global = createGlobalStyle`

  * {
    box-sizing: border-box;
  }
  
  body {
    margin: 0;
    padding-top: 70px;
    height: 100%;
  }
  :root {
      font-size: ${px2vw(20)};
      @media (min-width: 768px) {
        font-size: ${px2vw(18)};
      }
      @media (min-width: 1024px) {
        font-size: ${px2vw(16)};
      }
    }
`;
export default Global;
