import { useEffect, useState } from 'react';

export const useCurrentViewport = () => {
  const [width, setWidth] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setWidth((prevState) => ({ ...prevState, x: window.screen.width }));

    window.addEventListener('resize', () => {
      setWidth((prevState) => ({ ...prevState, x: window.screen.width }));
    });

    return () => window.removeEventListener('resize', () => null);
  }, []);

  return width;
};
