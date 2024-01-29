import React from 'react';
type FadeProps = {
  direction: 'left' | 'right' | 'top' | 'bottom';
};
function Fade({ direction }: FadeProps) {
  const b = { bottom: '0px', width: '100%', height: '100px' };
  const t = { top: '0px', width: '100%', height: '100px' };
  const l = { left: '0px', width: '100px', height: '100%' };
  const r = { right: '0px', width: '100px', height: '100%' };

  let vector = {};
  switch (direction) {
    case 'bottom':
      vector = b;
      break;
    case 'top':
      vector = t;
      break;
    case 'left':
      vector = l;
      break;
    case 'right':
      vector = r;
      break;
    default:
      break;
  }
  const styles = {
    position: 'absolute' as 'absolute', // TS bug from issue TS2322
    display: 'block',
    ...vector,
    backgroundImage: `linear-gradient(to ${direction},rgba(0, 0, 0, 0),rgba(100, 100, 100, 0.9) 100%)`,
  };

  return <div style={styles}>Fade</div>;
}

export default Fade;
