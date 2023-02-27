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
        <div class="flex justify-center">
            <div class = "p-4 m-2">
                <img class="float-left" src="../assets/mdsLogo.png" alt="MDS" />
            </div>

            <div class="p-4 m-2">
                <a class="align-text-bottom text-black hover:text-blue-800" href="">Accueil</a>
            </div>

            <div class="p-4 m-2">
                <a class="align-text-bottom text-black hover:text-blue-800" href="">Les programmes</a>
            </div>

            <div class="p-4 m-2">
                <a class="align-text-bottom text-black hover:text-blue-800" href="">Notre blog</a>
            </div>

            <div class="">
                <button class="rounded-full p-4 m-2 align-text-bottom bg-greenMDS text-white float-left">M'inscrire</button>
            </div>
        </div>
        <!--<ul class="inline-flex flex-row">
            <li class="p-4 m-2">
                <img class="float-left mr-4 my-2 h-8" src="../assets/mdsLogo.png" alt="MDS" />
            </li>
            <li class="p-4 m-2">
                <a class="text-black align-text-bottom hover:text-blue-800" href="#">Accueil</a>
            </li>
            <li class="p-4 m-2">
                <a class="text-black align-text-bottom hover:text-blue-800" href="#">Les programmes</a>
            </li>
            <li class="p-4 m-2">
                <a class="text-black align-text-bottom hover:text-blue-800" href="#">Notre blog</a>
            </li>
            <li class="p-4 m-2">
                <button class="rounded-full align-text-bottom bg-greenMDS text-white float-left">M'inscrire</button>
            </li>
        </ul>-->
    </nav>
</template>

<style scoped></style>

