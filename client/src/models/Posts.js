import api from "./axios";
import Session from "./Session";

export async function GetMyPosts() {
  console.log(Session.token);
  return await api.get("/posts", { Authorization: `Bearer ${Session.token}` });
}

export function GetPostsForUser(handle) {
  return api.get(`posts/${handle}`);
}

export function GetMyFeed() {
  return api.get("posts/feed");
}
