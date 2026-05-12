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
    title: 'Distributed Ride-Matching Backend',
    subtitle: 'Uber-Style Geospatial Matching Engine',
    description:
      'Real-time geospatial driver discovery using Redis GEOADD/GEORADIUS with sub-200ms P95 driver lookup. Event-driven assignment flow with Pub/Sub designed for horizontal scalability under high concurrent-ride load.',
    metrics: [
      { label: 'P95 Latency', value: '<200ms' },
      { label: 'Architecture', value: 'Event-Driven' },
    ],
    tags: ['FastAPI', 'Redis GEO', 'DynamoDB', 'Pub/Sub', 'WebSockets'],
    link: 'https://github.com/himanshu-thakur-7',
    blogLink:
      'https://medium.com/@himanshuthakur8119/building-a-distributed-ride-matching-backend-uber-style-de8b75919b0e',
    icon: 'ride',
    accent: '#22d3ee',
  },
  {
    title: 'Distributed File Sync System',
    subtitle: 'Dropbox-Style Eventual Consistency',
    description:
      'Event-driven file synchronization across nodes with chunk-level diffs to minimize bytes-on-wire. Conflict-resolution guarantees with zero data loss under concurrent writes across distributed clients.',
    metrics: [
      { label: 'Data Loss', value: '0%' },
      { label: 'Sync', value: 'Chunk-level' },
    ],
    tags: ['Go', 'File Watchers', 'Diff-based Sync', 'Conflict Resolution'],
    link: 'https://github.com/himanshu-thakur-7',
    blogLink:
      'https://medium.com/@himanshuthakur8119/designing-a-dropbox-like-file-sync-system-what-actually-makes-it-hard-afc3f0ed906a',
    icon: 'sync',
    accent: '#34d399',
  },
  {
    title: 'Distributed Load Balancer',
    subtitle: 'Built from Scratch in Go',
    description:
      'From-scratch L7 load balancer with round-robin + weighted routing, health-check probing, automatic failover, and a pluggable strategy interface. Backed by Redis Pub/Sub for live node updates.',
    metrics: [
      { label: 'Routing', value: 'Round-Robin' },
      { label: 'Failover', value: 'Automatic' },
    ],
    tags: ['Go', 'Docker', 'Redis Pub/Sub', 'Health Checks'],
    link: 'https://github.com/himanshu-thakur-7',
    blogLink:
      'https://medium.com/@himanshuthakur8119/building-a-distributed-load-balancer-from-scratch-634d519d1df9',
    icon: 'balance',
    accent: '#a78bfa',
  },
  {
    title: 'Email Orchestrator with Triage',
    subtitle: 'AI-Powered Document Classification',
    description:
      'Classified financial emails using GPT-4 few-shot learning on a 180-email dataset. Reduced redundant LLM calls 40% via cosine-similarity caching (threshold >0.95) in MongoDB Atlas Vector Search. Scaled with FastAPI async + Kubernetes HPA.',
    metrics: [
      { label: 'LLM Cost', value: '-40%' },
      { label: 'Cache Hit', value: '>0.95' },
    ],
    tags: ['FastAPI', 'GPT-4', 'Vector Search', 'MongoDB', 'K8s HPA'],
    link: 'https://github.com/himanshu-thakur-7',
    blogLink: null,
    icon: 'mail',
    accent: '#f59e0b',
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
  if (name === 'ride') {
    return (
      <svg {...props}>
        <path d="M5 17a2 2 0 1 0 4 0 2 2 0 1 0-4 0M15 17a2 2 0 1 0 4 0 2 2 0 1 0-4 0" />
        <path d="M3 17h-1v-4l2-5h9l4 5h2a2 2 0 0 1 2 2v2h-2" />
        <path d="M6 13h12" />
      </svg>
    );
  }
  if (name === 'sync') {
    return (
      <svg {...props}>
        <path d="M21 12a9 9 0 1 0-3.5 7.1" />
        <path d="M21 17v-5h-5" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    );
  }
  if (name === 'balance') {
    return (
      <svg {...props}>
        <path d="M3 6h18" />
        <path d="M5 6l4 12M19 6l-4 12" />
        <path d="M12 4v4" />
        <circle cx="12" cy="20" r="1.5" />
        <path d="M6 18h6M12 18h6" />
      </svg>
    );
  }
  // mail
  return (
    <svg {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
      <path d="M16 14l4 4M20 14l-4 4" strokeWidth="1.2" />
    </svg>
  );
}

export function ProjectCards({ id, sectionRef, visible }) {
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
                  Distributed Systems
                </span>
              </div>
              <Heading
                level={3}
                as="h2"
                className={styles.heading}
                data-visible={visible}
                id={titleId}
              >
                Systems I've Designed
              </Heading>
              <Text className={styles.subheading} data-visible={visible} size="l" as="p">
                Production-grade backend systems built from first principles — distributed
                architectures, geospatial indexing, and fault-tolerant services. Engineering
                write-ups available on Medium.
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
