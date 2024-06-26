import { Notification } from '@/types/data';
import { timeDiff } from '@/utils/timeDiff';
import Link from 'next/link';
import BottomSheet from '@/components/common/BottomSheet';

interface Props {
  toggleByClick: () => void;
  data: Notification[];
  isEmpty: boolean;
  deleteByClick: (id?: string) => () => void;
}

const BottomSheetNotice = ({ toggleByClick, data, isEmpty, deleteByClick }: Props) => {
  return (
    <BottomSheet toggleByClick={toggleByClick}>
      <div className="mb-20 flex flex-col gap-20 px-16">
        <h3 className="text-20 font-bold">알림 목록</h3>
        <div className="scrollbar flex max-h-200 min-h-80 flex-col overflow-y-scroll pr-12">
          {isEmpty ? (
            <p className="m-auto text-16">도착한 알림이 없습니다.</p>
          ) : (
            data?.map((data, i) => (
              <div key={data._id} className={`${!!i && 'border-t border-black-40'} flex justify-between py-20`}>
                <Link href={`/paper/${data.paper._id}`} onClick={deleteByClick(data._id)}>
                  <h4 className="mb-4 text-16">
                    <strong>{data.paper.title}</strong>에서 <strong>{makeLabelText(data.type)}</strong> 알림
                  </h4>
                  {data.comment && <p className="text-14">{data.comment.content}</p>}
                </Link>
                <span className="shrink-0 text-14">{timeDiff(data.createdAt)}</span>
              </div>
            ))
          )}
        </div>
        <button
          onClick={deleteByClick()}
          disabled={isEmpty}
          className={`${isEmpty || 'transform-active bg-black-100 text-white'} rounded-full bg-black-0 px-12 py-4 text-16 font-bold `}
        >
          모두 삭제
        </button>
      </div>
    </BottomSheet>
  );
};
export default BottomSheetNotice;

const makeLabelText = (text: string) => {
  switch (text) {
    case 'comment':
      return '댓글';
    case 'recomment':
      return '답글';
    case 'view':
      return '조회수 100회 달성';
    case 'rating':
      return '10명이 평가한 문서';
  }
};
