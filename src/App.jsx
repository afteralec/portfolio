import { useState } from "react";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";

// Import services
import { standard } from "./services/themes";

// TODO: Evening theme, morning theme, stone theme, forest theme

export default function App() {
  const [theme] = useState(standard);
  const [nav, setNav] = useState(1);

  return (
    <ThemeProvider theme={theme}>
      <Root nav={nav}>
        <Navigation>
          <NavigationBufferLeft nav={nav} />
          <AboutLink onClick={() => setNav(0)} active={nav === 0}>
            About
          </AboutLink>
          <ProjectsLink onClick={() => setNav(1)} active={nav === 1}>
            Projects
          </ProjectsLink>
          <ContactLink onClick={() => setNav(2)} active={nav === 2}>
            Contact
          </ContactLink>
          <NavigationBufferRight nav={nav} />
        </Navigation>
      </Root>
    </ThemeProvider>
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
    #e1ebfa 0 calc(50% + 10px),
    ${({ theme }) => theme.surface.react} calc(50%) calc(50%),
    ${({ theme }) => theme.surface.react} calc(50% - 10px) 100%
  );
  background-size: 275% 100%;
  background-position: ${({ nav }) => (nav ? "0% 50%" : "100% 50%")};

  transition: 0.75s all;
`;

const Navigation = styled.div`
  height: 8rem;
  display: flex;
  justify-content: center;
`;

const NavigationBufferLeft = styled.div`
  flex-grow: ${({ nav }) => 3.5 - nav};
  transition: 0.75s all;
`;

const NavigationBufferRight = styled.div`
  flex-grow: ${({ nav }) => 1.5 + nav * 1.2};
  transition: 0.75s all;
`;

const NavLink = styled.p`
  font-size: ${({ active }) => (active ? "5rem" : "4rem")};
  cursor: pointer;
  margin-top: auto;
  margin-left: 1rem;
  margin-right: 1rem;

  transition: 0.75s all;
`;

const ProjectsLink = styled(NavLink)`
  background-image: linear-gradient(
    -45deg,
    ${({ theme }) => theme.surface.react} 0 calc(50% + 10px),
    ${({ theme }) => theme.surface.react} calc(50%) calc(50%),
    ${({ theme }) => theme.color.react} calc(50% - 10px) 100%
  );
  background-size: 275% 100%;
  background-position: ${({ active }) => (active ? "0% 50%" : "100% 50%")};

  &:hover {
    background-position: ${({ active }) => !active && "0% 50%"};
  }

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
  -ms-background-clip: text;
  -ms-text-fill-color: transparent;
  -o-background-clip: text;
  -o-text-fill-color: transparent;
`;
// #10a8c8
// #cc9933 // goldenrod
// #976b00 // dark goldenrod

const AboutLink = styled(NavLink)`
  background-image: linear-gradient(
    -45deg,
    #cc9933 0 calc(50% + 10px),
    #d3d3d3 calc(50%) calc(50%),
    #d3d3d3 calc(50% - 10px) 100%
  );
  background-size: 275% 100%;
  background-position: ${({ active }) => (active ? "100% 50%" : "0% 50%")};

  &:hover {
    background-position: ${({ active }) => !active && "100% 50%"};
  }

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
  -ms-background-clip: text;
  -ms-text-fill-color: transparent;
  -o-background-clip: text;
  -o-text-fill-color: transparent;
`;

const ContactLink = styled(NavLink)`
  background-image: linear-gradient(
    -45deg,
    #cc9933 0 calc(50% + 10px),
    #d3d3d3 calc(50%) calc(50%),
    #d3d3d3 calc(50% - 10px) 100%
  );
  background-size: 275% 100%;
  background-position: ${({ active }) => (active ? "100% 50%" : "0% 50%")};

  &:hover {
    background-position: ${({ active }) => !active && "100% 50%"};
  }

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
  -ms-background-clip: text;
  -ms-text-fill-color: transparent;
  -o-background-clip: text;
  -o-text-fill-color: transparent;
`;
