import Section from 'app/components/Section';
import SignupForm from './SignupForm';

const Signup = () => {
  return (
    <Section className="signup text-center">
      <h1 className="mt-3 mb-4 fw-bold">Sign Up | awPark</h1>
      <h3 className="my-2 mb-5">Welcome to our air-friendly park system!</h3>
      <SignupForm />
    </Section>
  );
};

export default Signup;
