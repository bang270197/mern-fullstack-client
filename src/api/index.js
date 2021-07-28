import axios from "axios";

const URL = "103.109.43.20:5002";

// const URL = "http://localhost:5000";
export const fetchPosts = () => axios.get(`${URL}/posts`);
export const createPost = (payload) => axios.post(`${URL}/posts`, payload);
export const updatePost = (payload) =>
    axios.post(`${URL}/posts/update`, payload);
