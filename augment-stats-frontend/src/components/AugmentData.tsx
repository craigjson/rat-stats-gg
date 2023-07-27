import React from "react";

interface AugmentDataProps {
  augmentData: Augment[];
}

interface Augment {
  name: string;
  averagePlacement: number;
  totalMatches: number;
}

const AugmentData: React.FC<AugmentDataProps> = ({ augmentData }) => {
  return (
    <div>
      <h1>Augment Data</h1>
      <ul>
        {augmentData.map((augment) => (
          <li key={augment.name}>
            <p>Name: {augment.name}</p>
            <p>Average Placement: {augment.averagePlacement}</p>
            <p>Total Matches: {augment.totalMatches}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AugmentData;
