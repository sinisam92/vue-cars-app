<template>
    <div class="container">
        <table border="1">
            <thead>
                <th>Id</th>
                <th>Brand</th>
                <th>Model</th>
                <th>Year</th>
                <th>Max Speed</th>
                <th>Automatic</th>
                <th>Engine</th>
                <th>Number Of Doors</th>
            </thead>
            <tbody>
                <tr v-for="(car, index) in cars" :key="index">
                    <td>{{ car.id }}</td>
                    <td>{{ car.brand }}</td>
                    <td>{{ car.model }}</td>
                    <td>{{ car.year}}</td>
                    <td>{{ car.maxSpeed}}</td>
                    <td>{{ car.isAutomatic }}</td>
                    <td>{{ car.engine }}</td>
                    <td>{{ car.numberOfDoors }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
import CarsService from "../services/CarsService";
export default {
    data() {
        return {
            cars: [],
        }
    },
    created() {
        CarsService.getAll()
          .then(response => {
                this.cars = response.data;
                
            }).catch(error =>{
                console.log(error.response);
                
            })
    },
}
</script>
<style scoped>
table {
    border: 5px;
}
</style>

