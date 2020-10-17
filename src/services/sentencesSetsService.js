const sentencesSet = [
  {
    _id: 1,
    title: 'English basics',
    author: 'Sarah',
    href: '/questions/1',
    sentences: [
      [
        { text: 'are', position: 1 },
        { text: 'How', position: 0 },
        { text: 'today?', position: 3 },
        { text: 'you', position: 2 },
      ],
      [
        { text: 'How', position: 0 },
        { text: 'long', position: 0 },
        { text: 'have', position: 0 },
        { text: 'you', position: 0 },
        { text: 'worked', position: 0 },
        { text: 'here?', position: 1 },
      ],
      [
        { text: 'I', position: 0 },
        { text: 'love', position: 0 },
        { text: 'to', position: 0 },
        { text: 'hang', position: 0 },
        { text: 'out', position: 0 },
        { text: 'with', position: 0 },
        { text: 'friends.', position: 1 },
      ],
      [
        { text: 'I', position: 0 },
        { text: 'went', position: 0 },
        { text: 'off', position: 0 },
        { text: 'the', position: 0 },
        { text: 'boat', position: 0 },
        { text: 'just', position: 0 },
        { text: 'in', position: 0 },
        { text: 'time.', position: 1 },
      ],
    ],
  },
];

export function getSentencesSets() {
  return sentencesSet;
}

export function getSentencesSet(id) {
  return sentencesSet.find((s) => s._id === parseInt(id, 10));
}

export function getSentencesSetsFromAuthor(author) {
  return sentencesSet.filter((set) => set.author === author);
}
