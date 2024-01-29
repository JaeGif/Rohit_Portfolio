import React from 'react';
import Sponsorships from './Sponsorships';
import Collaborations from './Collaborations';
import collaborators from '../../data/collaborators.json';
import sponsors from '../../data/sponsorships.json';

function SponsersAndCollaborations() {
  return (
    <div className='flex flex-col'>
      <Sponsorships data={sponsors.sponsorships} />
      <Collaborations data={collaborators.collaborators} />
    </div>
  );
}

export default SponsersAndCollaborations;
