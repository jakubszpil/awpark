import Section from 'app/components/Section';
import LoginForm from './LoginForm';

const Login = () => {
  return (
    <Section className="login text-center">
      <h1 className="mt-3 mb-4 fw-bold">Login | awPark</h1>
      <h3 className="my-2 mb-5">Nice to see you again!</h3>
      <LoginForm />
    </Section>
  );
};

export default Login;
