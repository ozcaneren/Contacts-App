import { useState } from "react";
import List from "./List";
import Form from "./Form";
import "./styles.css";

function Contacts() {
	const [contacts, setContacts] = useState([
		{ fullname: "Bob", phone_number: "26789" },
		{ fullname: "John", phone_number: "3412" },
		{ fullname: "Michael", phone_number: "5674" },
		{ fullname: "Eric", phone_number: "2132" },
	]);

	return (
		<div id="container">
			<h1>Contacts</h1>
			<List contacts={contacts} />
			<Form addContact={setContacts} contacts={contacts} />
		</div>
	);
}

export default Contacts;
