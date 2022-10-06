import React from 'react';

import AddForm from '../addForm/AddForm';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import ResultField from '../resultField/ResultField';
import styles from './app.module.scss';

function App() {
	const buttonArr = ['Месячная', 'Дневная', 'Годовая'];
	const [category, setCategory] = React.useState(0);

	const onChangeCategory = (i: number) => {
		setCategory(i);
	};

	const changeBlock = (state: number) => {
		switch (state) {
			case 0:
				return <MonthBlock />;
			case 1:
				return <DayBlock />;
			case 2:
				return <YearBlock />;
			default:
				return <h1>Возникла ошибка</h1>;
		}
	};

	return (
		<div className={styles.wrapper}>
			<header className={styles.header}>
				<Header />
			</header>
			<nav className={styles.nav}>
				{buttonArr.map((item, i) => (
					<button
						key={i}
						className={category === i ? styles.button_active : styles.button}
						onClick={() => onChangeCategory(i)}>
						<p>{item}</p>
					</button>
				))}
			</nav>
			<main className={styles.main}>
				<AddForm />
				{changeBlock(category)}
			</main>
			<footer className={styles.footer}>
				<Footer />
			</footer>
		</div>
	);
}
export default App;

const MonthBlock = () => {
	return <ResultField />;
};

const DayBlock = () => {
	return <h1>результаты за день</h1>;
};

const YearBlock = () => {
	return <h1>результаты за год</h1>;
};
