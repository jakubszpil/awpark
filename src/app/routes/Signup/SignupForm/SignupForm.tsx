import { Alert, Button, FloatingLabel, Form } from "react-bootstrap";
import { useForm, SubmitHandler } from "react-hook-form";
import { Link } from "react-router-dom";

import "./SignupForm.css";

type SignupFormValues = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

function SignupForm() {
  const {
    register,
    handleSubmit,
    clearErrors,
    formState: { errors },
  } = useForm<SignupFormValues>();

  const onSubmit: SubmitHandler<SignupFormValues> = async (data) => {
    try {
      const response = await fetch("http://localhost:4000/signup", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
        mode: "cors",
      });

      console.log(response);
    } catch (e) {}
  };

  const onReset = () => clearErrors();

  return (
    <Form
      className="signup-form"
      onSubmit={handleSubmit(onSubmit)}
      onReset={onReset}
    >
      <Form.Group>
        <FloatingLabel controlId="name" label="Name" className="mb-3">
          <Form.Control
            placeholder="Enter Your Name here"
            {...register("name", { required: true })}
          />
        </FloatingLabel>

        {errors.name && <Alert variant="danger">This field is required</Alert>}
      </Form.Group>

      <Form.Group>
        <FloatingLabel controlId="surname" label="Surname" className="mb-3">
          <Form.Control
            placeholder="Enter Your Surnmae here"
            {...register("surname", { required: true })}
          />
        </FloatingLabel>
        {errors.surname && (
          <Alert variant="danger">This field is required</Alert>
        )}
      </Form.Group>

      <Form.Group>
        <FloatingLabel controlId="email" label="Email" className="mb-3">
          <Form.Control
            placeholder="Enter Your Email here"
            {...register("email", { required: true })}
          />
        </FloatingLabel>
        {errors.email && <Alert variant="danger">This field is required</Alert>}
      </Form.Group>

      <Form.Group>
        <FloatingLabel controlId="password" label="Password" className="mb-3">
          <Form.Control
            placeholder="Enter Your Email here"
            type="password"
            {...register("password", { required: true })}
          />
        </FloatingLabel>
        {errors.password && (
          <Alert variant="danger">This field is required</Alert>
        )}
      </Form.Group>

      <div className="signup-form__buttons">
        <Button variant="primary" type="submit" className="text-uppercase p-2">
          Sign Up
        </Button>
        <Button
          variant="outline-primary"
          type="reset"
          className="text-uppercase p-2"
        >
          Reset
        </Button>
      </div>

      <div className="my-3">
        Already have an account?{" "}
        <Link to="/login" className="fw-bolder text-uppercase">
          Login!
        </Link>
      </div>
    </Form>
  );
}

export default SignupForm;
