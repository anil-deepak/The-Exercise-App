import { ToastProgrammatic as toastr } from "buefy";
import api from "./axios";

const Session = {
  user: null,
  message: [],
};
export default Session;

export async function Login({ handle, password }) {
  const { data } = await api.post("auth/login", {
    handle,
    password,
  });
  Session.user = data.user;
  Session.token = data.token;
  console.log(Session);

  // toastr.open({
  //   type: "is-success",
  //   message: `Welcome ${Session.user.firstName}`,
  // });
}

export async function Register(user) {
  const { data } = await api.post("auth/register", user);

  console.log(data.user);
}

export function Logout() {
  Session.user = null;
}

export function toastError(msg) {}
