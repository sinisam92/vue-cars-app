<template>
    <div class="container">
        <div class="container mt-3 mt-sm-5">
            <div class="row justify-content-center">
                <div class="col-md-6">
                    <form @submit.prevent="onSubmit">
                        <div class="form-group">
                            <input type="text"  class="form-control" required minlength="2" placeholder="Brand" v-model="newCar.brand">
                        </div>
                        <div class="form-group">
                            <input type="text"  class="form-control" placeholder="Model" required minlength="2" v-model="newCar.model">
                        </div>
                        <div class="form-group">
                            <input type="number" class="form-control" placeholder="Max Speed" v-model="newCar.maxSpeed">
                        </div>
                        <div class="form-group">
                            <input type="number"  class="form-control" placeholder="Number Of Doors" required v-model="newCar.numberOfDoors">
                        </div>
                        <div class="select">
                            <select  aria-placeholder="Select Section" v-model="newCar.year" :value="years" required >
                                <option disabled value="">Select year</option>
                                <option v-for="(year, index) in years" :key="index">
                                    {{ year }}
                                </option>
                            </select>
                        </div>
                        <div class="custom-control ">
                            <input type="checkbox" v-model="newCar.isAutomatic" >
                            <label class="custom-controll">Automatic</label>
                        </div>
                        <div class="validate-radio">
                            <div class="engine-input">
                                <label>Disel</label>
                                <input type="radio" v-model="newCar.engine" value="Disel" required>
                                <label>Petrol</label>
                                <input type="radio" v-model="newCar.engine" value="Petrol" required>
                                <label>Electric</label>
                                <input type="radio" v-model="newCar.engine" value="Electric" required>
                                <label>Hybrid</label>
                                <input type="radio" v-model="newCar.engine" value="Hybrid" required>
                            </div>
                        </div>
                    
                        <button type="submit" class="btn btn-primary">Add car</button>
                        <button type="submit" class="btn btn-info" @click.stop.prevent="previewCar">Preview</button>
                        <button  class="btn btn-danger" @click.stop.prevent="resetForm">Reset</button>
                    </form>
                </div><!-- /col -->
            </div><!-- /row -->
        </div><!-- /container -->  
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
    created() {
        this.$route.params.id && CarsService.get(this.$route.params.id)
            .then((response)=> {
                this.car = response.data
            });
    },
    methods: {
        onSubmit() {
            if(this.car.id){
                this.editCar()
            }else {
                this.addCar()
            };
        
        },
        
        addCar() {
            CarsService.add(this.newCar);
            this.newCar = {};
            this.$router.push({ path: '/cars' });
        },
        editCar() {
            CarsService.edit( this.car.id, this.newCar) 
                .then((success) => {
                    this.$router.push({ path: '/cars' });
                }).catch((error) => {
                    console.log(error);
                    
                })     
        },
        resetForm() {
            this.newCar = {}
        },
        previewCar() {
           let stringForm = JSON.stringify(this.newCar);
           let car = JSON.parse(stringForm);
           alert(`Brand:${ car.brand }\nModel:${ car.model }\nMax Speed:${ car.maxSpeed }\n Number Of Doors:${ car.numberOfDoors }\n Year:${ car.year }\n${ car.isAutomatic ? 'Automatic' : 'Manual'}\n Engine:${ car.engine }`);
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


