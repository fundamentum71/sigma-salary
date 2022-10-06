import React from 'react';
import { updState } from '../../redux/form/slice';
import { useAppDispatch } from '../../redux/hook';
import styles from './addForm.module.scss';

const AddForm: React.FC = () => {
	const dipatch = useAppDispatch();

	const [salary, setSalary] = React.useState('');
	const [weekends, setWeekends] = React.useState('');
	const [quarterlyPercent, setQuarterlyPercent] = React.useState('');
	const [newYearPercent, setNewYearPercent] = React.useState('');

	const [wentOutWeekend, setWentOutWeekend] = React.useState(false);
	const [quarterly, setQuarterly] = React.useState(false);
	const [newYear, setNewYear] = React.useState(false);

	const [salaryDirty, setSalaryDirty] = React.useState(false);
	const [salaryError, setSalaryError] = React.useState('Поле является обязательным');
	const [formValid, setFormValid] = React.useState(false);

	//после выхода из фокуса выведет ошибку
	const blurHandler = () => {
		setSalaryDirty(true);
	};

	React.useEffect(() => {
		if (salaryError) {
			setFormValid(false);
		} else {
			setFormValid(true);
		}
	}, [salaryError]);

	const handleAction = () => {
		if (formValid) {
			dipatch(updState({ salary, weekends, quarterlyPercent, newYearPercent }));
			setSalary('');
			setWeekends('');
			setQuarterlyPercent('');
			setNewYearPercent('');
			setWentOutWeekend(false);
			setQuarterly(false);
			setNewYear(false);
			setSalaryError('Поле является обязательным');
			setSalaryDirty(false);
		}
	};

	const onValueChange = (e: any) => {
		switch (e.target.name) {
			case 'salary':
				setSalary(e.target.value);
				if (e.target.value.length < 4 || e.target.value.length > 10) {
					setSalaryError('Оклад должнем быть min=4, max=10 символов');
					//setSalaryDirty(true);s
					if (!e.target.value) {
						setSalaryError('Поле является обязательным');
					}
				} else {
					setSalaryError('');
				}
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
			<h2>Заполните форму</h2>
			<label htmlFor="salary" className={styles.addForm__label}>
				Введите ваш оклад:
			</label>
			<input
				id="salary"
				name="salary"
				type="number"
				placeholder="Оклад"
				className={styles.addForm__input}
				value={salary}
				onChange={(e) => onValueChange(e)}
				onBlur={() => blurHandler()}
			/>
			<span>руб.</span> <br />
			{salaryDirty && salaryError && (
				<div style={{ color: 'red', fontSize: '1rem', marginBottom: '5px' }}>{salaryError}</div>
			)}
			<label htmlFor="wentOutWeekend" className={styles.addForm__label}>
				Выходили на выходных?
			</label>
			<input
				id="wentOutWeekend"
				name="wentOutWeekend"
				type="checkbox"
				checked={wentOutWeekend}
				onChange={() => setWentOutWeekend(!wentOutWeekend)}
			/>
			<br />
			{wentOutWeekend && (
				<>
					<label htmlFor="weekends" className={styles.addForm__label}>
						Сколько дней:
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
					<span>дней</span> <br />
				</>
			)}
			<label htmlFor="quarterly" className={styles.addForm__label}>
				Будет квартальная премия?
			</label>
			<input
				id="quarterly"
				name="quarterly"
				type="checkbox"
				checked={quarterly}
				onChange={() => setQuarterly(!quarterly)}
			/>
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
					<span>%</span> <br />
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
			<br />
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
					<span>%</span> <br />
				</>
			)}
			<button disabled={!formValid} className={styles.addForm__btn} onClick={() => handleAction()}>
				Посчитать
			</button>
		</div>
	);
};

export default AddForm;
