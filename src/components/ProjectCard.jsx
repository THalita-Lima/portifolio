import { Card, CardMedia, CardContent, Typography, Button, Box } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

export default function ProjectCard({ image, title, description, link }) {
  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '16px',
        overflow: 'hidden',
        boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        '&:hover': {
          transform: 'translateY(-8px)',
          boxShadow: '0 16px 48px rgba(102, 126, 234, 0.25)',
          '& .projectImage': {
            transform: 'scale(1.08)',
          },
          '& .projectButton': {
            backgroundColor: '#764ba2',
            paddingRight: '24px',
          },
        },
        background: 'linear-gradient(135deg, #fff 0%, #f8f9ff 100%)',
      }}
    >
      {/* Image Container */}
      <Box
        sx={{
          overflow: 'hidden',
          height: '180px',
          position: 'relative',
          backgroundColor: '#f0f0f0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '12px',
        }}
      >
        <CardMedia
          component="img"
          image={image}
          alt={title}
          className="projectImage"
          sx={{
            height: '100%',
            width: '100%',
            objectFit: 'contain',
            transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)',
            pointerEvents: 'none',
          }}
        />
      </Box>

      {/* Content */}
      <CardContent sx={{ flexGrow: 1, pb: 2 }}>
        <Typography
          variant="h6"
          sx={{
            fontWeight: 700,
            mb: 1.5,
            color: '#333',
            fontSize: '1.25rem',
          }}
        >
          {title}
        </Typography>

        <Typography
          variant="body2"
          sx={{
            color: '#666',
            lineHeight: 1.6,
            mb: 2,
            fontSize: '0.95rem',
          }}
        >
          {description}
        </Typography>
      </CardContent>

      {/* Button */}
      <Box sx={{ px: 2, pb: 2 }}>
        <Button
          className="projectButton"
          variant="contained"
          fullWidth
          href={link || '#'}
          endIcon={<ArrowForwardIcon />}
          sx={{
            background: 'linear-gradient(135deg, #E91E63 0%, #7B1FA2 100%)',
            color: '#fff',
            fontWeight: 700,
            padding: '10px 16px',
            borderRadius: '8px',
            transition: 'all 0.3s ease',
            textTransform: 'capitalize',
            fontSize: '1rem',
          }}
        >
          Ver Projeto
        </Button>
      </Box>
    </Card>
  )
}
