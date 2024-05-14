'use client';

import useFetchedState from '@/hooks/useFetchedState';
import { Notification } from '@/types/data';
import { deleteData } from '@/utils/fetching';
import dynamic from 'next/dynamic';
import { useCallback, useState } from 'react';
import toast from 'react-hot-toast';
import IconBell from 'public/icon/bell.svg';

const BottomSheetNotice = dynamic(() => import('./BottomSheetNotice'), { ssr: false });

const Notice = () => {
  const [open, setOpen] = useState(false);

  const toggleByClick = useCallback(() => {
    setOpen((prev) => !prev);
  }, []);

  const { state: notificationData, setState } = useFetchedState<Notification[]>({
    init: [],
    path: '/user/notification',
    deps: [],
  });
  const isEmpty = !notificationData?.length;

  const deleteByClick = (deleteId?: string) => async () => {
    try {
      if (isEmpty) {
        return;
      }

      let body;
      if (deleteId) {
        body = { deleteId };
        await deleteData({ path: '/user/notification', body });
        setState((prev) => prev.filter((n) => n._id !== deleteId));
      } else {
        body = { all: true };
        await deleteData({ path: '/user/notification', body });
        setState([]);
      }
      toast.success('알림 삭제 완료');
    } catch (e) {
      console.error(e);
      toast.error('다시 시도해 주십시오.');
    }
  };
  return (
    <>
      <button onClick={toggleByClick} className="relative">
        <div className={`${isEmpty || 'animate-bell'}`}>
          <IconBell />
        </div>
        {isEmpty || (
          <div className="flex-center absolute -right-24 top-0 h-24 w-24 animate-fadeIn rounded-full bg-orange text-14 font-bold text-black-100">
            {notificationData.length}
          </div>
        )}
      </button>
      {open && <BottomSheetNotice toggleByClick={toggleByClick} data={notificationData} isEmpty={isEmpty} deleteByClick={deleteByClick} />}
    </>
  );
};
export default Notice;
