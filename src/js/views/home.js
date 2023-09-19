import React, { useContext } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import rigo from "../../img/rigo-baby.jpg";


export const Home = () => {
	const { store, actions } = useContext(Context);
	console.log(store.contactList);
	return (
	  <>
		{store.contactList.map((contact) => {
		  return (
			<div class="row row-cols-1 row-cols-md-3 g-4">
				<div key={contact.id} className="col">
				<div className="card" style={{ width: "18rem" }}>
					<img
					className="contact-image"
					src={rigo}
					style={{ maxWidth: "300px" }}
					/>
					<ul className="list-group list-group-flush">
					<li className="list-group-item text-center">
						<h3>{contact.full_name}</h3>
					</li>
					<li className="list-group-item">
						<strong>Phone: </strong>
						{contact.phone}
					</li>
					<li className="list-group-item">
						<strong>Email: </strong>
						{contact.email}
					</li>
					<li className="list-group-item">
						<strong>Address: </strong>
						{contact.address}
					</li>
					<li className="list-group-item">
						<span
						onClick={() => {
							actions.removeContacts(contact.id);
						}}
						>
						<Link>
							<i className="fas fa-trash"></i>
						</Link>
						</span>
						<span>
						<Link to={`/newcontact/${contact.id}`}>
							<i className="fa-solid fa-pencil text-dark"></i>
						</Link>
						</span>
					</li>
					</ul>
				</div>
				<br />
				</div>
			</div>
		  );
		})}
	  </>
	);
  };