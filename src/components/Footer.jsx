import * as React from "react";
import {
  Paper,
  Container,
  Typography,
  Box,
  Link,
  IconButton,
} from "@mui/material";
// import { NavLink } from "react-router-dom";
import InstagramIcon from "@mui/icons-material/Instagram";
// import TelegramIcon from "@mui/icons-material/Telegram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TwitterIcon from "@mui/icons-material/Twitter";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import GitHubIcon from "@mui/icons-material/GitHub";
// import logo from "../assets/icons/logo.svg";

export default function Footer() {
  return (
    <Paper
      sx={{ left: 0, bottom: 0, right: 0, width: "100%" }}
      component="footer"
      square
      variant="outlined"
    >
      <Container maxWidth="lg" sx={{ maxHeight: 120 }}>
        <Box
          sx={{
            flexGrow: 1,
            justifyContent: "center",
            display: "flex",
            my: 1,
          }}
        ></Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            m: 2,
          }}
          >
          <Link target="_blank" href="https://github.com/sovetbekoff/fullstack">
            <InstagramIcon sx={{ mr: 7, color:"gray", }} />
        
          </Link>
          {/* <Link target="_blank" href="https://github.com/sovetbekoff/fullstack">
            <TelegramIcon sx={{ mr: 7, color: "#8C2CEF" }} />
          </Link> */}
          <Link target="_blank" href="https://github.com/sovetbekoff/fullstack">
            <WhatsAppIcon sx={{ mr: 7, color: "gray" }} />
          </Link>
          <Link
            target="_blank"
            href="https://github.com/badoalmaz/project_with_mentor_java_post_scriptum"
          >
            <TwitterIcon sx={{ mr: 7, color: "gray" }} />
          </Link>
          <Link
            target="_blank"
            href="https://github.com/badoalmaz/project_with_mentor_java_post_scriptum"
          >
            <MailOutlineIcon sx={{ mr: 7, color: "gray" }} />
          </Link>
          
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            justifyContent: "center",
            display: "flex",
            mb: 2,
          }}
        >
          <Typography variant="caption" color="#8C2CEF">
            Copyright ©2022.
          </Typography>
        </Box>
      </Container>
    </Paper>
  );
}
