var express = require("express")
var { graphqlHTTP } = require("express-graphql")

// https://stackoverflow.com/questions/60499865/import-build-schema-from-graphql-file
// buildSchema() won't work with .schema.graphql files
// The schema file loads as a DocumentNode, not a string
// You need to use buildASTSchema() to build the schema
var { buildASTSchema } = require("graphql")
// Allow the import of GraphQL schema files
require('graphql-import-node/register');
// Import schema files
var questionSchema = require("./questions.schema.graphql")
// Construct a schema, using GraphQL schema language
var schema = buildASTSchema(questionSchema)

// Import mock data
var { quizzes, questions, answers, submissions } = require("./questions.mock.js")
// Define resolvers
const getQuiz = ({ uuid }) => quizzes.find(q => q.uuid === uuid)
const getQuizzes = ({ project_uuid }) => project_uuid ? quizzes.filter(q => q.project_uuid === project_uuid) : quizzes
const getQuestion = ({ uuid }) => questions.find(q => q.uuid === uuid)
const getQuestions = ({ quiz_uuid }) => quiz_uuid ? questions.filter(q => q.quiz_uuid === quiz_uuid) : questions
const getAnswer = ({ uuid }) => answers.find(a => a.uuid === uuid)
const getAnswers = ({ question_uuid }) => question_uuid ? answers.filter(a => a.question_uuid === question_uuid) : answers
const getSubmission = ({ uuid }) => submissions.find(s => s.uuid === uuid)
// TODO: How do I break this up into separate queries/resolvers?
const getSubmissions = ({ user_uuid }) => user_uuid ? submissions.filter(s => s.user_uuid === user_uuid) : submissions
// The root provides a resolver function for each API endpoint
var root = {
  quiz: getQuiz,
  quizzes: getQuizzes,
  question: getQuestion,
  questions: getQuestions,
  answer: getAnswer,
  answers: getAnswers,
  submission: getSubmission,
  submissions: getSubmissions,
}

var app = express()
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
)
app.listen(4000)
console.log("Running a GraphQL API server at http://localhost:4000/graphql")