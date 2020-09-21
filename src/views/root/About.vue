<template>
<!-- This is an example component -->
<div class="h-screen w-screen bg-gray-100 flex items-center">
    <div class="container flex flex-col md:flex-row items-center justify-center px-5 text-gray-700">
        <div class="max-w-md">
            <div class="text-5xl font-dark font-bold">{{ABOUT.title}}</div>
            <p class="text-2xl md:text-3xl font-light leading-normal">{{ABOUT.text}}</p>
            <div v-model="ABOUT.body">

            </div>
            <div v-if="ABOUT.beta">
                อยู่ในช่วงพัฒนา
            </div>
        </div>
        <div class="max-w-md h-auto  ">
            <img src="https://www.up.ac.th/th/slide/f4.jpg" alt="">
        </div>

    </div>
</div>
</template>

<script>
import {
    sync,
    call
} from 'vuex-pathify'
import test from '@/assets/test.json'
import _ from 'lodash'
export default {
    name: "Root",
    /*-------------------------ประกาศ components ---------------------------------------*/
    components: {

    },
    /*-------------------------รับค่าเมื่อเราเป็น components---------------------------------------*/
    props: {},
    /*-------------------------ประกาศตัวแปรที่ใช้ ผูกกับ v-model ---------------------------------------*/
    data() {
        return {
            txt: "Hello World",
        };
    },
    /*------------------------- สิ่งทที่อยู่ในนี้จะถูกรัยเมื่อโหลด ------------------------------------------*/
    mounted: async function () {
        /**** เรียกใช้ methods ชื่อ load() */
        await this.load();
    },
    /*------------------------- กระทำการตอน router ถูกโหลดเข้ามา------------------------------------------*/
    async beforeRouteEnter(to, from, next) {
        next();
    },
    /*-------------------------ใช้จัดการ operation  หรือ คำนวณค่าต่างๆ (คล้าย methods)------------------------------------------*/
    computed: {
        ...sync('test/*'),
        ...sync('home/*'),
        ...sync('dorm/*'),
    },
    /*-------------------------Methods------------------------------------------*/
    methods: {
        ...call('test/*'),
        ...call('home/*'),
        ...call('dorm/*'),
        /******* Methods default run ******/
        load: async function () {
            await this.getAbout()

        },
    },
};
</script>

<style>
.vs-select__label {
    font-size: 16px !important;
}

.vs-select-content {
    max-width: 100% !important;
    ;
}
</style>
