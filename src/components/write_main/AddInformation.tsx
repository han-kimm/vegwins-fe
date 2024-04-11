import { LABEL, LABEL_WRITE } from '@/constants/default';
import InformationRow from '@/components/doc_main/informationRow';

const AddInformation = () => {
  return (
    <div className="text-20 font-medium">
      {LABEL_WRITE.map((label) => (
        <InformationRow key={label} label={LABEL[label]}>
          <div></div>
        </InformationRow>
      ))}
    </div>
  );
};
export default AddInformation;
