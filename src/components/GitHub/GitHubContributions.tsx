import React, { useEffect, useState } from 'react';
import { FiGithub, FiTrendingUp, FiZap } from 'react-icons/fi';
import { fetchGitHubContributions, GitHubContributionsData } from '../../utils/githubApi';
import styles from './GitHubContributions.module.css';

interface GitHubContributionsProps {
  username: string;
}

export default function GitHubContributions({ username }: GitHubContributionsProps) {
  const [data, setData] = useState<GitHubContributionsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isMounted, setIsMounted] = useState(false);
  const [selectedYear, setSelectedYear] = useState<number>(new Date().getFullYear());

  // Generate year options (current year back to 2015 or when user joined GitHub)
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: currentYear - 2014 }, (_, i) => currentYear - i);

  useEffect(() => {
    // Only run on client side
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;
    
    async function loadContributions() {
      setLoading(true);
      setError(null);
      
      try {
        const contributions = await fetchGitHubContributions(username);
        setData(contributions);
      } catch (err) {
        setError('Failed to load GitHub contributions');
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    loadContributions();
  }, [username, isMounted, selectedYear]);

  if (loading) {
    return (
      <section className={styles.container}>
        <div className={styles.loading}>
          <div className={styles.spinner} />
          <p>Loading GitHub contributions...</p>
        </div>
      </section>
    );
  }

  if (error || !data) {
    return (
      <section className={styles.container}>
        <div className={styles.error}>
          <p>{error || 'Unable to load contributions'}</p>
        </div>
      </section>
    );
  }

  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <div className={styles.headerTop}>
          <div className={styles.titleSection}>
            <FiGithub className={styles.githubIcon} />
            <div>
              <h2 className={styles.title}>GitHub Activity</h2>
              <p className={styles.subtitle}>
                Contribution history for <a href={`https://github.com/${username}`} target="_blank" rel="noopener noreferrer">@{username}</a>
              </p>
            </div>
          </div>
          
          <div className={styles.yearSelector}>
            <label htmlFor="year-select" className={styles.yearLabel}>Year:</label>
            <select 
              id="year-select"
              className={styles.yearSelect}
              value={selectedYear}
              onChange={(e) => setSelectedYear(Number(e.target.value))}
            >
              {years.map(year => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
          </div>
        </div>
        
        <div className={styles.stats}>
          <div className={styles.statCard}>
            <div className={styles.statIcon}>
              <FiGithub />
            </div>
            <div className={styles.statInfo}>
              <div className={styles.statValue}>{data.totalContributions.toLocaleString()}</div>
              <div className={styles.statLabel}>Total Contributions</div>
            </div>
          </div>
          
          <div className={styles.statCard}>
            <div className={styles.statIcon}>
              <FiZap />
            </div>
            <div className={styles.statInfo}>
              <div className={styles.statValue}>{data.currentStreak}</div>
              <div className={styles.statLabel}>Current Streak</div>
            </div>
          </div>
          
          <div className={styles.statCard}>
            <div className={styles.statIcon}>
              <FiTrendingUp />
            </div>
            <div className={styles.statInfo}>
              <div className={styles.statValue}>{data.longestStreak}</div>
              <div className={styles.statLabel}>Longest Streak</div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.graphContainer}>
        <div className={styles.graph}>
          {/* Contribution grid */}
          <div className={styles.grid}>
            {data.weeks.map((week, weekIndex) => (
              <div key={weekIndex} className={styles.week}>
                {week.days.map((day, dayIndex) => (
                  <div
                    key={`${weekIndex}-${dayIndex}`}
                    className={`${styles.day} ${styles[`level${day.level}`]}`}
                    data-count={day.count}
                    data-date={day.date}
                    title={`${day.count} contributions on ${day.date}`}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className={styles.legend}>
          <span className={styles.legendLabel}>Less</span>
          {[0, 1, 2, 3, 4].map((level) => (
            <div key={level} className={`${styles.legendBox} ${styles[`level${level}`]}`} />
          ))}
          <span className={styles.legendLabel}>More</span>
        </div>
      </div>
    </section>
  );
}

