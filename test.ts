

const newJob =  Jobs.create({
  jobName: "Install Pool Equipment",
  cost: 2500,
  postedBy: "contractor",
});

console.log("New job created:", newJob);
