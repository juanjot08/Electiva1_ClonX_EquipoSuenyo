import {
  collection,
  query,
  where,
  getDocs,
  orderBy,
  limit,
} from "firebase/firestore";
import { collections, db } from "../config";


export const getPostsByUserId = async (userId) => {
  try {
    const postsRef = collection(db, collections.posts);
    const q = query(postsRef, where("userId", "==", userId));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      // Itera sobre los documentos y extrae sus datos junto con sus IDs
      return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    } else {
      console.warn("No posts found for the given userId");
      return [];
    }
  } catch (error) {
    console.error("Error fetching posts by userId:", error);
    return [];
  }
};

export const getLastPosts = async () => {
  try {
      const postsRef = collection(db, collections.posts);
      const postsQuery = query(postsRef, orderBy('publishDate', 'desc'), limit(10)); 
      const querySnapshot = await getDocs(postsQuery);

      const posts = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
      }));

      return posts;
  } catch (error) {
      console.error("Error getting posts: ", error);
      return [];
  }
};