import React from 'react';
import Layout from './Layout';
import Sets from './common/Sets';
import CategoryHeading from './common/CategoryHeading';
import { getQuestionsSets } from '../services/questionsSetsService';

export default function Questions() {
  return (
    <Layout>
      <CategoryHeading newHref="/questions/new">Questions</CategoryHeading>
      <Sets data={getQuestionsSets()} />
    </Layout>
  );
}
