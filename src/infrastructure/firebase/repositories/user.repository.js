import {
  setDoc,
  doc,
  getDoc,
  collection,
  query,
  where,
  getDocs,
  updateDoc,
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

export const getUsersByName = async (userName) => {
  try {
    // Convertir el nombre de usuario en minúsculas para hacer la búsqueda insensible a mayúsculas
    const userNameLowerCase = userName.toLowerCase();

    // Definir el prefijo siguiente para hacer el filtro de rango
    const endUserName = userNameLowerCase.replace(/.$/, c => String.fromCharCode(c.charCodeAt(0) + 1));

    const usersRef = collection(db, collections.users);
    const usersQuery = query(
      usersRef,
      where('userName', '>=', userNameLowerCase),
      where('userName', '<', endUserName)
    );

    const querySnapshot = await getDocs(usersQuery);

    const users = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

    return users;
  } catch (error) {
    console.error("Error getting users by name: ", error);
    return [];
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

export const getFollowers = async (userName) => {
  try {
    const user = await getUserByUserName(userName);

    const followersRef = collection(
      doc(db, collections.users, user.id),
      collections.followers
    );

    const followersSnapshot = await getDocs(followersRef);

    const followers = followersSnapshot.docs.map((doc) => ({
      id: doc.id,
    }));

    return followers;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getFollowing = async (userName) => {
  try {
    const user = await getUserByUserName(userName);

    const followingRef = collection(
      doc(db, collections.users, user.id),
      collections.following
    );

    const followingSnapshot = await getDocs(followingRef);

    const following = followingSnapshot.docs.map((doc) => ({
      id: doc.id,
    }));

    return following;
  } catch (error) {
    console.error(error);
    return [];
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
    const followingRef = doc(db, "users", followerid, "following", followingid);

    const followingDoc = await getDoc(followingRef);

    return followingDoc.exists();
  } catch (error) {
    console.error("Error al verificar si el usuario sigue a otro:", error);
    return false;
  }
};
