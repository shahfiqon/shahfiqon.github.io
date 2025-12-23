import React from "react";
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink, FiFileText, FiCalendar, FiUser, FiAward } from "react-icons/fi";
import { Project } from "./ProjectCard";
import styles from "./ProjectDetail.module.css";

interface ProjectDetailProps {
  project: Project;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={styles.container}
    >
      {/* Header Section */}
      <div className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.titleSection}>
            <h1 className={styles.title}>{project.title}</h1>
            {project.featured && (
              <span className={styles.featuredBadge}>Featured Project</span>
            )}
          </div>
          <p className={styles.description}>{project.description}</p>
          
          {/* Meta Information */}
          <div className={styles.metaInfo}>
            <div className={styles.metaItem}>
              <FiCalendar />
              <span>
                {new Date(project.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                })}
              </span>
            </div>
            <div className={styles.metaItem}>
              <FiUser />
              <span>{project.role}</span>
            </div>
            <div className={styles.metaItem}>
              <FiAward />
              <span className={styles.statusBadge}>{project.status}</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className={styles.actionButtons}>
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.primaryButton}
              >
                <FiGithub size={18} />
                View Code
              </a>
            )}
            {project.links.demo && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.primaryButton}
              >
                <FiExternalLink size={18} />
                Live Demo
              </a>
            )}
            {project.links.caseStudy && (
              <a
                href={project.links.caseStudy}
                className={styles.secondaryButton}
              >
                <FiFileText size={18} />
                Read Case Study
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Thumbnail/Hero Image */}
      {project.media?.thumbnail && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={styles.thumbnail}
        >
          <img
            src={project.media.thumbnail}
            alt={`${project.title} thumbnail`}
            className={styles.thumbnailImage}
          />
        </motion.div>
      )}

      <div className={styles.content}>
        {/* Demo Video/GIF Section */}
        {project.media?.demo && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className={styles.section}
          >
            <h2 className={styles.sectionTitle}>Demo</h2>
            <div className={styles.demoContainer}>
              {project.media.demo.endsWith('.mp4') || 
               project.media.demo.endsWith('.webm') ? (
                <video
                  src={project.media.demo}
                  controls
                  autoPlay
                  loop
                  muted
                  className={styles.demoVideo}
                >
                  Your browser does not support the video tag.
                </video>
              ) : (
                <img
                  src={project.media.demo}
                  alt={`${project.title} demo`}
                  className={styles.demoImage}
                />
              )}
            </div>
          </motion.section>
        )}

        {/* Detailed Description */}
        {project.longDescription && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className={styles.section}
          >
            <h2 className={styles.sectionTitle}>Project Overview</h2>
            <p className={styles.longDescription}>{project.longDescription}</p>
          </motion.section>
        )}

        {/* Role & Contribution */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className={styles.section}
        >
          <h2 className={styles.sectionTitle}>My Role & Contribution</h2>
          <div className={styles.roleCard}>
            <div className={styles.roleItem}>
              <h3 className={styles.roleLabel}>Role</h3>
              <p className={styles.roleText}>{project.role}</p>
            </div>
            <div className={styles.divider}></div>
            <div className={styles.roleItem}>
              <h3 className={styles.roleLabel}>Key Contributions</h3>
              <p className={styles.roleText}>{project.contribution}</p>
            </div>
          </div>
        </motion.section>

        {/* Tech Stack */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className={styles.section}
        >
          <h2 className={styles.sectionTitle}>Technology Stack</h2>
          <div className={styles.techGrid}>
            {project.techStack.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.6 + index * 0.05 }}
                className={styles.techBadge}
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Impact Metrics */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className={styles.section}
        >
          <h2 className={styles.sectionTitle}>Impact & Results</h2>
          <div className={styles.impactGrid}>
            {Object.entries(project.impact).map(([key, value], index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                className={styles.impactCard}
              >
                <div className={styles.impactValue}>{value}</div>
                <div className={styles.impactLabel}>{key}</div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Domains */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className={styles.section}
        >
          <h2 className={styles.sectionTitle}>Domains</h2>
          <div className={styles.domainGrid}>
            {project.domains.map((domain, index) => (
              <span key={index} className={styles.domainBadge}>
                {domain}
              </span>
            ))}
          </div>
        </motion.section>

        {/* Blog Link Section */}
        {project.links.caseStudy && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className={styles.blogSection}
          >
            <div className={styles.blogCard}>
              <FiFileText size={32} className={styles.blogIcon} />
              <div className={styles.blogContent}>
                <h3 className={styles.blogTitle}>Want to Learn More?</h3>
                <p className={styles.blogDescription}>
                  Read the detailed case study to learn about the architecture, 
                  challenges, and technical decisions behind this project.
                </p>
                <a
                  href={project.links.caseStudy}
                  className={styles.blogButton}
                >
                  Read Full Case Study →
                </a>
              </div>
            </div>
          </motion.section>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectDetail;

