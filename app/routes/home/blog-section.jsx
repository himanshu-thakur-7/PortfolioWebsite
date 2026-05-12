import { Divider } from '~/components/divider';
import { Heading } from '~/components/heading';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import { Transition } from '~/components/transition';
import { Button } from '~/components/button';
import { useState } from 'react';
import styles from './blog-section.module.css';

const blogPosts = [
  {
    title: 'Building a Distributed Ride-Matching Backend (Uber-Style)',
    description:
      'A deep dive into a real-time, scalable architecture with FastAPI, Redis, and event-driven design.',
    date: 'May 2026',
    url: 'https://medium.com/@himanshuthakur8119/building-a-distributed-ride-matching-backend-uber-style-de8b75919b0e',
    tag: 'System Design',
  },
  {
    title: 'Designing a Dropbox-like File Sync System',
    description:
      'What actually makes distributed file synchronization hard — the core engineering challenges behind eventual consistency.',
    date: 'Apr 2026',
    url: 'https://medium.com/@himanshuthakur8119/designing-a-dropbox-like-file-sync-system-what-actually-makes-it-hard-afc3f0ed906a',
    tag: 'Distributed Systems',
  },
  {
    title: 'Building a Distributed Load Balancer from Scratch',
    description:
      'A step-by-step engineering walkthrough with Go, Docker, Redis, and Pub/Sub.',
    date: 'Feb 2026',
    url: 'https://medium.com/@himanshuthakur8119/building-a-distributed-load-balancer-from-scratch-634d519d1df9',
    tag: 'Go',
  },
  {
    title: 'Design Patterns for Real Backend Engineers — Factory Method',
    description:
      'Practical guide to the Factory Method pattern using Python for backend development.',
    date: 'Jan 2026',
    url: 'https://medium.com/@himanshuthakur8119/design-patterns-for-real-backend-engineers-no-bs-edition-factory-method-pattern-154642c9d8f2',
    tag: 'Design Patterns',
  },
  {
    title: 'Why Every Backend Engineer Must Learn Design Patterns — Singleton',
    description:
      'Starting with Singleton — introduction to design patterns for backend engineers preparing for system design interviews.',
    date: 'Jan 2026',
    url: 'https://medium.com/@himanshuthakur8119/why-every-backend-engineer-must-learn-design-patterns-no-bs-edition-starting-with-singleton-07c6578570aa',
    tag: 'Design Patterns',
  },
];

function ArrowRight() {
  return (
    <svg
      className={styles.arrow}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

export function BlogSection({ id, sectionRef, visible }) {
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
                  Writing
                </span>
              </div>
              <Heading
                level={3}
                as="h2"
                className={styles.heading}
                data-visible={visible}
                id={titleId}
              >
                Latest from the blog
              </Heading>
              <Text className={styles.subheading} data-visible={visible} size="l" as="p">
                Deep dives into distributed systems, system design patterns, and backend
                engineering — published on Medium.
              </Text>
            </div>
            <div className={styles.posts}>
              {blogPosts.map((post, index) => (
                <a
                  key={post.title}
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.postCard}
                  data-visible={visible}
                  style={{ '--post-delay': `${300 + index * 100}ms` }}
                >
                  <div className={styles.postMeta}>
                    <span className={styles.postTag}>{post.tag}</span>
                    <span className={styles.postDate}>{post.date}</span>
                  </div>
                  <div className={styles.postBody}>
                    <Heading level={5} as="h3" className={styles.postTitle}>
                      {post.title}
                    </Heading>
                    <Text size="s" as="p" className={styles.postDescription}>
                      {post.description}
                    </Text>
                  </div>
                  <ArrowRight />
                </a>
              ))}
            </div>
            <div className={styles.viewAll} data-visible={visible}>
              <Button
                secondary
                iconHoverShift
                href="https://medium.com/@himanshuthakur8119"
                iconEnd="arrow-right"
              >
                View all posts on Medium
              </Button>
            </div>
          </div>
        )}
      </Transition>
    </Section>
  );
}
