'use client';

import useBottomSheet from '@/hooks/useBottomSheet';
import useFetchedState from '@/hooks/useFetchedState';
import { Notification } from '@/types/data';
import { timeDiff } from '@/utils/timeDiff';
import Link from 'next/link';
import IconBell from 'public/icon/bell.svg';

const Notice = () => {
  const { toggleByClick, BottomSheet } = useBottomSheet();
  const { state: notificationData } = useFetchedState<Notification[]>({ init: [], path: '/user/notification', cache: 'no-cache', deps: [] });
  return (
    <>
      <button onClick={toggleByClick} className="relative">
        <IconBell />
        <div className="flex-center absolute -right-24 top-0 h-24 w-24 rounded-full bg-orange text-14 font-bold text-black-100">
          {notificationData.length}
        </div>
      </button>
      <BottomSheet>
        <div className="mb-20 flex flex-col gap-20 px-16">
          <h3 className="text-20 font-bold">알림 목록</h3>
          <div className="scrollbar flex h-200 flex-col overflow-y-scroll pr-12">
            {notificationData.map((data, i) => (
              <div key={data._id} className={`${!!i && 'border-t border-black-40'} flex justify-between py-20`}>
                <Link href={`/paper/${data.paper._id}`}>
                  <h4 className="mb-4 text-16">
                    <strong>{data.paper.title}</strong>에서 <strong>{makeLabelText(data.type)}</strong> 알림
                  </h4>
                  {data.comment && <p className="text-14">{data.comment.content}</p>}
                </Link>
                <span className="text-14">{timeDiff(data.createdAt)}</span>
              </div>
            ))}
          </div>
          <button className="transform-active rounded-full bg-black-100 px-12 py-4 text-14 font-bold text-white">모두 삭제</button>
        </div>
      </BottomSheet>
    </>
  );
};
export default Notice;

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
