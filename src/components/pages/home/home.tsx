import _React from 'react';
import { Button } from '@mantine/core';
import {
    IconBrain,
    IconMapSearch,
    IconRefresh,
    IconArrowUpRight,
    IconMail,
    IconBrandGithub,
    IconBrandLinkedin,
    IconDownload,
} from '@tabler/icons-react';
import ContactMeForm from './contact-me-form.tsx';
import './home.css';

const metrics = [
    { label: '7+ years', detail: 'Building enterprise-grade web applications.' },
    { label: 'AI Engineering', detail: 'LLMs, RAG, vector search, multi-agent workflows.' },
    { label: 'Legacy → Modern', detail: 'AngularJS and Vue migrations to React/TypeScript.' },
];

const focusAreas = [
    {
        title: 'AI Engineering',
        description: 'LLM integration, retrieval-augmented generation, vector databases, passage embeddings, and conversational UX for production developer tooling.',
        icon: IconBrain,
    },
    {
        title: 'Geospatial Systems',
        description: 'Google Maps vector-tile rendering, lazy loading, and debounced refresh strategies tuned to render thousands of network nodes smoothly.',
        icon: IconMapSearch,
    },
    {
        title: 'Front-End Modernization',
        description: 'In-place migrations from AngularJS/jQuery and Vue to React + TypeScript without disruptive rewrites: bridges, incremental adoption, and Mantine v7.',
        icon: IconRefresh,
    },
];

const engagements = [
    {
        company: 'Altman Solon',
        role: 'Senior Consultant, AI',
        timeframe: 'Dec 2025 - Present',
        summary: 'Building the "Software Factory," an internal platform that lets non-technical consultants stand up production-grade full-stack telecom apps from a plain-English prompt.',
        highlights: [
            'Scaffolds containerized React + Vite + Mantine / FastAPI + SQLModel apps with Docker, Postgres, S3/MinIO, optional Tauri builds, and Databricks integration from a single command.',
            'Authored ~40 engineering-standards guides covering contract-first API design, persistence, runtime hardening, and telecom domain modeling.',
            'Encoded the standards into a Claude Code multi-agent team (planner, engineers, integration verifier, browser tester, reviewer) running disciplined plan/implement/review sprints.',
        ],
        tags: ['LLMs', 'RAG', 'Vector Search', 'FastAPI', 'React', 'Multi-Agent'],
    },
    {
        company: 'Altman Solon',
        role: 'Product Consultant, Arrow',
        timeframe: 'Oct 2021 - Dec 2025',
        summary: 'Led a multi-year, in-place migration of Arrow, a fiber-network planning and design platform, from a legacy AngularJS/jQuery foundation to a modern React stack.',
        highlights: [
            'Built a react2angular bridge to keep both frameworks in sync, incrementally retiring jQuery and driving Mantine adoption through the v7 upgrade.',
            'Overhauled the Google Maps vector-tile rendering system with soft re-renders, lazy loading, and debounced tile refresh to render thousands of nodes smoothly.',
            'Owned the plan editor: re-architected the editing model from service-side to front-end transactions, delivering vertex/marker editing, fault-tree risk logic, and flowerpot clustering.',
            'Rebuilt the library and resource editors (location, equipment, conduit/fiber, service-area) plus the permissions/ACL system and end-to-end Projects feature.',
        ],
        tags: ['React', 'TypeScript', 'Mantine', 'Google Maps API', 'PostgreSQL'],
    },
    {
        company: 'Human Care Systems',
        role: 'Senior Software Engineer & Onboarding Lead',
        timeframe: 'Nov 2019 - Oct 2021',
        summary: 'Co-led a comprehensive front-end rewrite using Vue.js and Vuex, establishing modular design patterns that improved code readability and scalability.',
        highlights: [
            'Engineered automated communication features including in-browser SMS and physical mail triggers.',
            'Reduced new-hire ramp-up time by 30% as Onboarding Team Lead, designing technical assessments and training curricula.',
            'Maintained backend microservices using Node.js, MoleculerJS, and MongoDB for patient management data.',
        ],
        tags: ['Vue', 'Vuex', 'Node.js', 'MoleculerJS', 'MongoDB'],
    },
    {
        company: 'Censinet',
        role: 'Full Stack Developer',
        timeframe: 'Jan 2019 - Nov 2019',
        summary: 'Built a SaaS third-party risk management platform using React, TypeScript, and Ruby on Rails, serving major healthcare providers.',
        highlights: [
            'Enhanced automated scoring algorithms for vendor risk assessments across diverse questionnaire types.',
            'Implemented Federated Single Sign-On (SSO) via OAuth, streamlining secure access for enterprise clients.',
            'Championed code quality through daily stand-ups and strict code review standards.',
        ],
        tags: ['React', 'TypeScript', 'Ruby on Rails', 'OAuth'],
    },
];

const toolbox = {
    'Languages': ['TypeScript', 'JavaScript', 'Ruby', 'Python', 'SQL', 'HTML5', 'SCSS'],
    'Front-End': ['React', 'Redux', 'Vue.js', 'Vuex', 'Angular', 'Mantine', 'Tailwind', 'Google Maps API'],
    'Back-End': ['Node.js', 'Express', 'FastAPI', 'Ruby on Rails', 'MoleculerJS', 'PostgreSQL', 'MongoDB'],
    'AI / ML': ['LLM Integration', 'RAG', 'Vector Databases', 'Embeddings', 'Multi-Agent Workflows', 'Conversational UX'],
    'DevOps & Tools': ['AWS', 'Docker', 'Git', 'CI/CD', 'Jest', 'Enzyme', 'RSpec'],
};

