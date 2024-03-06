import React from "react";
import ToDoList from "./ToDoList";


//create your first component
const Home = () => {
	return (
		<div className="container mt-4 w-">
			<h1 className="text-center">TODO LIST</h1>
			<ToDoList />
		</div>
	);
};

export default Home;
