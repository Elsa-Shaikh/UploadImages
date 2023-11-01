import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import moment from "moment";
import React from "react";

const ShowImage = ({ userData, handleDelete }) => {
  return (
    <>
      <Card
        sx={{
          border: "1px solid grey",
          maxWidth: 345,
          margin: "20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "10px",
          flexDirection: "column",
        }}
      >
        <CardMedia
          sx={{
            border: "1px solid black",
            height: 140,
            borderRadius: "50%",
            width: 140,
            marginTop: "5px",
          }}
          image={`http://localhost:5000/uploads/${userData?.imagePath}`}
          title="User Profile Picture"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            textAlign={"center"}
          >
            Username: {userData?.username}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            textAlign={"center"}
          >
            Date Added: {moment(userData?.date).format("L")}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            variant="contained"
            color="error"
            // onClick={() => handleDelete(userData._id)} //For Mongodb
            onClick={() => handleDelete(userData.id)} //For PostgreSQL
          >
            Delete
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default ShowImage;
