import React from "react";
import {
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";
import { FiTrendingUp } from "react-icons/fi";
import strengthsData from "../../data/engineeringStrengths.json";
import styles from "./EngineeringStrengthsChart.module.css";

interface StrengthData {
  area: string;
  score: number;
  icon: string;
  description: string;
}

interface CustomTooltipProps {
  active?: boolean;
  payload?: Array<{
    payload: StrengthData;
    value: number;
  }>;
}

const CustomTooltip: React.FC<CustomTooltipProps> = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    const score = payload[0].value;
    return (
      <div
        style={{
          backgroundColor: "var(--ifm-background-color)",
          border: "1px solid var(--ifm-color-emphasis-300)",
          borderRadius: "8px",
          padding: "12px 16px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          maxWidth: "280px",
        }}
      >
        <p
          style={{
            margin: "0 0 8px 0",
            fontWeight: "bold",
            fontSize: "14px",
            color: "var(--ifm-font-color-base)",
          }}
        >
          {data.area}
        </p>
        <p
          style={{
            margin: "0 0 8px 0",
            fontSize: "13px",
            color: "var(--ifm-color-emphasis-700)",
          }}
        >
          <strong>Score: {score}/100</strong>
        </p>
        <p
          style={{
            margin: "0",
            fontSize: "12px",
            color: "var(--ifm-color-emphasis-600)",
            lineHeight: "1.5",
          }}
        >
          {data.description}
        </p>
      </div>
    );
  }
  return null;
};

const EngineeringStrengthsChart: React.FC = () => {
  const strengths = strengthsData.strengths as StrengthData[];

  // Get strength level description
  const getStrengthLevel = (score: number): string => {
    if (score >= 85) return "Expert";
    if (score >= 75) return "Advanced";
    if (score >= 65) return "Proficient";
    return "Intermediate";
  };

  // Calculate average score
  const averageScore = Math.round(
    strengths.reduce((sum, s) => sum + s.score, 0) / strengths.length
  );

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.headerContent}>
          <FiTrendingUp className={styles.icon} />
          <div className={styles.titleSection}>
            <h3 className={styles.title}>
              Engineering Strengths
            </h3>
            <p className={styles.subtitle}>
              Technical proficiency across full-stack engineering domains
            </p>
          </div>
        </div>
      </div>

      <div className={styles.chartWrapper}>
        <ResponsiveContainer width="100%" height="100%">
        <RadarChart data={strengths} cx="50%" cy="50%">
          <PolarGrid stroke="var(--ifm-color-emphasis-300)" />
          <PolarAngleAxis
            dataKey="area"
            tick={{
              fill: "var(--ifm-font-color-base)",
              fontSize: 12,
              fontWeight: 500,
            }}
            style={{ fontSize: "12px" }}
          />
          <PolarRadiusAxis
            angle={90}
            domain={[0, 100]}
            tick={{
              fill: "var(--ifm-color-emphasis-600)",
              fontSize: 11,
            }}
          />
          <Radar
            name="Proficiency"
            dataKey="score"
            stroke="var(--ifm-color-primary)"
            fill="var(--ifm-color-primary)"
            fillOpacity={0.5}
            strokeWidth={2}
            animationBegin={0}
            animationDuration={1000}
            animationEasing="ease-out"
          />
          <Tooltip content={<CustomTooltip />} />
        </RadarChart>
      </ResponsiveContainer>
      </div>

      <div className={styles.statsGrid}>
        <div className={styles.statCard}>
          <p
            className={styles.statValue}
            style={{ color: "var(--ifm-color-primary)" }}
          >
            {averageScore}
          </p>
          <p className={styles.statLabel}>
            Average Score
          </p>
        </div>

        <div className={styles.statCard}>
          <p
            className={styles.statValue}
            style={{ color: "var(--ifm-color-success)" }}
          >
            {strengths.length}
          </p>
          <p className={styles.statLabel}>
            Technical Areas
          </p>
        </div>

        <div className={styles.statCard}>
          <p
            className={styles.statValue}
            style={{ 
              color: "var(--ifm-color-warning)",
              fontSize: "16px"
            }}
          >
            {getStrengthLevel(averageScore)}
          </p>
          <p className={styles.statLabel}>
            Overall Level
          </p>
        </div>
      </div>

      <div className={styles.legend}>
        <p className={styles.legendText}>
          <strong>Score Scale:</strong> 0-64: Intermediate | 65-74: Proficient
          | 75-84: Advanced | 85-100: Expert
        </p>
      </div>
    </div>
  );
};

export default EngineeringStrengthsChart;

