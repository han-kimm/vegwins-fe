import { Fragment } from 'react';

interface Props {
  title?: string;
  description?: string;
  imageUrl?: string;
}

const MetaTag = ({ title, description, imageUrl }: Props) => {
  return (
    <>
      {['og', 'twitter'].map((str) => (
        <Fragment key={str}>
          <meta property={`${str}:title`} content={title ? `${title} | 비긴즈` : '비긴즈'} />
          <meta
            property={`${str}:description`}
            content={description || '편의점과 마트 등 일상의 공간에 있는 비건, 제로웨이스트, 저탄소, 친환경 제품들을 소개합니다.'}
          />
          <meta property={`${str}:image`} content={imageUrl || '/image/default.webp'} />
        </Fragment>
      ))}

      <meta property="og:url" content="vegwins.com" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="비긴즈" />
      <meta property="og:locale" content="ko" />
    </>
  );
};

export default MetaTag;
