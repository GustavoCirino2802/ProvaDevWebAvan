'use client';

import { useState } from 'react';
import { Box, Button, Container, TextField, Typography, Paper } from '@mui/material';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  function efetuarLogin(e: React.FormEvent) {
    e.preventDefault();
    console.log('Email:', email, 'Senha:', senha);
  }

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ padding: 4, mt: 8 }}>
        {/* Título */}
        <Typography variant="h5" component="h1" gutterBottom>
          Login
        </Typography>

        {/* Formulário */}
        <Box component="form" onSubmit={efetuarLogin} noValidate autoComplete="off">
          <TextField
            fullWidth
            margin="normal"
            label="E-mail"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Senha"
            type="password"
            required
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
          <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
            Entrar
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}