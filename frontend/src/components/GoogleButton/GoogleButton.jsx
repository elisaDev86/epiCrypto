import React from 'react';
import { Button } from 'react-bootstrap';
import { FcGoogle } from 'react-icons/fc';
import { loginWithGoogle } from '../../services/gService'; // Importa la funzione

const GoogleLoginButton = () => {
  const handleGoogleLogin = () => {
    loginWithGoogle(); // Esegue il redirect all'OAuth di Google
  };

  return (
    <Button
      variant="outline-secondary"
      className="d-flex align-items-center"
      onClick={handleGoogleLogin}
    >
      <FcGoogle size={20} className="me-2" />
      Accedi con Google
    </Button>
  );
};

export default GoogleLoginButton;

