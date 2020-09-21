<template>
<div class="bg-gray-200">
    <div v-if="response" class="bg-up bg-center bg-fixed bg-no-repeat bg-center bg-cover h-screen  relative">
        <!-- Overlay Background + Center Control -->
        <div class="h-screen bg-opacity-50 bg-black flex items-center justify-center" style="background:rgba(0,0,0,0.3);">
            <div class="mx-2 text-center bg-white rounded-lg shadow-2xl p-4 w-full md:w-5/12">
                <div class="flex">
                    <h2 class="text-3xl text-purple-600"><i class="em em-house_with_garden text-2xl" aria-role="presentation" aria-label="HOUSE WITH GARDEN"></i>&nbsp;&nbsp;ค้นหาหอพัก</h2>
                </div>
                <div class="flex flex-row flex-wrap">
                    <div class="w-full md:w-1/3 p-4">
                        <div class="inline-block relative  w-full ">
                            <select v-model="form.zone" class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                                <option value="0">โซนหอพัก</option>
                                <option v-for="data,index in zone" :key="index" :label="data.value" :value="data.id">{{data.value}}</option>
                            </select>
                            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                            </div>
                        </div>
                    </div>
                    <div class="w-full md:w-1/3 p-4">

                        <div class="inline-block relative  w-full ">
                            <select v-model="form.type" class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                                <option value="0">{{type[0].name}}</option>
                                <option v-for="data,index in type" :key="index" :label="data.value" :value="data.id">{{data.value}}</option>
                            </select>
                            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                            </div>
                        </div>

                    </div>
                    <div class="w-full md:w-1/3 p-4">
                        <div class="inline-block relative  w-full ">
                            <select v-model="form.room" class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                                <option value="0">{{room[0].name}}</option>
                                <option v-for="data,index in room" :key="index" :label="data.value" :value="data.id">{{data.value}}</option>
                            </select>
                            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="flex flex-row  flex-wrap">
                    <div class="w-full md:w-1/3 p-4">

                        <div class="inline-block relative  w-full ">
                            <select v-model="form.food" class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                                <option value="0">{{food[0].name}}</option>
                                <option v-for="data,index in food" :key="index" :label="data.value" :value="data.id">{{data.value}}</option>
                            </select>
                            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                            </div>
                        </div>

                    </div>
                    <div class="w-full md:w-1/3 p-4">

                        <div class="inline-block relative  w-full ">
                            <select v-model="form.pet" class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                                <option value="0">{{pet[0].name}}</option>
                                <option v-for="data,index in pet" :key="index" :label="data.value" :value="data.id">{{data.value}}</option>
                            </select>
                            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                            </div>
                        </div>

                    </div>
                    <div class="w-full md:w-1/3 p-4">
                        <button @click="$router.push('/dorm')"
                        class="block uppercase mx-auto shadow bg-indigo-800 hover:bg-indigo-700 focus:shadow-outline focus:outline-none text-white text-xs py-2 px-10 rounded">
                            <span class="mdi mdi-feature-search-outline text-xl"></span><span class="text-lg">ค้นหา</span>
                        </button>
                     
                    </div>
                </div>
            </div>
        </div>

    </div>

    <div class="container mx-auto mt-8">
        <div class="flex flex-col justify-center items-center">
            <h2 class="text-3xl">หอพัก</h2>
        </div>
        <div class="flex flex-row flex-wrap">
            <div v-for="dorm,index in homeDorm" :key="index" class="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col">
                <vs-card type="4" @click="$router.push(`/detail?id=${dorm.id}`)" >
                    <template #title>
                        <h3>{{dorm.name}}</h3>
                    </template>
                    <template #img>
                      <img class="h-64" v-if="dorm.image[0]" :src="dorm.image[0].front" alt="">
                        <img v-else src="https://images.unsplash.com/photo-1555982105-d25af4182e4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80" alt="">
                    </template>
                    <template #text >
                        <p >
                           {{dorm.address}}
                        </p>
                    </template>
                    <template #interactions>
                        <vs-button :color="(dorm.permission)?'success':'danger'" icon>
                            <i class='bx bx-heart'></i>
                        </vs-button>
                        <vs-button class="btn-chat" shadow primary>
                            <i class='bx bx-chat'></i>
                            <span class="span">
                               {{(dorm.permission)?'มีข้อมูลหอพัก':'ไม่มีข้อมูลหอพัก'}}
                            </span>
                        </vs-button>
                    </template>
                </vs-card>

            </div>
        </div>

    </div>
</div>
</template>

<script>
import {
    sync,
    call
} from 'vuex-pathify'
export default {
    name: "Root",
    /*-------------------------ประกาศ components ---------------------------------------*/
    components: {},
    /*-------------------------รับค่าเมื่อเราเป็น components---------------------------------------*/
    props: {},
    /*-------------------------ประกาศตัวแปรที่ใช้ ผูกกับ v-model ---------------------------------------*/
    data() {
        return {
            value: '',
            txt: "Hello World",
            room:[],
            size: [],
            zone: [],
            price: [],
            type: [],
            pet: [],
            food: [],
            form: {
                type: 0,
                pet: 0,
                room: 0,
                food: 0,
                zone: 0,
            },
            homeDorm:[],
            response:false,
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
        ...sync('home/*')
    },
    /*-------------------------Methods------------------------------------------*/
    methods: {
        ...call('test/*'),
        ...call('home/*'),
        /******* Methods default run ******/
        load: async function () {
            this.size = await this.getMetadata('ลักษณะของหอพัก');
            this.zone = await this.getMetadata('โซนหอพัก');
            this.type = await this.getMetadata('ประเภทของหอพัก');
            this.pet = await this.getMetadata('เลี้ยงสัตว์เลี้ยงในหอพักได้หรือไม่');
            this.food = await this.getMetadata('ทำอาหารในหอพักได้หรือไม่');
            this.room = await this.getMetadata('ลักษณะการเข้าพักอาศัย');
            this.homeDorm = await this.getHomeDorm();
            this.response = true;
        },
    },
};
</script>

<style>
.bg-up {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    background: url('https://www.up.ac.th/en/slide/f4.jpg');
    background-repeat: no-repeat;
    background-size: cover;
}

.vs-select__label {
    font-size: 16px !important;
}

.vs-select-content {
    max-width: 100% !important;
     
}
.vs-card-content.type-4 .vs-card__text{
     width: 100% !important;
}
</style>
