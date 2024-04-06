import { useState } from 'react';

const useSlide = () => {
  const [navigation, setNavigation] = useState(1);

  const handleNext = () => {
    setNavigation((prev) => prev + 1);
    if (navigation === 3) {
      return;
    }
  };
  const handlePrev = () => {
    setNavigation((prev) => prev - 1);
    if (navigation === 1) {
      return;
    }
  };

  return [handleNext, handlePrev, navigation];
};

export default useSlide;
