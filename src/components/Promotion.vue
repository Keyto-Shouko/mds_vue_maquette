<script setup>
import { defineProps } from 'vue'

defineProps({
})
</script>

<script>
export default {
    name: 'Promotion',
    props: {
    },
    setup(props) {
        return {
        }
    }
}

</script>

<template>
    <div class="flex justify-center mt-80">
        <p class="text-greenMDS">DES CAMPUS PARTOUT EN FRANCE</p>
    </div>
    <!--<div class="flex justify-center bg-auto bg-no-repeat bg-center space-x-20 items-center">
        <img src="../assets/logoLyon.png" alt="Lyon" srcset="" class="h-6 mt-8">
        <img src="../assets/logoParis.png" alt="Paris" srcset="" class="h-6 mt-8">
        <img src="../assets/logoAnnecy.png" alt="Annecy" srcset="" class="h-4 mt-8">
        <img src="../assets/logoNantes.png" alt="Nantes" srcset="" class="h-9 mt-8">
    </div>
    <div class="flex justify-center space-x-10 items-center">
        <p>2000 ÉTUDIANTS</p>
        <p>2000 ÉTUDIANTS</p>
        <p>2000 ÉTUDIANTS</p>
        <p>2000 ÉTUDIANTS</p>
    </div>-->

    <div class="grid grid-flow-col auto-cols-max items-center mx-33percent">
        <div class="w-40">
            <img src="../assets/logoLyon.png" alt="Lyon" srcset="" class="h-6 mt-8">
            <p class="space-y-40">2000 ÉTUDIANTS</p>
        </div>
        <div class="w-40">
            <img src="../assets/logoParis.png" alt="Paris" srcset="" class="h-6 mt-8">
            <p>2000 ÉTUDIANTS</p>
        </div>
        <div class="w-40">
            <img src="../assets/logoAnnecy.png" alt="Annecy" srcset="" class="h-4 mt-8">
            <p>2000 ÉTUDIANTS</p>
        </div>
        <div class="w-40">
            <img src="../assets/logoNantes.png" alt="Nantes" srcset="" class="h-9 mt-8">
            <p>2000 ÉTUDIANTS</p>
        </div>
    </div>
</template>

<style scoped></style>

