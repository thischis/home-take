import React from 'react';
import { ListGroupItem } from 'reactstrap';

import './index.css';

import { SubData } from '../sub-data';

interface CommitItemProps {
  authorName: string;
  authorEmail: string;
  commitMessage: string;
  commitUrl: string;
  date: string;
  sha: string;
}

const CommitItem: React.FC<CommitItemProps> = ({ authorName, authorEmail, commitMessage, commitUrl, date, sha }) => {
  return (
    <ListGroupItem className="list-item" color="info">
      <SubData label="hash" value={commitUrl} isLink={true} sha={sha} />
      <SubData label="date" value={new Date(date).toDateString()} />
      <SubData label="author" value={authorName} />
      <SubData label="email" value={authorEmail} />
      <SubData label="message" value={commitMessage} />
    </ListGroupItem>
  );
};

export default CommitItem;
