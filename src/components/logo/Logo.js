import styles from './Logo.module.scss';
import Link from 'next/link';

const Logo = () => (
	<Link href="/">
		<div id={styles.logo}>Hub</div>
	</Link>
);

export default Logo;
