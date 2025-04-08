import React from "react";
import { Box, Container, IconButton, Link } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        mt: "auto",
        backgroundColor: "secondary.main",
        position: "sticky",
        bottom: 0,
        width: "100%",
        borderTop: "2px solid",
        borderColor: "primary.main",
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <IconButton
            component={Link}
            href="https://www.linkedin.com/in/rikard-engstr%C3%B6m-171724253/"
            target="_blank"
            rel="noopener"
            color="primary"
            aria-label="LinkedIn"
            sx={{
              "&:hover": {
                backgroundColor: "action.hover",
              },
              mx: 3,
            }}
          >
            <LinkedInIcon fontSize="large" />
          </IconButton>
          <IconButton
            component={Link}
            href="https://github.com/Nishune"
            target="_blank"
            rel="noopener"
            color="primary"
            aria-label="GitHub"
            sx={{
              "&:hover": {
                backgroundColor: "action.hover",
              },
              mx: 3,
            }}
          >
            <GitHubIcon fontSize="large" />
          </IconButton>
          <IconButton
            component={Link}
            href="mailto:rikardengstrom89@gmail.com"
            color="primary"
            aria-label="Email"
            sx={{
              "&:hover": {
                backgroundColor: "action.hover",
              },
              mx: 3,
            }}
          >
            <EmailIcon fontSize="large" />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
