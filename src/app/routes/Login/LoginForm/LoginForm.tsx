import { Alert, Button, FloatingLabel, Form } from "react-bootstrap";
import { useForm, SubmitHandler } from "react-hook-form";
import { Link } from "react-router-dom";

import "./LoginForm.css";

type LoginFormValues = {
  email: string;
  password: string;
};

function LoginForm() {
  const {
    register,
    handleSubmit,
    clearErrors,
    formState: { errors },
  } = useForm<LoginFormValues>();

  const onSubmit: SubmitHandler<LoginFormValues> = async (data) =>
    fetch("http://localhost:4000/login", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => console.log(res));

  const onReset = () => clearErrors();

  return (
    <Form
      className="login-form"
      onSubmit={handleSubmit(onSubmit)}
      onReset={onReset}
    >
      <Form.Group>
        <FloatingLabel
          controlId="email"
          label="Email"
          className="mb-3 text-center"
        >
          <Form.Control
            placeholder="Enter Your Email here"
            {...register("email", { required: true })}
          />
        </FloatingLabel>
        {errors.email && <Alert variant="danger">This field is required</Alert>}
      </Form.Group>

      <Form.Group>
        <FloatingLabel
          controlId="password"
          label="Password"
          className="mb-3 text-center"
        >
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

      <div className="mb-3">
        <Button
          className="login-form__button p-2 text-uppercase"
          variant="primary"
          type="submit"
        >
          Login
        </Button>
      </div>
      <div>
        Don't remember a password?{" "}
        <Link to="/reset-password" className="fw-bolder text-uppercase">
          Reset it
        </Link>
      </div>
      <div>
        Don't have an account?{" "}
        <Link to="/signup" className="fw-bolder text-uppercase">
          Sign Up!
        </Link>
      </div>
    </Form>
  );
}

export default LoginForm;
