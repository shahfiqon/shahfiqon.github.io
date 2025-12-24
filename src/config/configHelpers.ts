/**
 * Configuration Helper Functions
 * 
 * Utility functions to easily access portfolio configuration data.
 */

import React from 'react';
import {
  FiMail,
  FiGithub,
  FiLinkedin,
  FiTwitter,
} from 'react-icons/fi';
import portfolioConfig, {
  PersonalInfo,
  SocialLink,
  ContactMethod,
  Experience,
  WhatIDoItem,
  Feature,
  NavItem,
  FooterSection,
} from './portfolio.config';

/**
 * Get personal information
 */
export function getPersonalInfo(): PersonalInfo {
  return portfolioConfig.personal;
}

/**
 * Get page-specific content
 */
export function getPageContent(pageName: 'about' | 'contact' | 'home') {
  return portfolioConfig.content[pageName];
}

/**
 * Get all experiences for the experience page
 */
export function getExperiences(): Experience[] {
  return portfolioConfig.experiencePage.experiences;
}

/**
 * Get experience page data (hero, cta, experiences)
 */
export function getExperiencePageData() {
  return portfolioConfig.experiencePage;
}

/**
 * Get "What I Do" items for the about page
 */
export function getWhatIDoItems(): WhatIDoItem[] {
  return portfolioConfig.content.about.whatIDo;
}

/**
 * Get homepage features
 */
export function getFeatures(): Feature[] {
  return portfolioConfig.features;
}

/**
 * Get social media links with icons
 */
export function getSocialLinks(): SocialLink[] {
  const personal = getPersonalInfo();
  
  return [
    {
      name: 'GitHub',
      icon: React.createElement(FiGithub, { size: 22 }),
      url: personal.urls.github,
      color: '#333',
    },
    {
      name: 'LinkedIn',
      icon: React.createElement(FiLinkedin, { size: 22 }),
      url: personal.urls.linkedin,
      color: '#0077b5',
    },
    {
      name: 'Email',
      icon: React.createElement(FiMail, { size: 22 }),
      url: `mailto:${personal.email}`,
      color: '#ea4335',
    },
  ];
}

/**
 * Get contact methods with icons for the contact page
 */
export function getContactMethods(): ContactMethod[] {
  const personal = getPersonalInfo();
  
  return [
    {
      icon: React.createElement(FiMail, { size: 24 }),
      title: 'Email',
      value: personal.email,
      link: `mailto:${personal.email}`,
      color: '#3b82f6',
    },
    {
      icon: React.createElement(FiGithub, { size: 24 }),
      title: 'GitHub',
      value: `@${personal.github}`,
      link: personal.urls.github,
      color: '#333',
    },
    {
      icon: React.createElement(FiLinkedin, { size: 24 }),
      title: 'LinkedIn',
      value: `/in/${personal.linkedin}`,
      link: personal.urls.linkedin,
      color: '#0077b5',
    },
  ];
}

/**
 * Get navigation items
 */
export function getNavigation(): NavItem[] {
  return portfolioConfig.navbarItems;
}

/**
 * Get footer links
 */
export function getFooterLinks(): FooterSection[] {
  return portfolioConfig.footerLinks;
}

/**
 * Get site configuration for Docusaurus
 */
export function getSiteConfig() {
  return portfolioConfig.siteConfig;
}

/**
 * Get availability status
 */
export function getAvailability() {
  return portfolioConfig.personal.availability;
}

// Export all for convenience
export default {
  getPersonalInfo,
  getPageContent,
  getExperiences,
  getExperiencePageData,
  getWhatIDoItems,
  getFeatures,
  getSocialLinks,
  getContactMethods,
  getNavigation,
  getFooterLinks,
  getSiteConfig,
  getAvailability,
};

