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
} from "./validatorKeys";

interface JobData {
  jobName: string;
  jobCost: number;
  postedBy: string;
  jobLocation: string;
  jobDeadline: string;
  jobCategory: string;
  jobBids: number;
  forCustomer: string;
  jobDescription: string;
  jobNotes?: string;
}

const validateJob = (data: JobData): string[] => {
  const errors: string[] = [];

  const jobNameError = validateJobName(data.jobName);
  const jobCostError = validateJobCost(data.jobCost);
  const postedByError = validatePostedBy(data.postedBy);
  const locationError = validateJobLocation(data.jobLocation);
  const deadlineError = validateJobDeadline(data.jobDeadline);
  const categoryError = validateJobCategory(data.jobCategory);
  const descriptionError = validateJobDescription(data.jobDescription);
  const jobBidsError = validateJobBids(data.jobBids);
  const customerError = validateForCustomer(data.forCustomer);

  if (jobNameError) errors.push(jobNameError);

  if (jobCostError) errors.push(jobCostError);

  if (postedByError) errors.push(postedByError);

  if (locationError) errors.push(locationError);

  if (deadlineError) errors.push(deadlineError);

  if (categoryError) errors.push(categoryError);

  if (descriptionError) errors.push(descriptionError);

  if (jobBidsError) {
    errors.push(jobBidsError);
  }

  if (customerError) {
    errors.push(customerError);
  }

  return errors;
};

export default validateJob;
