import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: "dngwcdvek",
  api_key: "999448992553344",
  api_secret: "AA-Wej68UkTMDZJR7nVl2NQUat4",
});

export const uploadCloud = async (path) => {
  try {
    const result = await cloudinary.uploader.upload(path);
    return result;
    c
  } catch (error) {
    console.log(error.message);
  }
};
