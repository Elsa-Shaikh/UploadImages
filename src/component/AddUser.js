import {
  Box,
  Button,
  Container,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { addUserApi } from "../utils/handleApis";

const AddUser = () => {
  const [username, setUsername] = useState("");
  const [file, setFile] = useState("");
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { value } = e.target;
    setUsername(value);
  };
  const handleFile = (e) => {
    setFile(e.target.files[0]);
  };

  const addUserData = async (e) => {
    e.preventDefault();
    try {
      await addUserApi(file, username);
      navigate("/");
    } catch (error) {
      console.log("Failed to Add!");
    }
  };

  return (
    <>
      <Box sx={{ marginTop: "2rem", padding: "2rem" }}>
        <Container sx={{ width: "40%" }}>
          <Form enctype="multipart/form-data">
            <Paper sx={{ padding: "2rem", border: "1px solid grey" }}>
              <Stack spacing={3} direction={"column"}>
                <Typography
                  variant="h4"
                  fontFamily={"cursive"}
                  fontWeight={"bold"}
                  textAlign={"center"}
                >
                  Add User
                </Typography>
                <TextField
                  required
                  value={username}
                  name="username"
                  id="outlined-required"
                  label="Username"
                  placeholder="Please Enter Username"
                  onChange={handleChange}
                />
                <Form.Group>
                  <Form.Label>Select Your Profile Image</Form.Label>
                  <Form.Control
                    type="file"
                    placeholder=""
                    name="photo"
                    onChange={handleFile}
                  />
                </Form.Group>

                <Button
                  variant="contained"
                  sx={{ width: "200px", fontFamily: "cursive" }}
                  color="info"
                  onClick={addUserData}
                >
                  Add User
                </Button>
              </Stack>
            </Paper>
          </Form>
        </Container>
      </Box>
    </>
  );
};

export default AddUser;
