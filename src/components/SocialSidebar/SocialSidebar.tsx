import React from 'react';
import styles from './SocialSidebar.module.css';
import { getSocialLinks } from '../../config/configHelpers';

export default function SocialSidebar() {
  const socialLinks = getSocialLinks();
  return (
    <div className={styles.sidebar}>
      <div className={styles.socialLinks}>
        {socialLinks.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target={link.name !== 'Email' ? '_blank' : undefined}
            rel={link.name !== 'Email' ? 'noopener noreferrer' : undefined}
            className={styles.socialLink}
            aria-label={link.name}
            title={link.name}
            style={{ '--hover-color': link.color } as React.CSSProperties}
          >
            {link.icon}
          </a>
        ))}
      </div>
      <div className={styles.divider} />
    </div>
  );
}

