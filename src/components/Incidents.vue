<template>
    <header class="flex items-center justify-between border-b p-6 max-[364px]:p-4">
        <div class="flex items-center gap-[16px]">
            <h1 class="font-bold text-xl">Incident</h1>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M7 6h10l-5.01 6.3zm-2.75-.39C6.27 8.2 10 13 10 13v6c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-6s3.72-4.8 5.74-7.39A.998.998 0 0 0 18.95 4H5.04c-.83 0-1.3.95-.79 1.61"/></svg>
        </div>
        <div tabindex="0" class="focus:outline-none focus:bg-gray-200 hover:bg-gray-100 active:bg-gray-200 bg-[#F9F6F6] p-[10px] flex gap-2 rounded-lg cursor-pointer">
            <div class="max-[394px]:hidden"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M12 13q-1.65 0-2.825-1.175T8 9V5.5q0-.625.438-1.062T9.5 4q.375 0 .713.175t.537.5q.2-.325.538-.5T12 4q.375 0 .713.175t.537.5q.2-.325.538-.5T14.5 4q.625 0 1.063.438T16 5.5V9q0 1.65-1.175 2.825T12 13m0-2q.825 0 1.413-.587T14 9V6.5h-4V9q0 .825.588 1.413T12 11M4 21v-2.8q0-.85.438-1.562T5.6 15.55q1.55-.775 3.15-1.162T12 14q1.65 0 3.25.388t3.15 1.162q.725.375 1.163 1.088T20 18.2V21zm2-2h12v-.8q0-.275-.137-.5t-.363-.35q-1.35-.675-2.725-1.012T12 16q-1.4 0-2.775.338T6.5 17.35q-.225.125-.363.35T6 18.2zm6-12.5"/></svg></div>
            <p class="font-semibold max-[394px]:hidden">{{ name }}</p>
            <div><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M12 13q-1.65 0-2.825-1.175T8 9V5.5q0-.625.438-1.062T9.5 4q.375 0 .713.175t.537.5q.2-.325.538-.5T12 4q.375 0 .713.175t.537.5q.2-.325.538-.5T14.5 4q.625 0 1.063.438T16 5.5V9q0 1.65-1.175 2.825T12 13m0-2q.825 0 1.413-.587T14 9V6.5h-4V9q0 .825.588 1.413T12 11M4 21v-2.8q0-.85.438-1.562T5.6 15.55q1.55-.775 3.15-1.162T12 14q1.65 0 3.25.388t3.15 1.162q.725.375 1.163 1.088T20 18.2V21zm2-2h12v-.8q0-.275-.137-.5t-.363-.35q-1.35-.675-2.725-1.012T12 16q-1.4 0-2.775.338T6.5 17.35q-.225.125-.363.35T6 18.2zm6-12.5"/></svg></div>
        </div>
    </header>

     <section class="p-6 max-[364px]:p-4 w-[350px] max-[398px]:w-full">
        <form @submit.prevent="submit" class="space-y-4 relative"> <!-- @submit.prevent="submit" -->
            <div class="flex flex-col gap-2 w-full">
                    <label class="font-semibold" for="nameOfPP">Name of Person Reporting</label>
                    <input class="border p-2 rounded-md outline-none hover:border-[#622C98] focus:border-2 focus:border-[#622C98]" type="text" name="nameOfPP" id="nameOfPP" v-model="nameOfPP">
            </div>
            <div class="flex flex-col gap-2 w-full">
                    <label class="font-semibold" for="roleOfPR">Role of Person Reporting</label>
                    <select class="border p-2 rounded-md outline-none hover:border-[#622C98] focus:border-2 focus:border-[#622C98]" id="roleOfPR" v-model="roleOfPR">
                        <option class="text-sm" value="Staff Manager">Staff Manager</option>
                        <option class="text-sm" value="Deputy">Deputy</option>
                        <option class="text-sm" value="Deputy Manager">Deputy Manager</option>
                    </select> 
            </div>
            <div class="flex flex-col gap-2 w-full">
                    <label class="font-semibold" for="email">Email Of Person Reporting</label>
                    <input class="border p-2 rounded-md outline-none hover:border-[#622C98] focus:border-2 focus:border-[#622C98]" type="email" name="email" id="email" v-model="email">
            </div>
            <div class="flex flex-col gap-2 w-full">
                    <label class="font-semibold" for="nameOfPI">Name of Person Involved</label>
                    <input class="border p-2 rounded-md outline-none hover:border-[#622C98] focus:border-2 focus:border-[#622C98]" type="text" name="nameOfPI" id="nameOfPI" v-model="nameOfPI">
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
                <label class="font-semibold" for="date">Date & Time of Incident</label>
                <div class="flex">
                    <input class="border p-2 rounded-md outline-none w-full hover:border-[#622C98] focus:border-2 focus:border-[#622C98]" type="date" name="date" id="date" v-model="date">
                    <input class="border p-2 rounded-md outline-none w-full hover:border-[#622C98] focus:border-2 focus:border-[#622C98]" type="time" name="time" id="date" v-model="time">
                </div>
            </div>
            <div class="flex flex-col gap-2 w-full">
                    <label class="font-semibold" for="staffonD">Staff on Duty</label>
                    <input class="border p-2 rounded-md outline-none hover:border-[#622C98] focus:border-2 focus:border-[#622C98]" type="text" name="staffonD" id="staffonD" v-model="staffonD">
            </div>
            <div class="flex flex-col gap-2 w-full">
                    <label class="font-semibold" for="witness">Witness</label>
                    <input class="border p-2 rounded-md outline-none hover:border-[#622C98] focus:border-2 focus:border-[#622C98]" type="text" name="witness" id="witness" v-model="witness">
            </div>
            <div class="flex flex-col gap-2 w-full">
                    <label class="font-semibold" for="whatLTI">What Led Up To The Incident</label>
                    <textarea class="border p-2 rounded-md outline-none hover:border-[#622C98] focus:border-2 focus:border-[#622C98]" type="text" name="whatLTI" id="whatLTI" v-model="whatLTI"></textarea>
            </div>
            <div class="flex flex-col gap-2 w-full">
                    <label class="font-semibold" for="narrate">Narrate Incident</label>
                    <textarea class="border p-2 rounded-md outline-none hover:border-[#622C98] focus:border-2 focus:border-[#622C98]" type="text" name="narrate" id="narrate" v-model="narrate"></textarea>
            </div>
            <div class="flex flex-col gap-2 w-full">
                    <label class="font-semibold" for="outcome">Outcome</label>
                    <textarea class="border p-2 rounded-md outline-none hover:border-[#622C98] focus:border-2 focus:border-[#622C98]" type="text" name="outcome" id="outcome" v-model="outcome"></textarea>
            </div>
            <div class="flex flex-col gap-2 w-full">
                    <label class="font-semibold" for="followUp">Follow-up Actions</label>
                    <textarea class="border p-2 rounded-md outline-none hover:border-[#622C98] focus:border-2 focus:border-[#622C98]" type="text" name="followUp" id="followUp" v-model="followUp"></textarea>
            </div>
            <div class="flex flex-col gap-2 w-full">
                    <label class="font-semibold" for="unitM">Unit Manager</label>
                    <input class="border p-2 rounded-md outline-none hover:border-[#622C98] focus:border-2 focus:border-[#622C98]" type="text" name="unitM" id="unitM" v-model="unitM">
            </div>
            <div class="flex flex-col gap-2 w-full">
                    <label class="font-semibold" for="unitA">Unit Address</label>
                    <input class="border p-2 rounded-md outline-none hover:border-[#622C98] focus:border-2 focus:border-[#622C98]" type="text" name="unitA" id="unitA" v-model="unitA">
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


