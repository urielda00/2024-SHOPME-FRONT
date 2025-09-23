import * as React from 'react';
import { IconButton } from '@mui/material';
import KeyboardDoubleArrowUpOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowUpOutlined';

const buttonStyle: React.CSSProperties = {
  position: 'fixed',
  bottom: '10px',
  color: 'black',
  left: '30px',
};

const ScrollToTop: React.FC = () => {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!visible) return null;

  return (
    <IconButton style={buttonStyle} onClick={scrollToTop}>
      <KeyboardDoubleArrowUpOutlinedIcon fontSize="large" />
    </IconButton>
  );
};

export default ScrollToTop;
