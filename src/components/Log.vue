<template>
    <header class="flex items-center justify-between border-b p-6 max-[364px]:p-4">
        <div class="flex items-center gap-[16px]">
            <h1 class="font-bold text-xl">Log/Report</h1>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M7 6h10l-5.01 6.3zm-2.75-.39C6.27 8.2 10 13 10 13v6c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-6s3.72-4.8 5.74-7.39A.998.998 0 0 0 18.95 4H5.04c-.83 0-1.3.95-.79 1.61"/></svg>
        </div>
        <div tabindex="0" class="focus:outline-none focus:bg-gray-200 hover:bg-gray-100 active:bg-gray-200 bg-[#F9F6F6] p-[10px] flex gap-2 rounded-lg cursor-pointer">
            <div class="max-[394px]:hidden"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M12 13q-1.65 0-2.825-1.175T8 9V5.5q0-.625.438-1.062T9.5 4q.375 0 .713.175t.537.5q.2-.325.538-.5T12 4q.375 0 .713.175t.537.5q.2-.325.538-.5T14.5 4q.625 0 1.063.438T16 5.5V9q0 1.65-1.175 2.825T12 13m0-2q.825 0 1.413-.587T14 9V6.5h-4V9q0 .825.588 1.413T12 11M4 21v-2.8q0-.85.438-1.562T5.6 15.55q1.55-.775 3.15-1.162T12 14q1.65 0 3.25.388t3.15 1.162q.725.375 1.163 1.088T20 18.2V21zm2-2h12v-.8q0-.275-.137-.5t-.363-.35q-1.35-.675-2.725-1.012T12 16q-1.4 0-2.775.338T6.5 17.35q-.225.125-.363.35T6 18.2zm6-12.5"/></svg></div>
            <p class="font-semibold max-[394px]:hidden">{{ name }}</p>
            <div><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M12 13q-1.65 0-2.825-1.175T8 9V5.5q0-.625.438-1.062T9.5 4q.375 0 .713.175t.537.5q.2-.325.538-.5T12 4q.375 0 .713.175t.537.5q.2-.325.538-.5T14.5 4q.625 0 1.063.438T16 5.5V9q0 1.65-1.175 2.825T12 13m0-2q.825 0 1.413-.587T14 9V6.5h-4V9q0 .825.588 1.413T12 11M4 21v-2.8q0-.85.438-1.562T5.6 15.55q1.55-.775 3.15-1.162T12 14q1.65 0 3.25.388t3.15 1.162q.725.375 1.163 1.088T20 18.2V21zm2-2h12v-.8q0-.275-.137-.5t-.363-.35q-1.35-.675-2.725-1.012T12 16q-1.4 0-2.775.338T6.5 17.35q-.225.125-.363.35T6 18.2zm6-12.5"/></svg></div>
        </div>
    </header>

    <!-- <section class="flex items-center justify-between p-6 max-[364px]:p-4">
        <div class="flex items-center gap-4 max-[378px]:gap-[2px]">
            <InputField />
            <div tabindex="0" class="border p-2 rounded cursor-pointer hover:bg-gray-100 active:bg-gray-200 focus:outline-none focus:bg-gray-200"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="#6C7173" d="M7 6h10l-5.01 6.3zm-2.75-.39C6.27 8.2 10 13 10 13v6c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-6s3.72-4.8 5.74-7.39A.998.998 0 0 0 18.95 4H5.04c-.83 0-1.3.95-.79 1.61"/></svg></div>
        </div>

        <div id="action-buttons" class="flex gap-6">
            <div tabindex="0" class="back hover:bg-purple-100 active:bg-purple-200 focus:outline-none focus:bg-purple-200 cursor-pointer flex gap-2 border border-[#622C98] items-center p-[6px] rounded-md">
                <p class="text-[#622C98] text-sm font-semibold">Back</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><g fill="none" stroke="#622C98" stroke-linecap="round" stroke-width="1.5"><path d="M9.002 7c.012-2.175.109-3.353.877-4.121C10.758 2 12.172 2 15 2h1c2.829 0 4.243 0 5.122.879C22 3.757 22 5.172 22 8v8c0 2.828 0 4.243-.878 5.121C20.242 22 18.829 22 16 22h-1c-2.828 0-4.242 0-5.121-.879c-.768-.768-.865-1.946-.877-4.121" opacity=".5"/><path stroke-linejoin="round" d="M15 12H2m0 0l3.5-3M2 12l3.5 3"/></g></svg>
            </div>

            <div tabindex="0" class="hover:bg-[#4B2473] focus:bg-[#4B2473] bg-[#622C98] cursor-pointer flex gap-2 border border-[#622C98] items-center p-[6px] rounded-md">
                <p class="max-[510px]:hidden text-[#fff] text-sm font-semibold">Create New Profile</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#fff" d="M11 13H5v-2h6V5h2v6h6v2h-6v6h-2z"/></svg>
            </div>
        </div>
    </section> -->
    <section v-if="!logResult" class="p-6 max-[364px]:p-4 w-[350px] max-[398px]:w-full">
        <form @submit.prevent="submit" class="space-y-4 relative"> <!-- @submit.prevent="submit" -->
            <div class="flex justify-between">
                <div class="flex flex-col gap-2 w-fit">
                    <label class="font-semibold" for="date">Date</label>
                    <input class="border p-2 rounded-md outline-none hover:border-[#622C98] focus:border-2 focus:border-[#622C98]" type="date" name="date" id="date" v-model="date">
                </div>
                <div class="flex flex-col gap-2 w-fit">
                    <label class="font-semibold" for="time">Time</label>
                    <input class="border p-2 rounded-md outline-none hover:border-[#622C98] focus:border-2 focus:border-[#622C98]" type="time" name="time" id="time" v-model="time">
                </div>
            </div>
            <div class="flex flex-col gap-2 w-full">
                    <label class="font-semibold" for="staffName">Staff Name</label>
                    <input class="border p-2 rounded-md outline-none hover:border-[#622C98] focus:border-2 focus:border-[#622C98]" type="text" name="staffName" id="staffName" v-model="staffName">
            </div>
            <div class="flex flex-col gap-2 w-full">
                    <label class="font-semibold" for="clientsName">Client's Name</label>
                    <input class="border p-2 rounded-md outline-none hover:border-[#622C98] focus:border-2 focus:border-[#622C98]" type="text" name="clientsName" id="clientsName" v-model="clientsName">
            </div>
            <div class="flex flex-col gap-2 w-full">
                    <label class="font-semibold" for="typeOfIncident">Type of Incident</label>
                    <select class="border p-2 rounded-md outline-none hover:border-[#622C98] focus:border-2 focus:border-[#622C98]" id="typeOfIncident" v-model="typeOfIncident">
                        <option class="text-sm" value="assault">Assault</option>
                        <option class="text-sm" value="theft">Theft</option>
                        <option class="text-sm" value="vandalism">Vandalism</option>
                        <option class="text-sm" value="harrassment">Harrassment</option>
                        <option class="text-sm" value="other">Other</option>
                    </select> 
            </div>
            <div class="flex flex-col gap-2 w-full">
                    <label class="font-semibold" for="description">Descriptions</label>
                    <textarea class="border p-2 rounded-md outline-none" type="text" name="description" id="description" v-model="description"></textarea>
            </div>
            <div class="flex flex-col gap-2 w-full">
                <label class="font-semibold" for="audio">Upload voice</label>
                <div class="flex items-center border p-2 rounded-md gap-4">
                    <div class="flex items-center gap-2">
                        <div class="bg-green-200 p-[2px] rounded-[50%]"><svg class="text-green-500" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M19 11.975q0-2.075-1.1-3.787t-2.95-2.563q-.375-.175-.55-.537t-.05-.738q.15-.4.538-.575t.787 0Q18.1 4.85 19.55 7.063T21 11.974q0 2.7-1.45 4.913t-3.875 3.287q-.4.175-.788 0t-.537-.575q-.125-.375.05-.737t.55-.538q1.85-.85 2.95-2.562t1.1-3.788M7 15H4q-.425 0-.712-.288T3 14v-4q0-.425.288-.712T4 9h3l3.3-3.3q.475-.475 1.088-.213t.612.938v11.15q0 .675-.612.938T10.3 18.3zm9.5-3q0 1.05-.475 1.988t-1.25 1.537q-.25.15-.513.013T14 15.1V8.85q0-.3.263-.437t.512.012q.775.625 1.25 1.575t.475 2"/></svg></div>
                        <div>
                            <p class="text-sm font-semibold">Upload voice note</p>
                            <p class="text-[12px] text-gray-500">The size should not be larger than 5mb</p>
                        </div>
                    </div>
                    <div class="cursor-pointer bg-[#622C98] text-white font-semibold py-1 px-2 rounded-md text-sm">Upload</div>
                </div>
            </div>
            <div class="flex flex-col gap-2 w-full">
                <label class="font-semibold" for="audio">Upload Image</label>
                <div class="flex items-center border p-2 rounded-md gap-4">
                    <div class="flex items-center gap-2">
                        <div class="bg-purple-200 p-[2px] rounded-[50%]"><svg class="text-purple-500" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h8q.425 0 .713.288T14 4q0 .425-.288.713T13 5H5v14h14v-8q0-.425.288-.712T20 10q.425 0 .713.288T21 11v8q0 .825-.587 1.413T19 21zM17 7h-1q-.425 0-.712-.288T15 6q0-.425.288-.712T16 5h1V4q0-.425.288-.712T18 3q.425 0 .713.288T19 4v1h1q.425 0 .713.288T21 6q0 .425-.288.713T20 7h-1v1q0 .425-.288.713T18 9q-.425 0-.712-.288T17 8zm-5.75 9L9.4 13.525q-.15-.2-.4-.2t-.4.2l-2 2.675q-.2.25-.05.525T7 17h10q.3 0 .45-.275t-.05-.525l-2.75-3.675q-.15-.2-.4-.2t-.4.2zm.75-4"/></svg></div>
                        <div>
                            <p class="text-sm font-semibold">Upload voice note</p>
                            <p class="text-[12px] text-gray-500">The size should not be larger than 5mb</p>
                        </div>
                    </div>
                    <div class="cursor-pointer bg-[#622C98] text-white font-semibold py-1 px-2 rounded-md text-sm">Upload</div>
                </div>
            </div>
            <div class="flex gap-4">
                <input class="w-full bg-[#622C98] p-[2px] rounded-md text-white font-semibold cursor-pointer hover:bg-[#4B2473]" type="reset" value="Reset">
                <button @click="submit" class="w-full bg-[#622C98] p-[2px] rounded-md text-white font-semibold cursor-pointer hover:bg-[#4B2473]">
                    <span v-if="isLoading">please wait....</span>
                    <input v-else  class="" type="submit" value="Submit">
                </button>
            </div>

            <div :class="isEmpty ? 'right-0' : 'right-[2000px]'" class="fixed top-[-10px] transition-all duration-500 flex gap-4 items-center bg-red-200 p-4 border border-red-400 w-fit h-fit rounded-xl">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="red" d="M12 16.462q.262 0 .438-.177q.177-.177.177-.439q0-.261-.177-.438q-.176-.177-.438-.177t-.438.177q-.177.177-.177.438q0 .262.177.439q.176.177.438.177m0-3.308q.213 0 .357-.144q.143-.144.143-.356v-5q0-.213-.144-.356q-.144-.144-.357-.144t-.356.144q-.143.143-.143.356v5q0 .212.144.356t.357.144M12.003 21q-1.866 0-3.51-.708q-1.643-.709-2.859-1.924q-1.216-1.214-1.925-2.856Q3 13.87 3 12.003q0-1.866.708-3.51q.709-1.643 1.924-2.859q1.214-1.216 2.856-1.925Q10.13 3 11.997 3q1.866 0 3.51.708q1.643.709 2.859 1.924q1.216 1.214 1.925 2.856Q21 10.13 21 11.997q0 1.866-.708 3.51q-.709 1.643-1.924 2.859q-1.214 1.216-2.856 1.925Q13.87 21 12.003 21"/></svg>
                <div class="space-y-2">
                    <h4 class="font-bold text-red-500">Error</h4>
                    <p class="text-lg text-red-400">All fields are required</p>
                </div>
            </div>

            <div :class="isNotEmpty ? 'right-0' : 'right-[2000px]'" class="fixed top-[-10px] transition-all duration-500 flex gap-4 items-center bg-green-200 p-4 border border-green-400 w-fit rounded-xl">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="green" d="m10.562 15.908l6.396-6.396l-.708-.708l-5.688 5.688l-2.85-2.85l-.708.708zM12.003 21q-1.866 0-3.51-.708q-1.643-.709-2.859-1.924q-1.216-1.214-1.925-2.856Q3 13.87 3 12.003q0-1.866.708-3.51q.709-1.643 1.924-2.859q1.214-1.216 2.856-1.925Q10.13 3 11.997 3q1.866 0 3.51.708q1.643.709 2.859 1.924q1.216 1.214 1.925 2.856Q21 10.13 21 11.997q0 1.866-.708 3.51q-.709 1.643-1.924 2.859q-1.214 1.216-2.856 1.925Q13.87 21 12.003 21"/></svg>
                <div class="space-y-2">
                    <h4 class="font-bold text-green-500">Submited Successfully</h4>
                </div>
            </div>
        </form>
    </section>

