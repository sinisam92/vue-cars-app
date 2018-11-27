<template>
    <div class="container">
        <form @submit.prevent="addCar">
            <div class="form-group">
                <input type="text" class="form-control" placeholder="Brand" v-model="newCar.brand">
            </div>
            <div class="form-group">
                <input type="text" class="form-control" placeholder="Model" v-model="newCar.model">
            </div>
             <div class="form-group">
                <input type="number" class="form-control" placeholder="Max Speed" v-model="newCar.maxSpeed">
            </div>
             <div class="form-group">
                <input type="number" class="form-control" placeholder="Number Of Doors" v-model="newCar.numberOfDoors">
            </div>
            <select  aria-placeholder="Select Section" v-model="newCar.year" :value="years">
                <option disabled value="">Select year</option>
                <option v-for="(year, index) in years" :key="index">
                    {{ year }}
                </option>
            </select>
            <div class="custom-control ">
                <input type="checkbox" v-model="newCar.isAutomatic">
                <label class="custom-controll">Automatic</label>
            </div>
             <div class="engine-input">
                 <label>Disel</label>
                <input type="radio" v-model="newCar.engine" value="Disel">
                <label>Petrol</label>
                <input type="radio" v-model="newCar.engine" value="Petrol">
                <label>Electric</label>
                <input type="radio" v-model="newCar.engine" value="Electric">
                <label>Hybrid</label>
                <input type="radio" v-model="newCar.engine" value="Hybrid">
            </div>
           
            <button type="submit" class="btn btn-primary">Add car</button>
    </form>
    </div>
</template>
<script>
import CarsService from "../services/CarsService";
export default {
    data() {
        return {
           years: Array(29).fill(1990).map((n, i) => n + i),
           newCar: {
               isAutomatic: false
           }
        }
    },
    methods: {
        addCar() {
            CarsService.add(this.newCar);
            this.newCar = {}
            this.$router.push({ path: '/cars' })
        }
    }
}
</script>
<style scoped>
.engine-input input {
    margin-left: 3px;
}
.engine-input label {
    margin-left: 12px;
}
</style>


