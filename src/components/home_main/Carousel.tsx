'use client';

import useDotButton from '@/hooks/useDotButton';
import { CarouselData } from '@/types/data';
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
  data: CarouselData[];
}

const Carousel = ({ data }: Props) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 5000 })]);
  const indicate = useDotButton(emblaApi);

  return (
    <section className="relative mb-20 w-full px-40" aria-label="슬라이드: 이용 방법과 추천 제품">
      <div ref={emblaRef} className="overflow-hidden rounded-md bg-white shadow-lg">
        <CarouselSlide data={data} {...indicate} />
      </div>
      <div className="flex-center absolute -bottom-16 left-1/2 mt-4 w-4/5 -translate-x-1/2 -translate-y-1/2 gap-20 px-40">
        <CarouselIndicator data={data} {...indicate} />
      </div>
    </section>
  );
};
export default Carousel;

interface SlideProps {
  data: CarouselData[];
  selectedIndex: number;
}

const CarouselSlide = ({ data }: SlideProps) => {
  return (
    <div className="flex h-200" role="marquee">
      {data.map((data, i, arr) => (
        <Link
          href={data.href}
          key={i}
          className="relative flex w-full flex-shrink-0 items-end p-28"
          aria-label={`${arr.length}번째 중 ${i + 1}번째 슬라이드: ${data.title}로 이동`}
        >
          <Image fill priority sizes="(min-width: 500px) 500px, 250px" src={data.imageUrl} alt="" className="object-cover" aria-hidden />
          <h2 className="z-10 text-24 font-bold">{data.title}</h2>
        </Link>
      ))}
    </div>
  );
};

interface IndicatorProps extends SlideProps {
  onDotButtonClick: (index: number) => void;
}

const CarouselIndicator = ({ data, selectedIndex, onDotButtonClick }: IndicatorProps) => {
  return data.map((_, index) => (
    <button
      key={index}
      onClick={() => onDotButtonClick(index)}
      className={`h-[0.6rem] rounded-full transition-all ${index === selectedIndex ? 'basis-100 bg-black-80' : 'basis-32 bg-black-40'}`}
      aria-current={index === selectedIndex}
      aria-label={`${index}번째 슬라이드 바로가기`}
    />
  ));
};
