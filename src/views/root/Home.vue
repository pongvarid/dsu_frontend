<template>
<div class="bg-gray-200">
    <div class="bg-up bg-center bg-fixed bg-no-repeat bg-center bg-cover h-screen  relative">
        <!-- Overlay Background + Center Control -->
        <div class="h-screen bg-opacity-50 bg-black flex items-center justify-center" style="background:rgba(0,0,0,0.3);">
            <div class="mx-2 text-center bg-white rounded-lg shadow-2xl p-4 w-full md:w-5/12">
                <div class="flex">
                    <h2 class="text-3xl">ค้นหาหอพัก</h2>
                </div>
                <div class="flex flex-row ">
                    <div class="w-1/3 p-4">
                        <div class="w-full center con-selects">
                            {{form}}
                            <vs-select calss="text-2xl" placeholder="ขนาดหอพัก" v-model="form.size">
                                <vs-option v-for="size,index in select" :key="index"  :label="size.name" :value="size.id">
                                    {{size.name}}
                                </vs-option> 
                            </vs-select>
                        </div>
                    </div>
                    <div class="w-1/3 p-4">
                        <vs-select placeholder="โซนหอพัก" v-model="value">
                            <vs-option label="Vuesax" value="1">
                                Vuesax
                            </vs-option>
                            <vs-option label="Vue" value="2">
                                Vue
                            </vs-option>
                            <vs-option label="Javascript" value="3">
                                Javascript
                            </vs-option>
                            <vs-option disabled label="Sass" value="4">
                                Sass
                            </vs-option>
                            <vs-option label="Typescript" value="5">
                                Typescript
                            </vs-option>
                            <vs-option label="Webpack" value="6">
                                Webpack
                            </vs-option>
                            <vs-option label="Nodejs" value="7">
                                Nodejs
                            </vs-option>
                        </vs-select>
                    </div>
                    <div class="w-1/3 p-4">
                        <vs-select placeholder="ราคา" v-model="value">
                            <vs-option label="Vuesax" value="1">
                                Vuesax
                            </vs-option>
                            <vs-option label="Vue" value="2">
                                Vue
                            </vs-option>
                            <vs-option label="Javascript" value="3">
                                Javascript
                            </vs-option>
                            <vs-option disabled label="Sass" value="4">
                                Sass
                            </vs-option>
                            <vs-option label="Typescript" value="5">
                                Typescript
                            </vs-option>
                            <vs-option label="Webpack" value="6">
                                Webpack
                            </vs-option>
                            <vs-option label="Nodejs" value="7">
                                Nodejs
                            </vs-option>
                        </vs-select>
                    </div>
                </div>
                <div class="flex flex-row  ">
                    <div class="w-1/3 p-4">
                        <div class="w-full center con-selects">
                            <vs-select calss="text-2xl" placeholder="ขนาดหอพัก" v-model="value">
                                <vs-option label="Vuesax" value="1">
                                    Vuesax
                                </vs-option>
                                <vs-option label="Vue" value="2">
                                    Vue
                                </vs-option>
                                <vs-option label="Javascript" value="3">
                                    Javascript
                                </vs-option>
                                <vs-option disabled label="Sass" value="4">
                                    Sass
                                </vs-option>
                                <vs-option label="Typescript" value="5">
                                    Typescript
                                </vs-option>
                                <vs-option label="Webpack" value="6">
                                    Webpack
                                </vs-option>
                                <vs-option label="Nodejs" value="7">
                                    Nodejs
                                </vs-option>
                            </vs-select>
                        </div>
                    </div>
                    <div class="w-1/3 p-4">
                        <vs-select placeholder="โซนหอพัก" v-model="value">
                            <vs-option label="Vuesax" value="1">
                                Vuesax
                            </vs-option>
                            <vs-option label="Vue" value="2">
                                Vue
                            </vs-option>
                            <vs-option label="Javascript" value="3">
                                Javascript
                            </vs-option>
                            <vs-option disabled label="Sass" value="4">
                                Sass
                            </vs-option>
                            <vs-option label="Typescript" value="5">
                                Typescript
                            </vs-option>
                            <vs-option label="Webpack" value="6">
                                Webpack
                            </vs-option>
                            <vs-option label="Nodejs" value="7">
                                Nodejs
                            </vs-option>
                        </vs-select>
                    </div>
                    <div class="w-1/3 p-4">
                        <vs-select placeholder="ราคา" v-model="value">
                            <vs-option label="Vuesax" value="1">
                                Vuesax
                            </vs-option>
                            <vs-option label="Vue" value="2">
                                Vue
                            </vs-option>
                            <vs-option label="Javascript" value="3">
                                Javascript
                            </vs-option>
                            <vs-option disabled label="Sass" value="4">
                                Sass
                            </vs-option>
                            <vs-option label="Typescript" value="5">
                                Typescript
                            </vs-option>
                            <vs-option label="Webpack" value="6">
                                Webpack
                            </vs-option>
                            <vs-option label="Nodejs" value="7">
                                Nodejs
                            </vs-option>
                        </vs-select>
                    </div>
                    <div class="w-1/3 p-4">
                        <vs-button type="filled" class="w-full "><span class="mdi mdi-feature-search-outline text-xl"></span><span class="text-lg">ค้นหา</span></vs-button>

                    </div>
                </div>
            </div>
        </div>

    </div>

    <div class="container mx-auto mt-8">
        <div class="flex flex-col justify-center items-center">
            <h2 class="text-3xl">หอพัก 4444</h2>
        </div>
        <div class="flex flex-row flex-wrap">
            <div v-for="i in 20" :key="i" class="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col">
                <vs-card type="4">
                    <template #title>
                        <h3>Pot with a plant</h3>
                    </template>
                    <template #img>
                        <img src="https://images.unsplash.com/photo-1555982105-d25af4182e4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80" alt="">
                    </template>
                    <template #text>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        </p>
                    </template>
                    <template #interactions>
                        <vs-button danger icon>
                            <i class='bx bx-heart'></i>
                        </vs-button>
                        <vs-button class="btn-chat" shadow primary>
                            <i class='bx bx-chat'></i>
                            <span class="span">
                                54
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
            select:[],
            form:{
                size:'',
            },
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
             this.select = await this.getSize(); 
            
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
    ;
}
</style>
