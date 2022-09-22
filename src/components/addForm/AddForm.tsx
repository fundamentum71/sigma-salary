import React from 'react';
import styles from './addForm.module.scss';

const AddForm: React.FC = () => {
	const [salary, setSalary] = React.useState('');
	const [weekends, setWeekends] = React.useState('');
	const [quarterlyPercent, setQuarterlyPercent] = React.useState('');
	const [newYearPercent, setNewYearPercent] = React.useState('');
	const [quarterly, setQuarterly] = React.useState(false);
	const [newYear, setNewYear] = React.useState(false);

	console.log(salary, weekends, quarterlyPercent, newYearPercent);

	const handleAction = () => {};

	const onValueChange = (e: any) => {
		switch (e.target.name) {
			case 'salary':
				setSalary(e.target.value);
				break;

			case 'weekends':
				setWeekends(e.target.value);
				break;

			case 'quarterlyPercent':
				setQuarterlyPercent(e.target.value);
				break;

			case 'newYearPercent':
				setNewYearPercent(e.target.value);
				break;

			default:
				console.log(new Error());
		}
	};

	return (
		<div className={styles.addForm}>
			<label htmlFor="salary" className={styles.addForm__label}>
				Введите ваш оклад:
			</label>
			<br />
			<input
				id="salary"
				name="salary"
				type="number"
				placeholder="Оклад"
				className={styles.addForm__input}
				value={salary}
				onChange={(e) => onValueChange(e)}
			/>
			<span>руб.</span> <br />
			<label htmlFor="weekends" className={styles.addForm__label}>
				Сколько выходных выходили:
			</label>
			<input
				id="weekends"
				name="weekends"
				type="number"
				placeholder="Вх.дни"
				className={styles.addForm__input}
				value={weekends}
				onChange={(e) => onValueChange(e)}
			/>
			<span>выходных</span> <br />
			<label htmlFor="quarterly" className={styles.addForm__label}>
				Будет квартальная премия?
			</label>
			<input
				id="quarterly"
				name="quarterly"
				type="checkbox"
				checked={quarterly}
				onChange={() => setQuarterly(!quarterly)}
			/>{' '}
			<br />
			{quarterly && (
				<>
					<label htmlFor="quarterlyPercent" className={styles.addForm__label}>
						Сколько процентов?
					</label>
					<input
						id="quarterlyPercent"
						name="quarterlyPercent"
						type="number"
						placeholder="%"
						className={styles.addForm__input}
						value={quarterlyPercent}
						onChange={(e) => onValueChange(e)}
					/>
				</>
			)}
			<label htmlFor="newYear" className={styles.addForm__label}>
				Будет новогодняя премия?
			</label>
			<input
				id="newYear"
				name="newYear"
				type="checkbox"
				checked={newYear}
				onChange={() => setNewYear(!newYear)}
			/>
			{newYear && (
				<>
					<label htmlFor="newYearPercent" className={styles.addForm__label}>
						Сколько процентов?
					</label>
					<input
						id="newYearPercent"
						name="newYearPercent"
						type="number"
						placeholder="%"
						className={styles.addForm__input}
						value={newYearPercent}
						onChange={(e) => onValueChange(e)}
					/>
				</>
			)}
			<button className={styles.addForm__btn}>Посчитать</button>
		</div>
	);
};

export default AddForm;
