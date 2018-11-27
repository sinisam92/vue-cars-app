<template>
    <div class="container">
        <form @submit.prevent="addCar" ref="form">
            <div class="form-group">
                <input type="text" name="file" class="form-control" placeholder="Brand" v-model="newCar.brand">
            </div>
            <div class="form-group">
                <input type="text" name="file" class="form-control" placeholder="Model" v-model="newCar.model">
            </div>
             <div class="form-group">
                <input type="number" name="file" class="form-control" placeholder="Max Speed" v-model="newCar.maxSpeed">
            </div>
             <div class="form-group">
                <input type="number"  class="form-control" placeholder="Number Of Doors" v-model="newCar.numberOfDoors" name="file">
            </div>
            <select  aria-placeholder="Select Section" v-model="newCar.year" :value="years" name="file" >
                <option disabled value="">Select year</option>
                <option v-for="(year, index) in years" :key="index">
                    {{ year }}
                </option>
            </select>
            <div class="custom-control ">
                <input type="checkbox" v-model="newCar.isAutomatic" name="file" >
                <label class="custom-controll">Automatic</label>
            </div>
        
             <div class="engine-input">
                 <label>Disel</label>
                <input type="radio" v-model="newCar.engine" value="Disel" name="file">
                <label>Petrol</label>
                <input type="radio" v-model="newCar.engine" value="Petrol" name="file">
                <label>Electric</label>
                <input type="radio" v-model="newCar.engine" value="Electric" name="file">
                <label>Hybrid</label>
                <input type="radio" v-model="newCar.engine" value="Hybrid" name="file">
            </div>
           
            <button type="submit" class="btn btn-primary">Add car</button>
            <button type="submit" class="btn btn-info" @click.stop.prevent="previewCar">Preview</button>
            <button  class="btn btn-danger" @click.stop.prevent="resetForm">Reset</button>
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
           },
           file: ''
        
        }
    },
    methods: {
        addCar() {
            CarsService.add(this.newCar);
            this.newCar = {}
            this.$router.push({ path: '/cars' })
        },
        resetForm() {
            this.newCar = {}
        },
        previewCar() {
           let stringForm = JSON.stringify(this.newCar);
           let parseString = JSON.parse(stringForm);
           alert(`Brand:${ parseString.brand }\nModel:${ parseString.model }\nMax Speed:${ parseString.maxSpeed }\n Number Of Doors:${ parseString.numberOfDoors }\n Year:${ parseString.year }\nAutomatic:${ parseString.isAutomatic }\n Engine:${ parseString.engine }`);
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
.btn {
    margin-top: 6px;
    margin-left: 6px;  
}
</style>


