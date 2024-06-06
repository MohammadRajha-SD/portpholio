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
  MobileLink,
} from "./NavbarStyledComponent";
import { DiCssdeck } from "react-icons/di";
import { FaBars } from "react-icons/fa";
import { useTheme } from "styled-components";
import IdDataService from "../../services/id.services.js";
import Scrollspy from "react-scrollspy";

const Navbar = ({ setDarkMode, darkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [id, setID] = useState([]);
  const [_, setActiveSection] = useState("home"); // Initialize with the default active section
  const sections = [
    "home",
    "about",
    "skills",
    "education",
    "experience",
    "projects",
    "contact",
  ]; // Add "home" section
  const theme = useTheme();

  useEffect(() => {
    getId();
    window.addEventListener("scroll", handleScroll); // Add event listener for scroll
    return () => {
      window.removeEventListener("scroll", handleScroll); // Clean up the event listener on component unmount
    };
  }, []);

  const getId = async () => {
    const data = await IdDataService.getId("9zTQCvCWrx6otBDageNy");
    setID(data.data());
  };

  const handleScroll = () => {
    const scrollPosition = window.scrollY;

    // Calculate the section offsets
    const sectionOffsets = sections.map(
      (section) => document.getElementById(section).offsetTop
    );

    // Find the index of the section that is currently scrolled into view
    let activeIndex = 0;
    for (let i = sectionOffsets.length - 1; i >= 0; i--) {
      if (scrollPosition >= sectionOffsets[i] - 200) {
        activeIndex = i;
        break;
      }
    }

    // Update the active section
    setActiveSection(sections[activeIndex]);
  };

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
              marginBottom: "20px",
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
              setIsOpen(!isOpen);
            }}
          />
        </MobileIcon>
        <Scrollspy
          items={sections}
          currentClassName="active"
          offset={-100}
          componentTag={NavItems}
        >
          <NavLink href="#home">Home</NavLink>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#education">Education</NavLink>
          <NavLink href="#experience">Experience</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </Scrollspy>
        <ButtonContainer>
          <GitHubButton href={id.github} target="_blank">
            Github Profile
          </GitHubButton>
        </ButtonContainer>
        {isOpen && (
          <MobileMenu isopen={isOpen} style={{ width: "100%" }}>
            <MobileLink
              href="#home"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Home
            </MobileLink>
            <MobileLink
              href="#about"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              About
            </MobileLink>
            <MobileLink
              href="#skills"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Skills
            </MobileLink>
            <MobileLink
              href="#education"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Education
            </MobileLink>
            <MobileLink
              href="#experience"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Experience
            </MobileLink>

            <MobileLink
              href="#projects"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Projects
            </MobileLink>
            <MobileLink
              href="#contact"
              onClick={() => {
                setIsOpen(!isOpen);
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
