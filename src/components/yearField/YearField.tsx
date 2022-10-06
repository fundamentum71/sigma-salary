import React from 'react';
import { reset } from '../../redux/form/slice';
import { useAppDispatch, useAppSelector } from '../../redux/hook';
import styles from './yearField.module.scss';

const YearField: React.FC = () => {
	const dispatch = useAppDispatch();
	return (
		<div className={styles.wrapper}>
			<section className={styles.result}>
				<h2>Годовые начисления</h2>
			</section>
			<button className={styles.clear} onClick={() => dispatch(reset())}>
				Очистить
			</button>
		</div>
	);
};

export default YearField;
