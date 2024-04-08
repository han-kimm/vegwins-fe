import { MOCK_DOC } from '@/constants/mockDoc';
import InformationContent from '@/components/doc_main/InformationContent';
import InformationTable from '@/components/doc_main/InformationTable';
import InformationRow from '@/components/doc_main/informationRow';

interface Props {
  docId: string;
}
const Information = ({ docId }: Props) => {
  // Data fetching...
  return (
    <InformationTable>
      {Object.keys(LABEL).map((label) => (
        <InformationRow key={label} label={LABEL[label]}>
          <InformationContent label={LABEL[label]} value={MOCK_DOC[label]} />
        </InformationRow>
      ))}
    </InformationTable>
  );
};

export default Information;

const LABEL: { [key: string]: string } = {
  imageUrl: '',
  title: '제품명',
  caution: '알레르기 유발성분',
  category: '카테고리',
  hashtag: '해시태그',
  description: '설명',
};
