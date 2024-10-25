export function getUserInformation(userName) {
    return MockUsers.find(x => x.userName == userName);    
}

const MockUsers = [
  {
    userName: "Juancho2Jose",
    name: "Juan Tellez",
    profilePhoto: "https://random-image-pepebigotes.vercel.app/api/swag-wallpaper",
    coverImage: "https://pbs.twimg.com/media/EKj8mjtXkAABpWb?format=jpg&name=medium",
    registerDate: {
        year: 2014,
        month: "junio",
        day: 2
    },
    postCounter: 3,
    following: [{
        image: "https://pbs.twimg.com/profile_images/922591144290258945/RoUp8opd_400x400.jpg",
        userName: "eso",
        userTag: "@ConQueso",
        isFollowing: true,
        isFollowed: true
    }],
    followers: [{
        image: "https://pbs.twimg.com/profile_images/922591144290258945/RoUp8opd_400x400.jpg",
        userName: "otro",
        userTag: "@ConQueso",
        isFollowing: false,
        isFollowed: false
    }]
  },
  {
    userName: "elBicho",
    name: "Cristiano Ronaldo",
    profilePhoto: "https://random-image-pepebigotes.vercel.app/api/swag-wallpaper",
    coverImage: "https://pbs.twimg.com/media/EKj8mjtXkAABpWb?format=jpg&name=medium",
    registerDate: {
        year: 2014,
        month: "junio",
        day: 2
    },
    postCounter: 3,
    following: [{
        image: "https://pbs.twimg.com/profile_images/922591144290258945/RoUp8opd_400x400.jpg",
        userName: "eso",
        userTag: "@ConQueso",
        isFollowing: true,
        isFollowed: true
    }],
    followers: [{
        image: "https://pbs.twimg.com/profile_images/922591144290258945/RoUp8opd_400x400.jpg",
        userName: "otro",
        userTag: "@ConQueso",
        isFollowing: false,
        isFollowed: false
    }]
  },
];
