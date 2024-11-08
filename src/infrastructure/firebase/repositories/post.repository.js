import {
  collection,
  query,
  where,
  getDocs,
  orderBy,
  limit,
  Timestamp,
  addDoc,
} from "firebase/firestore";
import { collections, db } from "../config";

export const createPost = async (post) => {
  try {
    const postsRef = collection(db, collections.posts);
    const newPost = {
      userId: post.userId,
      content: post.content,
      publishDate: Timestamp.fromDate(post.publishDate),
    };

    const docRef = await addDoc(postsRef, newPost);

    console.log("Post created with ID: ", docRef.id);
    return { id: docRef.id, ...newPost };
  } catch (error) {
    console.error("Error creating post: ", error);
    return null;
  }
};

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

export const getLastPosts = async (userId) => {
  try {
    const followingRef = collection(
      db,
      collections.users,
      userId,
      collections.following
    );
    
    const followingSnapshot = await getDocs(followingRef);

    const followingIds = followingSnapshot.docs.map((doc) => doc.id);

    const postsRef = collection(db, collections.posts);

    let postsQuery = query(
      postsRef,
      where("userId", "in", [userId, ...followingIds]),
      orderBy("publishDate", "desc"),
      limit(10)
    );

    const querySnapshot = await getDocs(postsQuery);

    const posts = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return posts;
  } catch (error) {
    console.error("Error getting posts: ", error);
    return [];
  }
};
