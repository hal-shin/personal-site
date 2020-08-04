import styled from "@emotion/styled";
import mq from "../utils/breakpoints";

const Content = styled.div`
  scroll-snap-align: start;
  ${mq({
    padding: [
      "0 24px 0 16px",
      "0 48px 0 24px",
      "0 8% 0 8%",
      "0 12% 0 12%",
      "0 15% 0 15%",
    ],
  })};
  display: flex;
  flex-direction: column;
  height: auto;
`;

export default Content;
