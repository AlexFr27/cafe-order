import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import { AppRoutes } from './routes/routes';
import { Layout } from './components/Layout';

const theme = createTheme({
  palette: {
    primary: { main: '#6D4C41' },   // теплый коричневый
    secondary: { main: '#FFB74D' }  // светлый янтарный
  },
  typography: {
    h4: { fontWeight: 600 },
    button: { textTransform: 'none' }
  },
  components: {
    MuiCard: { defaultProps: { elevation: 3 }, styleOverrides: { root: { borderRadius: 16 } } },
    MuiButton: { styleOverrides: { root: { borderRadius: 8 } } }
  }
});

export const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <BrowserRouter>
      <Layout>
        <AppRoutes />
      </Layout>
    </BrowserRouter>
  </ThemeProvider>
);