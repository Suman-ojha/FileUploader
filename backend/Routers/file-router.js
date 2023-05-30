const express = require("express");
const fileRouter = express.Router();
const multer=require('multer');
const { verifyToken } = require("../utils/jwt");
const { File } = require("../Models/File");
const path =require('path')

// Configure Multer for file uploads
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads');
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + '-' + file.originalname);
    },
  });
  const upload = multer({ storage });
  


// /api/files :
// TODO : return all the files
// TODO : return only files which are uploaded by logged in user
fileRouter.get("/", async (req, res) => {
    const files = await File.find();
    res.json({
      files,
    });
  });
//path L api/files/upload
// api/files/upload
fileRouter.post(
    "/upload",
    upload.any(),
    async (request, response) => {
    //   const userId = request.user._id;
   
     const userId=request.user._id
     console.log({userId});
      const files = request.files.map(
        ({ originalname, mimetype, filename, path, size }) => {
          return {
            user: userId,
            originalname,
            mimetype,
            filename,
            path,
            size,
          };
        }
      );
      File.create(files)
      .then((result) => {
        console.log(result)
        return response.json({ files: result });
      })
      .catch((error) => {
        return response.status(500).json(error);
      });

      
   
    }
  );
  
  //download the particular file 
  //url : api/files/:fileid
  fileRouter.get("/:fileid", async (request, response) => {
    try {
        const file = await File.findById(request.params.fileid);
        const filePath = path.join(process.cwd(), file.path);
        return response.download(filePath);
        
    } catch (error) {
        return response.status(501).json({error:error})
    }
  });
module.exports={
    fileRouter,
}