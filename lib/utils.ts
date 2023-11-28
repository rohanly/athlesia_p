import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import axios from "axios";

//CLOUDINARY API FOR UPLOADING IMAGES TO CLOUD
const CLOUD_API = "https://api.cloudinary.com/v1_1/dlaahua4u/image/upload";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const upload = async (file: any) => {
  const data = new FormData();
  data.append("file", file);
  data.append("upload_preset", "athlesia24");

  try {
    const res = await axios.post(CLOUD_API, data);

    const { url } = res.data;
    return url;
  } catch (err) {
    console.log("CLOUDINARY_ERROR", err);
  }
};
