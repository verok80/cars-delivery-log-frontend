import axios from "axios";

const getAllCars = (setCars) => {
    axios.get("https://cars-delivery-log-backend.onrender.com")
    .then(({data}) => {console.log(data)
        setCars(data);
    })
}

const addCar = (   title, setTitle, setCars) => {
    axios.post("https://cars-delivery-log-backend.onrender.com/saveCar", { title})
    .then((data) => {
        console.log(data);
        setTitle("");
        getAllCars(setCars)
    })
}

const editCar = (carId,title, setTitle, setCars, setEditing ) => {
    axios.post("https://cars-delivery-log-backend.onrender.com/editCar", {_id: carId, title})
    .then((data) => {
        console.log(data);
      
        setTitle("");
        setEditing(false);
        getAllCars(setCars);
    })
}

const deleteCar = (_id, setCars) => {
    axios.post("https://cars-delivery-log-backend.onrender.com/deleteCar", {_id})
    .then((data) => {
        console.log(data);
        getAllCars(setCars);
    })
}
export {getAllCars, addCar, editCar, deleteCar };