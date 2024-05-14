import { Session } from '@/types/session';

interface Props {
  session: Session;
  tab: string;
}

const MyInfoTitle = ({ session, tab }: Props) => {
  return (
    <div className="flex flex-col gap-12 text-20">
      {tab ? (
        <h3>
          <strong>{tab}</strong>
        </h3>
      ) : (
        <h3>
          <strong>{session?.nickname}</strong>
          님, 안녕하세요!
        </h3>
      )}
    </div>
  );
};
export default MyInfoTitle;
