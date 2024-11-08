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
  deleteDoc,
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
      coverImage:
        "https://firebasestorage.googleapis.com/v0/b/clon-x-electiva.firebasestorage.app/o/defaultCover.png?alt=media&token=f661103a-4d6d-4c3f-951d-82686cec9bb3",
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
  try {
    const user = await getUserByUserName(userName);

    const followingRef = collection(
      doc(db, collections.users, user.id),
      collections.following
    );
    const followersRef = collection(
      doc(db, collections.users, user.id),
      collections.followers
    );

    const followingSnapshot = await getDocs(followingRef);
    const followersSnapshot = await getDocs(followersRef);

    const followingCount = followingSnapshot.size;
    const followersCount = followersSnapshot.size;

    return {
      followersCount,
      followingCount,
    };
  } catch (error) {
    console.error(
      "Error al obtener los contadores de seguidores y seguidos:",
      error
    );
    return {
      followersCount: 0,
      followingCount: 0,
    };
  }
};

export const updateUserProfilePhoto = async (id, profilePhotoUrl) => {
  const userRef = doc(db, "users", id);

  await updateDoc(userRef, {
    profilePhoto: profilePhotoUrl,
  });
};

export const followUser = async (followerid, followingid) => {
  try {
    const followingRef = doc(
      db,
      collections.users,
      followerid,
      collections.following,
      followingid
    );
    await setDoc(followingRef, { id: followingid });

    const followerRef = doc(
      db,
      collections.users,
      followingid,
      collections.followers,
      followerid
    );
    await setDoc(followerRef, { id: followerid });

    console.log(`${followerid} ahora sigue a ${followingid}`);
  } catch (error) {
    console.error("Error al seguir al usuario:", error);
  }
};

export const unfollowUser = async (followerId, followingId) => {
  try {
    const followingRef = doc(
      db,
      collections.users,
      followerId,
      collections.following,
      followingId
    );
    await deleteDoc(followingRef);

    const followerRef = doc(
      db,
      collections.users,
      followingId,
      collections.followers,
      followerId
    );
    await deleteDoc(followerRef);

    console.log(`${followerId} ha dejado de seguir a ${followingId}`);
  } catch (error) {
    console.error("Error al dejar de seguir al usuario:", error);
  }
};

export const isFollowingUser = async (followerid, followingid) => {
  try {
    const currentUserRef = doc(db, "users", followerid);

    const currentUserDoc = await getDoc(currentUserRef);

    if (currentUserDoc.exists()) {
      const currentUserData = currentUserDoc.data();

      return currentUserData.following.includes(followingid);
    } else {
      console.warn("El usuario autenticado no existe en la base de datos");
      return false;
    }
  } catch (error) {
    console.error("Error al verificar si el usuario sigue a otro:", error);
    return false;
  }
};
