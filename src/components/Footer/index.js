import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import IdDataService from "../../services/id.services.js";

import {
  FooterContainer,
  FooterWrapper,
  Logo,
  Nav,
  NavLink,
  SocialMediaIcons,
  SocialMediaIcon,
  Copyright,
} from "./StyledFooter.js";
import { useEffect, useState } from "react";

function Footer() {
  const [id, setID] = useState([]);
  useEffect(() => {
    getId();
  }, []);

  const getId = async () => {
    const data = await IdDataService.getId("9zTQCvCWrx6otBDageNy");
    setID(data.data());
  };
  return (
    <FooterContainer>
      <FooterWrapper>
        <Logo>{id.name}</Logo>
        <Nav>
          <NavLink href="/">Home</NavLink>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </Nav>
        <SocialMediaIcons>
          <SocialMediaIcon href={id.facebook} target="display">
            <FacebookIcon />
          </SocialMediaIcon>
          <SocialMediaIcon href={id.twitter} target="display">
            <TwitterIcon />
          </SocialMediaIcon>
          <SocialMediaIcon href={id.linkedin} target="display">
            <LinkedInIcon />
          </SocialMediaIcon>
          <SocialMediaIcon href={id.insta} target="display">
            <InstagramIcon />
          </SocialMediaIcon>
          <SocialMediaIcon href={id.whats} target="display">
            <WhatsAppIcon />
          </SocialMediaIcon>
        </SocialMediaIcons>
        <Copyright>&copy; 2023 {id.name}. All rights reserved.</Copyright>
      </FooterWrapper>
    </FooterContainer>
  );
}

export default Footer;
