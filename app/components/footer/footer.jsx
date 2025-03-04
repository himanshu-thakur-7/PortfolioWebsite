import { Link } from '~/components/link';
import { Text } from '~/components/text';
import { classes } from '~/utils/style';
import config from '~/config.json';
import styles from './footer.module.css';

export const Footer = ({ className }) => (
  <footer className={classes(styles.footer, className)}>
    <Text size="s" align="center">
      <Link secondary className={styles.link} href="https://drive.google.com/file/d/1xotLKNvopW52k0qUVHqCufX3-uQJtYbL/view?usp=sharing" target="_self">
        Himanshu Thakur
      </Link>
    </Text>
  </footer>
);
