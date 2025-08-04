import {
  validateJobName,
  validateJobCategory,
  validateJobDeadline,
  validateJobDescription,
  validateJobLocation,
  validatePostedBy,
  validateJobCost,
  validateJobBids,
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
  if (jobNameError) errors.push(jobNameError);

  const jobCostError = validateJobCost(data.jobCost);
  if (jobCostError) errors.push(jobCostError);

  const postedByError = validatePostedBy(data.postedBy);
  if (postedByError) errors.push(postedByError);

  const locationError = validateJobLocation(data.jobLocation);
  if (locationError) errors.push(locationError);

  const deadlineError = validateJobDeadline(data.jobDeadline);
  if (deadlineError) errors.push(deadlineError);

  const categoryError = validateJobCategory(data.jobCategory);
  if (categoryError) errors.push(categoryError);

  const descriptionError = validateJobDescription(data.jobDescription);
  if (descriptionError) errors.push(descriptionError);

  const jobBidsError = validateJobBids(data.jobBids);
  if (jobBidsError) {
    errors.push(jobBidsError);
  }
  // Optionally add validation for forCustomer, jobBids, jobNotes here if needed

  return errors;
};

export default validateJob;
