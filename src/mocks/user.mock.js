const userWith1BooleanResult = {
  name: "nico",
  results: [
    {
      overall: {
        availableTime: 120,
        timeTook: 60,
        answersCorrect: 2,
        totalQuestions: 3,
        dateTime: "2019-11-17T16:01"
      },
      answers: [
        {
          category: "QUEST 1: Category 1",
          question: "QUEST 1: Question 1",
          type: "boolean",
          answer: "False",
          correctAnswer: "False",
          incorrectAnswers: ["True"],
          correct: true
        },
        {
          category: "QUEST 1: Category 2",
          question: "QUEST 1: Question 2",
          type: "boolean",
          answer: "True",
          correctAnswer: "False",
          incorrectAnswers: ["True"],
          correct: false
        },
        {
          category: "QUEST 1: Category 3",
          question: "QUEST 1: Question 3",
          type: "boolean",
          answer: "True",
          correctAnswer: "True",
          incorrectAnswers: ["False"],
          correct: true
        }
      ]
    }
  ]
};

export default {
  userWith1BooleanResult
};
