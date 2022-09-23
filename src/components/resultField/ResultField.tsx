import React from 'react';
import { useAppSelector } from '../../redux/hook';
import styles from './resultField.module.scss';

const ResultField: React.FC = () => {
	let { salary, weekends, quarterlyPercent, newYearPercent } = useAppSelector(
		(state) => state.form,
	);

	//let sum;
	//if (isNaN(parseFloat(salary))) {
	//	let updSalary = 0;
	//	sum = updSalary + ();
	//} else {
	//	sum = parseFloat(salary) * 2;
	//}

	const fullSalary =
		parseFloat(salary) +
		(parseFloat(salary) / 100) * 30 -
		((parseFloat(salary) + (parseFloat(salary) / 100) * 30) / 100) * 13;

	return (
		<section className={styles.result}>
			<h2>Заполните данные</h2>
			<div className={styles.fullSallary}>
				<span>Полная зп за месяц:</span> {fullSalary} руб.
			</div>
			<div className={styles.salary}>
				<span>Зарплата:</span> 30000 руб.
			</div>
			<div className={styles.prepaid}>
				<span>Аванс:</span> 30000 руб.
			</div>
			<div className={styles.prepaid}>
				<span>Квартальная премия:</span> 30000 руб.
			</div>
			<div className={styles.prepaid}>
				<span>Новогодняя премия:</span> 30000 руб.
			</div>
		</section>
	);
};

export default ResultField;
