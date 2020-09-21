<template>
<div class="bg-gray-200">
    <div class="container mx-auto"><br><br><br><br><br><br><br>
        <div class="flex ">
          <input placeholder="  ค้นหา"  class="shadow rounded w-10/12" type="text" v-model="SEARCH"> 
           <button @click="fill = !fill" class="shadow p-4 bg-white">รายระเอียด</button> <button @click="getDorm()" class="p-4 text-white bg-blue-500">ค้นหาหอพัก</button>
        </div>
        <div class="flex flex-wrap shadow-xl rounded p-6" v-if="fill">

            <div class="w-full md:w-1/3  " v-for="(tag, index) in CHOICES" :key="index">
                <h2 class="text-xl font-bold">{{tag.choice}} </h2>
                <hr>
                <div class="flex flex-col" v-for="(data, index) in tag.data" :key="index">
                    <h4>{{data.value}}</h4>
                    <input v-model="check" type="checkbox" name="vehicle2" :value="data.id">

                    <!-- <v-checkbox :value="data.id" v-model="form.tags" :label="lang(data.name_th,data.name)"></v-checkbox> -->
                </div>
            </div>
        </div>

        <div class="flex flex-row flex-wrap">
            <div v-for="dorm,index in DORMS.results" :key="index" class="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col">
                <vs-card type="4" @click="$router.push(`/detail?id=${dorm.id}`)">
                    <template #title>
                        <h3>{{dorm.name}}</h3>
                    </template>
                    <template #img>
                        <img class="h-64" v-if="dorm.image[0]" :src="'http://localhost:8000'+dorm.image[0].front" alt="">
                        <img v-else src="https://images.unsplash.com/photo-1555982105-d25af4182e4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80" alt="">
                    </template>
                    <template #text>
                        <p>
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
        <br><br>
        <vs-pagination v-if="DORMS.count" v-model="page" :length="toInt(DORMS.count/10)" /> <br><br>
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
    components: {},
    /*-------------------------รับค่าเมื่อเราเป็น components---------------------------------------*/
    props: {},
    /*-------------------------ประกาศตัวแปรที่ใช้ ผูกกับ v-model ---------------------------------------*/
    data() {
        return {
           
            fill: false,
            check: [],
            page: 1,
            currentChoice: '',
            xx: {
                "สวัสดี": "วันจันทร์",
                "aa": 'asa'
            },
            dd: test
        };
    },
    watch: {
        async page(val) {
            await this.getDorms(this.currentChoice + `&page=${val}`);
            this.fill = false;
        }
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
        toInt(val) {
            return parseInt(val);
        },
        async getDorm() {
            try {
                let id = this.check.join();
                let dormId = await this.getDormIdByChoice(id);
                console.log(dormId.id.join());
                this.currentChoice = dormId.id.join();
                await this.getDorms(dormId.id.join());
                this.fill = false;
            } catch (error) {
                await this.getDorms('');
                this.fill = false;
            }

        },
        /******* Methods default run ******/
        load: async function () {
            await this.getAllChoice();
            await this.getDorms('');
        }
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
    ;
}
</style>
