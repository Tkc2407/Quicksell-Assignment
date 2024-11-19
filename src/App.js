import './App.css';
import { Nav } from './Components/Nav/Nav';
import { useState, useEffect } from 'react';
import { loadGridData } from './utils/gridUtils';
import { Area } from './Components/Area/Area';

function App() {

  const [tickets, setTickets] = useState([]);
  const [userData, setUserData] = useState({});
  const [gridData, setGridData] = useState({});
  const [grouping, setGrouping] = useState("users");
  const [ordering, setOrdering] = useState("priority");
  
  useEffect(() => {
    load();
    fetchData();
  }, []);

  useEffect(() => {
    if (tickets.length === 0) { 
      return; 
    }
    setGridData(loadGridData(tickets, grouping, ordering));
  }, [tickets, grouping, ordering]);

  const onChangeOrder = (order) => {
    setOrdering(order);
    save({ ordering: order });
  }

  const onChangeGroup = (group) => {
    setGrouping(group);
    save({ grouping: group });
  }

  const save = (data) => {
    for (let key in data) {
      localStorage.setItem(key, data[key]);
    }
  }

  const load = () => {
    setGrouping(localStorage.getItem("grouping") || "status");
    setOrdering(localStorage.getItem("ordering") || "priority");
  };

  const fetchData = async () => {
    try {
      const response = await fetch('https://api.quicksell.co/v1/internal/frontend-assignment');
      const data = await response.json();
      console.log(data);
      const { tickets, users } = data;
      const tempUsers = users.reduce((acc, user) => {
        acc[user.id] = user;
        return acc;
      }, {});
      setTickets(tickets);
      setUserData(tempUsers);
    } catch (err) {
      console.log("Error occurred while fetching data");
    }
  }

  return (
    <>
      <Nav 
        grouping={grouping} 
        ordering={ordering} 
        setGrouping={onChangeGroup} 
        setOrdering={onChangeOrder}
      />
      <div>
        <Area gridData={gridData} userData={userData} grouping={grouping}/>
      </div>
    </>
  );
}

export default App;