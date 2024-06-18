import usesBackgroundPlaceholder from '~/assets/uses-background-placeholder.jpg';
import usesBackground from '~/assets/uses-background.mp4';
import { Footer } from '~/components/footer';
import { Link } from '~/components/link';
import { List, ListItem } from '~/components/list';
import { Table, TableBody, TableCell, TableHeadCell, TableRow } from '~/components/table';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectSection,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from '~/layouts/project';
import { baseMeta } from '~/utils/meta';
import styles from './uses.module.css';

export const meta = () => {
  return baseMeta({
    title: 'Uses',
    description: 'A list of hardware and software I use to do my thing',
  });
};

export const Uses = () => {
  return (
    <>
      <ProjectContainer className={styles.uses}>
        <ProjectBackground
          src={usesBackground}
          placeholder={usesBackgroundPlaceholder}
          opacity={0.7}
        />
        <ProjectHeader
          title="Uses"
          description="A somewhat comprehensive list of tools, apps, hardware, and more that I use on a daily basis to design and code things. And yeah, that is a Mr. Robot GIF in the background."
        />
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Development</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <List>
                  <ListItem>
                    I use <Link href="https://code.visualstudio.com/">VSCode</Link> as my text
                    editor, with the Dracula Official theme and Operator Mono as my typeface of
                    choice.
                  </ListItem>
                  <ListItem>
                    Arc is my main browser for both development and general use.
                  </ListItem>
                  <ListItem>
                    <Link href="https://reactjs.org/">React</Link> is my front end
                    Javascript library of choice.
                  </ListItem>
                  <ListItem>
                    I use <Link href="https://flutter.dev/">Flutter</Link> for mobile app development. It's ability to create a highly intuitive code base and os independent applications really appealed to me as a developer
                  </ListItem>
                  <ListItem>
                    For developing backends I generally use{' '}
                    <Link href="https://nodejs.org/en/">Node js</Link>.
                  </ListItem>
                  <ListItem>
                    For CSS I’ve used a myriad pre-processors and css-in-js solutions like
                    styled-components, but these days I’m using vanilla CSS with{' '}
                    <Link href="https://tailwindcss.com/">TailwindCSS</Link> to get upcoming CSS
                    features today.
                  </ListItem>
                  <ListItem>
                    When it comes to scripting , data science and training deep learning models
                    <Link href="https://www.python.org/">Python</Link> and <Link href="https://pytorch.org/">Pytorch</Link> are my go-to weapons.
                  </ListItem>
                  <ListItem>
                    As far as databases I have experience with SQL,No-SQL & Graph databases. Some of the renowned names include <Link href="https://www.mongodb.com/">Mongo DB</Link>, <Link href="https://www.postgresql.org/">Postgres</Link>, <Link href="https://aws.amazon.com/dynamodb/">Dynamodb</Link> & <Link href="https://neo4j.com/">Neo4j</Link>
                  </ListItem>
                </List>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow stretch width="m">
              <ProjectSectionHeading>Hardware</ProjectSectionHeading>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableHeadCell>Operating system</TableHeadCell>
                    <TableCell>Mac OS Sonoma (by the way)</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Keyboard</TableHeadCell>
                    <TableCell>Logitech</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Mouse</TableHeadCell>
                    <TableCell>Logitech</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Laptop</TableHeadCell>
                    <TableCell>Macbook M1 Air 13″</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Headphones</TableHeadCell>
                    <TableCell>Realme Earpods</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </>
  );
};
