import * as Yup from 'yup';
import { Button } from '@/components/ui/Button';
import { TextBox } from '@/components/ui/TextBox';
import { ErrorMessage, Form, Formik } from 'formik';
import userAPI from '@/api/user';
import { useRouter } from 'next/navigation';

const RegisterationSchema = Yup.object().shape({
  firstName: Yup.string().required('First Name is required'),
  lastName: Yup.string().required('Last Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});

interface RegisterationFormValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const initialValues: RegisterationFormValues = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
};

export const RegisterationForm = () => {
  const router = useRouter();

  const handleSubmit = async (values: RegisterationFormValues) => {
    try {
      await userAPI.register(values);
      router.push('/');
    } catch (error) {
      console.error('Registration failed', error);
      throw error;
    }
  };

  return (
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
                type: 'text',
                onChange: handleChange('firstName'),
                value: values.firstName,
              }}
              label='First Name'
            />
            <ErrorMessage name='firstName' component='div' />
          </div>
          <div>
            <TextBox
              inputProps={{
                type: 'text',
                onChange: handleChange('lastName'),
                value: values.lastName,
              }}
              label='Last Name'
            />
            <ErrorMessage name='lastName' component='div' />
          </div>
          <div>
            <TextBox
              inputProps={{
                type: 'text',
                onChange: handleChange('email'),
                value: values.email,
              }}
              label='Email'
            />
            <ErrorMessage name='email' component='div' />
          </div>
          <div>
            <TextBox
              inputProps={{
                type: 'password',
                onChange: handleChange('password'),
                value: values.password,
              }}
              label='Password'
            />
            <ErrorMessage name='password' component='div' />
          </div>
          {isSubmitting ? 'loading..' : ''}
          <Button>Registeration</Button>
        </Form>
      )}
    </Formik>
  );
};
