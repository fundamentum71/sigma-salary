import React from 'react';
import styles from './footer.module.scss';

const Footer: React.FC = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.items}>Версия 1.1</div>
			<div className={styles.items}>г. Калуга</div>
			<div className={styles.items}>2022г.</div>
		</div>
	);
};

export default Footer;
