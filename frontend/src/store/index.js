import { proxy } from 'valtio';

const state = proxy({
  intro: true,
  color: '#C3AA8A',
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: './craft3d.png',
  fullDecal: './craft3d.png',
});

export default state;