import React from 'react';

import KpiCard from './KpiCard';
import skills from '../../data/skills.json';
import impact from '../../data/impact.json';
import experience from '../../data/experience.json';
import projects from '../../data/projects.json';
import certs from '../../data/certs.json';

import SkillBarChart from '../Charts/SkillBarChart';
import ImpactDonut from '../Charts/ImpactDonut';
import ExperienceLineChart from '../Charts/ExperienceLineChart';
import CertificationsArea from '../Charts/CertificationsArea';
import ProjectBarChart from '../Charts/ProjectBarChart';

export default function DashboardLayout() {
    return (
        <div className="dashboard-wrap">
            <div className="header">
                <div>
                    <h1>Dashboard</h1>
                    <div className="small">Resume as interactive dashboard</div>
                </div>
                <div className="small">Prashant Bhandari · Data Analyst</div>
            </div>


            <div className="grid">
                <div className="card col-full">
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                        <div>
                            <h3 style={{ marginTop: 0 }}>Skills</h3>
                            <SkillBarChart data={skills} xKey="skill" yKey="value" />
                        </div>


                        <div>
                            <h3 style={{ marginTop: 0 }}>By Impact</h3>
                            <ImpactDonut data={impact} nameKey="name" valueKey="value" />
                        </div>
                    </div>
                </div>


                <div className="card">
                    <h3 style={{ marginTop: 0 }}>Work Experience</h3>
                    <ExperienceLineChart data={experience} xKey="year" yKey="exp" />
                </div>


                <div className="card">
                    <h3 style={{ marginTop: 0 }}>KPI Cards</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                        <KpiCard title="Years experience" value="4.2" unit="yrs" description="Total professional experience" />
                        <KpiCard title="Tools mastered" value="6" unit="tools" description="Key analytics & BI" />
                        <KpiCard title="Projects" value="35" unit="projects" description="Total delivered" />
                    </div>
                </div>


                <div className="card">
                    <h3 style={{ marginTop: 0 }}>Projects Chart</h3>
                    <ProjectBarChart data={projects} xKey="name" yKey="count" />
                </div>


                <div className="card">
                    <h3 style={{ marginTop: 0 }}>Certifications</h3>
                    <CertificationsArea data={certs} xKey="period" yKey="value" />
                </div>


                <div className="card">
                    <h3 style={{ marginTop: 0 }}>Extra KPI</h3>
                    <div className="small">Add any additional cards here (e.g., users impacted, time saved)</div>
                </div>


            </div>
        </div>
    );
}