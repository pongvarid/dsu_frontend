<template>
<!-- This is an example component -->
<div class="">
    <div class="locations bgimg-1 ">
        <div class="super_overlay"></div>
        <div class="container">
            <div class="row">
                <div class="col"><br><br>
                    <div class="section_title text-center w3-text-white">
                        <h1 class="w3-text-white w3-xxxlarge"> เกี่ยวกับเรา</h1> <br><br>
                    </div>
                </div>
            </div>
        </div>
    </div><br><br><br>
    <div class="section_title text-center ">
        <h1 class=" w3-xlarge w3-text-purple"><i class="em em-notebook_with_decorative_cover" aria-role="presentation" aria-label="NOTEBOOK WITH DECORATIVE COVER"></i>
         {{ABOUT.title}} </h1>
    </div><br>
    <div class="container">
<div class="container row">
        <div class="col-xs-12 col-md-6">
            <h1 class="w3-large">{{ABOUT.title}}</h1>
            <h2 class="w3-medium">{{ABOUT.text}}</h2><hr>
            <div v-html="ABOUT.body"></div>
            <button v-if="ABOUT.beta" class="search_button"><i class="em em-electric_plug" aria-role="presentation" aria-label="ELECTRIC PLUG"></i>อยู่ใช่ช่วงพัฒนาระบบ ...</button> 
        </div>
        <div class="col-xs-12 col-md-6">
            <img src="https://www.up.ac.th/th/slide/f4.jpg" alt="">
        </div>
    </div>
    </div><br><br><br><br><br><br>
    
    <!-- <div class="container flex flex-col md:flex-row items-center justify-center px-5 text-gray-700">
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

    </div> -->
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

.bgimg-1,
.bgimg-2,
.bgimg-3 {
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

/* First image (Logo. Full height) */
.bgimg-1 {
    background-image: url('https://www.img.in.th/images/6a26eaafbc26b0aea0a4741587d537d3.jpg');
    min-height: 100%;
}
</style>
