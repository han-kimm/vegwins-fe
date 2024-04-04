'use client';

import useEmblaCarousel from 'embla-carousel-react';
import { useMemo } from 'react';
import { useDotButton } from '@/components/home_hero/HeroDotButton';

const LENGTH = 5;

const Hero = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const { selectedIndex, onDotButtonClick } = useDotButton(emblaApi);

  const mock = useMemo(
    () =>
      Array(LENGTH)
        .fill('')
        .map((_, i) => (i + 1) / LENGTH),
    [],
  );

  return (
    <section className="relative mb-20 w-full px-40" aria-label="슬라이드: 이용 방법과 추천 제품">
      <div id="viewport" ref={emblaRef} className="overflow-hidden rounded-md bg-white shadow-sm">
        <div id="slides" className="flex h-200" role="group">
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
      <div id="indicators" className="flex-center absolute -bottom-16 left-1/2 mt-4 w-4/5 -translate-x-1/2 -translate-y-1/2 gap-20 px-40">
        {mock.map((_, index) => (
          <button
            key={index}
            onClick={() => onDotButtonClick(index)}
            className={`h-[0.6rem] rounded-full transition-all ${index === selectedIndex ? 'basis-100 bg-black-80' : 'basis-32 bg-black-40'}`}
            aria-current={index === selectedIndex}
          />
        ))}
      </div>
    </section>
  );
};
export default Hero;
