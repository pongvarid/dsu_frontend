<template>
<div class="locations container_custom">
    <div class="container">
        <div class="row">
            <div class="col">
                <div class="section_title text-center">
                    <h1>หอพักที่เข้าร่วมล่าสุด</h1>
                </div>
                <div class="locations_container d-flex flex-row align-items-start justify-content-between flex-wrap" v-if="response">

                    <!-- Location -->
                    <div class="location" v-for="dorm,index in homeDorm" :key="index" v-if="dorm.permission" >
                        <img height="250" class="w-p" v-if="dorm.image[0]" :src="'https://dorm.dsq.up.ac.th/'+dorm.image[0].front" alt="">
                        <img v-else src="https://images.unsplash.com/photo-1555982105-d25af4182e4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80" alt="">

                        <div class="location_title text-center">
                            <div><a @click="$router.push(`/detail?id=${dorm.id}`)" href="#">{{dorm.name}}
                                    <!-- <div><i class="em em-deciduous_tree" aria-role="presentation" aria-label="DECIDUOUS TREE"></i></div> -->
                                </a></div>
                        </div>
                    </div> 
                </div>
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
            txt: "Hello World",
            homeDorm: [],
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
        ...sync('home/*')
    },
    /*-------------------------Methods------------------------------------------*/
    methods: {
        ...call('test/*'),
        ...call('home/*'),
        /******* Methods default run ******/
        load: async function () {
            this.homeDorm = await this.getHomeDorm();
            this.response = true;
        },
    },
};
</script>

<style   scoped>
@media (max-width: 575.98px) {
    .w-p{
        width:100%!important;
    }
}
 .w-p{
        width:100%!important;
    }

</style>
