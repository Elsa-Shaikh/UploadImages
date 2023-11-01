const moment = require("moment");
const prisma = require("../prisma/index");

exports.addUser = async (req, res) => {
  try {
    const { filename } = req.file;
    const { username } = req.body;

    if (!username || !filename) {
      return res
        .status(400)
        .json({ success: false, message: "Fill all fields!" });
    }

    const date = moment(new Date()).toISOString();

    const finalData = await prisma.user.create({
      data: {
        username,
        imagePath: filename,
        date,
      },
    });

    return res
      .status(200)
      .json({ success: true, finalData, message: "User Added Successfully!" });
  } catch (error) {
    console.error("Error in addUser:", error);
    return res
      .status(500)
      .json({ success: false, message: "Internal Server Error!" });
  }
};

exports.getUser = async (req, res) => {
  try {
    const getUser = await prisma.user.findMany();
    return res
      .status(200)
      .json({ success: true, getUser, message: "Get all Users!" });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Internal Server Error!" });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteUser = await prisma.user.delete({
      where: { id: parseInt(id) },
    });

    if (!deleteUser) {
      return res
        .status(404)
        .json({ success: false, message: "User not found!" });
    }

    return res
      .status(200)
      .json({ success: true, deleteUser, message: "User has been deleted!" });
  } catch (error) {
    console.error("Error in deleteUser:", error);
    return res
      .status(500)
      .json({ success: false, message: "Internal Server Error!" });
  }
};
