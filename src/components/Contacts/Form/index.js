import { useState, useEffect } from "react";

const initialFormValues = {
	fullname: "",
	phone_number: "",
};

function Form({ addContact, contacts }) {
	const [form, setForm] = useState(initialFormValues);

	useEffect(() => {
		setForm(initialFormValues);
	}, [contacts]);

	const onChangeInput = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const onSubmitInput = (e) => {
		e.preventDefault();
		if (form.fullname === "" || form.phone_number === "") {
			return false;
		}
		addContact([...contacts, form]);
	};

	return (
		<form onSubmit={onSubmitInput}>
			<div className="fullname">
				<input
					name="fullname"
					placeholder="Full Name"
					onChange={onChangeInput}
					value={form.fullname}
				/>
			</div>
			<div className="phonenumber">
				<input
					name="phone_number"
					placeholder="Phone Number"
					onChange={onChangeInput}
					value={form.phone_number}
				/>
			</div>
			<div className="btn">
				<button>Add</button>
			</div>
		</form>
	);
}

export default Form;
