import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, Link } from 'react-router-dom';
import {
  Container,
  Form,
  Button,
  Alert,
  Spinner,
} from 'react-bootstrap';
import { registerUser } from '../../services/authService';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import GoogleLoginButton from '../../components/GoogleButton/GoogleButton'; // ✅ Import bottone Google

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);
    setServerError('');
    try {
      const response = await registerUser(data);
      console.log(response);
      navigate('/login');
    } catch (error) {
      console.error('Errore durante la registrazione:', error);
      // ✅ Gestione degli errori di duplicazione
      if (error.response && error.response.data && error.response.data.message) {
        setServerError(error.response.data.message); // Mostra il messaggio di errore dal backend
      } else {
        setServerError('Errore durante la registrazione. Riprova.');
      }
    }
    setLoading(false);
  };

  return (
    <Container
      fluid
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: '100vh' }}
    >
      <div
        style={{
          maxWidth: '500px',
          width: '100%',
          backgroundColor: '#2c3e50',
          padding: '40px',
          borderRadius: '12px',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
        }}
      >
        <h3 className="text-center text-white mb-4">Crea un account</h3>

        {serverError && <Alert variant="danger">{serverError}</Alert>}

        <Form onSubmit={handleSubmit(onSubmit)} noValidate>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label className="text-white">Nome</Form.Label>
            <Form.Control
              type="text"
              placeholder="Inserisci il tuo nome"
              isInvalid={!!errors.name}
              {...register('name', { required: 'Il nome è obbligatorio' })}
            />
            <Form.Control.Feedback type="invalid">
              {errors.name?.message}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="email">
            <Form.Label className="text-white">Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Inserisci la tua email"
              isInvalid={!!errors.email}
              {...register('email', {
                required: "L'email è obbligatoria",
                pattern: {
                  value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                  message: 'Email non valida',
                },
              })}
            />
            <Form.Control.Feedback type="invalid">
              {errors.email?.message}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-4" controlId="password">
            <Form.Label className="text-white">Password</Form.Label>
            <div className="position-relative">
              <Form.Control
                type={showPassword ? 'text' : 'password'}
                placeholder="Inserisci la tua password"
                isInvalid={!!errors.password}
                {...register('password', {
                  required: 'La password è obbligatoria',
                  minLength: {
                    value: 6,
                    message: 'Almeno 6 caratteri',
                  },
                  pattern: {
                    value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])/,
                    message:
                      'Deve contenere una lettera, un numero e un carattere speciale',
                  },
                })}
              />
              <div
                onClick={() => setShowPassword((prev) => !prev)}
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
              <Form.Control.Feedback type="invalid">
                {errors.password?.message}
              </Form.Control.Feedback>
            </div>
          </Form.Group>

          <Button
            variant="outline-warning"
            type="submit"
            className="w-100"
            disabled={loading}
          >
            {loading ? (
              <>
                <Spinner animation="border" size="sm" className="me-2" />
                Registrazione...
              </>
            ) : (
              'Registrati'
            )}
          </Button>
        </Form>

        {/* ✅ Bottone Google con margine top e bottom */}
        <div className="d-flex justify-content-center mt-4 mb-3">
          <GoogleLoginButton />
        </div>

        <div className="text-center">
          <Form.Text className="text-light">
            Hai già un account?{' '}
            <Link
              to="/login"
              className="text-warning fw-semibold text-decoration-none"
            >
              Clicca qui per accedere
            </Link>
          </Form.Text>
        </div>
      </div>
    </Container>
  );
};

export default Register;