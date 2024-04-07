import _ from 'lodash';
import Image from 'next/image';
import Link from 'next/link';
import BaseIcon from '@/components/common/BaseIcon';
import ItemRating from '@/components/common/ItemRating';
import InformationContent from '@/components/doc_main/InfomationContent';
import InformationTable from '@/components/doc_main/InformationTable';
import InformationRow from '@/components/doc_main/informationRow';
import { CATEGORY } from './../../constants/category';

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

const MOCK_DOC: { [key: string]: any } = {
  id: '1',
  title: '풀무원',
  imageUrl: '/image/sample.png',
  hashtag: ['#웃어', '#좋아'],
  rating: 33,
  caution: ['밀', '대두'],
  category: ['편의점', '마트', '주간 조회수', '영화관', '서점'],
  description:
    '맛있어요.맛있어요.맛있어요.맛있어요.맛있어요.맛있어요.맛있어요.맛있어요.맛있어요.맛있어요.맛있어요.맛있어요.맛있어요.맛있어요.맛있어요.맛있어요.맛있어요.맛있어요.맛있어요.맛있어요.맛있어요.맛있어요.맛있어요.맛있어요.맛있어요.맛있어요.',
};
