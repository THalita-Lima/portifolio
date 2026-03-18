import { Box, Container, Grid, Typography } from '@mui/material'
import ProjectCard from './ProjectCard'
import FolderOpenIcon from '@mui/icons-material/FolderOpen'

const projects = [
  {
    id: 1,
    image: '/img/cachoro.png',
    title: 'Loja Pet',
    description: 'Sistema de controle de estoque completo para gerenciar entrada e saída de produtos. Desenvolvido com foco em usabilidade e eficiência operacional.',
    link: '#'
  },
  {
    id: 2,
    image: '/img/estetica.png',
    title: 'Clínica de Estética',
    description: 'Plataforma de controle e agendamento de serviços. Sistema que verifica disponibilidade de profissionais e gerencia procedimentos de forma inteligente.',
    link: '#'
  }
]

export default function Projects() {
  return (
    <Box
      id="projetos"
      sx={{
        py: { xs: 6, md: 10 },
        background: 'linear-gradient(135deg, #f5f5f5 0%, #fff 100%)',
        position: 'relative',
      }}
    >
      <Container maxWidth="lg">
        {/* Header */}
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1, mb: 2 }}>
            <FolderOpenIcon sx={{ color: '#E91E63', fontSize: '2rem' }} />
            <Typography
              variant="overline"
              sx={{
                color: '#E91E63',
                fontWeight: 700,
                fontSize: '0.95rem',
                letterSpacing: '1px',
              }}
            >
              Meus Projetos
            </Typography>
          </Box>

          <Typography
            variant="h2"
            sx={{
              fontWeight: 800,
              color: '#333',
              mb: 2,
              fontSize: { xs: '2rem', md: '3rem' },
            }}
          >
            Projetos em Destaque
          </Typography>

          <Typography
            variant="h6"
            sx={{
              color: '#666',
              fontWeight: 400,
              maxWidth: '600px',
              mx: 'auto',
              fontSize: '1.1rem',
            }}
          >
            Aqui estão alguns dos projetos que desenvolvi com dedicação e criatividade
          </Typography>
        </Box>

        {/* Projects Grid */}
        <Grid container spacing={3}>
          {projects.map(project => (
            <Grid size={{ xs: 12, md: 6 }} key={project.id}>
              <ProjectCard
                image={project.image}
                title={project.title}
                description={project.description}
                link={project.link}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}
