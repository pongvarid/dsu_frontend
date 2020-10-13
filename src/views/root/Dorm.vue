<template>
<div>
    <div class="super_overlay"></div>
    <div class="locations bgimg-1 ">
        <div class="container">
            <div class="row">
                <div class="col"><br><br>
                    <div class="section_title text-center w3-text-white">
                        <h1 class="w3-text-white w3-xxlarge">หอพัก</h1>
                    </div>
                    <div class="search_form_container">
                        <div class="search_form" id="search_form">
                            <div class="d-flex flex-sm-row flex-column align-items-sm-start align-items-center justify-content-sm-between">
                                <input v-model="SEARCH" type="text" class="search_input" placeholder="ชื่อหอพักที่คุณ ค้นหา?" required="required">
                                <button @click="fill = !fill" class="search_button w3-white w3-text-purple w3-margin-left">ประเภท</button>
                                <button @click="getDorm()" class="search_button w3-purple w3-text-white w3-margin-left">ค้นหา</button>
                            </div>
                        </div>
                    </div>
                    <div class="container row w3-card w3-white w3-margin w3-padding-24	w3-round-large" v-if="fill">

                        <div class="col-xs-12 col-md-4  " v-for="(tag, index) in CHOICES" :key="index">
                            <h2 class="w3-large w3-text-purple font-bold">{{tag.choice}} </h2>
                            <hr>
                            <div class="flex flex-col" v-for="(data, index) in tag.data" :key="index">
                                <h4>{{data.value}}</h4>
                                <input v-model="check" type="checkbox" name="vehicle2" :value="data.id">

                                <!-- <v-checkbox :value="data.id" v-model="form.tags" :label="lang(data.name_th,data.name)"></v-checkbox> -->
                            </div>
                        </div>
                    </div>
                    <br><br>
                    <!-- <div class="locations_container d-flex flex-row align-items-start justify-content-between flex-wrap" v-if="response">

                         
                        <div class="location" v-for="dorm,index in homeDorm" :key="index" v-if="dorm.permission">
                            <img height="250" class="w-p" v-if="dorm.image[0]" :src="'https://dorm.dsq.up.ac.th/'+dorm.image[0].front" alt="">
                            <img v-else src="https://images.unsplash.com/photo-1555982105-d25af4182e4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80" alt="">

                            <div class="location_title text-center">
                                <div><a @click="$router.push(`/detail?id=${dorm.id}`)" href="#">{{dorm.name}}
                                     </a></div>
                            </div>
                        </div>

                    </div> -->
                </div>
            </div>
        </div>
    </div>
    <div class="locations w3-padding-24">
     
            <div class="locations_container d-flex flex-row align-items-start justify-content-between flex-wrap" v-if="response"> 
                <div class="location" v-for="dorm,index in DORMS.results" :key="index" v-if="dorm.permission">
                    <img height="250" class="w-p" v-if="dorm.image[0]" :src="'https://dorm.dsq.up.ac.th/'+dorm.image[0].front" alt="">
                    <img v-else src="https://images.unsplash.com/photo-1555982105-d25af4182e4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80" alt="">

                    <div class="location_title text-center">
                        <div><a @click="$router.push(`/detail?id=${dorm.id}`)" href="#">{{dorm.name}}
                            </a></div>
                    </div>
                </div>

            </div>
         
    </div>
    <div class="col">
<!--     
        <div class="flex flex-row flex-wrap">
            <div v-for="dorm,index in DORMS.results" :key="index" class="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col" v-if="dorm.permission">
                <vs-card type="4" @click="$router.push(`/detail?id=${dorm.id}`)">
                    <template #title>
                        <h3>{{dorm.name}}</h3>
                    </template>
                    <template #img>
                        <img class="h-64" v-if="dorm.image[0]" :src="'https://dorm.dsq.up.ac.th/'+dorm.image[0].front" alt="">
                        <img v-else src="https://images.unsplash.com/photo-1555982105-d25af4182e4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80" alt="">
                    </template>
                    <template #text>
                        <p>
                            {{dorm.address}}
                        </p>
                    </template>
                    <template #interactions>
                    
                    </template>
                </vs-card>

            </div>
        </div> -->
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
            response: false,
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
            if(this.$route.query.name){
                this.SEARCH = this.$route.query.name;
                await this.getDorm();
            }
            this.response = true;
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
@media (max-width: 575.98px) {
    .w-p{
        width:300px!important;
    }
}
 .w-p{
        width:100%!important;
    }
/* Create a Parallax Effect */
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
