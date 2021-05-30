import "./SearchBox.css";
// import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function SearchBox() {
  // const user = useSelector((state) => state.user);
  // let url =
  const [products, setProucts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  let termFiltered;
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };
  termFiltered = products.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    const getproducts = async () => {
      const response = await axios.get(
        process.env.REACT_APP_BACK_END_URL + "/products",
        {
          headers: {
            // Authorization: `Bearer ${user.token}`,
            "Content-Type": "application/json",
          },
        }
      );
      setProucts(response.data.products);
    };
    getproducts();
  }, []);

  return (
    <div className="position-relative ">
      <form className="rounded-pill trending py-2">
        <div className="py-2 px-3 d-flex justify-content-between align-items-center">
          <div>
            <i className="zmdi zmdi-search"></i>
          </div>
          <input
            type="text"
            placeholder="Buscar"
            className="border-0 search-input "
            value={searchTerm}
            onChange={handleChange}
          />
        </div>
      </form>
      <div
        className={`search-results text-white p-2 rounded ${
          searchTerm.length > 0 && termFiltered.length > 0 && "show"
        }`}
      >
        {products
          .filter((user) =>
            user.name.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((user) => {
            return (
              <Link className="my-2" to={`/article/${user.slug}`}>
                <div className="mb-2">
                  <img
                    className="img-chica mr-2"
                    alt={user.name}
                    src={user.image}
                  />
                  {user.name.substring(0, 30)}
                </div>
              </Link>
            );
          })}
      </div>
    </div>
  );
}

export default SearchBox;
