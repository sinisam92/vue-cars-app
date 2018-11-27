
import axios from "axios";

class CarsService {
    constructor() {
        axios.defaults.baseURL = 'http://localhost:3000/api/'
    }
    getAll() {
        axios.get('cars')
            .then(response => {
                console.log(response.data);
                
            }).catch(error =>{
                console.log(error.response);
                
            })
    }
}

const carsServices = new CarsService();

export default carsServices;