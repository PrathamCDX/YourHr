import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./my-uploads");
  },
  filename: function (req, file, cb) {
    // console.log(req);
    // console.log("multer: ", file);
    const uniqueSuffix =
      Date.now().toString().replace(/:/g, "-") +
      "-" +
      Math.round(Math.random() * 1e9);
    cb(
      null,
      file.fieldname +
        "-" +
        uniqueSuffix +
        "ok" +
        path.extname(file.originalname)
    );
  },
});

export const upload = multer({ storage: storage });
