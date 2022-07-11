import { useContext, useEffect, useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
import Pagination from "../Components/Pagination";
import { AppContext } from "../Context/AppContext";
import addReducer from "../Context/AppContext";

const initVal = {
  isAuth: false,
  data: [],
  isError: false,
  token: ""
};
function Dashboard() {
  const navigate = useNavigate();
  // const {state} = useContext(AppContext);
  // const[data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [state, dispatch] = useReducer(addReducer, initVal);
  // console.log("im from Dashboard",state.token);
  const handleLogout = () => {
    navigate("/login");
  };
  useEffect(() => {
    function fetchData() {
      fetch(
        `https://jsonplaceholder.typicode.com/photos?_page=${page}_limit=100`
      )
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          setData(res);
        });
    }
    fetchData();
  }, [page]);
  return (
    <div>
      <h3>Dashboard</h3>
      <h4 data-testid="token">{state.token}</h4>
      <button data-testid="logout-btn" onClick={handleLogout}>
        Logout
      </button>
      <ul data-testid="item-container">
        {data.map((el) => {
          return <li data-testid="item">{el.title}</li>;
        })}
      </ul>
      <div data-testid="pagination-container">
        <Pagination />
      </div>
    </div>
  );
}

export default Dashboard;
