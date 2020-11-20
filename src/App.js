import React from "react";

import "./App.css";

import Form from "./Components/Form/Form";

class App extends React.Component {
	render() {
		return (
			<div className="App">
				<Form
					steps={[
						{
							checked: true,
							label: "Choose title",
							content: "Choose title content",
							nextBtn: "Submit Title",
						},
						{
							checked: true,
							label: "Choose description",
							content: "Choose description content",
							backBtn: "Back",
							nextBtn: "Submit description",
						},
						{
							checked: true,
							label: "Confirm data",
							content: "Are you happy now?",
							backBtn: "No, go back",
							nextBtn: "Yes, go ahead",
						},
						{
							finishedContent:
								"Ok we're done. Thanks for sending us your data!",
						},
					]}
				/>
			</div>
		);
	}
}

export default App;
