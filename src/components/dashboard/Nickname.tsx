import { Session } from '@/types/session';

interface Props {
  session: Session;
}

const Nickname = ({ session }: Props) => {
  return (
    <div className="flex text-20">
      <h2 className="font-bold">{session?.nickname}</h2>
      <span>님 안녕하세요!</span>
    </div>
  );
};
export default Nickname;