<!-- 
    <div v-else class="overflow-x-auto">
            <div class="relative min-w-[800px]"> -->
                <!-- Loading State -->
                <!-- <div>
                    <table class="w-full bg-gray-100">
                        <thead class="bg-[#622C98] text-white h-[8vh]">
                            <th>S/N</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Staff Name</th>
                            <th>Client's Name</th>
                            <th>Type of Incident</th>
                            <th>Descriptions</th>
                            <th>Action</th>
                        </thead>
                        <tbody>
                            <tr class="text-center h-[7vh] text-[17px] border border-gray-300">
                                <td>1</td>
                                <td>2022-3-12</td>
                                <td>12:00pm</td>
                                <td>Abdulrahman</td>
                                <td>Sodiq</td>
                                <td>nothing much.</td>
                                <td>He beat me</td>
                                <td>
                                    <div class="flex justify-center relative z-1 top-0 items-center space-x-4">
                                        <div title="delete">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="text-red-600 cursor-pointer" width="25" height="25" viewBox="0 0 24 24"><path fill="currentColor" d="M7 21q-.825 0-1.413-.588T5 19V6q-.425 0-.713-.288T4 5q0-.425.288-.713T5 4h4q0-.425.288-.713T10 3h4q.425 0 .713.288T15 4h4q.425 0 .713.288T20 5q0 .425-.288.713T19 6v13q0 .825-.588 1.413T17 21H7Zm2-5q0 .425.288.713T10 17q.425 0 .713-.288T11 16V9q0-.425-.288-.713T10 8q-.425 0-.713.288T9 9v7Zm4 0q0 .425.288.713T14 17q.425 0 .713-.288T15 16V9q0-.425-.288-.713T14 8q-.425 0-.713.288T13 9v7Z"/></svg>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
    </div>  -->


