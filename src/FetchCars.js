import axios from "axios";

const getAllCars = (setCars) => {
    axios.get("http://localhost:4000")
    .then(({data}) => {console.log(data)
        setCars(data);
    })
}

const addCar = (   title, setTitle, setCars) => {
    axios.post("http://localhost:4000/saveCar", { title})
    .then((data) => {
        console.log(data);
        setTitle("");
        getAllCars(setCars)
    })
}

const editCar = (carId,title, setTitle, setCars, setEditing ) => {
    axios.post("http://localhost:4000/editCar", {_id: carId, title})
    .then((data) => {
        console.log(data);
      
        setTitle("");
        setEditing(false);
        getAllCars(setCars);
    })
}

const deleteCar = (_id, setCars) => {
    axios.post("http://localhost:4000/deleteCar", {_id})
    .then((data) => {
        console.log(data);
        getAllCars(setCars);
    })
}
export {getAllCars, addCar, editCar, deleteCar };