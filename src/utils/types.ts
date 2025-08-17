export type Category = "landscape" | "plumbing" | "electrician";

export type Customer = {
  rating: string;
  addressHome: string;
};

export type JobStatus =
  | "unassigned"
  | "assigned"
  | "on-progress"
  | "complete: needs invoice"
  | "complete: invoice sent"
  | "completed: closed job";

export type UserRole = "employee" | "contractor" | "customer" | "admin";
