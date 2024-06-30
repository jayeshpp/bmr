import * as Yup from "yup";
import { Button } from "@/components/ui/Button";
import { TextBox } from "@/components/ui/TextBox";
import { useAuth } from "@/context/AuthProvider";
import { Form, Formik } from "formik";
import { Div } from "@/components/Div";
import { ErrorMessage } from "@/components/ErrorMessage";

const LoginSchema = Yup.object().shape({
  userName: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

interface LoginFormValues {
  userName: string;
  password: string;
}

const initialValues: LoginFormValues = {
  userName: "",
  password: "",
};

export const LoginForm = () => {
  const { login, loading } = useAuth();
  const handleSubmit = (values: LoginFormValues) => {
    const { userName, password } = values;
    login(userName, password);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={LoginSchema}
      onSubmit={handleSubmit}
    >
      {({ handleChange, values }) => (
        <Form>
          <Div className="form-row">
            <TextBox
              inputProps={{
                type: "text",
                onChange: handleChange("userName"),
                value: values.userName,
              }}
              label="Email ID"
            />
            <ErrorMessage name="userName" />
          </Div>
          <Div className="form-row">
            <TextBox
              inputProps={{
                type: "password",
                onChange: handleChange("password"),
                value: values.password,
              }}
              label="Password"
            />
            <ErrorMessage name="password" />
          </Div>
          <Button>Login</Button>
        </Form>
      )}
    </Formik>
  );
};
