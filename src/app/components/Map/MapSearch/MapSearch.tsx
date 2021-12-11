import { useEffect, useState } from "react";
import { Alert, Button, FloatingLabel, Form, Offcanvas } from "react-bootstrap";
import { SubmitHandler, useForm } from "react-hook-form";

import "./MapSearch.css";

function MapSearch({ setRadius, radius }: any) {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<{ radius: number }>();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onSubmit: SubmitHandler<{ radius: number }> = (data) => {
    setRadius(data.radius);
    handleClose();
  };

  return (
    <div className="map-search">
      <Button
        className="map-search__button my-5 mx-4"
        variant="primary"
        onClick={handleShow}
      >
        Change Radius
      </Button>

      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Change radius of area</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group>
              <FloatingLabel
                controlId="radius"
                label="radius"
                className="mb-3 text-center"
              >
                <Form.Control
                  {...register("radius", { required: true, value: radius })}
                />
              </FloatingLabel>
              {errors.radius && (
                <Alert variant="danger">This field is required</Alert>
              )}
              <div>
                <Button variant="primary" type="submit">
                  Change
                </Button>
              </div>
            </Form.Group>
          </Form>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default MapSearch;
