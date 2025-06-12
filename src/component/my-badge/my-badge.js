import React from 'react';
import CertificationBadge from '../certification-badge/certification-badge';
import { CODE, Level } from '../../constant/code';


export default function MyBadges({certificates}) {
  return (
    <div>
      <h3>Huy hiệu đạt được</h3>
      {certificates.map(item =>  <CertificationBadge title="10" subtitle="Points" icon={
                  item.certificateLevel === CODE.EXPERT
                     ? "🔥"
                     : item.certificateLevel === CODE.INTERMEDIATE
                     ? "⭐"
                     : item.certificateLevel === CODE.BEGINNER
                     ? "📚"
                     : "✅" // Mặc định nếu không khớp
               }/>) }
    </div>
  );
}
