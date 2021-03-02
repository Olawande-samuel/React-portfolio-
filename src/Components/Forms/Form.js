import React, { useState, useEffect } from "react";

function Form(props) {
	const [values, setValues] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
	});
	const [sent, setSent] = useState(false);
	const handleName = (event) => {
		event.persist();
		setValues((values) => ({
			...values,
			name: event.target.value,
		}));
	};
	const handleEmail = (event) => {
		event.persist();
		setValues((values) => ({
			...values,
			email: event.target.value,
		}));
	};
	const handleSubject = (event) => {
		event.persist();
		setValues((values) => ({
			...values,
			subject: event.target.value,
		}));
	};
	const handleMessage = (event) => {
		event.persist();
		setValues((values) => ({
			...values,
			message: event.target.value,
		}));
	};
	const handleSend = (e) => {
		e.preventDefault();
		handleSubmit();
		// alert("done");
	};
	// const encode =(data) => {
	// 	return Object.keys(data)
	// 		.map (key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
	// 		.join("&");
	// }

	const handleSubmit = () => {
		setSent(true);

		setTimeout(() => {
			setSent(false);
		}, 5000);
		setTimeout(() => {
			setValues((values) => ({
				...values,
				name: "",
				email: "",
				subject: "",
				message: "",
			}));
		}, 2000);
		console.log(values);
	};
	return (
		<div className="form-wrapper">
			<h3>Contact me</h3>
			{sent && <div className="sent text-light">Message sent!</div>}
			<form
				className="contact-me container"
				onSubmit={handleSubmit}
				name="contact-form"
				action="/contact-me"
				method="POST"
				data-netlify="true"
			>
				<input type="hidden" name="form-name" value="contact-form" />
				<div className="row form-container">
					<div className="form-left col-sm-6">
						<div>
							<label htmlFor="name">Name</label>
							<input
								type="text"
								name="name"
								value={values.name}
								placeholder="Enter your name..."
								onChange={handleName}
								required={true}
							/>
						</div>
						<div>
							<label htmlFor="email">Email</label>
							<input
								type="email"
								name="email"
								value={values.email}
								placeholder="Enter your email.."
								onChange={handleEmail}
								required={true}
							/>
						</div>
						<div>
							<label htmlFor="subject">Subject</label>
							<input
								type="text"
								name="subject"
								value={values.subject}
								placeholder="Enter mail subject..."
								onChange={handleSubject}
							/>
						</div>
					</div>
					<div className="form-right col-sm-6">
						<textarea
							name="message"
							id="textmsg"
							cols="40"
							rows="10"
							placeholder="Enter text here"
							value={values.message}
							onChange={handleMessage}
							required={true}
						></textarea>
						<div>
							<button
								type="submit"
								className="btn btn-light btn-block form-btn font-weight-bolder"
								onClick={handleSend}
							>
								Send
							</button>
						</div>
					</div>
				</div>
			</form>
		</div>
	);
}

export default Form;
