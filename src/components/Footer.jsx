import { Box, Container, Typography, IconButton, Stack, Divider } from '@mui/material'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import EmailIcon from '@mui/icons-material/Email'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'

const socialLinks = [
  {
    id: 1,
    name: 'LinkedIn',
    icon: LinkedInIcon,
    url: 'https://www.linkedin.com/in/talita-lima-de-andrade-6218151a7/',
  },
  {
    id: 2,
    name: 'WhatsApp',
    icon: WhatsAppIcon,
    url: 'https://wa.me/+5511913193732',
  },
  {
    id: 3,
    name: 'GitHub',
    icon: GitHubIcon,
    url: 'https://github.com/THalita-Lima',
  },
  {
    id: 4,
    name: 'Email',
    icon: EmailIcon,
    url: 'mailto:talita.lima@example.com',
  },
]

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <Box
      id="contato"
      component="footer"
      sx={{
        background: 'linear-gradient(135deg, #E91E63 0%, #7B1FA2 100%)',
        color: '#fff',
        pt: { xs: 6, md: 8 },
        pb: { xs: 4, md: 6 },
      }}
    >
      <Container maxWidth="lg">
        {/* Main Content */}
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 800,
              mb: 2,
              fontSize: { xs: '1.8rem', md: '2.5rem' },
            }}
          >
            Vamos Conversar?
          </Typography>

          <Typography
            variant="h6"
            sx={{
              fontWeight: 300,
              mb: 4,
              color: 'rgba(255, 255, 255, 0.9)',
              fontSize: '1.1rem',
            }}
          >
            Estou aberta a novas oportunidades e colaborações
          </Typography>
        </Box>

        {/* Social Links */}
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
          <Stack direction="row" spacing={2}>
            {socialLinks.map(link => {
              const Icon = link.icon
              return (
                <IconButton
                  key={link.id}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  sx={{
                    color: '#fff',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      backgroundColor: '#00d4ff',
                      color: '#333',
                      transform: 'translateY(-4px)',
                      boxShadow: '0 8px 20px rgba(0, 212, 255, 0.4)',
                    },
                  }}
                >
                  <Icon sx={{ fontSize: '1.5rem' }} />
                </IconButton>
              )
            })}
          </Stack>
        </Box>

        <Divider sx={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', my: 3 }} />

        {/* Footer Bottom */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 2,
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: 'rgba(255, 255, 255, 0.8)',
              fontSize: '0.95rem',
            }}
          >
            &copy; {new Date().getFullYear()} Talita Lima de Andrade. Todos os direitos reservados.
          </Typography>

          {/* Scroll to Top Button */}
          <IconButton
            onClick={handleScrollToTop}
            sx={{
              backgroundColor: '#00d4ff',
              color: '#333',
              '&:hover': {
                backgroundColor: '#00b8d4',
                transform: 'translateY(-2px)',
              },
              transition: 'all 0.3s ease',
            }}
          >
            <ArrowUpwardIcon />
          </IconButton>
        </Box>
      </Container>
    </Box>
  )
}
