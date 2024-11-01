import {
  setDoc,
  doc,
  getDoc,
  collection,
  query,
  where,
  getDocs,
  updateDoc,
  Timestamp,
  addDoc,
} from "firebase/firestore";
import { collections, db } from "../config";

export const createUser = async (
  id,
  userName,
  name,
  profilePhoto,
  registerDate
) => {
  try {
    const userRef = doc(db, collections.users, id);
    await setDoc(userRef, {
      id,
      userName,
      name,
      profilePhoto,
      following: [],
      followers: [],
      coverImage: "",
      registerDate,
    });
  } catch (ex) {
    console.error("Error creating user:", ex);
  }
};

export const createPost = async (post) => {
  try {
    const postsRef = collection(db, collections.posts);
    const newPost = {
      userId: post.userId,
      content: post.content,
      publishDate: Timestamp.fromDate(new Date(post.publishDate)),
    };

    const docRef = await addDoc(postsRef, newPost);

    console.log("Post created with ID: ", docRef.id);
    return { id: docRef.id, ...newPost };
  } catch (error) {
    console.error("Error creating post: ", error);
    return null;
  }
};

export const getUserById = async (id) => {
  const userRef = doc(db, collections.users, id);
  const userSnap = await getDoc(userRef);
  if (userSnap.exists()) {
    return { id: userSnap.id, ...userSnap.data() };
  } else {
    console.error("No user found with the given ID");
    return null;
  }
};

export const getUserByUserName = async (userName) => {
  try {
    const usersRef = collection(db, collections.users);
    const q = query(usersRef, where("userName", "==", userName));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      return { id: querySnapshot.docs[0].id, ...querySnapshot.docs[0].data() };
    } else {
      console.warn("No user found with the given userName");
      return null;
    }
  } catch (error) {
    console.error("Error fetching user by userName:", error);
    return null;
  }
};

export const getFollowCounters = async (userName) => {
  const user = await getUserByUserName(userName);

  return {
    followersCount: user.followers.length,
    followingCount: user.following.length,
  };
};

export const updateUserProfilePhoto = async (id, profilePhotoUrl) => {
  const userRef = doc(db, "users", id);

  await updateDoc(userRef, {
    profilePhoto: profilePhotoUrl,
  });
};
