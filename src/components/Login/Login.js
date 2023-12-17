import { Button, ButtonGroup, Heading, VStack } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import TextFields from "./TextFields";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <Formik
      initialValues={{ username: "", password: "" }}
      validationSchema={Yup.object().shape({
        username: Yup.string()
          .required("Username required!")
          .min(6, "Username to short!")
          .max(28, "Username to long!"),
        password: Yup.string()
          .required("Password required!")
          .min(8, "Password to short!")
          .max(28, "Password to long!"),
      })}
      onSubmit={(values, actions) => {
        const vals = { ...values };
        actions.resetForm();
        fetch("http://localhost:3001/auth/login", {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(vals),
        })
          .catch((err) => {
            return;
          })
          .then((res) => {
            if (!res || !res.ok || res.status >= 400) {
              return;
            }
            return res.json();
          })
          .then((data) => {
            if (!data) return;
            console.log(data);
          });
      }}
    >
      <VStack
        as={Form}
        w={{ base: "90%", md: "500px" }}
        m={"auto"}
        justify={"center"}
        h={"100vh"}
        spacing={"1rem"}
      >
        <Heading>Log In</Heading>
        <TextFields
          name="username"
          placeholder="Enter username"
          autoComplete="off"
          label={"Username"}
        />
        <TextFields
          name="password"
          placeholder="Enter username"
          autoComplete="off"
          label={"Password"}
          type="password"
        />
        <ButtonGroup pt={"1rem"}>
          <Button colorScheme="teal" type="submit">
            Log In
          </Button>
          <Button onClick={() => navigate("/register")}>Create Account</Button>
        </ButtonGroup>
      </VStack>
    </Formik>
  );
};

export default Login;
