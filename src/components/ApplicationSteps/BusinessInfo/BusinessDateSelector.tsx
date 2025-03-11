
import { useApplication } from '@/lib/applicationContext';
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";

const BusinessDateSelector = () => {
  const { applicationData, updateApplicationData } = useApplication();
  
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-funding-dark">
        Business Start Date*
      </label>
      <Popover>
        <PopoverTrigger asChild>
          <button
            type="button"
            className={`w-full px-4 py-3 rounded-lg border text-left border-funding-light-gray focus:border-funding-blue focus:ring-1 focus:ring-funding-blue/30 outline-none transition-all ${
              !applicationData.businessStartDate && 'text-funding-gray'
            }`}
          >
            {applicationData.businessStartDate ? 
              format(new Date(applicationData.businessStartDate), 'PPP') : 
              'Select start date'}
          </button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode="single"
            selected={applicationData.businessStartDate ? new Date(applicationData.businessStartDate) : undefined}
            onSelect={(date) => updateApplicationData({ businessStartDate: date ? date.toISOString() : '' })}
            disabled={(date) => date > new Date()}
            initialFocus
            className="p-3 pointer-events-auto"
          />
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default BusinessDateSelector;
