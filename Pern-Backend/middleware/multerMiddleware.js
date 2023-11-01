// Example multer configuration
const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "./uploads"); // Adjust the destination folder as needed
  },
  filename: (req, file, callback) => {
    callback(null, `image-${Date.now()}.${file.originalname}`);
  },
});

const fileFilter = (req, file, callback) => {
  if (file.mimetype.startsWith("image")) {
    callback(null, true);
  } else {
    callback(new Error("Only Image is Allowed!"));
  }
};

const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
});

module.exports = upload;

// const multer = require('multer');

// //image storage path
// const imgconfig = multer.diskStorage({
//     destination:(req,file,callback)=>{
//         callback(null,'./uploads')
//     },
//     filename:(req,file,callback)=>{
//         callback(null,`image-${Date.now()}.${file.originalname}`);
//     }
// })
// // image filter
// const isImage = (req,file,callback)=>{
//     if(file.mimetype.startsWith('image')){
//         callback(null,true)
//     }else{
//         callback(new Error("Only Image is Allowed!"))
//     }
// }

// const upload = multer({
//     storage:imgconfig,
//     fileFilter:isImage
// })

// module.exports = upload;
