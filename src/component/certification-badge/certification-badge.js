import React from 'react';
import './certification-badge.css';

export default function CertificationBadge({ title = "30", subtitle = "Days of Code", icon = "★" }) {
  return (
    <div className="badge-wrapper">
      <div className="badge-shape">
        <div className="badge-content">
          <div className="badge-title">{title}</div>
          <div className="badge-subtitle">{subtitle}</div>
          <div className="badge-icon">{icon}</div>
        </div>
      </div>
    </div>
  );
}
