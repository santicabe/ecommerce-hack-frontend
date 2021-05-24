import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";

import "./editProfile.css";

function EditProfile() {
  const history = useHistory();
  const user = useSelector((state) => state.user);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [avatar, setAvatar] = useState(null);
  const [description, setDescription] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    const getHomeData = async () => {
      try {
        const response = await axios({
          method: "GET",
          url: "https://api-twitter-clone.vercel.app/profile/edit",
          headers: { Authorization: `Bearer ${user.token}` },
        });

        // console.log(response.data);
        setFirstname(response.data.firstname);
        setLastname(response.data.lastname);
        setEmail(response.data.email);
        setUsername(response.data.username);
        setDescription(response.data.description);
      } catch (err) {
        console.log(err);
      }
    };
    getHomeData();
  }, []);

  const onFormSubmit = (event) => {
    event.preventDefault();
    // console.log(avatar);
    const formData = new FormData();
    const fields = {
      name: name,
      description: description,
      image: image,
      price: price,
      stock: stock,
      categoryId: categoryId,
      isFeatured: isFeatured,
      slug: slug,
    };
    formData.append("image", image);
    formData.append("name", name);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("stock", stock);
    formData.append("isFeatured", isFeatured);
    formData.append("categoryId", categoryId);
    formData.append("slug", slug);

    const sendData = async () => {
      try {
        const response = await axios.post(
          "https://api-twitter-clone.vercel.app/profile/edit",
          formData,
          {
            headers: {
              "content-type": "multipart/form-data",
              Authorization: `Bearer ${user.token}`,
            },
          }
        );
        // console.log(response);
        if (response.data) {
          // dispatch({
          //   type: "SET_USER",
          //   payload: response.data,
          // });
          dispatch({ type: "SET_VISIT_USER", payload: response.data._doc });
        }
      } catch (err) {
        console.log(err);
      }
    };
    sendData();
    // history.push(`/username/${username}`);
    history.goBack();
  };

  return (
    <div>
      <div>
        <button
          id="btn-back"
          onClick={() => {
            history.goBack();
          }}
        >
          Back
        </button>
      </div>
      <form
        onSubmit={onFormSubmit}
        // method="POST"
        // action="https://api-twitter-clone.vercel.app/profile/edit"
        // enctype="multipart/form-data"
      >
        <div id="sc-edprofile">
          <h1 id="editProfileTitle">Edit Profile</h1>
          <div class="sc-container">
            <label>First Name</label>
            <input
              type="text"
              id="firstname"
              name="firstname"
              placeholder="First Name"
              value={firstname}
              onChange={(event) => setFirstname(event.target.value)}
              required
            />
            <label>Last Name</label>
            <input
              type="text"
              id="lastname"
              name="lastname"
              placeholder="Last Name"
              value={lastname}
              onChange={(event) => setLastname(event.target.value)}
              required
            />
            <label>User Name</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              required
            />
            <label>E-mail</label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Email Address"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
            <div class="mb-4">
              <label>Profile Picture</label>
              <input
                type="file"
                id="profilePicture"
                name="profilePicture"
                placeholder="Upload an image"
                // value={avatar}
                onChange={(event) => setAvatar(event.target.files[0])}
                required
              />
            </div>
            <textarea
              id="description"
              name="description"
              placeholder="Biography"
              onChange={(event) => setDescription(event.target.value)}
            >
              {description}
            </textarea>
            <input type="submit" value="Update" />
          </div>
        </div>
      </form>
    </div>
  );
}

export default EditProfile;
