import IconAlch from 'public/icon/place-alch.svg';
import IconBake from 'public/icon/place-bake.svg';
import IconBook from 'public/icon/place-book.svg';
import IconCafe from 'public/icon/place-cafe.svg';
import IconConv from 'public/icon/place-conv.svg';
import IconCosm from 'public/icon/place-cosm.svg';
import IconExer from 'public/icon/place-exer.svg';
import IconInst from 'public/icon/place-inst.svg';
import IconMart from 'public/icon/place-mart.svg';
import IconMovi from 'public/icon/place-movi.svg';
import IconView from 'public/icon/place-view.svg';
import IconRate from 'public/icon/rate-2.svg';

export const CATEGORY = {
  '주간 조회수': IconView,
  '좋은 평가': IconRate,
  편의점: IconConv,
  마트: IconMart,
  서점: IconBook,
  영화관: IconMovi,
  드럭스토어: IconCosm,
  빵집: IconBake,
  카페: IconCafe,
  패스트푸드: IconInst,
  술집: IconAlch,
  운동: IconExer,
};

export const CATEGORY_KEY = Object.keys(CATEGORY) as Array<keyof typeof CATEGORY>;
