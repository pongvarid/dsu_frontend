<template>
<div>
    <nav class="fixed z-50 w-full flex items-center justify-between flex-wrap bg-white p-6">
        <div class="flex items-center flex-no-shrink text-white mr-6">
            <img class="h-16" src="https://www.img.in.th/images/8709fe5d9cfbe80098ce862c8ce291b8.png" alt="">
        </div>
        <div class="block sm:hidden">
            <button @click="toggle" class="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light text-purple-600 hover:text-purple-300 hover:border-white">
                <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <title>Menu</title>
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                </svg>
            </button>
        </div>
        <div :class="open ? 'block': 'hidden'" class="w-full flex-grow sm:flex sm:items-center sm:w-auto">
            <div class="text-sm sm:flex-grow">
                <a href="#responsive-header" class="no-underline block mt-4 sm:inline-block sm:mt-0 text-teal-lighter hover:text-purple-300  text-lg mr-4 ml-4">
                    หน้าแรก
                </a>
                <a href="#responsive-header" class="no-underline block mt-4 sm:inline-block sm:mt-0 text-teal-lighter hover:text-purple-300   text-lg mr-4">
                    หอพัก
                </a>
                <a href="#responsive-header" class="no-underline block mt-4 sm:inline-block sm:mt-0 text-teal-lighter hover:text-purple-300   text-lg mr-4">
                    แผนที่โซน
                </a>
				 <a href="#responsive-header" class="no-underline block mt-4 sm:inline-block sm:mt-0 text-teal-lighter hover:text-purple-300  text-lg mr-4">
                    เกี่ยวกับ
                </a>
            </div>
            <div>
                <a href="https://dorm.dsq.up.ac.th/checkin/#/" class="no-underline inline-block text-sm px-4 py-2 leading-none border rounded text-purple-600 border-purple-600 hover:border-purple-300 hover:text-teal hover:bg-white mt-4 sm:mt-0">
					UP CHECKIN
					</a>
            </div>
        </div>
    </nav>
</div>
</template>

<script>
export default {
    name: 'Root',
    /*-------------------------ประกาศ components ---------------------------------------*/
    components: {

    },
    /*-------------------------รับค่าเมื่อเราเป็น components---------------------------------------*/
    props: {

    },
    /*-------------------------ประกาศตัวแปรที่ใช้ ผูกกับ v-model ---------------------------------------*/
    data() {
        return {
            open: false,
            txt: 'Hello World'

        };
    },
    /*------------------------- สิ่งทที่อยู่ในนี้จะถูกรัยเมื่อโหลด ------------------------------------------*/
    mounted: async function () {
        /**** เรียกใช้ methods ชื่อ load() */
        await this.load();
    },
    /*------------------------- กระทำการตอน router ถูกโหลดเข้ามา------------------------------------------*/
    async beforeRouteEnter(to, from, next) {
        next()
    },
    /*-------------------------ใช้จัดการ operation  หรือ คำนวณค่าต่างๆ (คล้าย methods)------------------------------------------*/
    computed: {

    },
    /*-------------------------Methods------------------------------------------*/
    methods: {
        toggle() {
            this.open = !this.open
        },
        /******* Methods default run ******/
        load: async function () {}
    },
}
</script>

<style lang='postcss' scoped>

</style>
