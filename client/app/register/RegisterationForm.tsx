import * as Yup from "yup";
import { Button } from "@/components/ui/Button";
import { TextBox } from "@/components/ui/TextBox";
import { ErrorMessage, Form, Formik } from "formik";
import userAPI from "@/api/user";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { Typography } from "@/components/ui/Typography";

const RegisterationSchema = Yup.object().shape({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

interface RegisterationFormValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const initialValues: RegisterationFormValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};

export const RegisterationForm = () => {
  const router = useRouter();

  const handleSubmit = async (values: RegisterationFormValues) => {
    try {
      await userAPI.register(values);
      toast.success("Registration successful");
      router.push("/");
    } catch (error) {
      if (error instanceof Error) toast.error(error.message);
      console.error("Registration failed", error);
      throw error;
    }
  };

  return (
    <>
      <Typography component="h1" variant="bold">
        Member Registration
      </Typography>
      <Typography component="p" variant="italic">
        Please complete the form below to join our club. After you register, one
        of our admin team members will contact you.
      </Typography>
      <Formik
        initialValues={initialValues}
        validationSchema={RegisterationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, handleChange, values }) => (
          <Form>
            <div>
              <TextBox
                inputProps={{
                  type: "text",
                  onChange: handleChange("firstName"),
                  value: values.firstName,
                }}
                label="First Name"
              />
              <ErrorMessage name="firstName" component="div" />
            </div>
            <div>
              <TextBox
                inputProps={{
                  type: "text",
                  onChange: handleChange("lastName"),
                  value: values.lastName,
                }}
                label="Last Name"
              />
              <ErrorMessage name="lastName" component="div" />
            </div>
            <div>
              <TextBox
                inputProps={{
                  type: "text",
                  onChange: handleChange("email"),
                  value: values.email,
                }}
                label="Email"
              />
              <ErrorMessage name="email" component="div" />
            </div>
            <div>
              <TextBox
                inputProps={{
                  type: "password",
                  onChange: handleChange("password"),
                  value: values.password,
                }}
                label="Password"
              />
              <ErrorMessage name="password" component="div" />
            </div>
            {isSubmitting ? "loading.." : ""}
            <Button>Registeration</Button>
          </Form>
        )}
      </Formik>
    </>
  );
};
