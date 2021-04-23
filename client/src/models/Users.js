import api from "./axios";

export function GetAllUsers() {
  return api.get("/users");
}
