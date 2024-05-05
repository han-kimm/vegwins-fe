import Link from 'next/link';
import IconGithub from 'public/icon/github.svg';
import IconInstagram from 'public/icon/insta.svg';

const Footer = () => {
  return (
    <>
      <p className="mb-12">
        <strong>비긴즈, Vegwins(Vegan wins)</strong>는 일상에서 채식 제품을 찾고, 채식 지향을 실천하기 위해 만들어졌습니다. 완벽하진 않아도 작은
        성공을 쌓아가면서, <strong>함께 나아가기</strong>를 지향합니다. <span></span>
      </p>
      <div className="flex gap-20">
        <span>han-kimm@2024</span>
        <Link href="https://www.instagram.com/hank1mm/" aria-label="개발자 인스타그램 바로가기">
          <IconInstagram />
        </Link>
        <Link href="https://github.com/han-kimm" aria-label="개발자 깃허브 바로가기">
          <IconGithub />
        </Link>
      </div>
    </>
  );
};
export default Footer;
