import { API_URL, API_KEY } from "./config";

export const state = {
  search: {
    query: "",
    topResult: "",
    results: [],
  },
  watchlist: [],
};

/**
 * Data about movies to be rendered on page
 */
export const content = [
  {
    category: "action",
    title: "Action movies to you",
    movies: [
      {
        img: "https://lh3.googleusercontent.com/-fdgnbh0lRc0/AAAAAAAAAAI/AAAAAAAAAAA/AGvMrBvh0XfiRXO69nUa4-ETGq8bnAfoIA/photo.jpg?sz=46",
        url: "#",
      },
      {
        img: "https://lh3.googleusercontent.com/-fdgnbh0lRc0/AAAAAAAAAAI/AAAAAAAAAAA/AGvMrBvh0XfiRXO69nUa4-ETGq8bnAfoIA/photo.jpg?sz=46",
        url: "#",
      },
      {
        img: "https://lh3.googleusercontent.com/-fdgnbh0lRc0/AAAAAAAAAAI/AAAAAAAAAAA/AGvMrBvh0XfiRXO69nUa4-ETGq8bnAfoIA/photo.jpg?sz=46",
        url: "#",
      },
      {
        img: "https://lh3.googleusercontent.com/-fdgnbh0lRc0/AAAAAAAAAAI/AAAAAAAAAAA/AGvMrBvh0XfiRXO69nUa4-ETGq8bnAfoIA/photo.jpg?sz=46",
        url: "#",
      },
      {
        img: "https://lh3.googleusercontent.com/-fdgnbh0lRc0/AAAAAAAAAAI/AAAAAAAAAAA/AGvMrBvh0XfiRXO69nUa4-ETGq8bnAfoIA/photo.jpg?sz=46",
        url: "#",
      },
      {
        img: "https://lh3.googleusercontent.com/-fdgnbh0lRc0/AAAAAAAAAAI/AAAAAAAAAAA/AGvMrBvh0XfiRXO69nUa4-ETGq8bnAfoIA/photo.jpg?sz=46",
        url: "#",
      },
      {
        img: "https://lh3.googleusercontent.com/-fdgnbh0lRc0/AAAAAAAAAAI/AAAAAAAAAAA/AGvMrBvh0XfiRXO69nUa4-ETGq8bnAfoIA/photo.jpg?sz=46",
        url: "#",
      },
      {
        img: "https://lh3.googleusercontent.com/-fdgnbh0lRc0/AAAAAAAAAAI/AAAAAAAAAAA/AGvMrBvh0XfiRXO69nUa4-ETGq8bnAfoIA/photo.jpg?sz=46",
        url: "#",
      },
      {
        img: "https://lh3.googleusercontent.com/-fdgnbh0lRc0/AAAAAAAAAAI/AAAAAAAAAAA/AGvMrBvh0XfiRXO69nUa4-ETGq8bnAfoIA/photo.jpg?sz=46",
        url: "#",
      },
      {
        img: "https://lh3.googleusercontent.com/-fdgnbh0lRc0/AAAAAAAAAAI/AAAAAAAAAAA/AGvMrBvh0XfiRXO69nUa4-ETGq8bnAfoIA/photo.jpg?sz=46",
        url: "#",
      },
      {
        img: "https://lh3.googleusercontent.com/-fdgnbh0lRc0/AAAAAAAAAAI/AAAAAAAAAAA/AGvMrBvh0XfiRXO69nUa4-ETGq8bnAfoIA/photo.jpg?sz=46",
        url: "#",
      },
      {
        img: "https://lh3.googleusercontent.com/-fdgnbh0lRc0/AAAAAAAAAAI/AAAAAAAAAAA/AGvMrBvh0XfiRXO69nUa4-ETGq8bnAfoIA/photo.jpg?sz=46",
        url: "#",
      },
      {
        img: "https://lh3.googleusercontent.com/-fdgnbh0lRc0/AAAAAAAAAAI/AAAAAAAAAAA/AGvMrBvh0XfiRXO69nUa4-ETGq8bnAfoIA/photo.jpg?sz=46",
        url: "#",
      },
      {
        img: "https://lh3.googleusercontent.com/-fdgnbh0lRc0/AAAAAAAAAAI/AAAAAAAAAAA/AGvMrBvh0XfiRXO69nUa4-ETGq8bnAfoIA/photo.jpg?sz=46",
        url: "#",
      },
      {
        img: "https://lh3.googleusercontent.com/-fdgnbh0lRc0/AAAAAAAAAAI/AAAAAAAAAAA/AGvMrBvh0XfiRXO69nUa4-ETGq8bnAfoIA/photo.jpg?sz=46",
        url: "#",
      },
      {
        img: "https://lh3.googleusercontent.com/-fdgnbh0lRc0/AAAAAAAAAAI/AAAAAAAAAAA/AGvMrBvh0XfiRXO69nUa4-ETGq8bnAfoIA/photo.jpg?sz=46",
        url: "#",
      },
      {
        img: "https://lh3.googleusercontent.com/-fdgnbh0lRc0/AAAAAAAAAAI/AAAAAAAAAAA/AGvMrBvh0XfiRXO69nUa4-ETGq8bnAfoIA/photo.jpg?sz=46",
        url: "#",
      },
      {
        img: "https://lh3.googleusercontent.com/-fdgnbh0lRc0/AAAAAAAAAAI/AAAAAAAAAAA/AGvMrBvh0XfiRXO69nUa4-ETGq8bnAfoIA/photo.jpg?sz=46",
        url: "#",
      },
      {
        img: "https://lh3.googleusercontent.com/-fdgnbh0lRc0/AAAAAAAAAAI/AAAAAAAAAAA/AGvMrBvh0XfiRXO69nUa4-ETGq8bnAfoIA/photo.jpg?sz=46",
        url: "#",
      },
      {
        img: "https://lh3.googleusercontent.com/-fdgnbh0lRc0/AAAAAAAAAAI/AAAAAAAAAAA/AGvMrBvh0XfiRXO69nUa4-ETGq8bnAfoIA/photo.jpg?sz=46",
        url: "#",
      },
      {
        img: "https://lh3.googleusercontent.com/-fdgnbh0lRc0/AAAAAAAAAAI/AAAAAAAAAAA/AGvMrBvh0XfiRXO69nUa4-ETGq8bnAfoIA/photo.jpg?sz=46",
        url: "#",
      },
      {
        img: "https://lh3.googleusercontent.com/-fdgnbh0lRc0/AAAAAAAAAAI/AAAAAAAAAAA/AGvMrBvh0XfiRXO69nUa4-ETGq8bnAfoIA/photo.jpg?sz=46",
        url: "#",
      },
      {
        img: "https://lh3.googleusercontent.com/-fdgnbh0lRc0/AAAAAAAAAAI/AAAAAAAAAAA/AGvMrBvh0XfiRXO69nUa4-ETGq8bnAfoIA/photo.jpg?sz=46",
        url: "#",
      },
      {
        img: "https://lh3.googleusercontent.com/-fdgnbh0lRc0/AAAAAAAAAAI/AAAAAAAAAAA/AGvMrBvh0XfiRXO69nUa4-ETGq8bnAfoIA/photo.jpg?sz=46",
        url: "#",
      },
      {
        img: "https://lh3.googleusercontent.com/-fdgnbh0lRc0/AAAAAAAAAAI/AAAAAAAAAAA/AGvMrBvh0XfiRXO69nUa4-ETGq8bnAfoIA/photo.jpg?sz=46",
        url: "#",
      },
      {
        img: "https://lh3.googleusercontent.com/-fdgnbh0lRc0/AAAAAAAAAAI/AAAAAAAAAAA/AGvMrBvh0XfiRXO69nUa4-ETGq8bnAfoIA/photo.jpg?sz=46",
        url: "#",
      },
      {
        img: "https://lh3.googleusercontent.com/-fdgnbh0lRc0/AAAAAAAAAAI/AAAAAAAAAAA/AGvMrBvh0XfiRXO69nUa4-ETGq8bnAfoIA/photo.jpg?sz=46",
        url: "#",
      },
      {
        img: "https://lh3.googleusercontent.com/-fdgnbh0lRc0/AAAAAAAAAAI/AAAAAAAAAAA/AGvMrBvh0XfiRXO69nUa4-ETGq8bnAfoIA/photo.jpg?sz=46",
        url: "#",
      },
    ],
  },
  {
    category: "comedy",
    title: "Best comedy picks for you",
    movies: [
      {
        img: "https://lh3.googleusercontent.com/-fdgnbh0lRc0/AAAAAAAAAAI/AAAAAAAAAAA/AGvMrBvh0XfiRXO69nUa4-ETGq8bnAfoIA/photo.jpg?sz=46",
        url: "#",
      },
      {
        img: "https://lh3.googleusercontent.com/-fdgnbh0lRc0/AAAAAAAAAAI/AAAAAAAAAAA/AGvMrBvh0XfiRXO69nUa4-ETGq8bnAfoIA/photo.jpg?sz=46",
        url: "#",
      },
      {
        img: "https://lh3.googleusercontent.com/-fdgnbh0lRc0/AAAAAAAAAAI/AAAAAAAAAAA/AGvMrBvh0XfiRXO69nUa4-ETGq8bnAfoIA/photo.jpg?sz=46",
        url: "#",
      },
      {
        img: "https://lh3.googleusercontent.com/-fdgnbh0lRc0/AAAAAAAAAAI/AAAAAAAAAAA/AGvMrBvh0XfiRXO69nUa4-ETGq8bnAfoIA/photo.jpg?sz=46",
        url: "#",
      },
      {
        img: "https://lh3.googleusercontent.com/-fdgnbh0lRc0/AAAAAAAAAAI/AAAAAAAAAAA/AGvMrBvh0XfiRXO69nUa4-ETGq8bnAfoIA/photo.jpg?sz=46",
        url: "#",
      },
      {
        img: "https://lh3.googleusercontent.com/-fdgnbh0lRc0/AAAAAAAAAAI/AAAAAAAAAAA/AGvMrBvh0XfiRXO69nUa4-ETGq8bnAfoIA/photo.jpg?sz=46",
        url: "#",
      },
      {
        img: "https://lh3.googleusercontent.com/-fdgnbh0lRc0/AAAAAAAAAAI/AAAAAAAAAAA/AGvMrBvh0XfiRXO69nUa4-ETGq8bnAfoIA/photo.jpg?sz=46",
        url: "#",
      },
      {
        img: "https://lh3.googleusercontent.com/-fdgnbh0lRc0/AAAAAAAAAAI/AAAAAAAAAAA/AGvMrBvh0XfiRXO69nUa4-ETGq8bnAfoIA/photo.jpg?sz=46",
        url: "#",
      },
      {
        img: "https://lh3.googleusercontent.com/-fdgnbh0lRc0/AAAAAAAAAAI/AAAAAAAAAAA/AGvMrBvh0XfiRXO69nUa4-ETGq8bnAfoIA/photo.jpg?sz=46",
        url: "#",
      },
      {
        img: "https://lh3.googleusercontent.com/-fdgnbh0lRc0/AAAAAAAAAAI/AAAAAAAAAAA/AGvMrBvh0XfiRXO69nUa4-ETGq8bnAfoIA/photo.jpg?sz=46",
        url: "#",
      },
      {
        img: "https://lh3.googleusercontent.com/-fdgnbh0lRc0/AAAAAAAAAAI/AAAAAAAAAAA/AGvMrBvh0XfiRXO69nUa4-ETGq8bnAfoIA/photo.jpg?sz=46",
        url: "#",
      },
      {
        img: "https://lh3.googleusercontent.com/-fdgnbh0lRc0/AAAAAAAAAAI/AAAAAAAAAAA/AGvMrBvh0XfiRXO69nUa4-ETGq8bnAfoIA/photo.jpg?sz=46",
        url: "#",
      },
      {
        img: "https://lh3.googleusercontent.com/-fdgnbh0lRc0/AAAAAAAAAAI/AAAAAAAAAAA/AGvMrBvh0XfiRXO69nUa4-ETGq8bnAfoIA/photo.jpg?sz=46",
        url: "#",
      },
      {
        img: "https://lh3.googleusercontent.com/-fdgnbh0lRc0/AAAAAAAAAAI/AAAAAAAAAAA/AGvMrBvh0XfiRXO69nUa4-ETGq8bnAfoIA/photo.jpg?sz=46",
        url: "#",
      },
      {
        img: "https://lh3.googleusercontent.com/-fdgnbh0lRc0/AAAAAAAAAAI/AAAAAAAAAAA/AGvMrBvh0XfiRXO69nUa4-ETGq8bnAfoIA/photo.jpg?sz=46",
        url: "#",
      },
      {
        img: "https://lh3.googleusercontent.com/-fdgnbh0lRc0/AAAAAAAAAAI/AAAAAAAAAAA/AGvMrBvh0XfiRXO69nUa4-ETGq8bnAfoIA/photo.jpg?sz=46",
        url: "#",
      },
      {
        img: "https://lh3.googleusercontent.com/-fdgnbh0lRc0/AAAAAAAAAAI/AAAAAAAAAAA/AGvMrBvh0XfiRXO69nUa4-ETGq8bnAfoIA/photo.jpg?sz=46",
        url: "#",
      },
      {
        img: "https://lh3.googleusercontent.com/-fdgnbh0lRc0/AAAAAAAAAAI/AAAAAAAAAAA/AGvMrBvh0XfiRXO69nUa4-ETGq8bnAfoIA/photo.jpg?sz=46",
        url: "#",
      },
      {
        img: "https://lh3.googleusercontent.com/-fdgnbh0lRc0/AAAAAAAAAAI/AAAAAAAAAAA/AGvMrBvh0XfiRXO69nUa4-ETGq8bnAfoIA/photo.jpg?sz=46",
        url: "#",
      },
      {
        img: "https://lh3.googleusercontent.com/-fdgnbh0lRc0/AAAAAAAAAAI/AAAAAAAAAAA/AGvMrBvh0XfiRXO69nUa4-ETGq8bnAfoIA/photo.jpg?sz=46",
        url: "#",
      },
      {
        img: "https://lh3.googleusercontent.com/-fdgnbh0lRc0/AAAAAAAAAAI/AAAAAAAAAAA/AGvMrBvh0XfiRXO69nUa4-ETGq8bnAfoIA/photo.jpg?sz=46",
        url: "#",
      },
      {
        img: "https://lh3.googleusercontent.com/-fdgnbh0lRc0/AAAAAAAAAAI/AAAAAAAAAAA/AGvMrBvh0XfiRXO69nUa4-ETGq8bnAfoIA/photo.jpg?sz=46",
        url: "#",
      },
      {
        img: "https://lh3.googleusercontent.com/-fdgnbh0lRc0/AAAAAAAAAAI/AAAAAAAAAAA/AGvMrBvh0XfiRXO69nUa4-ETGq8bnAfoIA/photo.jpg?sz=46",
        url: "#",
      },
      {
        img: "https://lh3.googleusercontent.com/-fdgnbh0lRc0/AAAAAAAAAAI/AAAAAAAAAAA/AGvMrBvh0XfiRXO69nUa4-ETGq8bnAfoIA/photo.jpg?sz=46",
        url: "#",
      },
      {
        img: "https://lh3.googleusercontent.com/-fdgnbh0lRc0/AAAAAAAAAAI/AAAAAAAAAAA/AGvMrBvh0XfiRXO69nUa4-ETGq8bnAfoIA/photo.jpg?sz=46",
        url: "#",
      },
      {
        img: "https://lh3.googleusercontent.com/-fdgnbh0lRc0/AAAAAAAAAAI/AAAAAAAAAAA/AGvMrBvh0XfiRXO69nUa4-ETGq8bnAfoIA/photo.jpg?sz=46",
        url: "#",
      },
      {
        img: "https://lh3.googleusercontent.com/-fdgnbh0lRc0/AAAAAAAAAAI/AAAAAAAAAAA/AGvMrBvh0XfiRXO69nUa4-ETGq8bnAfoIA/photo.jpg?sz=46",
        url: "#",
      },
      {
        img: "https://lh3.googleusercontent.com/-fdgnbh0lRc0/AAAAAAAAAAI/AAAAAAAAAAA/AGvMrBvh0XfiRXO69nUa4-ETGq8bnAfoIA/photo.jpg?sz=46",
        url: "#",
      },
    ],
  },
  {
    priority: 0,
    category: "drama",
    title: "Best TV drama for you",
    movies: [
      {
        img: "https://lh3.googleusercontent.com/-fdgnbh0lRc0/AAAAAAAAAAI/AAAAAAAAAAA/AGvMrBvh0XfiRXO69nUa4-ETGq8bnAfoIA/photo.jpg?sz=46",
        url: "#",
      },
      {
        img: "https://lh3.googleusercontent.com/-fdgnbh0lRc0/AAAAAAAAAAI/AAAAAAAAAAA/AGvMrBvh0XfiRXO69nUa4-ETGq8bnAfoIA/photo.jpg?sz=46",
        url: "#",
      },
      {
        img: "https://lh3.googleusercontent.com/-fdgnbh0lRc0/AAAAAAAAAAI/AAAAAAAAAAA/AGvMrBvh0XfiRXO69nUa4-ETGq8bnAfoIA/photo.jpg?sz=46",
        url: "#",
      },
      {
        img: "https://lh3.googleusercontent.com/-fdgnbh0lRc0/AAAAAAAAAAI/AAAAAAAAAAA/AGvMrBvh0XfiRXO69nUa4-ETGq8bnAfoIA/photo.jpg?sz=46",
        url: "#",
      },
      {
        img: "https://lh3.googleusercontent.com/-fdgnbh0lRc0/AAAAAAAAAAI/AAAAAAAAAAA/AGvMrBvh0XfiRXO69nUa4-ETGq8bnAfoIA/photo.jpg?sz=46",
        url: "#",
      },
      {
        img: "https://lh3.googleusercontent.com/-fdgnbh0lRc0/AAAAAAAAAAI/AAAAAAAAAAA/AGvMrBvh0XfiRXO69nUa4-ETGq8bnAfoIA/photo.jpg?sz=46",
        url: "#",
      },
      {
        img: "https://lh3.googleusercontent.com/-fdgnbh0lRc0/AAAAAAAAAAI/AAAAAAAAAAA/AGvMrBvh0XfiRXO69nUa4-ETGq8bnAfoIA/photo.jpg?sz=46",
        url: "#",
      },
      {
        img: "https://lh3.googleusercontent.com/-fdgnbh0lRc0/AAAAAAAAAAI/AAAAAAAAAAA/AGvMrBvh0XfiRXO69nUa4-ETGq8bnAfoIA/photo.jpg?sz=46",
        url: "#",
      },
      {
        img: "https://lh3.googleusercontent.com/-fdgnbh0lRc0/AAAAAAAAAAI/AAAAAAAAAAA/AGvMrBvh0XfiRXO69nUa4-ETGq8bnAfoIA/photo.jpg?sz=46",
        url: "#",
      },
      {
        img: "https://lh3.googleusercontent.com/-fdgnbh0lRc0/AAAAAAAAAAI/AAAAAAAAAAA/AGvMrBvh0XfiRXO69nUa4-ETGq8bnAfoIA/photo.jpg?sz=46",
        url: "#",
      },
      {
        img: "https://lh3.googleusercontent.com/-fdgnbh0lRc0/AAAAAAAAAAI/AAAAAAAAAAA/AGvMrBvh0XfiRXO69nUa4-ETGq8bnAfoIA/photo.jpg?sz=46",
        url: "#",
      },
      {
        img: "https://lh3.googleusercontent.com/-fdgnbh0lRc0/AAAAAAAAAAI/AAAAAAAAAAA/AGvMrBvh0XfiRXO69nUa4-ETGq8bnAfoIA/photo.jpg?sz=46",
        url: "#",
      },
      {
        img: "https://lh3.googleusercontent.com/-fdgnbh0lRc0/AAAAAAAAAAI/AAAAAAAAAAA/AGvMrBvh0XfiRXO69nUa4-ETGq8bnAfoIA/photo.jpg?sz=46",
        url: "#",
      },
      {
        img: "https://lh3.googleusercontent.com/-fdgnbh0lRc0/AAAAAAAAAAI/AAAAAAAAAAA/AGvMrBvh0XfiRXO69nUa4-ETGq8bnAfoIA/photo.jpg?sz=46",
        url: "#",
      },
      {
        img: "https://lh3.googleusercontent.com/-fdgnbh0lRc0/AAAAAAAAAAI/AAAAAAAAAAA/AGvMrBvh0XfiRXO69nUa4-ETGq8bnAfoIA/photo.jpg?sz=46",
        url: "#",
      },
      {
        img: "https://lh3.googleusercontent.com/-fdgnbh0lRc0/AAAAAAAAAAI/AAAAAAAAAAA/AGvMrBvh0XfiRXO69nUa4-ETGq8bnAfoIA/photo.jpg?sz=46",
        url: "#",
      },
      {
        img: "https://lh3.googleusercontent.com/-fdgnbh0lRc0/AAAAAAAAAAI/AAAAAAAAAAA/AGvMrBvh0XfiRXO69nUa4-ETGq8bnAfoIA/photo.jpg?sz=46",
        url: "#",
      },
      {
        img: "https://lh3.googleusercontent.com/-fdgnbh0lRc0/AAAAAAAAAAI/AAAAAAAAAAA/AGvMrBvh0XfiRXO69nUa4-ETGq8bnAfoIA/photo.jpg?sz=46",
        url: "#",
      },
      {
        img: "https://lh3.googleusercontent.com/-fdgnbh0lRc0/AAAAAAAAAAI/AAAAAAAAAAA/AGvMrBvh0XfiRXO69nUa4-ETGq8bnAfoIA/photo.jpg?sz=46",
        url: "#",
      },
      {
        img: "https://lh3.googleusercontent.com/-fdgnbh0lRc0/AAAAAAAAAAI/AAAAAAAAAAA/AGvMrBvh0XfiRXO69nUa4-ETGq8bnAfoIA/photo.jpg?sz=46",
        url: "#",
      },
      {
        img: "https://lh3.googleusercontent.com/-fdgnbh0lRc0/AAAAAAAAAAI/AAAAAAAAAAA/AGvMrBvh0XfiRXO69nUa4-ETGq8bnAfoIA/photo.jpg?sz=46",
        url: "#",
      },
      {
        img: "https://lh3.googleusercontent.com/-fdgnbh0lRc0/AAAAAAAAAAI/AAAAAAAAAAA/AGvMrBvh0XfiRXO69nUa4-ETGq8bnAfoIA/photo.jpg?sz=46",
        url: "#",
      },
      {
        img: "https://lh3.googleusercontent.com/-fdgnbh0lRc0/AAAAAAAAAAI/AAAAAAAAAAA/AGvMrBvh0XfiRXO69nUa4-ETGq8bnAfoIA/photo.jpg?sz=46",
        url: "#",
      },
      {
        img: "https://lh3.googleusercontent.com/-fdgnbh0lRc0/AAAAAAAAAAI/AAAAAAAAAAA/AGvMrBvh0XfiRXO69nUa4-ETGq8bnAfoIA/photo.jpg?sz=46",
        url: "#",
      },
      {
        img: "https://lh3.googleusercontent.com/-fdgnbh0lRc0/AAAAAAAAAAI/AAAAAAAAAAA/AGvMrBvh0XfiRXO69nUa4-ETGq8bnAfoIA/photo.jpg?sz=46",
        url: "#",
      },
      {
        img: "https://lh3.googleusercontent.com/-fdgnbh0lRc0/AAAAAAAAAAI/AAAAAAAAAAA/AGvMrBvh0XfiRXO69nUa4-ETGq8bnAfoIA/photo.jpg?sz=46",
        url: "#",
      },
      {
        img: "https://lh3.googleusercontent.com/-fdgnbh0lRc0/AAAAAAAAAAI/AAAAAAAAAAA/AGvMrBvh0XfiRXO69nUa4-ETGq8bnAfoIA/photo.jpg?sz=46",
        url: "#",
      },
      {
        img: "https://lh3.googleusercontent.com/-fdgnbh0lRc0/AAAAAAAAAAI/AAAAAAAAAAA/AGvMrBvh0XfiRXO69nUa4-ETGq8bnAfoIA/photo.jpg?sz=46",
        url: "#",
      },
    ],
  },
  {
    priority: 1,
    category: "romance",
    title: "Best romatic shows for you",
    movies: [
      {
        img: "https://lh3.googleusercontent.com/-fdgnbh0lRc0/AAAAAAAAAAI/AAAAAAAAAAA/AGvMrBvh0XfiRXO69nUa4-ETGq8bnAfoIA/photo.jpg?sz=46",
        url: "#",
      },
      {
        img: "https://lh3.googleusercontent.com/-fdgnbh0lRc0/AAAAAAAAAAI/AAAAAAAAAAA/AGvMrBvh0XfiRXO69nUa4-ETGq8bnAfoIA/photo.jpg?sz=46",
        url: "#",
      },
      {
        img: "https://lh3.googleusercontent.com/-fdgnbh0lRc0/AAAAAAAAAAI/AAAAAAAAAAA/AGvMrBvh0XfiRXO69nUa4-ETGq8bnAfoIA/photo.jpg?sz=46",
        url: "#",
      },
      {
        img: "https://lh3.googleusercontent.com/-fdgnbh0lRc0/AAAAAAAAAAI/AAAAAAAAAAA/AGvMrBvh0XfiRXO69nUa4-ETGq8bnAfoIA/photo.jpg?sz=46",
        url: "#",
      },
      {
        img: "https://lh3.googleusercontent.com/-fdgnbh0lRc0/AAAAAAAAAAI/AAAAAAAAAAA/AGvMrBvh0XfiRXO69nUa4-ETGq8bnAfoIA/photo.jpg?sz=46",
        url: "#",
      },
      {
        img: "https://lh3.googleusercontent.com/-fdgnbh0lRc0/AAAAAAAAAAI/AAAAAAAAAAA/AGvMrBvh0XfiRXO69nUa4-ETGq8bnAfoIA/photo.jpg?sz=46",
        url: "#",
      },
      {
        img: "https://lh3.googleusercontent.com/-fdgnbh0lRc0/AAAAAAAAAAI/AAAAAAAAAAA/AGvMrBvh0XfiRXO69nUa4-ETGq8bnAfoIA/photo.jpg?sz=46",
        url: "#",
      },
      {
        img: "https://lh3.googleusercontent.com/-fdgnbh0lRc0/AAAAAAAAAAI/AAAAAAAAAAA/AGvMrBvh0XfiRXO69nUa4-ETGq8bnAfoIA/photo.jpg?sz=46",
        url: "#",
      },
      {
        img: "https://lh3.googleusercontent.com/-fdgnbh0lRc0/AAAAAAAAAAI/AAAAAAAAAAA/AGvMrBvh0XfiRXO69nUa4-ETGq8bnAfoIA/photo.jpg?sz=46",
        url: "#",
      },
      {
        img: "https://lh3.googleusercontent.com/-fdgnbh0lRc0/AAAAAAAAAAI/AAAAAAAAAAA/AGvMrBvh0XfiRXO69nUa4-ETGq8bnAfoIA/photo.jpg?sz=46",
        url: "#",
      },
      {
        img: "https://lh3.googleusercontent.com/-fdgnbh0lRc0/AAAAAAAAAAI/AAAAAAAAAAA/AGvMrBvh0XfiRXO69nUa4-ETGq8bnAfoIA/photo.jpg?sz=46",
        url: "#",
      },
      {
        img: "https://lh3.googleusercontent.com/-fdgnbh0lRc0/AAAAAAAAAAI/AAAAAAAAAAA/AGvMrBvh0XfiRXO69nUa4-ETGq8bnAfoIA/photo.jpg?sz=46",
        url: "#",
      },
      {
        img: "https://lh3.googleusercontent.com/-fdgnbh0lRc0/AAAAAAAAAAI/AAAAAAAAAAA/AGvMrBvh0XfiRXO69nUa4-ETGq8bnAfoIA/photo.jpg?sz=46",
        url: "#",
      },
      {
        img: "https://lh3.googleusercontent.com/-fdgnbh0lRc0/AAAAAAAAAAI/AAAAAAAAAAA/AGvMrBvh0XfiRXO69nUa4-ETGq8bnAfoIA/photo.jpg?sz=46",
        url: "#",
      },
      {
        img: "https://lh3.googleusercontent.com/-fdgnbh0lRc0/AAAAAAAAAAI/AAAAAAAAAAA/AGvMrBvh0XfiRXO69nUa4-ETGq8bnAfoIA/photo.jpg?sz=46",
        url: "#",
      },
      {
        img: "https://lh3.googleusercontent.com/-fdgnbh0lRc0/AAAAAAAAAAI/AAAAAAAAAAA/AGvMrBvh0XfiRXO69nUa4-ETGq8bnAfoIA/photo.jpg?sz=46",
        url: "#",
      },
      {
        img: "https://lh3.googleusercontent.com/-fdgnbh0lRc0/AAAAAAAAAAI/AAAAAAAAAAA/AGvMrBvh0XfiRXO69nUa4-ETGq8bnAfoIA/photo.jpg?sz=46",
        url: "#",
      },
      {
        img: "https://lh3.googleusercontent.com/-fdgnbh0lRc0/AAAAAAAAAAI/AAAAAAAAAAA/AGvMrBvh0XfiRXO69nUa4-ETGq8bnAfoIA/photo.jpg?sz=46",
        url: "#",
      },
      {
        img: "https://lh3.googleusercontent.com/-fdgnbh0lRc0/AAAAAAAAAAI/AAAAAAAAAAA/AGvMrBvh0XfiRXO69nUa4-ETGq8bnAfoIA/photo.jpg?sz=46",
        url: "#",
      },
      {
        img: "https://lh3.googleusercontent.com/-fdgnbh0lRc0/AAAAAAAAAAI/AAAAAAAAAAA/AGvMrBvh0XfiRXO69nUa4-ETGq8bnAfoIA/photo.jpg?sz=46",
        url: "#",
      },
      {
        img: "https://lh3.googleusercontent.com/-fdgnbh0lRc0/AAAAAAAAAAI/AAAAAAAAAAA/AGvMrBvh0XfiRXO69nUa4-ETGq8bnAfoIA/photo.jpg?sz=46",
        url: "#",
      },
      {
        img: "https://lh3.googleusercontent.com/-fdgnbh0lRc0/AAAAAAAAAAI/AAAAAAAAAAA/AGvMrBvh0XfiRXO69nUa4-ETGq8bnAfoIA/photo.jpg?sz=46",
        url: "#",
      },
      {
        img: "https://lh3.googleusercontent.com/-fdgnbh0lRc0/AAAAAAAAAAI/AAAAAAAAAAA/AGvMrBvh0XfiRXO69nUa4-ETGq8bnAfoIA/photo.jpg?sz=46",
        url: "#",
      },
      {
        img: "https://lh3.googleusercontent.com/-fdgnbh0lRc0/AAAAAAAAAAI/AAAAAAAAAAA/AGvMrBvh0XfiRXO69nUa4-ETGq8bnAfoIA/photo.jpg?sz=46",
        url: "#",
      },
      {
        img: "https://lh3.googleusercontent.com/-fdgnbh0lRc0/AAAAAAAAAAI/AAAAAAAAAAA/AGvMrBvh0XfiRXO69nUa4-ETGq8bnAfoIA/photo.jpg?sz=46",
        url: "#",
      },
      {
        img: "https://lh3.googleusercontent.com/-fdgnbh0lRc0/AAAAAAAAAAI/AAAAAAAAAAA/AGvMrBvh0XfiRXO69nUa4-ETGq8bnAfoIA/photo.jpg?sz=46",
        url: "#",
      },
      {
        img: "https://lh3.googleusercontent.com/-fdgnbh0lRc0/AAAAAAAAAAI/AAAAAAAAAAA/AGvMrBvh0XfiRXO69nUa4-ETGq8bnAfoIA/photo.jpg?sz=46",
        url: "#",
      },
      {
        img: "https://lh3.googleusercontent.com/-fdgnbh0lRc0/AAAAAAAAAAI/AAAAAAAAAAA/AGvMrBvh0XfiRXO69nUa4-ETGq8bnAfoIA/photo.jpg?sz=46",
        url: "#",
      },
    ],
  },
  {
    priority: 2,
    category: "disney",
    title: "Popular Disney movies for you",
    movies: [
      {
        img: "https://lh3.googleusercontent.com/-fdgnbh0lRc0/AAAAAAAAAAI/AAAAAAAAAAA/AGvMrBvh0XfiRXO69nUa4-ETGq8bnAfoIA/photo.jpg?sz=46",
        url: "#",
      },
      {
        img: "https://lh3.googleusercontent.com/-fdgnbh0lRc0/AAAAAAAAAAI/AAAAAAAAAAA/AGvMrBvh0XfiRXO69nUa4-ETGq8bnAfoIA/photo.jpg?sz=46",
        url: "#",
      },
      {
        img: "https://lh3.googleusercontent.com/-fdgnbh0lRc0/AAAAAAAAAAI/AAAAAAAAAAA/AGvMrBvh0XfiRXO69nUa4-ETGq8bnAfoIA/photo.jpg?sz=46",
        url: "#",
      },
      {
        img: "https://lh3.googleusercontent.com/-fdgnbh0lRc0/AAAAAAAAAAI/AAAAAAAAAAA/AGvMrBvh0XfiRXO69nUa4-ETGq8bnAfoIA/photo.jpg?sz=46",
        url: "#",
      },
      {
        img: "https://lh3.googleusercontent.com/-fdgnbh0lRc0/AAAAAAAAAAI/AAAAAAAAAAA/AGvMrBvh0XfiRXO69nUa4-ETGq8bnAfoIA/photo.jpg?sz=46",
        url: "#",
      },
      {
        img: "https://lh3.googleusercontent.com/-fdgnbh0lRc0/AAAAAAAAAAI/AAAAAAAAAAA/AGvMrBvh0XfiRXO69nUa4-ETGq8bnAfoIA/photo.jpg?sz=46",
        url: "#",
      },
      {
        img: "https://lh3.googleusercontent.com/-fdgnbh0lRc0/AAAAAAAAAAI/AAAAAAAAAAA/AGvMrBvh0XfiRXO69nUa4-ETGq8bnAfoIA/photo.jpg?sz=46",
        url: "#",
      },
      {
        img: "https://lh3.googleusercontent.com/-fdgnbh0lRc0/AAAAAAAAAAI/AAAAAAAAAAA/AGvMrBvh0XfiRXO69nUa4-ETGq8bnAfoIA/photo.jpg?sz=46",
        url: "#",
      },
      {
        img: "https://lh3.googleusercontent.com/-fdgnbh0lRc0/AAAAAAAAAAI/AAAAAAAAAAA/AGvMrBvh0XfiRXO69nUa4-ETGq8bnAfoIA/photo.jpg?sz=46",
        url: "#",
      },
      {
        img: "https://lh3.googleusercontent.com/-fdgnbh0lRc0/AAAAAAAAAAI/AAAAAAAAAAA/AGvMrBvh0XfiRXO69nUa4-ETGq8bnAfoIA/photo.jpg?sz=46",
        url: "#",
      },
      {
        img: "https://lh3.googleusercontent.com/-fdgnbh0lRc0/AAAAAAAAAAI/AAAAAAAAAAA/AGvMrBvh0XfiRXO69nUa4-ETGq8bnAfoIA/photo.jpg?sz=46",
        url: "#",
      },
      {
        img: "https://lh3.googleusercontent.com/-fdgnbh0lRc0/AAAAAAAAAAI/AAAAAAAAAAA/AGvMrBvh0XfiRXO69nUa4-ETGq8bnAfoIA/photo.jpg?sz=46",
        url: "#",
      },
      {
        img: "https://lh3.googleusercontent.com/-fdgnbh0lRc0/AAAAAAAAAAI/AAAAAAAAAAA/AGvMrBvh0XfiRXO69nUa4-ETGq8bnAfoIA/photo.jpg?sz=46",
        url: "#",
      },
      {
        img: "https://lh3.googleusercontent.com/-fdgnbh0lRc0/AAAAAAAAAAI/AAAAAAAAAAA/AGvMrBvh0XfiRXO69nUa4-ETGq8bnAfoIA/photo.jpg?sz=46",
        url: "#",
      },
      {
        img: "https://lh3.googleusercontent.com/-fdgnbh0lRc0/AAAAAAAAAAI/AAAAAAAAAAA/AGvMrBvh0XfiRXO69nUa4-ETGq8bnAfoIA/photo.jpg?sz=46",
        url: "#",
      },
      {
        img: "https://lh3.googleusercontent.com/-fdgnbh0lRc0/AAAAAAAAAAI/AAAAAAAAAAA/AGvMrBvh0XfiRXO69nUa4-ETGq8bnAfoIA/photo.jpg?sz=46",
        url: "#",
      },
      {
        img: "https://lh3.googleusercontent.com/-fdgnbh0lRc0/AAAAAAAAAAI/AAAAAAAAAAA/AGvMrBvh0XfiRXO69nUa4-ETGq8bnAfoIA/photo.jpg?sz=46",
        url: "#",
      },
      {
        img: "https://lh3.googleusercontent.com/-fdgnbh0lRc0/AAAAAAAAAAI/AAAAAAAAAAA/AGvMrBvh0XfiRXO69nUa4-ETGq8bnAfoIA/photo.jpg?sz=46",
        url: "#",
      },
      {
        img: "https://lh3.googleusercontent.com/-fdgnbh0lRc0/AAAAAAAAAAI/AAAAAAAAAAA/AGvMrBvh0XfiRXO69nUa4-ETGq8bnAfoIA/photo.jpg?sz=46",
        url: "#",
      },
      {
        img: "https://lh3.googleusercontent.com/-fdgnbh0lRc0/AAAAAAAAAAI/AAAAAAAAAAA/AGvMrBvh0XfiRXO69nUa4-ETGq8bnAfoIA/photo.jpg?sz=46",
        url: "#",
      },
      {
        img: "https://lh3.googleusercontent.com/-fdgnbh0lRc0/AAAAAAAAAAI/AAAAAAAAAAA/AGvMrBvh0XfiRXO69nUa4-ETGq8bnAfoIA/photo.jpg?sz=46",
        url: "#",
      },
      {
        img: "https://lh3.googleusercontent.com/-fdgnbh0lRc0/AAAAAAAAAAI/AAAAAAAAAAA/AGvMrBvh0XfiRXO69nUa4-ETGq8bnAfoIA/photo.jpg?sz=46",
        url: "#",
      },
      {
        img: "https://lh3.googleusercontent.com/-fdgnbh0lRc0/AAAAAAAAAAI/AAAAAAAAAAA/AGvMrBvh0XfiRXO69nUa4-ETGq8bnAfoIA/photo.jpg?sz=46",
        url: "#",
      },
      {
        img: "https://lh3.googleusercontent.com/-fdgnbh0lRc0/AAAAAAAAAAI/AAAAAAAAAAA/AGvMrBvh0XfiRXO69nUa4-ETGq8bnAfoIA/photo.jpg?sz=46",
        url: "#",
      },
      {
        img: "https://lh3.googleusercontent.com/-fdgnbh0lRc0/AAAAAAAAAAI/AAAAAAAAAAA/AGvMrBvh0XfiRXO69nUa4-ETGq8bnAfoIA/photo.jpg?sz=46",
        url: "#",
      },
      {
        img: "https://lh3.googleusercontent.com/-fdgnbh0lRc0/AAAAAAAAAAI/AAAAAAAAAAA/AGvMrBvh0XfiRXO69nUa4-ETGq8bnAfoIA/photo.jpg?sz=46",
        url: "#",
      },
      {
        img: "https://lh3.googleusercontent.com/-fdgnbh0lRc0/AAAAAAAAAAI/AAAAAAAAAAA/AGvMrBvh0XfiRXO69nUa4-ETGq8bnAfoIA/photo.jpg?sz=46",
        url: "#",
      },
      {
        img: "https://lh3.googleusercontent.com/-fdgnbh0lRc0/AAAAAAAAAAI/AAAAAAAAAAA/AGvMrBvh0XfiRXO69nUa4-ETGq8bnAfoIA/photo.jpg?sz=46",
        url: "#",
      },
    ],
  },
];

/**
 * Receives the query and callback function fetches the query asynchronously and gets the data
 * @param {string} query reveives the search query
 * @param {Function} callback  function will be called as query is fetched
 */
export const apiCaller = async function (query, callback) {
  // 1. Conversion of user query in url
  const conversionInUrl = query.split(" ").join("%20");
  try {
    // 2. Making a valid url
    const url = `${API_URL + conversionInUrl}`;

    // 3. Making the fetch options
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": `${API_KEY}`,
        "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
      },
    };

    // 4. fetching the query
    const response = await fetch(url, options);
    const result = await response.json();

    // 5. putting the fetched data into the state
    const { d: data, q: query } = result;
    state.search.query = query;
    state.search.results = data.slice(1);
    data.splice(1);
    state.search.topResult = data;

    // 6. calling the callback by passing data from state
    callback(state.search.topResult, state.search.results);
  } catch (err) {
    console.error(err);
    throw err;
  }
};
