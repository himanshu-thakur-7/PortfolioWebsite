import onlineIDE from "~/assets/OnlineIDE.png";
import chessAppLogin from "~/assets/chessAppLogin.jpg";
import chessAppHome from "~/assets/chessAppHome.jpg";
import sprTexturePlaceholder from '~/assets/spr-lesson-builder-dark-placeholder.jpg';
import { Footer } from '~/components/footer';
import { baseMeta } from '~/utils/meta';
import { Intro } from './intro';
import { Profile } from './profile';
import { ProjectSummary } from './project-summary';
import { ProjectCards } from './project-cards';
import { BlogSection } from './blog-section';
import { useEffect, useRef, useState } from 'react';
import config from '~/config.json';
import styles from './home.module.css';
import mealsApp1 from "~/assets/mealsApp1.png";
import mealsApp2 from "~/assets/mealsApp2.png";
import malwareClassification from "~/assets/malwareClassification.png";

export const links = () => {
  return [
    {
      rel: 'prefetch',
      href: '/draco/draco_wasm_wrapper.js',
      as: 'script',
      type: 'text/javascript',
      importance: 'low',
    },
    {
      rel: 'prefetch',
      href: '/draco/draco_decoder.wasm',
      as: 'fetch',
      type: 'application/wasm',
      importance: 'low',
    },
  ];
};

export const meta = () => {
  return baseMeta({
    title: 'Software Engineer',
    description: `Portfolio of ${config.name} — Backend Engineer & Distributed Systems`,
  });
};

export const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();
  const projectThree = useRef();
  const projectFour = useRef();
  const systemProjects = useRef();
  const blogs = useRef();
  const details = useRef();

  useEffect(() => {
    const sections = [
      intro, projectOne, projectTwo, projectThree, projectFour,
      systemProjects, blogs, details,
    ];

    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            if (visibleSections.includes(section)) return;
            setVisibleSections(prevSections => [...prevSections, section]);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    const indicatorObserver = new IntersectionObserver(
      ([entry]) => {
        setScrollIndicatorHidden(!entry.isIntersecting);
      },
      { rootMargin: '-100% 0px 0px 0px' }
    );

    sections.forEach(section => {
      sectionObserver.observe(section.current);
    });

    indicatorObserver.observe(intro.current);

    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);

  return (
    <div className={styles.home}>
      <Intro
        id="intro"
        sectionRef={intro}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />
      <ProjectSummary
        id="project-1"
        sectionRef={projectOne}
        visible={visibleSections.includes(projectOne.current)}
        index={1}
        title="A fresh coding experience"
        description="Developed an online IDE platform using React, Node js, Socket.io and Docker"
        buttonText="View project"
        buttonLink="https://github.com/himanshu-thakur-7/OnlineIDE"
        model={{
          type: 'laptop',
          alt: 'Online Editor',
          textures: [
            {
              srcSet: `${onlineIDE} 1280w, ${onlineIDE} 2560w`,
              placeholder: sprTexturePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-2"
        alternate
        sectionRef={projectTwo}
        visible={visibleSections.includes(projectTwo.current)}
        index={2}
        title="Mind games within 64 squares"
        description="Developed a multi-player chess app using Flutter, Node Js and Firebase"
        buttonText="View project"
        buttonLink="https://github.com/himanshu-thakur-7/chess_game_flutter"
        model={{
          type: 'phone',
          alt: 'Chess App',
          textures: [
            {
              srcSet: `${chessAppLogin} 375w, ${chessAppLogin} 750w`,
              placeholder: chessAppLogin,
            },
            {
              srcSet: `${chessAppHome} 375w, ${chessAppHome} 750w`,
              placeholder: chessAppHome,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-3"
        alternate
        sectionRef={projectThree}
        visible={visibleSections.includes(projectThree.current)}
        index={3}
        title="A lip-smacking treat"
        description="Developed a recipes app in Flutter"
        buttonText="View project"
        buttonLink="https://github.com/himanshu-thakur-7/meals"
        model={{
          type: 'phone',
          alt: 'Meals App',
          textures: [
            {
              srcSet: `${mealsApp1} 375w, ${mealsApp1} 750w`,
              placeholder: mealsApp1,
            },
            {
              srcSet: `${mealsApp2} 375w, ${mealsApp2} 750w`,
              placeholder: mealsApp2,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-4"
        sectionRef={projectFour}
        visible={visibleSections.includes(projectFour.current)}
        index={4}
        title="What's your malware?"
        description="Used Pytorch for research on classification of different malware signatures via renowned neural net architectures"
        buttonText="View project"
        buttonLink="https://github.com/himanshu-thakur-7/Malware-Classification"
        model={{
          type: 'laptop',
          alt: 'Malware Classification',
          textures: [
            {
              srcSet: `${malwareClassification} 800w, ${malwareClassification} 1920w`,
              placeholder: malwareClassification,
            },
          ],
        }}
      />
      <ProjectCards
        id="system-projects"
        sectionRef={systemProjects}
        visible={visibleSections.includes(systemProjects.current)}
      />
      <BlogSection
        id="blogs"
        sectionRef={blogs}
        visible={visibleSections.includes(blogs.current)}
      />
      <Profile
        sectionRef={details}
        visible={visibleSections.includes(details.current)}
        id="details"
      />
      <Footer />
    </div>
  );
};
