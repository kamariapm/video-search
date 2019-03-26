import axios from "axios";

const KEY = "AIzaSyAuI7w-7fhKcUs5vWcFSPcCo6RYjZF3zUc";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: "5",
    key: KEY
  }
});
