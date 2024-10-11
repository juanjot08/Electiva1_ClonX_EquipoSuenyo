export function getPosts() {
  return MockPostData;
}

export function getPostsByUser(userName) {
  return MockPostData.filter(x => x.authorUser.replace("@", "") == userName);
}

const MockPostData = [
  {
    userAvatar: "https://random-image-pepebigotes.vercel.app/api/random-image",
    authorName: "Elon Musk",
    authorUser: "elonmusk",
    time: "7h",
    content:
      "Mind-blowing that the Democratic Party is massively outspending...",
    media: {
      image: null,
      video: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"
    },
    likes: "7k",
    comments: "24k",
    shares: "109k",
  },
  {
    userAvatar: "https://random-image-pepebigotes.vercel.app/api/swag-wallpaper",
    authorName: "Cristiano Ronaldo",
    authorUser: "elBicho",
    time: "15h",
    content: "Hard work pays off. Let's keep going!",
    media: {
      image: "https://picsum.photos/800",
      video: null
    },
    likes: "6k",
    comments: "20k",
    shares: "47M",
  },
  {
    userAvatar: "https://random-image-pepebigotes.vercel.app/api/swag-wallpaper",
    authorName: "Sebastian Hernandez",
    authorUser: "elCocaColo",
    time: "15h",
    content: "Hard work pays off. Let's keep going!",
    media: {
      image: "https://random-image-pepebigotes.vercel.app/api/skeleton-random-image",
      video: null
    },    
    likes: "6k",
    comments: "24k",
    shares: "47M",
  },
  {
    userAvatar: "https://random-image-pepebigotes.vercel.app/api/swag-wallpaper",
    authorName: "Juan Tellez",
    authorUser: "Juancho2Jose",
    time: "15h",
    content: "Hard work pays off. Let's keep going!",
    media: {
      image: "https://random-image-pepebigotes.vercel.app/api/skeleton-random-image",
      video: null
    },
    likes: "6k",
    comments: "24k",
    shares: "47M",
  }
];
