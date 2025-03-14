
import { useApplication } from '@/lib/applicationContext';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import PersonalInfo from '@/components/ApplicationSteps/PersonalInfo';
import BusinessInfo from '@/components/ApplicationSteps/BusinessInfo';
import FinancialInfo from '@/components/ApplicationSteps/FinancialInfo';
import ReviewSubmit from '@/components/ApplicationSteps/ReviewSubmit';
import { useEffect, useRef } from 'react';

const ApplicationContent = () => {
  const { currentStep, nextStep } = useApplication();
  const nodeRef = useRef(null);
  
  // When step changes, scroll to top of page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentStep]);
  
  // Handler for form submission
  const handleFormSubmit = () => {
    console.log("Form submitted, moving to next step");
    // Add a small delay to ensure the form submission is complete
    setTimeout(() => {
      nextStep();
    }, 500);
  };
  
  return (
    <TransitionGroup>
      <CSSTransition
        key={currentStep}
        timeout={300}
        classNames="form-step"
        nodeRef={nodeRef}
      >
        <div className="form-step" ref={nodeRef}>
          {currentStep === 1 && <PersonalInfo onFormSubmit={handleFormSubmit} />}
          {currentStep === 2 && <BusinessInfo onFormSubmit={handleFormSubmit} />}
          {currentStep === 3 && <FinancialInfo onFormSubmit={handleFormSubmit} />}
          {currentStep === 4 && <ReviewSubmit />}
        </div>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default ApplicationContent;
