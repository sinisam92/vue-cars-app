<template>
    <div class="container">

    </div>
</template>
<script>
import CarsService from "../services/CarsService";
export default {
    created() {
        // CarsService.getAll()
        console.log(CarsService.getAll());
        
    },
    data() {
        return {

        }
    }
}
</script>
