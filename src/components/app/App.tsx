import React from 'react';
import AddForm from '../addForm/AddForm';
import Header from '../header/Header';
import ResultField from '../resultField/ResultField';
import styles from './app.module.scss';

function App() {
	return (
		<div className={styles.wrapper}>
			<header className={styles.header}>
				<Header />
			</header>
			<main className={styles.main}>
				<AddForm />
				<ResultField />
			</main>
		</div>
	);
}

export default App;
