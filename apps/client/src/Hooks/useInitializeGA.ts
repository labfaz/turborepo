import { useEffect } from 'react';
import ReactGA from 'react-ga4';

export const useGoogleAnalytics = () => {
  useEffect(() => {
    // eslint-disable-next-line @cspell/spellchecker
    ReactGA.initialize('G-GFFT7B8KX0');
  }, []);
};

export default useGoogleAnalytics;
