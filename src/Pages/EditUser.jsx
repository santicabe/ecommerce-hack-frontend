import React from "react";

function EditUser() {
  // const [firstname, setFirstname] = useState("");
  // const [lastname, setLastname] = useState("");
  // const [email, setEmail] = useState("");
  // const [phone, setPhone] = useState("");
  // const [address, setAddress] = useState("");

  // useEffect(() => {
  //   const getHomeData = async () => {
  //     try {
  //       const response = await axios({
  //         method: "GET",
  //         url: "api", //api
  //         headers: { Authorization: `Bearer ${user.token}` },
  //       });

  //       setFirstname(response.data.firstname);
  //       setLastname(response.data.lastname);
  //       setEmail(response.data.email);
  //       setUsername(response.data.username);
  //       setDescription(response.data.description);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   getHomeData();
  // }, []);

  return (
    <div>
      <h3 className="ltext-103 cl5">User</h3>

      <h4 className="mb-3 mt-5">Edit user:</h4>
      <div className="container mw-50 mb-5">
        <form action="" className="border border-secondary p-3">
          <label htmlFor="userName" className="form-label">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="FirstName"
            className="form-control"
            //   defaultValue={data.userName}
          />
          <label htmlFor="lastName" className="mt-3">
            Last Name
          </label>
          <input
            name="lastName"
            id="lastName"
            className="form-control"
            //   defaultValue={data.email}
          />
          <label htmlFor="email" className="mt-3">
            Email
          </label>
          <input
            name="email"
            id="email"
            className="form-control"
            //   defaultValue={data.email}
          />
          <label htmlFor="phone" className="mt-3">
            Phone
          </label>
          <input
            type="number"
            name="phone"
            id="phone"
            className="form-control"
            //   defaultValue={data.email}
          />
          <label htmlFor="password" className="mt-3">
            Password
          </label>
          <input
            name="password"
            id="password"
            className="form-control"
            //   defaultValue={data.email}
          />
          <label htmlFor="address" className="mt-3">
            Address
          </label>
          <input
            name="address"
            id="address"
            className="form-control"
            //   defaultValue={data.email}
          />

          <button type="submit" className="btn btn-primary mt-4">
            Save!
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditUser;
