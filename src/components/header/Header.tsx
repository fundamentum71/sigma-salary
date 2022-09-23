import React from 'react';
import styles from './header.module.scss';
import logo from '../../resources/img/logo.png';

const Header: React.FC = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.image}>
				<img src={logo} alt="Лого" />
			</div>
			<div className={styles.banner}></div>
			<h1>Калькулятор расчета зарплаты</h1>
		</div>
	);
};

export default Header;
