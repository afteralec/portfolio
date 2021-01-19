import { useState } from "react";
import styled from "styled-components";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

// Import services
import { standard } from "./services/themes";

export default function App() {
  const [theme] = useState(standard);
  const [react, setReact] = useState(false);

  return (
    <StyledThemeProvider theme={theme}>
      <Root transition={react}>
        <Navigation>
          <NodeLink onClick={() => setReact(false)} active={!react}>
            About
          </NodeLink>
          <ReactLink onClick={() => setReact(true)} active={react}>
            Projects
          </ReactLink>
        </Navigation>
      </Root>
    </StyledThemeProvider>
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
    #ffffff 0 calc(50% + 10px),
    ${({ theme }) => theme.surface.react} calc(50%) calc(50%),
    ${({ theme }) => theme.surface.react} calc(50% - 10px) 100%
  );
  background-size: 275% 100%;
  background-position: ${({ transition }) =>
    transition ? "0% 50%" : "100% 50%"};

  transition: 0.75s all;
`;

const Navigation = styled.div`
  height: 8rem;
  display: flex;
  justify-content: center;
`;

const NavLink = styled.p`
  font-size: ${({ active }) => (active ? "5rem" : "4rem")};
  cursor: pointer;
  margin-top: auto;
`;

const ReactLink = styled(NavLink)`
  background-image: linear-gradient(
    -45deg,
    ${({ theme }) => theme.surface.react} 0 calc(50% + 10px),
    ${({ theme }) => theme.surface.react} calc(50%) calc(50%),
    #61dafb calc(50% - 10px) 100%
  );
  background-size: 275% 100%;
  background-position: ${({ active }) => (active ? "0% 50%" : "100% 50%")};

  &:hover {
    background-position: ${({ active }) => !active && "0% 50%"};
  }

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

const NodeLink = styled(NavLink)`
  background-image: linear-gradient(
    -45deg,
    #39874e 0 calc(50% + 10px),
    #ffffff calc(50%) calc(50%),
    #ffffff calc(50% - 10px) 100%
  );
  background-size: 275% 100%;
  background-position: ${({ active }) => (active ? "100% 50%" : "0% 50%")};

  &:hover {
    background-position: ${({ active }) => !active && "100% 50%"};
  }

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
