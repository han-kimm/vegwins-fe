import { LABEL } from '@/constants/default';
import { MockDoc } from '@/constants/mockDoc';
import InformationContent from '@/components/paper_main/InformationContent';
import InformationTable from '@/components/paper_main/InformationTable';
import InformationRow from '@/components/paper_main/informationRow';

interface Props {
  data: MockDoc;
}
const Information = ({ data }: Props) => {
  return (
    <InformationTable>
      {Object.keys(LABEL).map((label) => (
        <InformationRow key={label} label={LABEL[label]}>
          <InformationContent label={LABEL[label]} value={data[label as keyof MockDoc] as any} />
        </InformationRow>
      ))}
    </InformationTable>
  );
};

export default Information;
