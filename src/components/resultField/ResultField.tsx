import React from 'react';
import { reset } from '../../redux/form/slice';
import { useAppDispatch, useAppSelector } from '../../redux/hook';
import styles from './resultField.module.scss';

const ResultField: React.FC = () => {
	const dispatch = useAppDispatch();
	let { salary, weekends, quarterlyPercent, newYearPercent } = useAppSelector(
		(state) => state.form,
	);
	const [monthlyBonus, setMonthlyBonus] = React.useState(30);

	let fullSalary = 0;
	let prepaid = 0;
	let cleanSalary = 0;
	let quarterlyPremium = 0;
	let newYearBonus = 0;
	let salaryForWekend = 0;

	if (quarterlyPercent === '') {
		quarterlyPercent = '0';
	}

	if (newYearPercent === '') {
		newYearPercent = '0';
	}

	quarterlyPremium =
		parseFloat(salary) +
		(parseFloat(salary) / 100) * parseFloat(quarterlyPercent) -
		parseFloat(salary);

	//новогодняя премия
	newYearBonus =
		parseFloat(salary) +
		(parseFloat(salary) / 100) * parseFloat(newYearPercent) -
		parseFloat(salary);
	//полная зп
	fullSalary =
		parseFloat(salary) +
		(parseFloat(salary) / 100) * monthlyBonus -
		((parseFloat(salary) + (parseFloat(salary) / 100) * monthlyBonus) / 100) * 13 +
		quarterlyPremium +
		newYearBonus +
		salaryForWekend;
	//аванс
	prepaid = (parseFloat(salary) - (parseFloat(salary) / 100) * 13) / 2;
	//зарплата
	cleanSalary = fullSalary - prepaid;
	//квартальная премия

	return (
		<div className={styles.wrapper}>
			<section className={styles.result}>
				<h2>Заполните данные</h2>
				<div className={styles.fullSallary}>
					<span>Полная зп за месяц:</span> {fullSalary ? fullSalary : 0} руб.
				</div>
				<div className={styles.prepaid}>
					<span>Аванс:</span> {prepaid ? prepaid : 0} руб.
				</div>
				<div className={styles.salary}>
					<span>Зарплата:</span> {cleanSalary ? cleanSalary : 0} руб.
				</div>

				<div className={styles.prepaid}>
					<span>Квартальная премия:</span> {quarterlyPremium ? quarterlyPremium : 0} руб.
				</div>
				<div className={styles.prepaid}>
					<span>Новогодняя премия:</span> {newYearBonus ? newYearBonus : 0} руб.
				</div>

				<div className={styles.prepaid}>
					<span>Ср.годовая:</span> {newYearBonus ? newYearBonus : 0} руб.
				</div>
			</section>
			<button className={styles.clear} onClick={() => dispatch(reset())}>
				Очистить
			</button>
		</div>
	);
};

export default ResultField;
