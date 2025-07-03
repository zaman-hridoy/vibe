import { inngest } from "./client";

export const helloWorld = inngest.createFunction(
  { id: "hello-world2" },
  { event: "test/hello.world" },
  async ({ event, step }) => {
    // Imagine this is a download step
    await step.sleep("wait-a-moment", "30s");

    // Imagine this is a transcript step
    await step.sleep("wait-a-moment", "10s");

    // Imagine
    await step.sleep("wait-a-moment", "5s");
    return { message: `Hello ${event.data.email}!` };
  }
);
