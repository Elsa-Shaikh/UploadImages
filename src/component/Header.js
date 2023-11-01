import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Box sx={{ marginTop: "50px", padding: "10px" }}>
        <Stack
          spacing={4}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          flexDirection={"column"}
        >
          <Typography variant="h4" fontWeight={"bold"} fontFamily={"cursive"}>
            Upload Images Using MERN and PERN Stack
          </Typography>
          <Button
            variant="contained"
            color="info"
            size="large"
            sx={{ width: "200px", fontFamily: "cursive" }}
          >
            <NavLink
              to={"/adduser"}
              style={{ textDecoration: "none", color: "white" }}
            >
              Add User
            </NavLink>
          </Button>
        </Stack>
      </Box>
    </>
  );
};

export default Header;
