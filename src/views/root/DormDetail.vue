<template>
<div class="" v-if='response'>

    <div class="locations bgimg-1 ">

        <div class="super_overlay"></div>

        <div class="container">
            <div class="row">
                <div class="col"><br><br>
                    <div class="section_title text-center ">
                        <h1 class="w3-text-white  w3-xxxlarge">{{DETAIL.name}}</h1>
                    </div>
                    <div class="search_form_container">
                        <div class="search_form" id="search_form">
                            <div class="">

                                <h2 class="w3-text-white w3-xlarge">{{DETAIL.address}}</h2>
                                <p class="w3-text-white w3-large">ตำบลแม่กา อำเภอเมืองพะเยา จังหวัดพะเยา 56000</p>

                            </div>
                        </div>
                    </div>

                    <br><br>

                </div>
               
            </div>
        </div><br>
    </div>
    <main>
        <div class="container">
            <div class="row">
                <div class="col"><br><br><br><br>
                    <div class="section_title text-center ">
                        <h1 class=" w3-xxlarge w3-text-blue"><i class="em em-female-astronaut" aria-role="presentation" aria-label=""></i> ผู้ดูแลหอพัก {{DETAIL.name}}</h1>
                    </div>
                    <div class="search_form_container">
                        <div class="search_form" id="search_form">
                            <div class="">
                                
                                <div v-for="owner,i in DETAIL.owner">

                                    <h3 class="text-xl">{{owner.name}}</h3>
                                    <h3>{{owner.type}}</h3>
                                </div>
                                <h3 class="w3-large">ติดต่อ : {{DETAIL.tel}}</h3>
                            </div>
                        </div>
                    </div>
                    <br><br>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col"><br><br>
                    <div class="section_title text-center ">
                        <h1 class=" w3-xxlarge w3-text-orange"><i class="em em-smiling_face_with_3_hearts" aria-role="presentation" aria-label="SMILING FACE WITH SMILING EYES AND THREE HEARTS"></i> สิ่งอำนวยความสะดวก</h1>
                    </div>
                    <div class="search_form_container">
                        <div class="search_form" id="search_form">
                            <div class="">
                                <div class="container row">
                                    <div class="col-md-6 col-xs-12" v-for="style,ley in  DETAIL.style" :key="ley">
                                        <h3 style="font:16px;"><b>{{(style[0] != "สิ่งอำนวยความสะดวกภายในหอพัก ")?style[0]+" : ":'' }}</b> {{style[1]}}</h3>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <br><br>
                </div>
            </div>
        </div>
        <h3 class="text-gray-600 text-2xl font-medium"></h3>
 

        <div class="section_title text-center ">
            <h1 class=" w3-xxlarge w3-text-purple"><i class="em em-camera" aria-role="presentation" aria-label="CAMERA"></i> รูปภาพหอพัก {{DETAIL.name}}</h1>
        </div>
        <div class="locations w3-padding-24">

            <div class="locations_container d-flex flex-row align-items-start justify-content-between flex-wrap" v-for="img,inx in DETAIL.image" :key="inx">

                <div class="location w3-round-large">
                    <img height="250" class="w-p w3-round-large" :src="'https://dorm.dsq.up.ac.th/'+img.front" alt="">
                    <!-- <div class="location_title text-center">
                        <div>
                            <h3>รูปภาพหอพัก</h3>
                        </div>
                    </div> -->
                </div>
                <div class="location">
                    <img height="250" class="w-p w3-round-large" :src="'https://dorm.dsq.up.ac.th/'+img.all_dorm" alt="">
                    <!-- <div class="location_title text-center">
                        <div>
                            <h3>รูปภาพหอพัก</h3>
                        </div>
                    </div> -->
                </div>
                <div class="location">
                    <img height="250" class="w-p w3-round-large" :src="'https://dorm.dsq.up.ac.th/'+img.front_room" alt="">
                    <!-- <div class="location_title text-center">
                        <div>
                            <h3>รูปภาพหอพัก</h3>
                        </div>
                    </div> -->
                </div>
                <div class="location">
                    <img height="250" class="w-p w3-round-large" :src="'https://dorm.dsq.up.ac.th/'+img.in_room" alt="">
                    <!-- <div class="location_title text-center">
                        <div>
                            <h3>รูปภาพหอพัก</h3>
                        </div>
                    </div> -->
                </div>
                <div class="location">
                    <img height="250" class="w-p w3-round-large" :src="'https://dorm.dsq.up.ac.th/'+img.closet" alt="">
                    <!-- <div class="location_title text-center">
                        <div>
                            <h3>รูปภาพหอพัก</h3>
                        </div>
                    </div> -->
                </div>
                <div class="location">
                    <img height="250" class="w-p w3-round-large" :src="'https://dorm.dsq.up.ac.th/'+img.bed" alt="">
                    <!-- <div class="location_title text-center">
                        <div>
                            <h3>รูปภาพหอพัก</h3>
                        </div>
                    </div> -->
                </div>
                <div class="location">
                    <img height="250" class="w-p w3-round-large" :src="'https://dorm.dsq.up.ac.th/'+img.wc" alt="">
                    <!-- <div class="location_title text-center">
                        <div>
                            <h3>รูปภาพหอพัก</h3>
                        </div>
                    </div> -->
                </div>
                <div class="location">
                    <img height="250" class="w-p w3-round-large" :src="'https://dorm.dsq.up.ac.th/'+img.car" alt="">
                    <!-- <div class="location_title text-center">
                        <div>
                            <h3>รูปภาพหอพัก</h3>
                        </div>
                    </div> -->
                </div>
                

            </div>

                
        </div>
         <GmapMap class="ximg rounded shadow-lg " :center="{lat:Number(DETAIL.latitude), lng:Number(DETAIL.longitude)}" :zoom="19">
                        <GmapMarker :key="index" v-for="(m, index) in 1" :position="{
                        lat: Number(DETAIL.latitude),
                        lng: Number(DETAIL.longitude)
                    }" :clickable="true" :draggable="true" @click="center=m.position" />
                    </GmapMap> 

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
            zoom: ENV.MAP_ZOOM,
            txt: "Hello World",
            response: false,
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
            this.response = true;

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

.bgimg-1 {
    background-image: url('https://www.img.in.th/images/6a26eaafbc26b0aea0a4741587d537d3.jpg');
    min-height: 100%;
}
 

.bgimg-1,
.bgimg-2,
.bgimg-3 {
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

.ximg {
   
    width: 100%;
    height: 600px!important;
}
</style>
