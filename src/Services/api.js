// Services/api.js
import axios from 'axios';

const API_BASE_URL = 'https://dummyapi.io/data/v1/';
const APP_ID = '65b2433a2fe979ac57fe617f';

export const fetchPosts = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/post`, {
      headers: {
        'Content-Type': 'application/json',
        'app-id': APP_ID,
      },
    });

    const posts = response.data.data;

    // Fetch comments for each post
    const postsWithComments = await Promise.all(
      posts.map(async post => {
        const commentsResponse = await axios.get(
          `${API_BASE_URL}/post/${post.id}/comment`,
          {
            headers: {
              'Content-Type': 'application/json',
              'app-id': APP_ID,
            },
          },
        );

        const comments = commentsResponse.data.data;
        return {...post, comments};
      }),
    );

    return postsWithComments;
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw error;
  }
};

export const fetchUsers = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/user`, {
      headers: {
        'Content-Type': 'application/json',
        'app-id': APP_ID,
      },
    });

    const users = response.data.data;
    return users;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};
