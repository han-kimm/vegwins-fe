'use client';

import useEmblaCarousel from 'embla-carousel-react';
import { useMemo } from 'react';
import { useDotButton } from '@/components/HeroDotButton';

const LENGTH = 8;

const Hero = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const { selectedIndex, onDotButtonClick } = useDotButton(emblaApi);

  const mock = useMemo(
    () =>
      Array(LENGTH)
        .fill('')
        .map((_, i, arr) => (i + 1) / LENGTH),
    [],
  );

  return (
    <section className="relative w-full rounded-md shadow-sm" aria-label="이용 방법과 검색어 추천 슬라이드">
      <div id="viewport" ref={emblaRef} className="w-full overflow-hidden rounded-md">
        <div id="container" className="flex h-200" role="group">
          {mock.map((v, i, arr) => (
            <article
              key={i}
              className={`flex-center w-full flex-shrink-0 text-24 text-orange bg-black-${v * 20}`}
              aria-label={`${arr.length}번째 중 ${i + 1}번째 슬라이드`}
              aria-hidden={i === selectedIndex ? false : true}
            >
              {v}
            </article>
          ))}
        </div>
      </div>
      <div id="dots" className="flex-center absolute -bottom-16 left-1/2 mt-4 w-4/5 -translate-x-1/2 -translate-y-1/2 gap-20">
        {mock.map((_, index) => (
          <button
            key={index}
            onClick={() => onDotButtonClick(index)}
            className={`h-[0.6rem] rounded-full transition-all ${index === selectedIndex ? 'w-120 bg-black-80' : 'w-32 bg-black-40'}`}
            aria-current={index === selectedIndex}
          />
        ))}
      </div>
    </section>
  );
};
export default Hero;
