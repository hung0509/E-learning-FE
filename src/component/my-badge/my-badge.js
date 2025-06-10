import React from 'react';
import CertificationBadge from '../certification-badge/certification-badge';


export default function MyBadges() {
  return (
    <div>
      <h3>Huy hiệu đạt được</h3>
      <CertificationBadge title="10" subtitle="Points"/>
      <CertificationBadge title="10" subtitle="Points" icon="🔥" />
      <CertificationBadge title="10" subtitle="Points" icon="🏆" />
    </div>
  );
}
