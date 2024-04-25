import { Session } from '@/types/session';

interface Props {
  session: Session;
}

const Nickname = ({ session }: Props) => {
  return (
    <div className="flex-center text-20">
      <p className="inline-block">
        <strong>{session?.nickname}</strong>
        님, 안녕하세요!
      </p>
    </div>
  );
};
export default Nickname;
