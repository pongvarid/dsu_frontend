<template>
<div class="h-auto w-screen bg-gray-100    items-center"><br><br><br><br><br><br><br>
    <main >
        <div class="container mx-auto px-6 mt-6">
            <div class="md:flex md:items-center">
                <div class="w-full h-64 md:w-1/2 lg:h-96">
                    <img class="h-full w-full rounded-md object-cover max-w-lg mx-auto" 
                    :src="DETAIL.image[0].front" alt="Nike Air">
                </div>
                <div class="w-full max-w-lg mx-auto mt-5 md:ml-8 md:mt-0 md:w-1/2">
                    <h3 class="text-gray-700 uppercase text-2xl">{{DETAIL.name}}</h3>
                    <span class="text-gray-500 mt-3">{{DETAIL.address}}</span>
                    <span class="text-gray-500 mt-3">ตำบลแม่กา อำเภอเมืองพะเยา จังหวัดพะเยา 56000</span>
                    <hr class="my-3">
                    <div class="mt-2">
                        <label class="text-gray-700 text-sm" for="count">ผู้ดูแล</label>
                        <div class="flex flex-col">
                           <div v-for="owner,i in DETAIL.owner">
                          
                               <h3 class="text-xl">{{owner.name}}</h3>
                                <h3>{{owner.type}}</h3>
                           </div>
                        </div>
                    </div>
                    <div class="mt-3">
                        <label class="text-gray-700 text-sm" for="count">ติดต่อ</label>
                         <pre>{{DETAIL.tel}}</pre>
                    </div>
                    <div class="flex items-center mt-6">
                        <!-- <button class="px-8 py-2 bg-indigo-600 text-white text-sm font-medium rounded hover:bg-indigo-500 focus:outline-none focus:bg-indigo-500">Order Now</button>
                        <button class="mx-2 text-gray-600 border rounded-md p-2 hover:bg-gray-200 focus:outline-none">
                            <svg class="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                                <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                            </svg>
                        </button> -->
                    </div>
                </div>
            </div>
            <div class="mt-16">
                <h3 class="text-gray-600 text-2xl font-medium"> สิ่งอำนวยความสะดวก</h3>
                <div class="" v-for="style,ley in  DETAIL.style" :key="ley">
                    <h3>- {{style}}</h3>
                </div>
                <div class="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6" v-for="img,inx in DETAIL.image" :key="inx">
                    <div class="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden h-56">
                        <div class="flex items-end justify-end h-56 w-full bg-cover" 
                        :style="`background-image: url('${img.front}')`">
                         
                        </div>
                    </div>
                    <div class="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden h-56">
                        <div class="flex items-end justify-end h-56 w-full bg-cover" 
                        :style="`background-image: url('${img.all_dorm}')`">
                         
                        </div>
                    </div>
                    <div class="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden h-56">
                        <div class="flex items-end justify-end h-56 w-full bg-cover" 
                        :style="`background-image: url('${img.front_room}')`">
                         
                        </div>
                    </div>
                    <div class="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden h-56">
                        <div class="flex items-end justify-end h-56 w-full bg-cover" 
                        :style="`background-image: url('${img.in_room}')`">
                         
                        </div>
                    </div>
                    <div class="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden h-56">
                        <div class="flex items-end justify-end h-56 w-full bg-cover" 
                        :style="`background-image: url('${img.closet}')`">
                         
                        </div>
                    </div>
                    <div class="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden h-56">
                        <div class="flex items-end justify-end h-56 w-full bg-cover" 
                        :style="`background-image: url('${img.bed}')`">
                         
                        </div>
                    </div>
                    <div class="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden h-56">
                        <div class="flex items-end justify-end h-56 w-full bg-cover" 
                        :style="`background-image: url('${img.wc}')`">
                         
                        </div>
                    </div>
                    <div class="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden h-56">
                        <div class="flex items-end justify-end h-56 w-full bg-cover" 
                        :style="`background-image: url('${img.car}')`">
                         
                        </div>
                    </div> 
                     
                </div>
            </div>
        </div>
    </main>
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
            let id = this.$route.query.id;

            await this.getDetail(id)

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
