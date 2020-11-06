import React from 'react';
import { Spinner, ListGroup, Media } from 'reactstrap';

import { CommitItem } from '../commit-item';
import { ErrorAlert } from '../error-alert';
import { useCommits } from '../../hooks/useCommits';
import './index.css';

const CommitList = () => {
  const {
    data: { commits },
    isError,
    isLoading,
  } = useCommits();
  return (
    <div className="container">
      {isLoading && <Spinner color="light" />}
      {!isError && !isLoading && (
        <ListGroup>
          <Media>Commits of this project:</Media>
          {commits.map(({ commit, html_url }) => (
            <CommitItem
              key={commit.tree.sha}
              authorName={commit.author.name}
              authorEmail={commit.author.email}
              commitMessage={commit.message}
              commitUrl={html_url}
              date={commit.author.date}
              sha={commit.tree.sha}
            />
          ))}
        </ListGroup>
      )}
      {isError && <ErrorAlert />}
    </div>
  );
};

export default CommitList;
