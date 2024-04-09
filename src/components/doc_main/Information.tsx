import { MockDoc } from '@/constants/mockDoc';
import InformationContent from '@/components/doc_main/InformationContent';
import InformationTable from '@/components/doc_main/InformationTable';
import InformationRow from '@/components/doc_main/informationRow';

interface Props {
  data: { [key: string]: string | Array<string> };
}
const Information = ({ data }: Props) => {
  return (
    <InformationTable>
      {Object.keys(LABEL).map((label) => (
        <InformationRow key={label} label={LABEL[label]}>
          <InformationContent label={LABEL[label]} value={data[label]} />
        </InformationRow>
      ))}
    </InformationTable>
  );
};

export default Information;

const LABEL: { [key: string]: string } = {
  imageUrl: '',
  title: '제품명',
  caution: '주의점',
  category: '카테고리',
  hashtag: '해시태그',
  description: '설명',
};
