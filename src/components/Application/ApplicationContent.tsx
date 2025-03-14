
import { useApplication } from '@/lib/applicationContext';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import PersonalInfo from '@/components/ApplicationSteps/PersonalInfo';
import BusinessInfo from '@/components/ApplicationSteps/BusinessInfo';
import FinancialInfo from '@/components/ApplicationSteps/FinancialInfo';
import ReviewSubmit from '@/components/ApplicationSteps/ReviewSubmit';

const ApplicationContent = () => {
  const { currentStep } = useApplication();
  
  return (
    <TransitionGroup>
      <CSSTransition
        key={currentStep}
        timeout={300}
        classNames="form-step"
      >
        <div className="form-step">
          {currentStep === 1 && <PersonalInfo />}
          {currentStep === 2 && <BusinessInfo />}
          {currentStep === 3 && <FinancialInfo />}
          {currentStep === 4 && <ReviewSubmit />}
        </div>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default ApplicationContent;
