
import ProgressBar from './ProgressBar';
import ApplicationContent from './ApplicationContent';

const ApplicationWrapper = () => {
  return (
    <div className="bg-white rounded-2xl shadow-soft p-6 md:p-10 mb-16">
      <ProgressBar />
      <ApplicationContent />
    </div>
  );
};

export default ApplicationWrapper;
