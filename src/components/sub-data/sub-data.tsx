import React from 'react';
import { Badge } from 'reactstrap';

interface SubDataProps {
  isLink?: boolean;
  label?: string;
  value: string;
  sha?: string;
}

const SubData: React.FC<SubDataProps> = ({ isLink = false, label, value, sha }) => {
  return (
    <div className="sub-data">
      <Badge pill color="secondary">
        {label}
      </Badge>
      {isLink ? <a href={value}>{sha}</a> : value}
    </div>
  );
};

export default SubData;
