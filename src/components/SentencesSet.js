import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import React, { useEffect, useState } from "react";
import { getSentencesSet } from "../services/sentencesSetsService";
import Layout from "./Layout";
import ButtonSuccess from "./common/ButtonSuccess";

function shuffle(array) {
    var currentIndex = array.length,
        temporaryValue,
        randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

export default function SentencesSet({ match }) {
    const [sentences, setSentence] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [currentPage, setCurrentPage] = useState(0);
    const [numberOfClicks, setNumberOfClicks] = useState(0);

    useEffect(() => {
        async function fetchData() {
            const s = await getSentencesSet(match.params.id);
            setSentence(s.sentences);
            console.log(s);
            setIsLoaded(true);
        }

        fetchData();
    }, [match.params.id]);

    const handleClick = (word) => {
        if (word.position === numberOfClicks) {
            setNumberOfClicks((numberOfClicks) => numberOfClicks + 1);
            const newSentences = [...sentences];
            const index = newSentences[currentPage].indexOf(word);
            newSentences[currentPage][index].correct = true;
            setSentence(newSentences);
        } else {
            setNumberOfClicks(0);
            const newSentences = [...sentences];
            const index = newSentences[currentPage].indexOf(word);
            newSentences[currentPage].forEach((word) => (word.correct = false));
            setSentence(newSentences);
        }
    };

    if (!isLoaded)
        return (
            <Layout>
                <h1>Loading</h1>
            </Layout>
        );
    return (
        <Layout>
            <h1>Hi</h1>

            {sentences[0].map((w) => (
                <Box m={2} key={w.text} onClick={() => handleClick(w)}>
                    {w.correct ? (
                        <ButtonSuccess variant="contained">
                            {w.text}
                        </ButtonSuccess>
                    ) : (
                        <Button variant="contained">{w.text}</Button>
                    )}
                </Box>
            ))}
        </Layout>
    );
}
