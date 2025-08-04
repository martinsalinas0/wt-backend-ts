// utils/validateJob.test.ts
import { validateJob } from "./validation/validateJob";

describe("validateJob", () => {
  const validJob = {
    jobName: "Fix Pipe",
    jobCost: 200,
    postedBy: "user123",
    jobLocation: "Austin, TX",
    jobDeadline: new Date(Date.now() + 86400000).toISOString(), // tomorrow
    jobCategory: "plumbing",
    jobBids: 3,
    jobDescription: "Fix broken kitchen pipe.",
  };

  it("should return no errors for valid input", () => {
    const errors = validateJob(validJob);
    expect(errors).toEqual([]);
  });

  it("should catch missing required fields", () => {
    const errors = validateJob({});
    expect(errors).toContain("Job name is required");
    expect(errors).toContain("Job cost must be a positive number");
    expect(errors).toContain("PostedBy is required");
    expect(errors).toContain("Location is required");
    expect(errors).toContain("Deadline must be a valid future date");
    expect(errors).toContain("Category is required");
    expect(errors).toContain("Bids must be a non-negative number");
    expect(errors).toContain("Description is required");
  });

  it("should catch invalid cost and bids", () => {
    const job = { ...validJob, jobCost: -5, jobBids: -1 };
    const errors = validateJob(job);
    expect(errors).toContain("Job cost must be a positive number");
    expect(errors).toContain("Bids must be a non-negative number");
  });

  it("should catch invalid past deadline", () => {
    const job = {
      ...validJob,
      jobDeadline: new Date(Date.now() - 86400000).toISOString(), // yesterday
    };
    const errors = validateJob(job);
    expect(errors).toContain("Deadline must be a valid future date");
  });

  it("should catch invalid date string", () => {
    const job = {
      ...validJob,
      jobDeadline: "not-a-date",
    };
    const errors = validateJob(job);
    expect(errors).toContain("Deadline must be a valid future date");
  });
});
