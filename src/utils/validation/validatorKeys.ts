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

const validateJobName = (name: string): string | null => {
  if (!name || name.trim() === "") {
    return "Job name is required";
  }
  return null;
};

const validateJobCost = (price: number): string | null => {
  if (typeof price !== "number" || price < 0) {
    return "Job cost must be a positive number";
  }
  return null;
};

const validatePostedBy = (postedBy: string): string | null => {
  if (!postedBy || postedBy.trim() === "") {
    return "Posted By cannot be empty";
  }
  return null;
};

const validateJobLocation = (location: string): string | null => {
  if (!location || location.trim() === "") {
    return "Location cannot be empty";
  }
  return null;
};

const validateJobDeadline = (deadline: string): string | null => {
  if (!deadline || deadline.trim() === "") {
    return "Deadline date cannot be empty";
  }
  const date = new Date(deadline);
  if (isNaN(date.getTime())) {
    return "Deadline must be a valid date";
  }
  if (date <= new Date()) {
    return "Deadline must be a future date";
  }
  return null;
};

const validateJobCategory = (category: string): string | null => {
  if (!category || category.trim() === "") {
    return "Category cannot be empty";
  }
  return null;
};

const validateJobDescription = (description: string): string | null => {
  if (!description || description.trim() === "") {
    return "Description cannot be empty";
  }
  return null;
};

const validateJobBids = (bid: number): string | null => {
  if (typeof bid !== "number" || bid < 0) {
    return "Job cost must be a positive number";
  }
  return null;
};

export {
  validateJobName,
  validatePostedBy,
  validateJobLocation,
  validateJobDeadline,
  validateJobCategory,
  validateJobDescription,
  validateJobCost,
};
