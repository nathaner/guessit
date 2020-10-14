const sentencesSet = [
    {
        _id: 1,
        title: "English basics",
        author: "Sarah",
        href: "/questions/1",
        sentences: [
            "How are you today?",
            "He's usually shy.",
            "How long have you worked here?",
            "I love to hang out with friends.",
            "I went off the boat just in time.",
        ],
    },
];

export function getSentencesSets() {
    return sentencesSet;
}

export function getSentencesSet(id) {
    return sentencesSet.find((s) => s._id === parseInt(id, 10));
}
