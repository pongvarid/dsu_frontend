<template>
<div><br><br><br><br><br><br><br>
    <h2>sss</h2>
    <br><br><br><br><br><br><br><br>
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
            xx: {
                "สวัสดี": "วันจันทร์",
                "aa": 'asa'
            },
            dd: test
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
            let yy = _.chain(this.dd) 
                .groupBy("name") 
                .map((value, key) => ({
                    choice: key,
                    data: value
                }))
                .value()
                console.log(yy);
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
