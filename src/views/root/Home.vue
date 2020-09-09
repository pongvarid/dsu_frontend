<template>
<div>
    <div class="w-full py-24 px-6 bg-cover bg-no-repeat bg-center relative " style="background-image: url('https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=2100');">

        <div class="container max-w-4xl mx-auto text-center  rounded-lg shadow-2xl bg-white">
            <div class="p-4 flex flex-col ">
                <h1 class="text-xl leading-tight md:text-3xl text-center  mb-3">Lorem ipsum dolor sit amet</h1>
                <p class="text-md md:text-lg text-center ">Ut enim ad minim veniam, quis nostrud exercitation</p>

                <a href="/register" class="mt-6 inline-block bg-white text-black no-underline px-4 py-3 ">Find out more</a>
            </div>

        </div>

    </div>
</div>
</template>

    
<script>
import { sync, call } from 'vuex-pathify'
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
        ...sync('test/*')
    },
    /*-------------------------Methods------------------------------------------*/
    methods: {
        ...call('test/*'),
        /******* Methods default run ******/
        load: async function () {
            await this.testApi();
        },
    },
};
</script>

<style lang='postcss' scoped>
</style>
