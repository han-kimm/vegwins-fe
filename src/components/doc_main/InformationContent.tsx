import { CATEGORY } from '@/constants/category';
import Image from 'next/image';
import Link from 'next/link';
import BaseIcon from '@/components/common/BaseIcon';

const InformationContent = ({ label, value }: { label: string; value: string | number | Array<string> }) => {
  let SwitchedComponent;
  switch (label) {
    case '제품명':
      SwitchedComponent = <p className="text-24 font-bold">{value}</p>;
      break;
    case '알레르기 유발성분':
      if (typeof value === 'object') {
        SwitchedComponent = (
          <div className="flex gap-16 text-20 font-medium">
            {value.map((v) => (
              <span key={v}>{v}</span>
            ))}
          </div>
        );
      }
      break;
    case '카테고리':
      if (typeof value === 'object') {
        SwitchedComponent = (
          <div className="flex flex-wrap gap-16 text-black-80">
            {value.map((v) => (
              <Link href={`/search?category=${v}`} key={v}>
                <BaseIcon key={v} name={v} render={CATEGORY[v]} fontSize={12} />
              </Link>
            ))}
          </div>
        );
      }
      break;
    case '해시태그':
      if (typeof value === 'object') {
        SwitchedComponent = (
          <div className="flex flex-wrap gap-16 text-14 font-bold">
            {value.map((tag) => (
              <Link
                href={`/search?q=${encodeURIComponent(tag)}`}
                key={tag}
                className="shrink-0 rounded-full border border-black-40 px-8 active:bg-black-80"
              >
                {tag}
              </Link>
            ))}
          </div>
        );
      }
      break;
    case '설명':
      SwitchedComponent = <p className="whitespace-pre-wrap text-14 font-medium">{value}</p>;
      break;
    default:
      if (typeof value === 'string') {
        SwitchedComponent = (
          <Image
            width={300}
            height={300}
            priority
            sizes="300px"
            src={value ?? '/image/default.webp'}
            alt=""
            className="mx-auto object-cover"
            aria-hidden={true}
          />
        );
      }
  }

  return SwitchedComponent;
};
export default InformationContent;