</template>
 
<script>
    import { defineComponent } from 'vue'
    import InputField from '../components/InputField.vue'
    export default defineComponent({
        components: {
            InputField
        },
        data(){
            return{
                // isNavtrue: store().$state.isNavtrue,
                name: 'Jonathan D',
                date: '',
                time:'',
                nameOfPP: '',
                email: '',
                roleOfPR:'',
                nameOfPI: '',
                typeOfIncident: '',
                staffonD: '',
                witness: '',
                whatLTI: '',
                narrate: '',
                outcome: '',
                followUp: '',
                unitM: '',
                unitA: '',
                isLoading: false,
                isEmpty: false,
                isNotEmpty: false
            }
        },
        methods: {
            submit(){
                this.isLoading = true
                if(!this.date || !this.time || !this.nameOfPP || !this.email || !this.roleOfPR || !this.nameOfPI || !this.typeOfIncident || !this.staffonD || !this.witness || !this.narrate || !this.outcome || !this.followUp || !this.unitM || !this.unitA || !this.whatLTI){
                    setTimeout(() => {
                        this.isLoading = false
                    }, 1000);
                    setTimeout(() => {
                    this.isEmpty= true
                    }, 1500);
                    setTimeout(() => {
                        this.isEmpty= false
                    }, 3000);

                }else{
                    this.isNotEmpty = true
                    setTimeout(() => {
                        this.isNotEmpty = false
                        this.date= '',
                        this.time='',
                        this.nameOfPP= '',
                        this.email= '',
                        this.roleOfPR='',
                        this.whatLTI= ''
                    }, 1500);

                    setTimeout(() => {
                        this.isLoading = false
                    }, 2000);
                }
            },
        }
    })
</script>
<style scoped>

</style>