<script setup>
import { defineProps } from 'vue'

defineProps({
})
</script>

<script>
export default {
    name: 'CardDomain',
    props: {
    },
    setup(props) {
        return {
        }
    }
}

</script>

<template>
    <div class="flex justify-center mt-48">
        <p class="text-greenMDS">PLUSIEURS SPÉCIALITÉS</p>
    </div>
    <div class="flex justify-center mt-6">
        <h1 class="text-4xl max-w-md text-center">
            Les domaines les plus demandés dans le digital
        </h1>
    </div>
    <div class="grid grid-flow-col auto-cols-max items-center mx-80 mt-24 space-x-7">
        <div class="border-slate-200 rounded-xl h-80 w-56 ring-cardBG ring-1 bg-white pl-6 pt-6 pr-6">
            <img src="../assets/emergency.png" alt="alo?" srcset="" class="bg-greenMDS px-4 py-4 rounded-xl">
            <h1 class="text-xl font-bold mt-6">
                WEBMARKETING
            </h1>
            <p class="text-sm mt-2">
                Classée la 2ème meilleure école de France dans ce domaine, le marketing digital est la spécialité de
                MyDigitalSchool
            </p>
            <p class="font-bold mt-2">
                Découvrir
            </p>
        </div>
        <div class="border-slate-200 rounded-xl h-80 w-56 ring-cardBG ring-1 bg-white pl-6 pt-6 pr-6">
            <img src="../assets/emergency.png" alt="alo?" srcset="" class="bg-greenMDS px-4 py-4 rounded-xl">
            <h1 class="text-xl font-bold mt-6">
                UI & UX DESIGN
            </h1>
            <p class="text-sm mt-2">
                Classée la 2ème meilleure école de France dans ce domaine, le marketing digital est la spécialité de
                MyDigitalSchool
            </p>
            <p class="font-bold mt-2">
                Découvrir
            </p>
        </div>
        <div class="border-slate-200 rounded-xl h-80 w-56 ring-cardBG ring-1 bg-white pl-6 pt-6 pr-6">
            <img src="../assets/emergency.png" alt="alo?" srcset="" class="bg-greenMDS px-4 py-4 rounded-xl">
            <h1 class="text-xl font-bold mt-6">
                PROGRAMMATION
            </h1>
            <p class="text-sm mt-2">
                Classée la 2ème meilleure école de France dans ce domaine, le marketing digital est la spécialité de
                MyDigitalSchool
            </p>
            <p class="font-bold mt-2">
                Découvrir
            </p>
        </div>
        <div class="border-slate-200 rounded-xl h-80 w-56 ring-cardBG ring-1 bg-white pl-6 pt-6 pr-6">
            <img src="../assets/emergency.png" alt="alo?" srcset="" class="bg-greenMDS px-4 py-4 rounded-xl">
            <h1 class="text-xl font-bold mt-6">
                COMMUNICATION
            </h1>
            <p class="text-sm mt-2">
                Classée la 2ème meilleure école de France dans ce domaine, le marketing digital est la spécialité de
                MyDigitalSchool
            </p>
            <p class="font-bold mt-2">
                Découvrir
            </p>
        </div>
    </div>
    <div class="flex flex-wrap justify-center">
        <button class="text-white rounded-full p-4 m-2 bg-greenMDS font-anek mt-10">Télécharger le programme</button>
    </div>
</template>

<style scoped></style>

