import {
  validateJobName,
  validateJobCategory,
  validateJobDeadline,
  validateJobDescription,
  validateJobLocation,
  validatePostedBy,
  validateJobCost,
  validateJobBids,
  validateForCustomer,
  validateJobStatus,
} from "./validatorKeys";

interface JobLocation {
  street: string;
  city: string;
  state: string;
  zipcode: string | number;
}
interface JobData {
  jobName: string;
  jobCost: number;
  postedBy: string;
  jobLocation: JobLocation;
  jobDeadline: string;
  jobCategory: string;
  jobBids: number;
  forCustomer: string;
  jobDescription: string;
  jobNotes?: string;
  jobStatus: string;
}

const validateJob = (data: JobData): string[] => {
  const errors: string[] = [];

  const validators: (string | null)[] = [
    validateJobName(data.jobName),
    validateJobCost(data.jobCost),
    validatePostedBy(data.postedBy),
    validateJobLocation(data.jobLocation),
    validateJobDeadline(data.jobDeadline),
    validateJobCategory(data.jobCategory),
    validateJobDescription(data.jobDescription),
    validateJobBids(data.jobBids),
    validateForCustomer(data.forCustomer),
    validateJobStatus(data.jobStatus),
  ];

  for (const error of validators) {
    if (error) errors.push(error);
  }

  return errors;
};

export default validateJob;
