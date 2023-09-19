const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			baseURL: "https://playground.4geeks.com/apis/fake/contact/",
			contactList: [],
		  },
		  actions: {
			getContacts: async function () {
			  let store = getStore();
			  try {
				const response = await fetch(`${store.baseURL}/agenda/gaha20`);
				// waits until the request completes...
				console.log(response);
				if (response.ok) {
				  let data = await response.json();
				  setStore({ contactList: data });
				  console.log(data);
				}
			  } catch (error) {
				console.log(error);
			  }
			},
			addContacts: async function (data) {
			  let store = getStore();
			  try {
				const response = await fetch(`${store.baseURL}`, {
				  method: "POST",
				  headers: {
					"Content-Type": "application/json",
				  },
				  body: JSON.stringify(data),
				});
				if (response.ok) {
				  getActions().getContacts();
				  return true;
				} else {
				  return false;
				}
			  } catch (error) {
				console.log(error);
			  }
			},
			removeContacts: async function (id) {
			  let store = getStore();
			  try {
				const response = await fetch(`${store.baseURL}${id}`, {
				  method: "DELETE",
				  headers: {
					"Content-Type": "application/json",
				  },
				});
				if (response.ok) {
				  getActions().getContacts();
				}
			  } catch (error) {
				console.log(error);
			  }
			},
			updateContacts: async function (data, id) {
			  let store = getStore();
			  try {
				const response = await fetch(`${store.baseURL}${id}`, {
				  method: "PUT",
				  headers: {
					"Content-Type": "application/json",
				  },
				  body: JSON.stringify(data),
				});
				if (response.ok) {
				  getActions().getContacts();
				  return true;
				} else {
				  return false;
				}
			  } catch (error) {
				console.log(error);
			  }
			},
		  },
		};
	  };
	  
	  export default getState;
