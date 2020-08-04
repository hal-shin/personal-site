import styled from "@emotion/styled";
import mq from "../utils/breakpoints";

const Image = styled.img`
  ${mq({
    width: ["60%", "70%", "80%", "80%", "85%"],
  })};
  height: auto;
`;

export default Image;
