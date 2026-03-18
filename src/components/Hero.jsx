import { Box, Container, Typography, Button } from '@mui/material'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'

export default function Hero() {
  return (
    <Box
      id="home"
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #E91E63 0%, #7B1FA2 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          top: '-100px',
          right: '-100px',
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          backgroundColor: 'rgba(255, 255, 255, 0.05)',
          bottom: '-50px',
          left: '-50px',
        },
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 800,
              color: '#fff',
              marginBottom: 2,
              fontSize: { xs: '2.5rem', md: '4rem' },
              lineHeight: 1.2,
            }}
          >
            Bem-vindo ao meu <span style={{ color: '#00d4ff' }}>Portfólio</span>
          </Typography>

          <Typography
            variant="h5"
            sx={{
              color: 'rgba(255, 255, 255, 0.9)',
              marginBottom: 4,
              fontWeight: 300,
              fontSize: { xs: '1.1rem', md: '1.3rem' },
            }}
          >
            Desenvolvedora Front-end | Programadora | Inovadora
          </Typography>

          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button
              variant="contained"
              size="large"
              href="#projetos"
              sx={{
                backgroundColor: '#00d4ff',
                color: '#333',
                fontWeight: 700,
                padding: '12px 40px',
                borderRadius: '50px',
                '&:hover': {
                  backgroundColor: '#00b8d4',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 8px 20px rgba(0, 212, 255, 0.4)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              Ver Projetos
            </Button>

            <Button
              variant="outlined"
              size="large"
              href="#contato"
              sx={{
                borderColor: '#fff',
                color: '#fff',
                fontWeight: 700,
                padding: '12px 40px',
                borderRadius: '50px',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  transform: 'translateY(-2px)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              Contato
            </Button>
          </Box>
        </Box>
      </Container>

      {/* Scroll Arrow */}
      <Box
        sx={{
          position: 'absolute',
          bottom: '30px',
          left: '50%',
          transform: 'translateX(-50%)',
          animation: 'bounce 2s infinite',
          '@keyframes bounce': {
            '0%, 100%': { transform: 'translateX(-50%) translateY(0)' },
            '50%': { transform: 'translateX(-50%) translateY(-10px)' },
          },
        }}
      >
        <ArrowDownwardIcon sx={{ color: '#fff', fontSize: '2rem' }} />
      </Box>
    </Box>
  )
}
