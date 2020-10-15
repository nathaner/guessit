import React, { useEffect, useState } from "react";
import { getSentencesSet } from "../services/sentencesSetsService";
import Layout from "./Layout";

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

    useEffect(() => {
        async function fetchData() {
            const s = getSentencesSet(match.params.id);
            const s_array = [];

            s.sentences.forEach((s_) => s_array.push(shuffle(s_.split(" "))));
            console.log(s_array);
            await setSentence(s_array);
            setIsLoaded(true);
        }

        fetchData();
    }, [match.params.id]);

    if (!isLoaded)
        return (
            <Layout>
                <h1>Loading</h1>
            </Layout>
        );
    return (
        <Layout>
            <h1>Hi</h1>

            {sentences.map((s) => (
                <p key={s.join(" ")}>{s.join(" ")}</p>
            ))}
        </Layout>
    );
}
