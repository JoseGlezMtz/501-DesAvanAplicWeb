import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Login from '../../class2/A01028517/login'; // Asegúrate de que la ruta sea correcta
import '@testing-library/jest-dom';

test('renderiza el formulario de login correctamente', () => {
  render(<Login onLogin={() => {}} />);

  expect(screen.getByText('Login')).toBeInTheDocument();
  expect(screen.getByPlaceholderText('Ingresa tu usuario')).toBeInTheDocument();
  expect(screen.getByPlaceholderText('Ingresa tu contraseña')).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /iniciar sesión/i })).toBeInTheDocument();
});

test('muestra el alert al enviar el formulario', () => {
  window.alert = jest.fn(); // mock del alert

  render(<Login onLogin={() => {}} />);

  fireEvent.change(screen.getByPlaceholderText('Ingresa tu usuario'), {
    target: { value: 'testuser' },
  });
  fireEvent.change(screen.getByPlaceholderText('Ingresa tu contraseña'), {
    target: { value: 'testpass' },
  });

  fireEvent.click(screen.getByRole('button', { name: /iniciar sesión/i }));

  expect(window.alert).toHaveBeenCalledWith('Usuario: testuser\nContraseña: testpass');
});
