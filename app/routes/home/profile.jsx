import profileImgLarge from '~/assets/profile-large.jpg';
import profileImgPlaceholder from '~/assets/profile-placeholder.jpg';
import profileImg from '~/assets/profile.jpg';
import { Button } from '~/components/button';
import { DecoderText } from '~/components/decoder-text';
import { Divider } from '~/components/divider';
import { Heading } from '~/components/heading';
import { Image } from '~/components/image';
import { Link } from '~/components/link';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import { Transition } from '~/components/transition';
import { Fragment, useState } from 'react';
import { media } from '~/utils/style';
import styles from './profile.module.css';

const ProfileText = ({ visible, titleId }) => (
  <Fragment>
    <Heading className={styles.title} data-visible={visible} level={3} id={titleId}>
      <DecoderText text="Hi there" start={visible} delay={500} />
    </Heading>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      {"I'm Himanshu, a Senior Software Engineer based in Bengaluru, India, currently building distributed backend systems at "}
      <Link href="https://www.wellsfargo.com/">Wells Fargo</Link>
      {", where I scaled the Advisor Gateway platform 30x (500 to 15,000+ users). I specialize in distributed systems, event-driven architectures, and cloud-native infrastructure using Go, Python, Kubernetes, and Redis."}
    </Text>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      {"I love tackling hard engineering problems around consistency, fault tolerance, and low-latency design. I write deep dives on distributed systems on "}
      <Link href="https://medium.com/@himanshuthakur8119">Medium</Link>
      {" — covering ride-matching at Uber scale, Dropbox-style file sync, and load balancer internals."}
    </Text>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      {"Outside of work, I practice chess, hit the gym, and ship side projects. Always open to conversations about backend systems and remote-friendly opportunities."}
    </Text>
  </Fragment>
);

export const Profile = ({ id, visible, sectionRef }) => {
  const [focused, setFocused] = useState(false);
  const titleId = `${id}-title`;

  return (
    <Section
      className={styles.profile}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      as="section"
      id={id}
      ref={sectionRef}
      aria-labelledby={titleId}
      tabIndex={-1}
    >
      <Transition in={visible || focused} timeout={0}>
        {({ visible, nodeRef }) => (
          <div className={styles.content} ref={nodeRef}>
            <div className={styles.column}>
              <ProfileText visible={visible} titleId={titleId} />
              <div className={styles.buttonGroup}>
                <Button
                  secondary
                  className={styles.button}
                  data-visible={visible}
                  href="/contact"
                  icon="send"
                >
                  Send me a message
                </Button>
                <Button
                  secondary
                  className={styles.button}
                  data-visible={visible}
                  href="/Himanshu_Thakur_Resume.pdf"
                  icon="download"
                  download
                >
                  Download Resume
                </Button>
              </div>
            </div>
            <div className={styles.column}>
              <div className={styles.tag} aria-hidden>
                <Divider
                  notchWidth="64px"
                  notchHeight="8px"
                  collapsed={!visible}
                  collapseDelay={1000}
                />
                <div className={styles.tagText} data-visible={visible}>
                  About me
                </div>
              </div>
              <div className={styles.image}>
                <Image
                  reveal
                  delay={100}
                  placeholder={profileImgPlaceholder}
                  srcSet={`${profileImg} 320w, ${profileImgLarge} 960w`}
                  width={960}
                  height={1080}
                  sizes={`(max-width: ${media.mobile}px) 100vw, 480px`}
                  alt="Himanshu Thakur — Senior Software Engineer"
                />
              </div>
            </div>
          </div>
        )}
      </Transition>
    </Section>
  );
};
