import React, { useEffect, useState } from "react";
import {
  Nav,
  NavLink,
  NavbarContainer,
  Span,
  NavLogo,
  NavItems,
  GitHubButton,
  ButtonContainer,
  MobileIcon,
  MobileMenu,
  // MobileNavLogo,
  MobileLink,
} from "./NavbarStyledComponent";
import { DiCssdeck } from "react-icons/di";
import { FaBars } from "react-icons/fa";
import { useTheme } from "styled-components";
import IdDataService from "../../services/id.services.js";
import { FaSun, FaMoon } from "react-icons/fa";
const Navbar = ({ setDarkMode, darkMode }) => {
  const [isopen, setIsOpen] = useState(false);
  const [id, setID] = useState([]);
  useEffect(() => {
    getId();
  }, []);

  const getId = async () => {
    const data = await IdDataService.getId("9zTQCvCWrx6otBDageNy");
    setID(data.data());
  };
  const theme = useTheme();
  const handleClickMode = () => {
    // setDarkMode(!darkMode);
  };

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="/">
          <a
            style={{
              display: "flex",
              alignItems: "center",
              color: "white",
              marginBottom: "20",
              cursor: "pointer",
            }}
            href="/"
          >
            <DiCssdeck size="3rem" /> <Span>Portfolio</Span>
          </a>
        </NavLogo>
        <MobileIcon>
          <FaBars
            onClick={() => {
              setIsOpen(!isopen);
            }}
          />
        </MobileIcon>
        <NavItems>
          <NavLink href="#about">Home</NavLink>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          {/* <NavLink href="#experience">Experience</NavLink> */}
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </NavItems>
        {/* <ButtonContainer>
          <GitHubButton onClick={handleClickMode}>
            <FaSun />
          </GitHubButton>
        </ButtonContainer>  */}
        <ButtonContainer>
          <GitHubButton href={id.github} target="_blank">
            Github Profile
          </GitHubButton>
        </ButtonContainer>
        {isopen && (
          <MobileMenu isopen={isopen}>
            <MobileLink
              href="#about"
              onClick={() => {
                setIsOpen(!isopen);
              }}
            >
              Home
            </MobileLink>
            <MobileLink
              href="#about"
              onClick={() => {
                setIsOpen(!isopen);
              }}
            >
              About
            </MobileLink>
            <MobileLink
              href="#skills"
              onClick={() => {
                setIsOpen(!isopen);
              }}
            >
              Skills
            </MobileLink>
            <MobileLink
              href="#projects"
              onClick={() => {
                setIsOpen(!isopen);
              }}
            >
              Projects
            </MobileLink>
            <MobileLink
              href="#contact"
              onClick={() => {
                setIsOpen(!isopen);
              }}
            >
              Contact
            </MobileLink>

            <GitHubButton
              style={{
                padding: "10px 16px",
                background: `${theme.primary}`,
                color: "white",
                width: "max-content",
              }}
              href={id.github}
              target="_blank"
            >
              Github Profile
            </GitHubButton>
          </MobileMenu>
        )}
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
