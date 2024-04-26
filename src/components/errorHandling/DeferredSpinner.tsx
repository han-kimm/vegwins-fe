import Deferring from '@/components/errorHandling/Deferring';
import Spinner from '@/components/errorHandling/Spinner';

const DeferredSpinner = () => {
  return (
    <div className="flex-center h-108 w-full">
      <Deferring>
        <Spinner duration="infinity" />
      </Deferring>
    </div>
  );
};
export default DeferredSpinner;
