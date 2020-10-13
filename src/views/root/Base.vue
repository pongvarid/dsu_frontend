<template>
<div>
    <div :class="`menu ${NAV}`">
        <div class="menu_container text-right">
            <div class="menu_close" @click="NAV=''">close</div>
            <nav class="menu_nav">
                <ul>
                    <li @click="$router.push('/')" ><button class="btn btn-link text-primary" style="font-size:22px;" href="#">หน้าแรก</button></li>
                    <li><button style="font-size:22px;" class="btn btn-link text-primary" @click="$router.push('/dorm')"  href="#">หอพัก</button></li>
                    <li><button style="font-size:22px;" class="btn btn-link text-primary" @click="$router.push('/map')"  href="#">โซนแผนที่</button></li>
                    <li><button style="font-size:22px;"  class="btn btn-link text-primary" @click="$router.push('/about')"  href="#">เกี่ยวกับ</button></li>
                </ul>
            </nav>
            <div class="menu_link">
                <a href="https://dorm.dsq.up.ac.th/checkin/#/">UP CHECKIN</a>
            </div>
        </div>
    </div>
    <div class="super_container">
        <Navbar />
        <div class="super_container_inner">
            <router-view />
        </div>
         
        <Footers />
    </div>

</div>
</template>

    
<script>
import Navbar from '@/components/share/Navbar';
import Footers from '@/components/share/Footer';
import {
    sync,
    call
} from 'vuex-pathify'
export default {
    name: "Root",
    /*-------------------------ประกาศ components ---------------------------------------*/
    components: {
        Navbar,
        Footers
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
      NAV:sync('web/NAV')
    },
    /*-------------------------Methods------------------------------------------*/
    methods: {
        /******* Methods default run ******/
        load: async function () {},
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
