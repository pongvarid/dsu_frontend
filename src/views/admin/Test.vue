<template>
<div class="bg-gray-200">
    <div class="bg-up bg-center bg-fixed bg-no-repeat bg-center bg-cover h-screen  relative">

        <button class="bg-blue-600 p-4" @click="storeDormS()">Insert หอพักที่ให้ข้อมูล</button><br><br>
        <button class="bg-green-600 p-4" @click="storeDormM()">Insert หอพักที่ไม่ให้ให้ข้อมูล</button><br><br>
        <button class="bg-orange-600 p-4" @click="storeZone()">Insert zone</button><br><br>
         <button class="bg-red-600 p-4" @click="storeAll()">Insert storeAll</button>
        <pre>{{i_zone}}</pre>
    </div>
</div>
</template>

<script>
import {
    sync,
    call
} from 'vuex-pathify'
import data from '@/assets/data.json'
import all from '@/assets/all.json'
import _ from 'lodash';
import zone from '@/assets/zone.json'
import detail from '@/assets/detail.json'
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
            xdata: data,
            ok: [],
            nok: [],
            xall: all,
            xzone: zone,
            i_zone: []
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
        async storeDormM() {
            let data = _.filter(this.xdata, {
                'การยินยอมให้ข้อมูล': 'ไม่ยินยอมให้ข้อมูลหอพัก'
            });
            for (let index = 0; index < data.length; index++) {
                let datas = {
                    "name": data[index]['ชื่อหอพัก'],
                    "address": data[index]['ที่อยู่เลขที่'] + "  หมู่ " + data[index]['หมู่'],
                    "post": '56000',
                    "tel": '0' + data[index]['เบอร์โทร'],
                    "latitude": data[index]['lat'],
                    "longitude": data[index]['lng'],
                    "permission": false,
                    "advt": false,
                    "geo": 1,
                    "province": 44,
                    "amphur": 648,
                    "district": 5806
                }
                let dorm = await this.storeDorm(datas);
                this.openNotification(null, 'success', datas.name, 'Success');
            }
        },
        async storeDormS() {
            let data = _.filter(this.xdata, {
                'การยินยอมให้ข้อมูล': 'ยินยอมให้ข้อมูลหอพัก'
            });

            for (let index = 0; index < data.length; index++) {
                let datas = {
                    "name": data[index]['ชื่อหอพัก'],
                    "address": data[index]['ที่อยู่เลขที่'] + "  หมู่ " + data[index]['หมู่'],
                    "post": '56000',
                    "tel": '0' + data[index]['เบอร์โทร'],
                    "latitude": data[index]['lat'],
                    "longitude": data[index]['lng'],
                    "permission": true,
                    "advt": true,
                    "geo": 1,
                    "province": 44,
                    "amphur": 648,
                    "district": 5806
                }
                let dorm = await this.storeDorm(datas);
                this.openNotification(null, 'success', datas.name, 'Success');
                let owner = {
                    "name": data[index]['owner_prefix'] + data[index]['owner_name'] + " " + data[index]['owner_surname'],
                    "type_owner": data[index]['owner_type'],
                    "dorm": dorm.id
                }
                let owner_store = await this.storeDormOwner(owner);
                this.openNotification(null, 'primary', datas.name, owner.name);
                console.log(owner);

                let detail = {
                    "build": parseInt(data[index]['จำนวนอาคาร']),
                    "floor": parseInt(data[index]['จำนวนชั้น']),
                    "room": parseInt(data[index]['จำนวนห้องพัก']),
                    "all_count": parseInt(data[index]['all_count']),
                    "now_count": parseInt(data[index]['now_count']),
                    "width": parseInt(data[index]['width']),
                    "height": parseInt(data[index]['height']),
                    "fan_price_month": parseInt(data[index]['fan_price_month']),
                    "fan_price_day": parseInt(data[index]['fan_price_day']),
                    "air_price_month": parseInt(data[index]['air_price_month']),
                    "air_price_day": parseInt(data[index]['air_price_day']),
                    "electric_unit": parseInt(data[index]['electric_unit']),
                    "water_unit": parseInt(data[index]['water_unit']),
                    "water_month": data[index]['water_month'],
                    "water_internet": parseInt(data[index]['water_internet']),
                    "dorm": dorm.id
                }
                console.log(detail);
                await this.storeDormDetail(detail);
                this.openNotification(null, 'warn', datas.name, 'Detail Success');

                let tmpStyle = data[index]['สิ่งอำนวยความสะดวกภายในหอพัก']
                let sty = tmpStyle.split(';')
                for (let s = 0; s < sty.length; s++) {
                    let styOut = this.getStyle(sty[s]);
                    if (styOut.length > 0) {
                        let style = {
                            "other": "",
                            "dorm": dorm.id,
                            "choice": styOut[0]['id']
                        }
                        // await this.storeDormStyle(style);
                        this.openNotification(null, 'rgb(59,222,200)', datas.name, sty[s]);
                        console.log(style);
                    }

                }
                //console.log(style);
            }
        },
        getStyle(val) {
            let out = _.filter(this.xall, {
                'value': val
            });
            return out;
        },
        async storeZone() {
            for (let s = 0; s < this.xzone.length; s++) {

                let style = {
                    "other": "",
                    "dorm": this.xzone[s].dorm_id,
                    "choice": this.xzone[s].zone
                }
                await this.storeDormStyle(style);
                this.openNotification(null, 'rgb(59,222,200)', 'Store Zone', 'Success');
                console.log(style);

            }
        },

        getDeep(name,val) {
            let out = _.filter(this.xall, {
                'name':name,
                'value': val
            });
            return out;
        },
        async storeAll(){
             let dd = detail;
            let yy= ['ประเภทของหอพัก','ลักษณะของหอพัก','ลักษณะการเข้าพักอาศัย','ระบบรักษาความปลอดภัย','ทำอาหารในหอพักได้หรือไม่','เลี้ยงสัตว์เลี้ยงในหอพักได้หรือไม่'];
            for (let index = 0; index < yy.length; index++) {
                let typr = yy[index]
                for (let i = 0; i < dd.length; i++) {
                    if(typr == 'ระบบรักษาความปลอดภัย'){
                        let rr = (dd[i][typr]).split(';'); 
                        for (let e = 0; e < rr.length; e++) {
                            let styOut = this.getDeep(typr,rr[e]);
                            if(styOut.length > 0){
                                    let form = {
                                        "other": "",
                                        "dorm": Number(dd[i]['id']),
                                        "choice": styOut[0]['id']
                                    }
                                    await this.storeDormStyle(form);
                                     console.log(`[${typr}]`,form);
                            } 
                        }
                    }else{
                            let styOut = this.getDeep(typr,dd[i][typr]);
                            if(styOut.length > 0){
                                let form = {
                                "other": "",
                                "dorm": Number(dd[i]['id']),
                                "choice": styOut[0]['id']
                            }
                            console.log(`[${typr}]`,styOut);
                            await this.storeDormStyle(form);
                            this.openNotification(null, 'rgb(59,222,200)', 'Store Zone', 'Success');
                       }
                    }
                    
                    
                }  
            }
        },
        load: async function () {
           
            
        },
        openNotification(position = null, color, txt, body) {
            const noti = this.$vs.notification({
                square: true,
                color,
                position,
                title: txt,
                text: body
            })
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
