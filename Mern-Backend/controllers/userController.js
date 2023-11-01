const users = require("../model/usersSchema");
const moment = require("moment");

exports.addUser = async (req, res) => {
  const { filename } = req.file;
  const { username } = req.body;
  if (!username || !filename) {
    return res.status(401).json({ success: false, message: "Fill all field!" });
  }
  try {
    const date = moment(new Date()).format("YYYY-MM-DD");

    const userData = new users({
      username: username,
      imagePath: filename,
      date: date,
    });
    const finalData = await userData.save();
    return res
      .status(200)
      .json({ success: true, finalData, message: "User Added Succesfully!" });
  } catch (error) {
    return res
      .status(400)
      .json({ success: false, message: "Internal Server Error!" });
  }
};

exports.getUser = async (req, res) => {
  try {
    const getUser = await users.find();
    return res
      .status(200)
      .json({ success: true, getUser, message: "Get all Users!" });
  } catch (error) {
    return res
      .status(400)
      .json({ success: false, message: "Internal Server Error!" });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteUser = await users.findByIdAndDelete({ _id: id });
    return res
      .status(200)
      .json({ success: true, deleteUser, message: "User has been Deleted!" });
  } catch (error) {
    return res
      .status(400)
      .json({ success: false, message: "Internal Server Error!" });
  }
};
