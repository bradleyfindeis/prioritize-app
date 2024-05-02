import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CompareButton from "../components/CompareButton";
import SaveButton from "../components/SaveButton";

const Prioritize = () => {
  const { id } = useParams();
  const [items, setItems] = useState([]);
  const [priority, setPriority] = useState([]);
  const [sorted, setSorted] = useState([]);
  const [index1, setIndex1] = useState(0);
  const [index2, setIndex2] = useState(1);
  const [comparedAll, setComparedAll] = useState(false);

  useEffect(() => {
    // get tje list from local storage
    const theList = JSON.parse(localStorage.getItem("lists")) || [];
    // find the list with the id
    const foundList = theList.find((list) => list.id === parseInt(id));
    if (!foundList) {
      window.location.href = "/lists";
    }
    setItems(foundList.listItems);
  }, [id]);

  useEffect(() => {
    let counts = {};
    priority.forEach(function (x) {
      counts[x.id] = (counts[x.id] || 0) + 1;
    });
    let sorted = Object.keys(counts).sort(function (a, b) {
      return counts[b] - counts[a];
    });
    let sortedItems = [];
    sorted.forEach((id) => {
      let item = items.find((item) => item.id === parseInt(id));
      item.votes = counts[id];
      sortedItems.push(item);
    });
    setSorted(sortedItems);
  }, [priority, items]);

  const handleCompare = (winner) => {
    setPriority([...priority, winner]);
    if (index2 < items.length -1) {
      if (index1 === index2 + 1) {
        if (index1 === items.length - 1) {
          setComparedAll(true);
        } else {
          setIndex2(index2 + 2);
        }
      } else {
        setIndex2(index2 + 1);
      }
    } else if (index1 < items.length) {
      setIndex1(index1 + 1);
      setIndex2(0);
    }
    else if (index1 === items.length - 1) {
      setComparedAll(true);
    }
  };

  const onSave = () => {
    // fetch(`http://localhost:3000/lists/${id}/vote`, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ sorted: sorted, completed: comparedAll }),
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     if (data.error) {
    //       alert(data.message);
    //     } else {
    //       alert(data.message);
    //       window.location.href = `/lists/${id}`;
    //     }
    //   });

    const theList = JSON.parse(localStorage.getItem("lists")) || [];
    const foundList = theList.find((list) => list.id === parseInt(id));
    foundList.listItems = sorted;
    foundList.completed = comparedAll;
    localStorage.setItem("lists", JSON.stringify(theList));
    window.location.href = `/lists/${id}`;
  };


  if (!items) {
    return <div>Loading...</div>;
  } else {
    if (!comparedAll) {
      return (
        <div className="page-background">
          <div className="title-container">
            <h2>Compare Items</h2>
          </div>
          <div className="comparison-container">
            <div className="comparison-item">
              <CompareButton item={items[index1]} onCompare={handleCompare} />
              <CompareButton item={items[index2]} onCompare={handleCompare} />
            </div>
          </div>
          <div className="priority-container">
            <h2>Priority:</h2>
            <ul className="priorities-list">
              {sorted.map((item, index) => (
                <li key={index}>{item.name} - {item.votes}</li>
              ))}
            </ul>
          </div>          
        </div>
      );
    } else {
       return (
        <div className="page-background">
        <div className="priority-container">
          <h2>Priority:</h2>
          <ul className="priorities-list">
            {sorted.map((item, index) => (
              <li key={index}>{item.name} - {item.votes}</li>
            ))}
          </ul>
        </div>
        { comparedAll ? <SaveButton handleSave={onSave} /> : null}
        
      </div>
       )
      }
  }



  // return (
  //   <div className="page-background">
  //     <div className="title-container">
  //       <h2>Compare Items</h2>
  //     </div>
  //     <div className="button-container">
  //       <Comparison items={items} onCompare={handleCompare} />
  //     </div>
  //     <div className="priority-container"></div>
  //   </div>
  // );
}

export default Prioritize;
