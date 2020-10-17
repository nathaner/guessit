const questionsSets = [
  {
    _id: 1,
    title: 'English basics',
    author: 'Sarah',
    href: '/questions/1',
    questions: [
      { question: "Who's the french president?", answer: 'Emmanuel Macron.' },
      { question: 'How old is Queen Elizabeth II?', answer: '94 years old.' },
      {
        question: 'What are the 4 nations composing the UK?',
        answer: 'England, Wales, Scotland and Northern Ireland.',
      },
      {
        question: 'What\'s the difference between "here" and "there"?',
        answer:
          'Here refers to where the speaker is whereas there refers to a the place where the listener or another person is.',
      },
      {
        question: 'What\'s the difference between "this" and "that"?',
        answer:
          'This refers to someone/something near in place/time and that is used to point out something.',
      },
    ],
  },
  {
    _id: 2,
    title: 'Verbs',
    author: 'Sarah',
    href: '/questions/2',
    questions: [
      { question: "Who's the french president?", answer: 'Emmanuel Macron.' },
      { question: 'How old is Queen Elizabeth II?', answer: '94 years old.' },
      {
        question: 'What are the 4 nations composing the UK?',
        answer: 'England, Wales, Scotland and Northern Ireland.',
      },
      {
        question: 'What\'s the difference between "here" and "there"?',
        answer:
          'Here refers to where the speaker is whereas there refers to a the place where the listener or another person is.',
      },
      {
        question: 'What\'s the difference between "this" and "that"?',
        answer:
          'This refers to someone/something near in place/time and that is used to point out something.',
      },
    ],
  },
  {
    _id: 3,
    title: 'Animals',
    author: 'Didier',
    href: '/questions/3',
    questions: [
      { question: "Who's the french president?", answer: 'Emmanuel Macron.' },
      { question: 'How old is Queen Elizabeth II?', answer: '94 years old.' },
      {
        question: 'What are the 4 nations composing the UK?',
        answer: 'England, Wales, Scotland and Northern Ireland.',
      },
      {
        question: 'What\'s the difference between "here" and "there"?',
        answer:
          'Here refers to where the speaker is whereas there refers to a the place where the listener or another person is.',
      },
      {
        question: 'What\'s the difference between "this" and "that"?',
        answer:
          'This refers to someone/something near in place/time and that is used to point out something.',
      },
    ],
  },
  {
    _id: 4,
    title: 'Computers',
    author: 'Sarah',
    href: '/questions/4',
    questions: [
      { question: "Who's the french president?", answer: 'Emmanuel Macron.' },
      { question: 'How old is Queen Elizabeth II?', answer: '94 years old.' },
      {
        question: 'What are the 4 nations composing the UK?',
        answer: 'England, Wales, Scotland and Northern Ireland.',
      },
      {
        question: 'What\'s the difference between "here" and "there"?',
        answer:
          'Here refers to where the speaker is whereas there refers to a the place where the listener or another person is.',
      },
      {
        question: 'What\'s the difference between "this" and "that"?',
        answer:
          'This refers to someone/something near in place/time and that is used to point out something.',
      },
    ],
  },
  {
    _id: 5,
    title: 'Social networks',
    author: 'Nathan',
    href: '/questions/5',
    questions: [
      { question: "Who's the french president?", answer: 'Emmanuel Macron.' },
      { question: 'How old is Queen Elizabeth II?', answer: '94 years old.' },
      {
        question: 'What are the 4 nations composing the UK?',
        answer: 'England, Wales, Scotland and Northern Ireland.',
      },
      {
        question: 'What\'s the difference between "here" and "there"?',
        answer:
          'Here refers to where the speaker is whereas there refers to a the place where the listener or another person is.',
      },
      {
        question: 'What\'s the difference between "this" and "that"?',
        answer:
          'This refers to someone/something near in place/time and that is used to point out something.',
      },
    ],
  },
  {
    _id: 6,
    title: 'School',
    author: 'Mathilde',
    href: '/questions/6',
    questions: [
      { question: "Who's the french president?", answer: 'Emmanuel Macron.' },
      { question: 'How old is Queen Elizabeth II?', answer: '94 years old.' },
      {
        question: 'What are the 4 nations composing the UK?',
        answer: 'England, Wales, Scotland and Northern Ireland.',
      },
      {
        question: 'What\'s the difference between "here" and "there"?',
        answer:
          'Here refers to where the speaker is whereas there refers to a the place where the listener or another person is.',
      },
      {
        question: 'What\'s the difference between "this" and "that"?',
        answer:
          'This refers to someone/something near in place/time and that is used to point out something.',
      },
    ],
  },
  {
    _id: 7,
    title: 'Food',
    author: 'Sarah',
    href: '/questions/7',
    questions: [
      { question: "Who's the french president?", answer: 'Emmanuel Macron.' },
      { question: 'How old is Queen Elizabeth II?', answer: '94 years old.' },
      {
        question: 'What are the 4 nations composing the UK?',
        answer: 'England, Wales, Scotland and Northern Ireland.',
      },
      {
        question: 'What\'s the difference between "here" and "there"?',
        answer:
          'Here refers to where the speaker is whereas there refers to a the place where the listener or another person is.',
      },
      {
        question: 'What\'s the difference between "this" and "that"?',
        answer:
          'This refers to someone/something near in place/time and that is used to point out something.',
      },
    ],
  },
];

export function getQuestionsSets() {
  return questionsSets;
}

export function getQuestionsSet(id) {
  return questionsSets.find(
    (questionsSet) => questionsSet._id === parseInt(id, 10)
  );
}

export function getQuestionsSetsFromAuthor(author) {
  return questionsSets.filter((set) => set.author === author);
}
