import { useState, useEffect } from "react";
import { getAllCars, addCar , editCar , deleteCar } from "./FetchCars";

import { MyCars } from './MyCars';

function App() {

  const [myCars, setCars] = useState([]);
  const [title, setTitle] = useState("");
  const [editing, setEditing] = useState(false);
  const [carId, setCarId] = useState("");
 

  useEffect(() => {
    getAllCars(setCars)
  }, [])

  const updatingInInput = (_id ,title) => {
    setEditing(true)
    setTitle(title)
    setCarId(_id)
  }

  return (
    <div>
      <h1> CARS DELIVERY  LOG</h1>
      <input
      type="text"
      placeholder = "Add a car"
      value = { title }
      onChange = {(e) => setTitle(e.target.value)}
      />
      <button onClick= { editing ?  () => editCar(carId, title, setTitle, setCars, setEditing):     
        () => addCar( title, setTitle, setCars)}>{editing ? "Edit" : "Add"}</button>
      {myCars.map((car) =>  <MyCars text={car.title} key={car._id} updatingInInput = {() => updatingInInput(car._id,  car.title)}
        deleteCar ={() => deleteCar(car._id, setCars)}
        />)}
    
      </div>
  );
}

export default App;
