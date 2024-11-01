import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytes,
} from "firebase/storage";
import { storage } from "../config";

export async function uploadFiles(file, route, name) {
  const storageRef = ref(storage, route + "/" + name);

  await uploadBytes(storageRef, file);
  
  const url = await getDownloadURL(storageRef);
  
  return url;
}

export async function getUrl(name, route) {
  const storageRef = ref(storage, route + "/" + name);

  const url = await getDownloadURL(storageRef);
  
  return url;
}

export async function deleteImg(name) {
  const desertRef = ref(storage, "images/" + name);

  deleteObject(desertRef)
    .then(() => {
      console.log("se borró la imagen");
    })
    .catch((error) => {
      console.log("no se borró por: ", error);
    });
}
