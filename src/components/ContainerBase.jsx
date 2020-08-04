import styled from "@emotion/styled";
import mq from "../utils/breakpoints";

const ContainerBase = styled.div`
  ${mq({
    clipPath: [
      "polygon(50% 0%, 100% 50px, 100% 100%, 0 100%, 0 50px)",
      "polygon(50% 0%, 100% 70px, 100% 100%, 0 100%, 0 70px)",
      "polygon(50% 0%, 100% 100px, 100% 100%, 0 100%, 0 100px)",
      "polygon(50% 0%, 100% 150px, 100% 100%, 0 100%, 0 150px)",
      "polygon(50% 0%, 100% 200px, 100% 100%, 0 100%, 0 200px)",
    ],
    padding: [
      "calc(50px + 50px) 0 calc(115px + 50px) 0",
      "calc(75px + 70px) 0 calc(175px + 70px) 0",
      "calc(125px + 100px) 0 calc(200px + 100px) 0",
      "calc(175px + 150px) 0 calc(250px + 150px) 0",
      "calc(225px + 200px) 0 calc(300px + 200px) 0",
    ],
    marginTop: ["-50px", "-70px", "-100px", "-150px", "-200px"],
  })};
`;

export default ContainerBase;
