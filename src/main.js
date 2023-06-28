/*
  (C) 2020 David Lettier
  lettier.com
*/

import App from "./App.svelte";

const app = new App({
  target: document.body,
  props: {
    teamNames: ["Team A", "Team B"],
    qas: [
      {
        question: "Which programing language is dead?",
        answers: [
          {
            text: "Perl",
            money: 17,
          },
          {
            text: "PHP",
            money: 11,
          },
          {
            text: "Haskell",
            money: 6,
          },
          {
            text: "Lisp",
            money: 4,
          },
          {
            text: "Ruby",
            money: 3,
          },
          {
            text: "Elm",
            money: 1,
          },
        ],
      },
      {
        question: "Which tools do you use to view/captiure logs?",
        answers: [
          {
            text: "Elasticsearch",
            money: 17,
          },
          {
            text: "Prometheus",
            money: 11,
          },
          {
            text: "Grafana",
            money: 6,
          },
          {
            text: "Splunk",
            money: 4,
          },
          {
            text: "Datadog",
            money: 3,
          },
          {
            text: "Sumologic",
            money: 1,
          },
        ],
      },
      {
        question: "Which programing language is popular?",
        answers: [
          {
            text: "JavaScript",
            money: 17,
          },
          {
            text: "HTML/CSS",
            money: 11,
          },
          {
            text: "Python",
            money: 6,
          },
          {
            text: "SQL",
            money: 4,
          },
          {
            text: "TypeScript",
            money: 3,
          },
          {
            text: "Bash",
            money: 1,
          },
        ],
      },
      {
        question: "What is the most hated thing about programming?",
        answers: [
          {
            text: "Pay",
            money: 17,
          },
          {
            text: "Great projects",
            money: 11,
          },
          {
            text: "Flexibility",
            money: 6,
          },
          {
            text: "Location",
            money: 4,
          },
          {
            text: "Hours",
            money: 3,
          },
          {
            text: "Benefits",
            money: 1,
          },
        ],
      },
      {
        question:
          "Which processes, tools, and programs gives best developer experience?",
        answers: [
          {
            text: "CICD",
            money: 17,
          },
          {
            text: "Automated testing",
            money: 11,
          },
          {
            text: "DevOps",
            money: 6,
          },
          {
            text: "Microservices",
            money: 4,
          },
          {
            text: "Observability tools",
            money: 3,
          },
          {
            text: "Developer portal",
            money: 1,
          },
        ],
      },
      {
        question:
          "What is the main activity that causes you to be unproductive?",
        answers: [
          {
            text: "Unplanned Work",
            money: 17,
          },
          {
            text: "Social Media",
            money: 11,
          },
          {
            text: "Chatty coworkers",
            money: 6,
          },
          {
            text: "Meetings",
            money: 4,
          },
          {
            text: "Reading/Writing Emails",
            money: 3,
          },
          {
            text: "Forums",
            money: 1,
          },
        ],
      },
      {
        question: "Which is the most practiced development methodology?",
        answers: [
          {
            text: "Scrum",
            money: 17,
          },
          {
            text: "DevOps",
            money: 11,
          },
          {
            text: "Kanban",
            money: 6,
          },
          {
            text: "Waterfall",
            money: 4,
          },
          {
            text: "Water/Scrum/Fall",
            money: 3,
          },
          {
            text: "Lean",
            money: 1,
          },
        ],
      },
      {
        question: "What are the significant agile adoption barriers?",
        answers: [
          {
            text: "Inconsistencies in Processes and Practices",
            money: 17,
          },
          {
            text: "Cultural Clashes",
            money: 11,
          },
          {
            text: "Organizational Resistance to Change",
            money: 6,
          },
          {
            text: "Lack of Skills and Experience",
            money: 4,
          },
          {
            text: "No Leadership Participation",
            money: 3,
          },
          {
            text: "Inadequate Management Support and Sponsorship",
            money: 1,
          },
        ],
      },
      {
        question:
          "What are the most common strategies used by scrum master to deal with problems?",
        answers: [
          {
            text: "Brought people together to solve the problem",
            money: 17,
          },
          {
            text: "Educated people",
            money: 11,
          },
          {
            text: "Used measures/metrics to make the effects of the problem visible",
            money: 6,
          },
          {
            text: "Used arguments and facts to persuade",
            money: 4,
          },
          {
            text: "Changed the structure or process",
            money: 3,
          },
          {
            text: "We brought in experts",
            money: 1,
          },
        ],
      },
      {
        question: "Who are the scrum master best allies?",
        answers: [
          {
            text: "Team members",
            money: 17,
          },
          {
            text: "Sponsors",
            money: 11,
          },
          {
            text: "Business stakeholders",
            money: 6,
          },
          {
            text: "Other scrum masters",
            money: 4,
          },
          {
            text: "Managers",
            money: 3,
          },
          {
            text: "Owner",
            money: 1,
          },
        ],
      },
    ],
  },
});

export default app;
