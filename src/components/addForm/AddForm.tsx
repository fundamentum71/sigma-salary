import React from 'react';
import styles from './addForm.module.scss';

const AddForm: React.FC = () => {
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
			/>
			<span>выходных</span> <br />
			<label htmlFor="quarterly" className={styles.addForm__label}>
				Будет квартальная премия
			</label>
			<input id="quarterly" name="quarterly" type="checkbox" /> <br />
			{/*<label htmlFor="quarterlyPercent" className={styles.addForm__label}>
				Сколько процентов?
			</label>
			<input
				id="quarterlyPercent"
				name="quarterlyPercent"
				type="number"
				placeholder="%"
				className={styles.addForm__input}
			/>*/}
			<label htmlFor="newYear" className={styles.addForm__label}>
				Будет новогодняя премия?
			</label>
			<input id="newYear" name="newYear" type="checkbox" />
			{/*<label htmlFor="newYearPercent" className={styles.addForm__label}>
				Сколько процентов?
			</label>
			<input
				id="newYearPercent"
				name="newYearPercent"
				type="number"
				placeholder='%'
				className={styles.addForm__input}
			/>*/}
			<button className={styles.addForm__btn}>Посчитать</button>
		</div>
	);
};

export default AddForm;
