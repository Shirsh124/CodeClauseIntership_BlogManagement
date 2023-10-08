// API_NOTIFICATION_MESSAGES
export const API_NOTIFICATION_MESSAGES = {
  loading: {
    title: "Loading...",
    message: "Data is beging loaded.Please wait",
  },
  success: {
    title: "success",
    message: "Data successfully loaded",
  },
  responseFailure: {
    title: "Error",
    message:
      "Error occurred while fetching response from server.Please try again",
  },
  requestFailure: {
    title: "Error",
    message: "An error occurred while parsing request data",
  },
  networkError: {
    title: "Error",
    message:
      "Unable to connect with server. Please check internet connectivity and try again later",
  },
};

//API SERVICE CALL
//NEED SERVICE CALL :{url:'/',method: 'GET/POST/PUT/DELETE',params:true/false,query:true/false}
export const SERVICE_URLS = {
  userSignup: { url: "/signup", method: "POST" },
  userLogin: { url: "/login", method: "POST" },
  uploadFile: { url: "/file/upload", method: "POST" },
  createPost: { url: "create", method: "POST" },
  getAllPosts: { url: "/posts", method: "GET", params: true },
  getPostById: { url: "post", method: "GET", query: true },
  updatePost: { url: "update", method: "PUT", query: true },
  deletePost: { url: "delete", method: "DELETE", query: true },
  newComment: { url: "/comment/new", method: "POST" },
  getAllComments: { url: "comments", method: "GET", query: true },
  deleteComment: { url: "comment/delete", method: "DELETE", query: true },
};
