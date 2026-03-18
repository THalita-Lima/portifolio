import {
  Box,
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Chip,
} from '@mui/material'
import CodeIcon from '@mui/icons-material/Code'
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment'

export default function About() {
  const skills = ['React', 'JavaScript', 'CSS', 'HTML', 'C#', 'Web Design']

  return (
    <Box
      id="sobre"
      sx={{
        py: { xs: 4, md: 8 },
        background: 'linear-gradient(180deg, #f5f5f5 0%, #fff 100%)',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          {/* Imagem */}
          <Grid xs={12} md={5}>
            <Card
              sx={{
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
                transform: 'perspective(1000px) rotateY(-5deg)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'perspective(1000px) rotateY(0deg)',
                  boxShadow: '0 20px 60px rgba(102, 126, 234, 0.2)',
                },
              }}
            >
              <CardMedia
                component="img"
                image="/img/talita.png"
                alt="Talita Lima de Andrade"
                sx={{
                  width: '100%',
                  height: 'auto',
                  objectFit: 'cover',
                }}
              />
            </Card>
          </Grid>

          {/* Conteúdo */}
          <Grid xs={12} md={7}>
            <Box sx={{ pl: { md: 4 } }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                <CodeIcon sx={{ color: '#E91E63', fontSize: '1.8rem' }} />
                <Typography variant="overline" sx={{ color: '#E91E63', fontWeight: 700 }}>
                  Desenvolvedor Front-end
                </Typography>
              </Box>

              <Typography
                variant="h3"
                sx={{
                  fontWeight: 800,
                  mb: 3,
                  color: '#333',
                  fontSize: { xs: '2rem', md: '2.5rem' },
                }}
              >
                Talita Lima de Andrade
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  fontSize: '1.05rem',
                  lineHeight: 1.8,
                  color: '#555',
                  mb: 3,
                }}
              >
                Sou estudante de <strong>Análise e Desenvolvimento de Sistemas</strong> (4º semestre), com foco em desenvolvimento <strong>Front-End React.js</strong>.
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  fontSize: '1.05rem',
                  lineHeight: 1.8,
                  color: '#555',
                  mb: 3,
                }}
              >
                Possuo experiência prática no desenvolvimento de <strong>aplicações web</strong> baseadas em demandas reais de gestão, incluindo sistemas de agendamento, cadastro de usuários e controle de serviços, aplicando conceitos de <strong>Programação Orientada a Objetos, CRUD</strong> e integração com banco de dados <strong>MySQL</strong>.
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  fontSize: '1.05rem',
                  lineHeight: 1.8,
                  color: '#555',
                  mb: 3,
                }}
              >
                Tenho conhecimentos em <strong>JavaScript, HTML, CSS, React.js, C#, .NET</strong> e versionamento com <strong>GitHub</strong>, desenvolvendo projetos para simular ambientes profissionais e fortalecer meu portfólio.
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  fontSize: '1.05rem',
                  lineHeight: 1.8,
                  color: '#555',
                  mb: 4,
                }}
              >
                Atualmente, busco uma oportunidade de estágio em desenvolvimento para aplicar e aprimorar minhas habilidades técnicas, contribuindo com soluções eficientes e evoluindo continuamente na área de tecnologia.
              </Typography>

              {/* Skills */}
              <Box sx={{ mb: 3 }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    mb: 2,
                    color: '#333',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                  }}
                >
                  <LocalFireDepartmentIcon sx={{ color: '#ff6b6b' }} />
                  Principais Tecnologias
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5 }}>
                  {skills.map((skill, index) => (
                    <Chip
                      key={index}
                      label={skill}
                      sx={{
                        backgroundColor: '#6D0E7A',
                        color: '#fff',
                        fontWeight: 600,
                        padding: '8px',
                        '& .MuiChip-label': {
                          padding: '0 12px',
                        },
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          transform: 'translateY(-3px)',
                          boxShadow: '0 8px 20px rgba(109, 14, 122, 0.4)',
                        },
                      }}
                    />
                  ))}
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
