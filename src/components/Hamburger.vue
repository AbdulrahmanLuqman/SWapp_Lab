<template>
    <div id="hamburger" class="justify-between p-6 hidden max-[1024px]:flex max-[364px]:p-4">
        <div id="bg" class="bg-[#D9D9D9] w-[20%] h-[51px]"></div>
        <div @click="$emit('isNavTrue')" tabindex="0" class="focus:bg-gray-200 focus:outline-none active:bg-gray-200 bg-gray-100 h-fit p-[6px] rounded-md cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M4 7h3m13 0h-9m9 10h-3M4 17h9m-9-5h16"/></svg></div>
    </div>
</template>

<!-- <MobileNav /> -->
<script>
    import { defineComponent } from 'vue';
    // import MobileNav from './MobileNav.vue';
    export default defineComponent({
        methods: {
            // clickBtn(){
                

            //     console.log(this.$emit('isNavTrue'))
            // }
        }
    })
</script>

<style scoped>
@media (max-width:768px) {
    #bg{
        width: 40%;
    }
}
</style>