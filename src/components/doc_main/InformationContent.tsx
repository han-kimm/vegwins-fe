import { CATEGORY } from '@/constants/category';
import { LABEL } from '@/constants/default';
import { SP_CATEGORY, SP_KEYWORD } from '@/constants/sessionStorage';
import Image from 'next/image';
import Link from 'next/link';
import BaseIcon from '@/components/common/BaseIcon';

const InformationContent = ({ label, value }: { label: string; value: string | Array<string> }) => {
  let SwitchedComponent;
  switch (label) {
    case LABEL.title:
      SwitchedComponent = <p className="text-20 font-bold">{value}</p>;
      break;
    case LABEL.category:
      if (typeof value === 'object') {
        SwitchedComponent = (
          <div className="flex flex-wrap gap-16 text-black-80">
            {value.map((v) => (
              <Link href={`/search?${SP_CATEGORY}=${v}`} key={v} className="transform-active">
                <BaseIcon key={v} name={v} render={CATEGORY[v]} fontSize={12} />
              </Link>
            ))}
          </div>
        );
      }
      break;
    case LABEL.hashtag:
      if (typeof value === 'object') {
        SwitchedComponent = (
          <div className="flex flex-wrap gap-16 text-14 font-bold">
            {value.slice(0, 2).map((tag) => (
              <Link
                href={`/search?${SP_KEYWORD}=${encodeURIComponent(tag)}`}
                key={tag}
                className="transform-active shrink-0 rounded-full border border-black-40 px-8 active:bg-black-20"
              >
                {tag}
              </Link>
            ))}
          </div>
        );
      }
      break;
    case LABEL.description:
      SwitchedComponent = <p className="whitespace-pre-wrap text-14 font-medium">{value}</p>;
      break;
    default:
      if (typeof value === 'string') {
        SwitchedComponent = (
          <Image width={300} height={300} priority sizes="300px" src={value} alt="" className="mx-auto rounded-md object-cover" aria-hidden={true} />
        );
      }
  }

  return SwitchedComponent;
};
export default InformationContent;