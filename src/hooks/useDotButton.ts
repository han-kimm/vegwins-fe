import { EmblaCarouselType } from 'embla-carousel';
import { useCallback, useEffect, useState } from 'react';

type UseDotButtonType = {
  selectedIndex: number;
  onDotButtonClick: (index: number) => void;
};

const useDotButton = (emblaApi: EmblaCarouselType | undefined, onButtonClick?: (emblaApi: EmblaCarouselType) => void): UseDotButtonType => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onDotButtonClick = useCallback(
    (index: number) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(index);
      if (onButtonClick) onButtonClick(emblaApi);
    },
    [emblaApi, onButtonClick],
  );

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect(emblaApi);
    emblaApi.on('reInit', onSelect);
    emblaApi.on('select', onSelect);
  }, [emblaApi, onSelect]);

  return {
    selectedIndex,
    onDotButtonClick,
  };
};
export default useDotButton;
