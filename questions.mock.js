const quizzes = [
  {
    uuid: 'c3ad5255-81ba-4a5f-b1c0-136fda7a100b',
    project_uuid: '3a500076-9fef-4b50-9876-d76a94eed52d',
    timestamp: 0,
    at_end: true,
    __typename: 'quizzes',
  },
  {
    uuid: 'fc5c60e5-82ae-4b56-9014-0d46b6403874',
    project_uuid: '6af8fe38-e24b-41fd-b511-01757de7fe8d',
    timestamp: 5000,
    at_end: false,
    __typename: 'quizzes',
  }
]

const questions = [
  {
    uuid: 'bb463b8b-b76c-4f6a-9726-65ab5730b69b',
    quiz_uuid: 'c3ad5255-81ba-4a5f-b1c0-136fda7a100b',
    type: 'SINGLE_ANSWER_MULTIPLE_CHOICE',
    body: "Fill in the blank: Earth's other Equator, the Prime ____.",
    __typename: 'questions',
  },
  {
    uuid: '9b10b91d-48e2-4d9f-89d9-cdc310dbb232',
    quiz_uuid: 'fc5c60e5-82ae-4b56-9014-0d46b6403874',
    type: 'SINGLE_ANSWER_MULTIPLE_CHOICE',
    body: "Fill in the blank: 12 + 7 = __",
    __typename: 'questions',
  },
]

const answers = [
  {
      uuid: '3489d46b-bda4-45bd-8685-2fe0e13c16d4',
      question_uuid: 'bb463b8b-b76c-4f6a-9726-65ab5730b69b',
      body: "Line",
      is_correct: false,
      __typename: 'answers',
  },
  {
      uuid: '41c04802-41ae-452d-b4e5-2d48ca8351f4',
      question_uuid: 'bb463b8b-b76c-4f6a-9726-65ab5730b69b',
      body: "Meridian",
      is_correct: true,
      __typename: 'answers',
  },
  {
      uuid: 'd8796e0a-bd1a-416d-b338-354d507fb22a',
      question_uuid: 'bb463b8b-b76c-4f6a-9726-65ab5730b69b',
      body: "Divide",
      is_correct: false,
      __typename: 'answers',
  },
  {
      uuid: 'e91a7c26-a695-4e5e-8633-957a74a135f6',
      question_uuid: 'bb463b8b-b76c-4f6a-9726-65ab5730b69b',
      body: "Equinox",
      is_correct: false,
      __typename: 'answers',
  },
  {
      uuid: '146389c0-7414-4569-a757-d0d7e4ad225c',
      question_uuid: '9b10b91d-48e2-4d9f-89d9-cdc310dbb232',
      body: "19",
      is_correct: true,
      __typename: 'answers',
  },
  {
      uuid: '99ec98ca-59c1-437f-b62d-c086f1497885',
      question_uuid: '9b10b91d-48e2-4d9f-89d9-cdc310dbb232',
      body: "5",
      is_correct: false,
      __typename: 'answers',
  },
  {
      uuid: 'a26e96b9-42a4-4fcd-9982-44fe03f5d3dc',
      question_uuid: '9b10b91d-48e2-4d9f-89d9-cdc310dbb232',
      body: "127",
      is_correct: false,
      __typename: 'answers',
  },
]

const submissions = [
  {
      uuid: 'c26975ce-43a6-49e7-afda-dd9870ce9199',
      question_uuid: 'bb463b8b-b76c-4f6a-9726-65ab5730b69b',
      answer_uuid: 'e91a7c26-a695-4e5e-8633-957a74a135f6',
      user_uuid: '25fb1136-fb26-4265-ad1c-d570240fd618',
      __typename: 'submissions',
  },
  {
      uuid: '82cc60e9-b297-4dab-9836-c194fda65bbc',
      question_uuid: 'bb463b8b-b76c-4f6a-9726-65ab5730b69b',
      answer_uuid: '41c04802-41ae-452d-b4e5-2d48ca8351f4',
      user_uuid: '8d561da8-bcf5-4729-a782-f673f269000d',
      __typename: 'submissions',
  },
  {
      uuid: 'c26975ce-43a6-49e7-afda-dd9870ce9199',
      question_uuid: '9b10b91d-48e2-4d9f-89d9-cdc310dbb232',
      answer_uuid: '146389c0-7414-4569-a757-d0d7e4ad225c',
      user_uuid: '25fb1136-fb26-4265-ad1c-d570240fd618',
      __typename: 'submissions',
  },
]

module.exports = {
  quizzes,
  questions,
  answers,
  submissions,
}
