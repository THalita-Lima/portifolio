import { ThemeProvider, createTheme, CssBaseline } from '@mui/material'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Footer from './components/Footer'

const theme = createTheme({
  palette: {
    primary: {
      main: '#E91E63',
    },
    secondary: {
      main: '#7B1FA2',
    },
    background: {
      default: '#fff',
      paper: '#f8f9ff',
    },
  },
  typography: {
    fontFamily: "'Catamaran', sans-serif",
    h1: {
      fontWeight: 800,
    },
    h2: {
      fontWeight: 800,
    },
    h3: {
      fontWeight: 700,
    },
    h6: {
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'capitalize',
          fontWeight: 600,
          borderRadius: '8px',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '16px',
        },
      },
    },
  },
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Hero />
      <About />
      <Projects />
      <Footer />
    </ThemeProvider>
  )
}

export default App
