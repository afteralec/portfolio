import { useState } from "react";
import styled from "styled-components";

export default function App() {
  const [transition, setTransition] = useState(false);

  return (
    <Root transition={transition}>
      <TransitionText transition={transition}>Test</TransitionText>
      <TestText
        onClick={() => {
          setTransition((transition) => !transition);
        }}
        transition={transition}
      >
        Test
      </TestText>
    </Root>
  );
}

// Originally used: https://www.scottcole.net/animating-linear-gradient-button-links/
// Increased the horizontal size and fiddled with the second arguments on the linear-gradient to get
//  a two-color transition
// Also, can swap the 100% and 0% in the background-position property to change the direction of the transition
const Root = styled.div`
  height: 100vh;
  width: 100vw;

  background: linear-gradient(
    -45deg,
    #ef5350 0 calc(50% + 10px),
    indigo calc(50%) calc(50%),
    indigo calc(50% - 10px) 100%
  );
  background-size: 275% 100%;
  background-position: ${({ transition }) =>
    transition ? "0% 50%" : "100% 50%"};

  transition: 0.75s all;
`;

const TransitionText = styled.p`
  text-align: center;
  font-size: 10rem;
  background-image: linear-gradient(
    -45deg,
    transparent 0 calc(50% + 10px),
    transparent calc(50%) calc(50%),
    #ef5350 calc(50% - 10px) 100%
  );
  background-size: 275% 100%;
  background-position: ${({ transition }) =>
    transition ? "0% 50%" : "100% 50%"};

  transition: 0.75s all;

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
  -ms-background-clip: text;
  -ms-text-fill-color: transparent;
  -o-background-clip: text;
  -o-text-fill-color: transparent;
`;

const TestText = styled.p`
  text-align: center;
  font-size: 10rem;
  background-image: linear-gradient(
    -45deg,
    #000000 0 calc(50% + 10px),
    #000000 calc(50%) calc(50%),
    #ffffff calc(50% - 10px) 100%
  );
  background-size: 275% 100%;
  background-position: ${({ transition }) =>
    transition ? "0% 50%" : "100% 50%"};

  transition: 0.75s all;

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
  -ms-background-clip: text;
  -ms-text-fill-color: transparent;
  -o-background-clip: text;
  -o-text-fill-color: transparent;
`;
