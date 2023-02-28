<script setup>
import { defineProps } from 'vue'

defineProps({
})
</script>

<script>
export default {
    name: 'AnswersPost',
    props: {
    },
    data() {
        return {
            path : './assets/',
            photos : [{src: 'chad1.png', alt: 'chad1'}, {src: 'chad2.png', alt: 'chad2'}, {src: 'chad3.png', alt: 'chad3'}, {src:'chad4.png',alt:'chad4'}]
        }
    },
    setup(props) {
        return {
        }
    }
}

</script>

<template>
    <div class="flex justify-start font-extrabold m-2 mt-28">
        <h1 class="text-3xl max-w-sm">
            Qu’est-ce que nos alumnis en pensent ?
        </h1>
        <div>
            <button class="">
                <img src="../assets/leftArrow.png" alt="arrow-left" srcset="" class="h-6 mt-2 ml-2 ring-greenMDS rounded-full justify-self-end">
            </button>
            <button>
                <img src="../assets/rightArrow.png" alt="arrow-left" srcset="" class="h-6 mt-2 ml-2 bg-greenMDS rounded-full">
            </button>
        </div>
    </div>
    
    <div class="flex flex-wrap justify-center">
        <button class="text-white rounded-full p-4 m-2 bg-greenMDS font-anek mt-10">Appelez-nous</button>
    </div>

    <div class="mt-20 h-3">
        <div class="bg-auto bg-no-repeat bg-center">
            <img src="../assets/chad1.png" alt="chad1" srcset="" class="h-44 absolute left-1/3">
        </div>
        <div class="bg-auto bg-no-repeat bg-center">
            <img src="../assets/chad2.png" alt="chad2" srcset="" class="h-44 absolute right-1/2 mt-11 mr-3">
        </div>
        <div class="bg-auto bg-no-repeat bg-center">
            <img src="../assets/chad3.png" alt="chad3" srcset="" class="h-44 absolute left-1/2 mt-11 ml-3">
        </div>
        <div class="bg-auto bg-no-repeat bg-center">
            <img src="../assets/chad4.png" alt="chad4" srcset="" class="h-44 absolute right-1/3">
        </div>
    </div>
</template>

<style scoped></style>

