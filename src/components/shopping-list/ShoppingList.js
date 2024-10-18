import { useEffect, useState } from "react";
import "./shoppinglist.css";
import { useNavigate } from "react-router-dom";
const ShoppingList = () => {
  const navigate = useNavigate();
  const [shoppingList, setShoppingList] = useState([]);
  const [data, setData] = useState([]);
  const [match, setMatch] = useState("");

  const fetchData = async (match) => {
    try {
      const response = await fetch(
        `https://api.frontendeval.com/fake/food/${match}`
      );
      const data = await response.json();
      setData(data);
    } catch (err) {
      console.log("error", err);
    }
  };
  useEffect(() => {
    if (match.length >= 2) {
      console.log("here we go..");
      fetchData(match);
    }
  }, [match]);
  // https://api.frontendeval.com/fake/food/${match}

  const handleChange = (e) => {
    setMatch(e.target.value);
  };

  const handleOnClickMatchItem = (e) => {
    const index = e.target.getAttribute("id");

    if (index) {
      const obj = {
        id: Date.now(),
        item: data[index],
        isDone: false,
      };

      const tempItemList = [...shoppingList];
      tempItemList.push(obj);
      setShoppingList(tempItemList);
      setMatch("");
    }
  };

  const handleCheck = (e) => {
    console.log("==>", e.target.id);

    const id = e.target.id;

    const tempList = [...shoppingList];

    tempList.map((item) => {
      if (item.id == id) {
        item.isDone = !item.isDone;
      }
    });

    setShoppingList(tempList);
  };

  const handleUnCheck = (e) => {
    console.log(e.target.id);
    const id = e.target.id;
    const temList = [...shoppingList];
    const updatedList = temList.filter((item) => item.id != id);
    setShoppingList(updatedList);
    console.log(shoppingList, updatedList);
  };
  return (
    <div className="shopping-container">
      <h1>Shopping List</h1>

      <div>
        <input
          value={match}
          onChange={handleChange}
          className="input"
          placeholder="Enter you food here"
        />
      </div>

      {match.length >= 2 && (
        <div className="suggestion-container" onClick={handleOnClickMatchItem}>
          {data.map((item, index) => (
            <div id={index} className="suggestion-list">
              {item}
            </div>
          ))}
        </div>
      )}

      <div className="">
        {shoppingList.map((item) => (
          <div id={item.id} className="item-list">
            <p id={item.id} className="check" onClick={handleCheck}>
              ✓
            </p>
            <p className={`${item.isDone && "strike"}`}>{item.item}</p>
            <p id={item.id} className="un-check" onClick={handleUnCheck}>
              X
            </p>
          </div>
        ))}
        <div>
          <button
            className="home-btn item-container"
            onClick={() => navigate("/")}
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingList;
