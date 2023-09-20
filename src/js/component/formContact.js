import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";

export const FormContact = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate()
  const [full_name, setFull_name] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAdrres] = useState("");

  const handleCreateContact = async (event) => {
    event.preventDefault();
    actions.ContactsList();
    actions.CreateContactBook(full_name, email, phone, address);
    navigate("/")
  };

  return (
    <React.Fragment>
      <div className="container mt-5">
        <div className="row">
          <div className="col">
            <div className="titel mt-5">
              <h2>
                <strong>Add a new contact</strong>
              </h2>
            </div>

            {/* formulario de contacto */}

            <form
              className="text-start mt-5 mb-2"
              onSubmit={handleCreateContact}
            >
              <div className="mb-3">
                <label
                  htmlFor="exampleInputText"
                  className="form-label fs-5 text-black"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputText"
                  aria-describedby="textlHelp"
                  placeholder="Full Name"
                  value={full_name}
                  onChange={(event) => {
                    setFull_name(event.target.value);
                  }}
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleInputEmail1"
                  className="form-label fs-5 text-black"
                >
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleInputPhone"
                  className="form-label fs-5 text-black"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  className="form-control"
                  id="exampleInputPhone"
                  aria-describedby="phoneHelp"
                  placeholder="Enter phone"
                  value={phone}
                  onChange={(event) => {
                    setPhone(event.target.value);
                  }}
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="exampleInputText1"
                  className="form-label fs-5 text-black"
                >
                  Address
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputText1"
                  aria-describedby="text1lHelp"
                  placeholder="Enter address"
                  value={address}
                  onChange={(event) => {
                    setAdrres(event.target.value);
                  }}
                />
              </div>
              <div className="mb-3">
                <button type="submit" className="btn btn-primary w-100">
                  Save
                </button>
              </div>
            </form>
            <div className="mb-3 text-start">
              <Link to={"/"}>
                <p>go back to contacts</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};