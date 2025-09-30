// import axios from "axios";

// const axiosInstance = axios.create({
//   baseURL: "http://127.0.0.1:5001/clone-9163e/us-central1/api",
// });

// export {axiosInstance}


import axios from "axios";

 const axiosInstance = axios.create({
  //local instance of forebase function
  //  baseURL: "http://127.0.0.1:5001/clone-9163e/us-central1/api",

   //deployed version of amazon server on render.com
   baseURL: "https://amazon-api-deploy-hp8j.onrender.com/",
 });
export { axiosInstance }