import { CATEGORY } from '@/constants/category';
import { DEFAULT_IMAGE, LABEL, SP_CATEGORY, SP_KEYWORD } from '@/constants/default';
import Image from 'next/image';
import Link from 'next/link';
import IconBase from '@/components/common/IconBase';

const InformationContent = ({ label, value }: { label: string; value: string | string[] | undefined }) => {
  let SwitchedComponent;
  switch (label) {
    case LABEL.title:
      SwitchedComponent = <p className="text-20 font-bold">{value}</p>;
      break;
    case LABEL.category:
      if (typeof value === 'object') {
        SwitchedComponent = (
          <div className="flex flex-wrap gap-16">
            {value.map((v) => (
              <Link href={`/search?${SP_CATEGORY}=${v}`} key={v} className="transform-active">
                <IconBase key={v} name={v} render={CATEGORY[v]} fontSize={12} />
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
            {value.map((tag) => (
              <Link
                href={`/search?${SP_KEYWORD}=${encodeURIComponent(tag)}`}
                key={tag}
                className="transform-active shrink-0 rounded-full border border-black-100 px-8 active:bg-black-100 active:text-white"
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
    case LABEL.imageUrl:
      if (typeof value !== 'object') {
        SwitchedComponent = (
          <Image
            width={300}
            height={300}
            priority
            sizes="600px"
            src={value || DEFAULT_IMAGE}
            alt=""
            className="mx-auto rounded-md object-cover"
            aria-hidden={true}
          />
        );
      }
  }

  return SwitchedComponent;
};
export default InformationContent;
