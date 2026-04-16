'use client';

import { motion } from 'framer-motion';
import { Hammer, Rocket, Search, Users, GitMerge, ArrowUpRight, Github } from 'lucide-react';
import styles from './forge.module.css';

const PROJECTS = [
  {
    id: 1,
    title: 'Nexus OS UI Library',
    author: 'Elena Rostova',
    status: 'Recruiting',
    statusClass: 'statusRecruiting',
    desc: 'An open-source, highly accessible, and glassmorphic React component library designed specifically for futuristic educational platforms. We are building the foundational blocks for the next era of web interfaces.',
    tech: ['React', 'Framer Motion', 'Tailwind', 'Storybook'],
    roles: [
      { name: 'UI/UX Designer', status: 'Open' },
      { name: 'React Developer', status: 'Filled' },
      { name: 'Accessibility QA', status: 'Open' }
    ]
  },
  {
    id: 2,
    title: 'CodeReview.ai',
    author: 'David Chen',
    status: 'Active',
    statusClass: 'statusActive',
    desc: 'A lightweight GitHub application that automatically reviews PRs using small LLMs. Perfect for junior devs looking to understand enterprise scaling and AST parsing.',
    tech: ['Node.js', 'Probot', 'OpenAI', 'Docker'],
    roles: [
      { name: 'Backend Engineer', status: 'Open' },
      { name: 'DevOps Specialist', status: 'Open' }
    ]
  },
  {
    id: 3,
    title: 'Algorithm Visualizer',
    author: 'Sarah Jenkins',
    status: 'In Review',
    statusClass: 'statusReview',
    desc: 'An interactive 3D web platform that visualizes complex data structures and algorithms in real-time. We just finished the MVP and are looking for beta testers.',
    tech: ['Three.js', 'WebGL', 'TypeScript', 'Vite'],
    roles: [
      { name: 'Beta Tester', status: 'Open' },
      { name: 'Technical Writer', status: 'Open' }
    ]
  }
];

export default function ForgePage() {
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={styles.heroTag}
        >
          <Hammer size={14} />
          The Student Incubator
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className={styles.title}
        >
          Build the future.
          <span>Together.</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className={styles.subtitle}
        >
          The Forge is Infodesk Nexus' exclusive open-source incubator. Pitch your app ideas, recruit talented peers from around the globe, and build production-ready software while you learn.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className={styles.heroActions}
        >
          <button className={styles.btnPrimary}>
            <Rocket size={18} />
            Pitch a Project
          </button>
          <button className={styles.btnSecondary}>
            <Search size={18} />
            Find a Team
          </button>
        </motion.div>
      </section>

      {/* Projects Grid */}
      <section>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>
            <GitMerge size={24} className="theme-text-primary" />
            Active Repositories
          </h2>
          <div className={styles.filterControls}>
            <button className={`${styles.filterBtn} ${styles.active}`}>All Projects</button>
            <button className={styles.filterBtn}>Recruiting</button>
            <button className={styles.filterBtn}>Launched</button>
          </div>
        </div>

        <div className={styles.grid}>
          {PROJECTS.map((project, idx) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * idx }}
              className={`liquid-glass-strong ${styles.card}`}
            >
              <div className={styles.cardHeader}>
                <div>
                  <h3 className={styles.cardTitle}>{project.title}</h3>
                  <div className={styles.cardAuthor}>
                    <Github size={14} /> Maintained by {project.author}
                  </div>
                </div>
                <div className={`${styles.statusIndicator} ${styles[project.statusClass]}`}>
                  <div className={styles.statusDot}></div>
                  {project.status}
                </div>
              </div>

              <p className={styles.cardDesc}>{project.desc}</p>

              <div className={styles.techStack}>
                {project.tech.map(tech => (
                  <span key={tech} className={styles.techBadge}>{tech}</span>
                ))}
              </div>

              <div className={styles.cardFooter}>
                <div className={styles.rolesContainer}>
                  <div className={styles.rolesTitle}>Open Positions ({project.roles.filter(r => r.status === 'Open').length})</div>
                  {project.roles.map((role, i) => (
                    <div key={i} className={styles.roleItem} style={{ opacity: role.status === 'Filled' ? 0.5 : 1 }}>
                      <span className={styles.roleName}>{role.name}</span>
                      <span className={styles.roleStatus} style={{ color: role.status === 'Filled' ? 'rgba(17,24,39,0.5)' : '#4f46e5' }}>
                        {role.status}
                      </span>
                    </div>
                  ))}
                </div>
                <button className={styles.applyBtn}>
                  Apply to Join <ArrowUpRight size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
