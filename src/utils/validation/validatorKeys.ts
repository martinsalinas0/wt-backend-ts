interface JobData {
  jobName: string;
  jobCost: number;
  postedBy: string;
  jobLocation: {
    city: string;
    state: string;
    street: string;
    zipcode: string;
  };
  jobDeadline: string;
  jobCategory: string;
  jobBids: number;
  forCustomer: string;
  jobDescription: string;
  jobNotes?: string;
}

interface JobLocation {
  street: string;
  city: string;
  state: string;
  zipcode: string | number;
}

const validateJobName = (name: string): string | null => {
  if (!name || name.trim() === "") {
    return "Job name is required";
  }
  return null;
};

const validateJobCost = (price: number): string | null => {
  if (price < 0) {
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

const validateJobLocation = (location: JobLocation): string | null => {
  if (!location) return "Location is required";

  const { street, city, state, zipcode } = location;

  if (!street?.trim()) return "Street is required";
  if (!city?.trim()) return "City is required";
  if (!state?.trim()) return "State is required";
  if (!zipcode?.toString().trim()) return "Zipcode is required";

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

const validateJobBids = (bid: number): string | null => {
  if (bid < 0) {
    return "Job bid must be a positive number";
  }
  return null;
};

const validateForCustomer = (customer: string): string | null => {
  if (!customer || customer.trim() === "") {
    return "Customer field cannot be empty";
  }
  return null;
};

const validateJobDescription = (description: string): string | null => {
  if (!description || description.trim() === "") {
    return "Description cannot be empty";
  }
  return null;
};

const validateJobStatus = (status: string): string | null => {
  if (!status || status.trim() === "") {
    return "Job Status field cannot be empty";
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
  validateJobBids,
  validateForCustomer,
  validateJobStatus,
};
