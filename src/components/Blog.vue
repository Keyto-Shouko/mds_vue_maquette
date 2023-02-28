<script setup>
import { defineProps } from 'vue'

defineProps({
})
</script>

<script>
export default {
    name: 'Blog',
    props: {
    },
    setup(props) {
        return {
        }
    }
}

</script>

<template >
    <div class="bg-darkblueMDS">
        <div class="flex justify-center mt-6">
            <h1 class="text-4xl max-w-md text-center text-white">
                MyDigitalSchool, c’est aussi un blog avec des conseils
            </h1>
        </div>
        <div class="grid grid-flow-col auto-cols-max items-center mx-80 mt-24 space-x-7">
            <div class="border-slate-200 rounded-xl h-64 w-56 ring-cardBG ring-1 bg-white pl-6 pt-6 pr-6">
                <img src="../assets/devImg.png" alt="alo?" srcset="" class=" px-4 py-4 rounded-xl">
                <p class="text-sm mt-2">
                    Publié le 4 mars
                </p>
                <p class="text-sm mt-2 font-bold">
                    Comment devenir développeur web ?
                </p>
            </div>
            <div class="border-slate-200 rounded-xl h-64 w-56 ring-cardBG ring-1 bg-white pl-6 pt-6 pr-6">
                <img src="../assets/boardImg.png" alt="alo?" srcset="" class=" px-4 py-4 rounded-xl">
                <p class="text-sm mt-2">
                    Publié le 4 avril
                </p>
                <p class="text-sm mt-2 font-bold">
                    UX vs UI Design, quelle est la différence ?
                </p>
            </div>
            <div class="border-slate-200 rounded-xl h-64 w-56 ring-cardBG ring-1 bg-white pl-6 pt-6 pr-6">
                <img src="../assets/pcImg.png" alt="alo?" srcset="" class=" px-4 py-4 rounded-xl">
                <p class="text-sm mt-2">
                    Publié le 9 avril
                </p>
                <p class="text-sm mt-2 font-bold">
                    Top 10 des métiers du digital en 2023
                </p>
            </div>
            <div class="border-slate-200 rounded-xl h-64 w-56 ring-cardBG ring-1 bg-white pl-6 pt-6 pr-6">
                <img src="../assets/devAgainImg.png" alt="alo?" srcset="" class=" px-4 py-4 rounded-xl">
                <p class="text-sm mt-2">
                    Publié le 6 mars
                </p>
                <p class="text-sm mt-2 font-bold">
                    Comment devenir développeur web ?
                </p>
            </div>
        </div>
    </div>
</template>

<style scoped></style>