const resumeHref = window.location.origin + '/matthew-bowler-resume.pdf';

function Home() {
    return (
        <div className="page">
            <div className="announcement">
                <span className="announcement-dot" />
                <p className="announcement-text">
                    <strong>Personal news:</strong> Jayde and I are expecting our first baby. Joining the Bowler crew soon.
                </p>
            </div>

            <section className="section hero">
                <h1>Matthew Bowler</h1>
                <p className="hero-subtitle">
                    Senior Full-Stack Engineer with 7+ years building high-performance web apps.
                    Currently focused on AI engineering: integrating LLMs, vector search, and
                    embeddings into production developer tooling, and designing the
                    conversational interfaces around them.
                </p>
                <div className="hero-actions">
                    <Button
                        component="a"
                        href={resumeHref}
                        target="_blank"
                        rel="noreferrer"
                        leftIcon={<IconDownload size={16} />}
                    >
                        Download résumé
                    </Button>
                    <Button
                        variant="default"
                        component="a"
                        href="mailto:mattrbowler@gmail.com"
                        leftIcon={<IconMail size={16} />}
                    >
                        Email me
                    </Button>
                </div>
                <div className="metrics-grid">
                    {metrics.map((m) => (
                        <div key={m.label} className="metric">
                            <div className="metric-label">{m.label}</div>
                            <p className="metric-detail">{m.detail}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="section">
                <div className="section-label">Focus areas</div>
                <div className="focus-grid">
                    {focusAreas.map((area) => (
                        <div key={area.title} className="focus-card">
                            <div className="focus-icon">
                                <area.icon size={18} />
                            </div>
                            <h3>{area.title}</h3>
                            <p>{area.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="section">
                <div className="section-label">Experience</div>
                <div>
                    {engagements.map((engagement, idx) => (
                        <div key={`${engagement.company}-${idx}`} className="engagement">
                            <div className="engagement-header">
                                <div>
                                    <p className="engagement-company">{engagement.company}</p>
                                    <p className="engagement-role">{engagement.role}</p>
                                </div>
                                <span className="engagement-timeframe">{engagement.timeframe}</span>
                            </div>
                            <p className="engagement-summary">{engagement.summary}</p>
                            <ul className="engagement-bullets">
                                {engagement.highlights.map((h) => (
                                    <li key={h}>{h}</li>
                                ))}
                            </ul>
                            <div className="tag-row">
                                {engagement.tags.map((tag) => (
                                    <span key={tag} className="tag">{tag}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="section">
                <div className="section-label">Toolbox</div>
                <div className="toolbox-grid">
                    {Object.entries(toolbox).map(([category, skills]) => (
                        <div key={category} className="tool-group">
                            <h4>{category}</h4>
                            <div className="tag-row">
                                {skills.map((skill) => (
                                    <span key={skill} className="tag">{skill}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="section">
                <div className="section-label">Contact</div>
                <div className="contact-section">
                    <div>
                        <h2 style={{ fontSize: 24, margin: '0 0 12px', letterSpacing: '-0.01em' }}>
                            Let&apos;s build something.
                        </h2>
                        <p style={{ color: 'var(--text-dim)', fontSize: 15, margin: '0 0 20px', lineHeight: 1.6, maxWidth: 520 }}>
                            Remote-first from Savannah, GA. I partner with product, data, and
                            engineering teams to ship high-confidence features and healthier
                            codebases.
                        </p>
                        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                            <Button
                                component="a"
                                href="mailto:mattrbowler@gmail.com"
                                leftIcon={<IconMail size={16} />}
                            >
                                Email
                            </Button>
                            <Button
                                variant="default"
                                component="a"
                                href="https://www.linkedin.com/in/matthew-bowler-emb/"
                                target="_blank"
                                rel="noreferrer"
                                rightIcon={<IconArrowUpRight size={14} />}
                                leftIcon={<IconBrandLinkedin size={16} />}
                            >
                                LinkedIn
                            </Button>
                            <Button
                                variant="default"
                                component="a"
                                href="https://github.com/EmBeaux"
                                target="_blank"
                                rel="noreferrer"
                                rightIcon={<IconArrowUpRight size={14} />}
                                leftIcon={<IconBrandGithub size={16} />}
                            >
                                GitHub
                            </Button>
                        </div>
                    </div>
                    <div className="contact-details">
                        <h4>Details</h4>
                        <div className="contact-row">
                            <span>Email</span>
                            <a href="mailto:mattrbowler@gmail.com">mattrbowler@gmail.com</a>
                        </div>
                        <div className="contact-row">
                            <span>Phone</span>
                            <span>830-388-6184</span>
                        </div>
                        <div className="contact-row">
                            <span>Location</span>
                            <span>Savannah, GA</span>
                        </div>
                        <div className="contact-row">
                            <span>Résumé</span>
                            <a href={resumeHref} target="_blank" rel="noreferrer">PDF</a>
                        </div>
                    </div>
                </div>
                <div style={{ marginTop: 32 }}>
                    <ContactMeForm />
                </div>
            </section>
        </div>
    );
}

export default Home;
