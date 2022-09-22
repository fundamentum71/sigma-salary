import React from 'react';
import styles from './resultField.module.scss';

const ResultField: React.FC = () => {
	return (
		<section className={styles.result}>
			<h2>Заполните данные</h2>
			<div className={styles.fullSallary}>
				<span>Полная зп за месяц:</span> 60000
			</div>
			<div className={styles.salary}>
				<span>Зарплата:</span> 30000
			</div>
			<div className={styles.prepaid}>
				<span>Аванс:</span> 30000
			</div>
		</section>
	);
};

export default ResultField;