</template>
 
<script>
    import { defineComponent } from 'vue'
    import InputField from '../components/InputField.vue'
    import store from '../stores/counter'
    export default defineComponent({
        components: {
            InputField
        },
        data(){
            return{
                // isNavtrue: store().$state.isNavtrue,
                // staffName: ,
                name: 'Jonathan D',
                date: '',
                time:'',
                staffName: '',
                clientsName: '',
                typeOfIncident:'',
                description: '',
                // stores: store(),
                isLoading: false,
                isEmpty: false,
                isNotEmpty: false,
                logResult: false
            }
        },
        methods: {
            submit(){
                this.isLoading = true
                if(!this.date || !this.time || !this.staffName || !this.clientsName || !this.typeOfIncident || !this.description){
                    setTimeout(() => {
                        this.isLoading = false
                    }, 1000);
                    setTimeout(() => {
                    this.isEmpty= true
                    }, 1500);
                    setTimeout(() => {
                        this.isEmpty= false
                    }, 3000);
                    // this.logResult = true
                    // this.$router.push("/log-result")


                    // console.log(store().$state.money)
                }else{
                    setTimeout(() => {
                        this.isLoading = false
                    }, 500);
                    setInterval(() => {
                        this.isNotEmpty = true
                    }, 1000);
                    setTimeout(() => {
                        this.isNotEmpty = false
                        this.date= '',
                        this.time='',
                        this.staffName= '',
                        this.clientsName= '',
                        this.typeOfIncident='',
                        this.description= ''
                    }, 1500);



                    setTimeout(() => {
                        this.$router.push("/log-result")
                        // this.logResult = true
                    }, 2100);
                }
            },
        }
    })
</script>

<style scoped>
@media (max-width:1040px){
    #action-buttons{
        gap: 8px;
    }
}
@media (max-width:1024px) {
    #hamburger{
        display: flex;
    }
    #action-buttons{
        gap: 15px;
    }
    .back{
        display: none;
    }
}
</style>