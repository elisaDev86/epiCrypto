import React, { useState } from 'react';
import { Container, Button, Spinner, Alert } from 'react-bootstrap';
import { deleteUser } from '../../services/deleteService';

const DeleteUser = () => {
  const [isDeleting, setIsDeleting] = useState(false);
  const [deleted, setDeleted] = useState(false);
  const [error, setError] = useState(null);

  const handleDeleteUser = async () => {
    setIsDeleting(true);
    setError(null);
    try {
      const token = localStorage.getItem('authToken');
      await deleteUser(token);
      setDeleted(true);
      localStorage.removeItem('authToken'); // Pulisce il token anche dopo eliminazione
    } catch (error) {
      console.error('Errore durante la cancellazione:', error);
      setError("Si è verificato un errore durante l'eliminazione del tuo account.");
    }
    setIsDeleting(false);
  };

  return (
    <Container style={{ maxWidth: '500px', marginTop: '80px' }}>
      <h3 className="text-center mb-4">Eliminazione Account</h3>

      {deleted ? (
        <Alert variant="success">
          Il tuo account è stato eliminato con successo.
        </Alert>
      ) : (
        <>
          {error && <Alert variant="danger">{error}</Alert>}

          <Alert variant="warning">
            Sei sicuro di voler <strong>eliminare il tuo account</strong>? Questa azione è irreversibile.
          </Alert>

          <Button
            variant="danger"
            onClick={handleDeleteUser}
            disabled={isDeleting}
            className="w-100"
          >
            {isDeleting ? (
              <>
                <Spinner animation="border" size="sm" role="status" className="me-2" />
                Eliminazione in corso...
              </>
            ) : (
              'Elimina Account'
            )}
          </Button>
        </>
      )}
    </Container>
  );
};

export default DeleteUser;
