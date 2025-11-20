import React from 'react';
import styles from './Sidebar.module.css';

import { 
  HiHome,
  HiBookmark,
  HiUser,
  HiDocumentText,
  HiChartBar,
  HiUserGroup,
  HiMenu,
  HiX
} from 'react-icons/hi';

const ICON_MAP = {
  home: HiHome,
  bookmark: HiBookmark,
  user: HiUser,
  file: HiDocumentText,
  bar: HiChartBar,
  people: HiUserGroup,
};

interface SidebarProps {
  links: Array<{ icon: string; label: string; href: string }>;
  isCollapsed: boolean;
  onToggle: () => void;
}

export default function Sidebar({ links = [], isCollapsed, onToggle }: SidebarProps) {
  return (
    <>
      {/* Backdrop - only visible on mobile when sidebar is open */}
      {!isCollapsed && (
        <div 
          className={styles.backdrop} 
          onClick={onToggle}
          aria-hidden="true"
        />
      )}

      {/* Desktop: Fixed toggle button at top */}
      <button 
        className={styles.desktopToggle}
        onClick={onToggle}
        aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
      >
        <HiMenu className={styles.icon} />
      </button>

      {/* Sidebar */}
      <aside className={`${styles.sidebar} ${isCollapsed ? styles.collapsed : ''}`}>
        <div className={styles.header}>
          {/* Mobile toggle button inside sidebar */}
          <button 
            className={styles.mobileToggleButton}
            onClick={onToggle}
            aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          >
            <HiMenu className={styles.icon} />
          </button>
        </div>

        {/* Navigation - show when not collapsed */}
        {!isCollapsed && (
          <nav className={styles.nav}>
            {links.map((link) => {
              const IconComponent = ICON_MAP[link.icon as keyof typeof ICON_MAP] || HiHome;
              
              return (
                <a 
                  key={link.label} 
                  href={link.href} 
                  className={styles.navItem}
                >
                  <IconComponent className={styles.navIcon} />
                  <span>{link.label}</span>
                </a>
              );
            })}
          </nav>
        )}

        {/* Follow section - show when not collapsed */}
        {!isCollapsed && (
          <div className={styles.followSection}>
            <p className={styles.sectionTitle}>Education</p>
            <p className={styles.helper}>XYZ UNIVERSITY.</p>
            <a href="/blog" className={styles.suggestion}>BLOGS</a>
          </div>
        )}
      </aside>
      
      {/* Mobile - Show floating toggle button when sidebar is closed */}
      {isCollapsed && (
        <button 
          className={styles.mobileToggle}
          onClick={onToggle}
          aria-label="Open sidebar"
        >
          <HiMenu className={styles.icon} />
        </button>
      )}
    </>
  );
}