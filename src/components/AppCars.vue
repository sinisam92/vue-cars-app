<template>
  <div class="jumbotron">
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
          <td>{{ car.isAutomatic ? 'Automatic' : 'Manual'}}</td>
          <td>{{ car.engine }}</td>
          <td>{{ car.numberOfDoors }}</td>

          <router-link :to="{ name: 'edit-car', params: { id: car.id }}">
            <button class="btn btn-success">Edit</button>
          </router-link>
          <button class="btn btn-danger" @click="deleteCar(car.id)">Delete</button>
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
      cars: []
    };
  },
  created() {
    CarsService.getAll()
      .then(response => {
        this.cars = response.data;
      })
      .catch(error => {
        console.log(error.response);
      });
  },
  methods: {
    deleteCar(id) {
      let whySoSerious = prompt(`Are you sure? Yes/ No`);
      if (whySoSerious == "Yes") {
        CarsService.delete(id);
      }
    }
  }
};
</script>
<style scoped>
table {
  border: 5px;
}
.btn {
  margin-left: 5px;
  margin-top: 2px;
}
</style>

