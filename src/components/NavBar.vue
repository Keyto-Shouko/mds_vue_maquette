<script setup>
import { defineProps } from 'vue'

defineProps({
})
</script>

<script>
export default {
    name: 'NavBar',
    props: {
    },
    setup(props) {
        return {
        }
    }
}

</script>

<template>
    <nav class="">
        <div class="flex justify-between items-center">
            <div class = "p-4 m-2">
                <img class="float-left" src="../assets/logoMDS.png" alt="MDS" />
            </div>

            <div class="p-4 m-2">
                <a class="align-text-bottom text-black hover:text-blue-800 mr-10" href="">Accueil</a>
                <a class="align-text-bottom text-black hover:text-blue-800 mr-10" href="">Les programmes</a>
                <a class="align-text-bottom text-black hover:text-blue-800 mr-10" href="">Notre blog</a>
            </div>

            <div class="">
                <button class="rounded-full p-4 m-2 align-text-bottom bg-greenMDS  text-white float-left">M'inscrire</button>
            </div>
        </div>
    </nav>
</template>

<style scoped></style>

