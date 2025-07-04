import { createAgent, gemini } from "@inngest/agent-kit";

import { inngest } from "./client";

export const helloWorld = inngest.createFunction(
  { id: "hello-world2" },
  { event: "test/hello.world" },
  async ({ event }) => {
    const codeAgent = createAgent({
      name: "code-agent",
      system:
        "You are an expert next.js developer. You write readable, maintainable code. You write simple Next.js & React snippets.",
      model: gemini({ model: "gemini-1.5-flash" }),
    });

    const { output } = await codeAgent.run(
      `Write the following snippet: ${event.data.value}`
    );

    console.log(output);

    return { output };
  }
);
