import { LABEL, LABEL_KEY } from '@/constants/default';
import { Paper } from '@/types/data';
import InformationContent from '@/components/paper_main/InformationContent';
import InformationTable from '@/components/paper_main/InformationTable';
import InformationRow from '@/components/paper_main/informationRow';

interface Props {
  data: Paper;
}
const Information = ({ data }: Props) => {
  return (
    <InformationTable>
      {LABEL_KEY.map((label) => (
        <InformationRow key={label} label={LABEL[label]}>
          <InformationContent label={LABEL[label]} value={data[label]} />
        </InformationRow>
      ))}
    </InformationTable>
  );
};

export default Information;
