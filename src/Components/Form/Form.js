import React from "react";

import "./Form.css";

class Form extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			steps: this.props.steps,
		};

		this.onCurrentStepHandler = this.onCurrentStepHandler.bind(this);
		this.onBackHandler = this.onBackHandler.bind(this);
		this.onNextHandler = this.onNextHandler.bind(this);
	}

	onCurrentStepHandler(item) {
		let updateCheckedSteps = this.state.steps.map((step) => ({
			...step,
			checked: false,
		}));

		let currentStep = this.state.steps.find(
			(step) => step.label === item.target.name
		);

		// eslint-disable-next-line array-callback-return
		updateCheckedSteps.some((step) => {
			if (step.label !== currentStep.label) {
				step.checked = true;
			} else {
				step.checked = true;
				return true;
			}
		});

		this.setState({ steps: updateCheckedSteps });
	}

	onBackHandler() {
		const lastCheckedStep =
			this.state.steps.filter((step) => step.checked).length - 1;
		let updateCheckedSteps = this.state.steps;
		updateCheckedSteps[lastCheckedStep].checked = false;

		this.setState({ steps: updateCheckedSteps });
	}

	onNextHandler() {
		const lastCheckedStep =
			this.state.steps.filter((step) => step.checked).length - 1;
		let updateCheckedSteps = this.state.steps;

		if (lastCheckedStep < updateCheckedSteps.length - 1) {
			updateCheckedSteps[lastCheckedStep + 1].checked = true;

			this.setState({ steps: updateCheckedSteps });
		}
	}

	render() {
		let currentStep = this.state.steps[
			this.state.steps.filter((step) => step.checked).length - 1
		];
		return (
			<div className="tuan-form">
				<div className="tuan-form__left-container">
					{this.state.steps.map((step, index) =>
						step.label ? (
							<button
								key={`${step.label}`}
								name={step.label}
								className={
									step.checked
										? "tuan-form__step tuan-form__step--checked"
										: "tuan-form__step"
								}
								onClick={this.onCurrentStepHandler}
							>
								<div className="tuan-form__index-step">{index + 1}</div>
								<div className="tuan-form__text-step">{step.label}</div>
							</button>
						) : undefined
					)}
				</div>
				<div className="tuan-form__right-container">
					<div className="tuan-form__content">
						{currentStep.finishedContent
							? currentStep.finishedContent
							: currentStep.content}
					</div>
					<div className="tuan-form__footer">
						{currentStep.backBtn && (
							<button
								className="tuan-form__back-btn"
								onClick={this.onBackHandler}
							>
								{currentStep.backBtn}
							</button>
						)}
						{currentStep.nextBtn && (
							<button
								className="tuan-form__next-btn"
								onClick={this.onNextHandler}
							>
								{currentStep.nextBtn}
							</button>
						)}
					</div>
				</div>
			</div>
		);
	}
}

export default Form;
