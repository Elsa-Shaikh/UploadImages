import { Box, CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";
import Header from "./Header";
import ShowImage from "./ShowImage";
import { getUserApi, deleteUserApi } from "../utils/handleApis";

const Home = () => {
  const [data, setData] = useState([]);

  const getUserData = async () => {
    try {
      const getUserData = await getUserApi();
      setData(getUserData?.data?.getUser);
      console.log(getUserData);
    } catch (error) {
      console.log("Failed to Fetch User Data!");
    }
  };

  // eslint-disable-next-line
  const handleDelete = async (id) => {
    try {
      await deleteUserApi(id);
    } catch (error) {
      console.log("Failed to Delete User Data!");
    }
  };

  useEffect(() => {
    getUserData();
  }, [handleDelete]);

  return (
    <>
      <Header />
      <Box
        sx={{
          padding: "20px",
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {data?.length > 0 ? (
          data?.map((el, i) => {
            return (
              <>
                <ShowImage
                  // key={el?._id} // for Mongodb
                  key={el?.id} // for PostgreSQL
                  userData={el}
                  handleDelete={handleDelete}
                />
              </>
            );
          })
        ) : (
          <CircularProgress />
        )}
      </Box>
    </>
  );
};

export default Home;
