import { Divider } from '~/components/divider';
import { Heading } from '~/components/heading';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import { Transition } from '~/components/transition';
import { Button } from '~/components/button';
import { useState } from 'react';
import styles from './project-cards.module.css';

const projects = [
  {
    title: 'Voice AI Memory Agent',
    subtitle: 'Emotion-Aware Conversational Memory',
    description:
      'Voice agent on LiveKit Agents 1.6 that remembers callers, interprets emotional tone via acoustic analysis, and adapts response style dynamically. Trust-weighted Neo4j knowledge graph with contradiction decay and sarcasm detection.',
    metrics: [
      { label: 'Memory', value: 'Neo4j Graph' },
      { label: 'Prosody', value: 'Adaptive' },
    ],
    tags: ['LiveKit', 'Neo4j', 'Deepgram', 'OpenAI', 'FastAPI', 'OpenSMILE'],
    link: 'https://github.com/himanshu-thakur-7/Voice-AI-Memory-Prototype',
    blogLink: null,
    icon: 'voice',
    accent: '#f472b6',
  },
  {
    title: 'SYNC — RM Briefing Co-Pilot',
    subtitle: 'Voice AI for Relationship Managers',
    description:
      '45-second client briefings via phone call with portfolio health, risk flags, and cross-sell recommendations. Live whisper coaching during calls, voice command CRM execution, and post-call analytics across 7 CRM integrations.',
    metrics: [
      { label: 'CRM Adapters', value: '7' },
      { label: 'Briefing', value: '45s' },
    ],
    tags: ['FastAPI', 'React', 'Ringg AI', 'GPT-4o', 'WebSocket', 'SSE'],
    link: 'https://github.com/himanshu-thakur-7/sync-rm-briefing-ai',
    blogLink: null,
    icon: 'sync-ai',
    accent: '#60a5fa',
  },
];

function ProjectIcon({ name }) {
  const props = {
    width: 36,
    height: 36,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.8,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  };
  if (name === 'voice') {
    return (
      <svg {...props}>
        <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
        <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
        <line x1="12" y1="19" x2="12" y2="23" />
        <line x1="8" y1="23" x2="16" y2="23" />
      </svg>
    );
  }
  // sync-ai
  return (
    <svg {...props}>
      <path d="M2 12a10 10 0 0 1 18-6" />
      <path d="M22 12a10 10 0 0 1-18 6" />
      <polyline points="20 6 20 2 16 2" />
      <polyline points="4 18 4 22 8 22" />
      <circle cx="12" cy="12" r="3" />
      <path d="M12 9v-1M12 16v-1M15 12h1M8 12h-1" strokeWidth="1.2" />
    </svg>
  );
}

export function AIProjectCards({ id, sectionRef, visible }) {
  const [focused, setFocused] = useState(false);
  const titleId = `${id}-title`;

  return (
    <Section
      className={styles.section}
      as="section"
      id={id}
      ref={sectionRef}
      aria-labelledby={titleId}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      tabIndex={-1}
    >
      <Transition in={visible || focused} timeout={0}>
        {({ visible, nodeRef }) => (
          <div className={styles.content} ref={nodeRef}>
            <div className={styles.sectionHeader}>
              <div className={styles.tag} aria-hidden>
                <Divider
                  notchWidth="64px"
                  notchHeight="8px"
                  collapsed={!visible}
                  collapseDelay={1000}
                />
                <span className={styles.tagText} data-visible={visible}>
                  Voice AI
                </span>
              </div>
              <Heading
                level={3}
                as="h2"
                className={styles.heading}
                data-visible={visible}
                id={titleId}
              >
                AI Systems I've Built
              </Heading>
              <Text className={styles.subheading} data-visible={visible} size="l" as="p">
                Production voice AI systems with emotional intelligence, persistent memory,
                and real-time CRM integration — built for enterprise sales workflows.
              </Text>
            </div>
            <div className={styles.grid}>
              {projects.map((project, index) => (
                <article
                  key={project.title}
                  className={styles.card}
                  data-visible={visible}
                  style={{
                    '--card-delay': `${300 + index * 150}ms`,
                    '--card-accent': project.accent,
                  }}
                >
                  <div className={styles.cardGlow} aria-hidden />
                  <div className={styles.cardHeader}>
                    <div className={styles.iconWrap}>
                      <ProjectIcon name={project.icon} />
                    </div>
                    <div className={styles.cardIndex}>
                      {String(index + 1).padStart(2, '0')}
                    </div>
                  </div>
                  <Heading level={4} as="h3" className={styles.cardTitle}>
                    {project.title}
                  </Heading>
                  <Text size="s" className={styles.cardSubtitle}>
                    {project.subtitle}
                  </Text>
                  <Text size="s" as="p" className={styles.cardDescription}>
                    {project.description}
                  </Text>
                  <div className={styles.metrics}>
                    {project.metrics.map(metric => (
                      <div key={metric.label} className={styles.metric}>
                        <span className={styles.metricValue}>{metric.value}</span>
                        <span className={styles.metricLabel}>{metric.label}</span>
                      </div>
                    ))}
                  </div>
                  <div className={styles.tags}>
                    {project.tags.map(tag => (
                      <span key={tag} className={styles.tagPill}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className={styles.cardActions}>
                    <Button
                      secondary
                      iconHoverShift
                      href={project.link}
                      iconEnd="github"
                    >
                      Code
                    </Button>
                    {project.blogLink && (
                      <Button iconHoverShift href={project.blogLink} iconEnd="arrow-right">
                        Read write-up
                      </Button>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}
      </Transition>
    </Section>
  );
}
