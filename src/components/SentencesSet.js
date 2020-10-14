import React, { useEffect, useState } from "react";
import { getSentencesSet } from "../services/sentencesSetsService";
import Layout from "./Layout";

export default function SentencesSet({ match }) {
    const [sentences, setSentence] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        async function fetchData() {
            await setSentence(getSentencesSet(match.params.id));
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

            {sentences.sentences.map((s) => (
                <p key={s}>{s}</p>
            ))}
        </Layout>
    );
}
