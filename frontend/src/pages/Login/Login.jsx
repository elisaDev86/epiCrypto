import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, Link } from 'react-router-dom';
import { Container, Form, Button, Spinner, Alert } from 'react-bootstrap';
import { loginUser } from '../../services/loginService';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);
    setErrorMsg('');
    try {
      const response = await loginUser(data);
      console.log(response);
      navigate('/dashboard');
    } catch (error) {
      console.error('Errore durante il login:', error);
      setErrorMsg('Credenziali non valide o errore del server.');
    }
    setLoading(false);
  };

  return (
    <Container
      style={{
        maxWidth: '500px',
        marginTop: '60px',
        backgroundColor: '#2c3e50',
        padding: '40px',
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      }}
      fluid
    >
      <h3 className="text-center text-white mb-4">Accedi</h3>

      {errorMsg && <Alert variant="danger">{errorMsg}</Alert>}

      <Form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label className="text-white">Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Inserisci la tua email"
            isInvalid={!!errors.email}
            {...register("email", {
              required: "L'email è obbligatoria",
              pattern: {
                value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                message: "Email non valida"
              }
            })}
          />
          <Form.Control.Feedback type="invalid">
            {errors.email?.message}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPassword">
          <Form.Label className="text-white">Password</Form.Label>
          <div className="position-relative">
            <Form.Control
              type={showPassword ? "text" : "password"}
              placeholder="Inserisci la tua password"
              isInvalid={!!errors.password}
              {...register("password", {
                required: "La password è obbligatoria",
                minLength: {
                  value: 6,
                  message: "La password deve avere almeno 6 caratteri"
                }
              })}
            />
            <div
              onClick={() => setShowPassword(!showPassword)}
              style={{
                position: 'absolute',
                right: '10px',
                top: '50%',
                transform: 'translateY(-50%)',
                cursor: 'pointer',
              }}
            >
              {showPassword ? <FaEyeSlash color="#ccc" /> : <FaEye color="#ccc" />}
            </div>
          </div>
          <Form.Control.Feedback type="invalid">
            {errors.password?.message}
          </Form.Control.Feedback>
        </Form.Group>

        <Button
          variant="outline-warning"
          type="submit"
          disabled={loading}
          className="w-100 mb-3"
        >
          {loading ? (
            <>
              <Spinner
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
                className="me-2"
              />
              Accedendo...
            </>
          ) : (
            'Accedi'
          )}
        </Button>
      </Form>

      <div className="text-center mt-4">
        <Form.Text className="text-light">
          Non hai un account?{' '}
          <Link
            to="/register"
            className="text-warning fw-semibold text-decoration-none"
          >
            Clicca qui per registrarti
          </Link>
        </Form.Text>
      </div>
    </Container>
  );
};

export default Login;
