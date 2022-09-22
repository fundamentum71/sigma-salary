import React from 'react';
import AddForm from '../addForm/AddForm';
import styles from './app.module.scss';

function App() {
	return (
		<div className={styles.wrapper}>
			<header className={styles.header}></header>
			<main className={styles.main}>
				<AddForm />
			</main>
		</div>
	);
}

export default App;
