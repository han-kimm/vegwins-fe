import { memo } from 'react';
import IconRecall from 'public/icon/recall.svg';
import IconSave from 'public/icon/save.svg';

interface Props {
  canSave: boolean;
  canRecall: boolean;
  handleSave: () => void;
  handleRecall: () => void;
}

const WriteSave = memo(function WriteSave({ canSave, canRecall, handleSave, handleRecall }: Props) {
  return (
    <div className="flex gap-20 text-18">
      <button
        type="button"
        onClick={() => handleSave()}
        disabled={!canSave}
        className={`${canSave ? 'transform-active border-black-80' : 'border-black-40 text-black-40'} flex-center grow gap-12 rounded-sm border py-12 font-bold`}
      >
        <IconSave />
        임시 저장
      </button>
      <button
        type="button"
        onClick={handleRecall}
        disabled={!canRecall}
        className={`${canRecall ? 'transform-active border-black-80' : 'border-black-40 text-black-40'} flex-center grow gap-12 rounded-sm border py-12 font-bold`}
      >
        <IconRecall />
        불러오기
      </button>
    </div>
  );
});
export default WriteSave;
