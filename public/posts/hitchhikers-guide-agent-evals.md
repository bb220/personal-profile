---
title: The Hitchhiker's Guide to Agent Evals
description: A practical introduction to agent applications and evaluations.
author: Brandon Bellero
publication: Brandon’s Substack
date: October 24, 2025
---

![Banner Image](/images/posts/dont-panic.png)

Evaluations line the road to [Software 2.0](https://karpathy.medium.com/software-2-0-a64152b37c35). They serve a critical role in everything from model training to application development. [Agent architecture](https://www.youtube.com/watch?v=xH_b6iwrASc&t=33s) is the latest pattern to emerge in the rapidly evolving frontier of application development and evaluating agents requires special attention.

Compared to their more deterministic predecessors, agents _think_ more. In other words, they process more logic through an AI model than explicitly written application code. They loop through workflows, deciding which tools (functions) to call and what to do next.

![Non-Agent Workflow](/images/posts/non-agent-workflow.png)Invokes model as needed

[![](https://substackcdn.com/image/fetch/$s_!lSMP!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F1fa69528-851e-4d22-bd15-6d10416b9250_965x664.png)](https://substackcdn.com/image/fetch/$s_!lSMP!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F1fa69528-851e-4d22-bd15-6d10416b9250_965x664.png)Invokes model as the central orchestrator

### Evaluating Agents

We can evaluate how agents execute workflows. I highly recommend [LangChain’s excellent deep-dive](https://www.youtube.com/watch?v=_QozKR9eQE8) for more about this concept. To paraphrase, your agent’s entire execution thread is traceable. Thus, you can set up tests to verify agent behavior at increasing levels of scrutiny.

  1. Final output - evaluate the agent’s final output

  2. Single step - evaluate a single step in the agent’s execution

  3. Trajectory - evaluate the order of steps taken in the agent’s execution

### In Practice

Every agent application has different objectives and tolerance for variable behavior. To set up effective evaluations, identify the critical behaviors that your agent needs to perform and create evaluations tailored to your expectations.

I recently built a fitness companion agent called  [CoachAI](https://www.coachaiapp.info/).

The agent builds personalized programs and provides real-time coaching to users during workouts. To do this effectively, it has access to multiple tools: functions that are critical to managing application state and long-term data storage.

[![](https://substackcdn.com/image/fetch/$s_!cUrA!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F03df2e48-1ba0-468f-a8f7-266003bb08ea_1250x602.png)](https://substackcdn.com/image/fetch/$s_!cUrA!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F03df2e48-1ba0-468f-a8f7-266003bb08ea_1250x602.png)

One critical behavior is to reliably record user reported data during workouts. To accomplish this, the agent must interpret the user’s request, call the `record_exercise_sets `tool successfully, and communicate back to the user appropriately.

To ensure that the agent does this, I created two types of evaluations for this scenario.

  * Final Output - To ensure the agent communicates appropriately

  * Single Step - To ensure the agent calls `record_exercise_sets` successfully




 _I decided not to include trajectory evaluations because this particular action is not complex. However, agents dealing with a large number of tool calls or sensitive orders of operation benefit from such evaluations._

To implement these evaluations, I had to

  1. Capture the scenario

  2. Create datasets

  3. Define evaluator logic




 _Note: I used[LangGraph SDK](https://docs.langchain.com/langsmith/sdk) for my evaluation framework. In this post, I’ll keep the conversation conceptual and avoid framework-specific details as much as possible._

#### Capture the scenario

To evaluate an agent’s behavior you need to capture the scenario in which you expect the behavior to occur. 

This is challenging with agents because they involve multi-turn interactions. For example, users of CoachAI do not immediately begin reporting data in an action workout session. They start a conversation with the agent, discuss general fitness topics, start a workout session, and then start reporting workout data. Further, the conversations are nondeterministic so every user can take a different path to the scenario that I want to evaluate.

One way to overcome this is to _time travel_ to the scenario with a fixed, mocked application state. The approach is simple: define an application state one turn prior to the scenario based on an example of a common path to it. The agent application instantiates with this state and immediately hits the scenario when the evaluations run.

For my agent, I defined a JSON object that mimics the application state exactly one turn prior to when users commonly report their set information during an active workout. See [code snippet here](https://gist.github.com/bb220/392e28cfb092d673b2a05a44d9ed9e12).

 _More comprehensive approaches are available, such as[simulating multi-turn conversations](https://docs.langchain.com/langsmith/multi-turn-simulation) and [evaluating traces from live environments](https://docs.langchain.com/langsmith/online-evaluations#set-up-online-evaluators)._

#### Create datasets

The datasets describe the user input and your expected behavior for the agent. Often referred to as the “Golden Dataset”, they provide examples of ideal behavior that your agent will be benchmarked against.

For my agent, I have datasets for both the final output and single step evaluations. The final output dataset contains sets of user inputs with expected agent responses.

Ex. 

> `{ `
> 
> `“input”: “Set 1 10 reps 135lbs”,`
> 
> `“expected”: “Great work! Let’s move on to set 2.”`
> 
> `}`

The single step dataset contains sets of user inputs with the expected value of a variable tracking successful tool calls.

Ex.

> `{`
> 
> `“input”: “Set 1 10 reps 135 lbs”,`
> 
> `“expected”: “record_exercise_sets_called”`
> 
> `}`

#### Define evaluator logic

Last but not least, the evaluator logic itself must be defined. The evaluator logic compares the action of the agent with the examples from your datasets and generates a score.

My final output evaluator uses [LLM-as-a-judge method](https://docs.langchain.com/langsmith/llm-as-judge) to determine whether the agent’s response is similar to my example. See a [code snippet here](https://gist.github.com/bb220/1c89076af471786bbeded7898ba2472b).

My single step evaluator inspects the tool calls and responses from the agent’s actions. It checks for at least one successful call. See a [code snippet here](https://gist.github.com/bb220/f06bacbc21f345dc336bec8b659c3130).

#### All together now

My evaluation framework takes the mocked application state, spins up an instance of the agent, runs it with the evaluation datasets, and then scores the agent based on the evaluator logic.

With these pieces in place, I have evaluations that I can run at any time to ensure the agent is behaving as expected. When developing new features or updating the application, this is indispensable.

 _Thank you for reading._
