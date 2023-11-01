import axios from "axios";

const host = "http://localhost:5000/api";

const config = {
  headers: {
    "Content-Type": "multipart/form-data",
  },
};

export const addUserApi = async (file, username) => {
  try {
    let formData = new FormData();
    formData.append("photo", file);
    formData.append("username", username);

    const response = await axios.post(`${host}/adduser`, formData, config);
    return response;
  } catch (error) {
    console.log("Error While adding user through api!", error);
  }
};

export const getUserApi = async () => {
  try {
    const response = await axios.get(`${host}/getuser`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response;
  } catch (error) {
    console.log("Error While fetching user data through api!", error);
  }
};

export const deleteUserApi = async (id) => {
  try {
    const response = await axios.delete(`${host}/deleteuser/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response;
  } catch (error) {
    console.log("Error While deleting user data through api!", error);
  }
};
