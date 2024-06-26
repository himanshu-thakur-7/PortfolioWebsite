import { Link } from '~/components/link';
import { Text } from '~/components/text';
import { classes } from '~/utils/style';
import config from '~/config.json';
import styles from './footer.module.css';

export const Footer = ({ className }) => (
  <footer className={classes(styles.footer, className)}>
    <Text size="s" align="center">
      <Link secondary className={styles.link} href="/humans.txt" target="_self">
        Hand crafted by Hamish Williams 🔥
      </Link>
    </Text>
  </footer>
);
