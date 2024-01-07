<template>
    <header class="flex items-center justify-between border-b p-6 max-[364px]:p-4">
        <div class="flex items-center gap-[16px]">
            <h1 class="font-bold text-xl">Service Profile</h1>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M7 6h10l-5.01 6.3zm-2.75-.39C6.27 8.2 10 13 10 13v6c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-6s3.72-4.8 5.74-7.39A.998.998 0 0 0 18.95 4H5.04c-.83 0-1.3.95-.79 1.61"/></svg>
        </div>
        <div tabindex="0" class="focus:outline-none focus:bg-gray-200 hover:bg-gray-100 active:bg-gray-200 bg-[#F9F6F6] p-[10px] flex gap-2 rounded-lg cursor-pointer">
            <div class="max-[394px]:hidden"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M12 13q-1.65 0-2.825-1.175T8 9V5.5q0-.625.438-1.062T9.5 4q.375 0 .713.175t.537.5q.2-.325.538-.5T12 4q.375 0 .713.175t.537.5q.2-.325.538-.5T14.5 4q.625 0 1.063.438T16 5.5V9q0 1.65-1.175 2.825T12 13m0-2q.825 0 1.413-.587T14 9V6.5h-4V9q0 .825.588 1.413T12 11M4 21v-2.8q0-.85.438-1.562T5.6 15.55q1.55-.775 3.15-1.162T12 14q1.65 0 3.25.388t3.15 1.162q.725.375 1.163 1.088T20 18.2V21zm2-2h12v-.8q0-.275-.137-.5t-.363-.35q-1.35-.675-2.725-1.012T12 16q-1.4 0-2.775.338T6.5 17.35q-.225.125-.363.35T6 18.2zm6-12.5"/></svg></div>
            <p class="font-semibold max-[394px]:hidden">{{ name }}</p>
            <div><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M12 13q-1.65 0-2.825-1.175T8 9V5.5q0-.625.438-1.062T9.5 4q.375 0 .713.175t.537.5q.2-.325.538-.5T12 4q.375 0 .713.175t.537.5q.2-.325.538-.5T14.5 4q.625 0 1.063.438T16 5.5V9q0 1.65-1.175 2.825T12 13m0-2q.825 0 1.413-.587T14 9V6.5h-4V9q0 .825.588 1.413T12 11M4 21v-2.8q0-.85.438-1.562T5.6 15.55q1.55-.775 3.15-1.162T12 14q1.65 0 3.25.388t3.15 1.162q.725.375 1.163 1.088T20 18.2V21zm2-2h12v-.8q0-.275-.137-.5t-.363-.35q-1.35-.675-2.725-1.012T12 16q-1.4 0-2.775.338T6.5 17.35q-.225.125-.363.35T6 18.2zm6-12.5"/></svg></div>
        </div>
    </header>

    <section class="flex items-center justify-between p-6 max-[364px]:p-4">
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
                name: 'Jonathan D'
            }
        },
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