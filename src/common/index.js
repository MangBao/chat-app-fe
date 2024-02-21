import * as Yup from "yup";

export const formSchema = Yup.object().shape({
  username: Yup.string()
    .required("Username required!")
    .min(6, "Username to short!")
    .max(28, "Username to long!"),
  password: Yup.string()
    .required("Password required!")
    .min(8, "Password to short!")
    .max(28, "Password to long!"),
});

export const friendSchema = Yup.object().shape({
  friendName: Yup.string()
    .required("Username required")
    .min(6, "Invalid username!")
    .max(28, "Invalid username!"),
});
