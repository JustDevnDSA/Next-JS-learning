const URL = "https://jsonplaceholder.typicode.com/users";

const POST_URL = "https://jsonplaceholder.typicode.com/posts?userId=";

const POSTS = "https://jsonplaceholder.typicode.com/posts";

export const getAllUsers = async () => {
  const res = await fetch(URL);

  if (!res.ok) {
    return new Error("Error fetching data");
  }
  return await res.json();
};

export const getUserDetail = async (id) => {
  const res = await fetch(`${URL}/${id}`);

  if (!res.ok) {
    return new Error("Error fetching data");
  }
  return await res.json();
};

export const getUserPost = async (id) => {
  const res = await fetch(`${POST_URL}${id}`);

  if (!res.ok) {
    return new Error("Error fetching data");
  }
  return await res.json();
};

export const getAllPosts = async () => {
  const res = await fetch(POSTS);

  if (!res.ok) {
    return new Error("Error fetching data");
  }
  return await res.json();
};
