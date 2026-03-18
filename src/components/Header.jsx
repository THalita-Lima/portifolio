import { useState } from 'react'
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  IconButton,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const closeMenu = () => {
    setMenuOpen(false)
  }

  const handleNavClick = (href) => {
    closeMenu()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Projetos', href: '#projetos' },
    { label: 'Fale comigo', href: '#contato' },
  ]

  return (
    <AppBar 
      position="sticky" 
      sx={{
        background: 'linear-gradient(135deg, #E91E63 0%, #7B1FA2 100%)',
        boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
          <Typography
            variant="h6"
            onClick={() => handleNavClick('#home')}
            sx={{
              fontWeight: 700,
              fontSize: '1.5rem',
              background: 'linear-gradient(135deg, #fff 0%, #e0e0e0 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              cursor: 'pointer',
              '&:hover': { opacity: 0.8 },
              transition: 'opacity 0.3s',
            }}
          >
            Portfó<span style={{ color: '#fff' }}>lio</span>
          </Typography>

          {/* Desktop Menu */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
            {navItems.map((item) => (
              <Button
                key={item.label}
                color="inherit"
                onClick={() => handleNavClick(item.href)}
                sx={{
                  textTransform: 'capitalize',
                  fontSize: '1rem',
                  fontWeight: 500,
                  position: 'relative',
                  cursor: 'pointer',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    width: '0',
                    height: '2px',
                    bottom: '0',
                    left: '0',
                    backgroundColor: '#fff',
                    transition: 'width 0.3s ease',
                  },
                  '&:hover::after': {
                    width: '100%',
                  },
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>

          {/* Mobile Menu Button */}
          <IconButton
            color="inherit"
            onClick={toggleMenu}
            sx={{ display: { xs: 'block', md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>

          {/* Mobile Drawer */}
          <Drawer
            anchor="right"
            open={menuOpen}
            onClose={closeMenu}
            PaperProps={{
              sx: {
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                width: '250px',
              },
            }}
          >
            <Box sx={{ p: 2, display: 'flex', justifyContent: 'flex-end' }}>
              <IconButton onClick={closeMenu} color="inherit">
                <CloseIcon />
              </IconButton>
            </Box>
            <List>
              {navItems.map((item) => (
                <ListItem key={item.label} disablePadding>
                  <ListItemButton
                    onClick={() => handleNavClick(item.href)}
                    sx={{
                      color: '#fff',
                      cursor: 'pointer',
                      '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      },
                    }}
                  >
                    <ListItemText primary={item.label} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Drawer>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
