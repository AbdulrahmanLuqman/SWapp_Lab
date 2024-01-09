<template>
    <!-- DESKTOP NAVBAR -->
    <aside class="w-[25%] bg-[#622C98] border border-[#47106E] h-screen py-[2%] px-[3%] space-y-20">
        <div class="bg-[#D9D9D9] w-full h-[51px]"></div>

        <div class="space-y-4"> 
            <nav v-for="navLink in navLinks">
                <RouterLink :to="navLink.link" class="focus:outline-none focus:bg-[#4B2473] flex gap-[10px] items-center p-2 rounded-md hover:bg-[#4B2473]" :class="{ 'active' : $route.name === navLink.routeName}">
                    <div class="text-white" v-html="navLink.icon"></div>
                    <p class="text-[#D9D9D9] text-lg" :class="{ 'activeLink' : $route.name === navLink.routeName}">{{ navLink.name }}</p>
                </RouterLink>
            </nav>
        </div>
    </aside>
</template>

<script>
    import { defineComponent } from 'vue';
    import { RouterLink } from 'vue-router';
    export default defineComponent({
    data() {
        return {
            navLinks: [
                {
                    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="#D9D9D9" d="M7 6V5q0-.825.588-1.412T9 3h6q.825 0 1.413.588T17 5v1h.7q.6 0 1.088.338t.712.862l2.35 5.4q.075.2.113.4t.037.4V18q0 .825-.587 1.413T20 20H4q-.825 0-1.412-.587T2 18v-4.6q0-.2.038-.4t.112-.4L4.5 7.2q.225-.525.713-.863T6.3 6zm2 0h6V5H9zm-2 6v-1h2v1h6v-1h2v1h2.4l-1.7-4H6.3l-1.7 4zm0 2H4v4h16v-4h-3v1h-2v-1H9v1H7zm5 0"/></svg>',
                    name: 'Log/Report',
                    link: '/',
                    routeName: ''
                },
                {
                    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="#D9D9D9" d="M5 17.85q1.35-1.325 3.138-2.087T12 15q2.075 0 3.863.763T19 17.85V5H5zM12 13q1.45 0 2.475-1.025T15.5 9.5q0-1.45-1.025-2.475T12 6q-1.45 0-2.475 1.025T8.5 9.5q0 1.45 1.025 2.475T12 13m-7 8q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm2-2h10v-.25q-1.05-.875-2.325-1.312T12 17q-1.4 0-2.675.438T7 18.75zm5-8q-.625 0-1.062-.437T10.5 9.5q0-.625.438-1.062T12 8q.625 0 1.063.438T13.5 9.5q0 .625-.437 1.063T12 11m0 .425"/></svg>',
                    name: 'Incident',
                    link: '/incident',
                    routeName: 'Incidents'
                },
                {
                    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="#D9D9D9" d="M12 18.5q.625 0 1.063-.437T13.5 17h-3q0 .625.438 1.063T12 18.5M7 16h10v-2h-1v-2.6q0-1.525-.788-2.787T13 7v-.5q0-.425-.288-.712T12 5.5q-.425 0-.712.288T11 6.5V7q-1.425.35-2.212 1.613T8 11.4V14H7zm3-2v-3q0-.825.588-1.412T12 9q.825 0 1.413.588T14 11v3zm2 8q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12q0-3.35-2.325-5.675T12 4Q8.65 4 6.325 6.325T4 12q0 3.35 2.325 5.675T12 20m0-8"/></svg>',
                    name: 'Notification',
                    link: '/notifications',
                    routeName: 'Notification'
                },
                {
                    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><g fill="none" stroke="#D9D9D9" stroke-linecap="round" stroke-width="2"><path stroke-dasharray="46" stroke-dashoffset="46" d="M16 5V4C16 3.44772 15.5523 3 15 3H6C5.44771 3 5 3.44772 5 4V20C5 20.5523 5.44772 21 6 21H15C15.5523 21 16 20.5523 16 20V19"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.5s" values="46;0"/></path><path stroke-dasharray="12" stroke-dashoffset="12" d="M10 12h11" opacity="0"><set attributeName="opacity" begin="0.6s" to="1"/><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="12;0"/></path><path stroke-dasharray="6" stroke-dashoffset="6" d="M21 12l-3.5 -3.5M21 12l-3.5 3.5" opacity="0"><set attributeName="opacity" begin="0.8s" to="1"/><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.8s" dur="0.2s" values="6;0"/></path></g></svg>',
                    name: 'Log Out',
                    link: '/log-in',
                    routeName: 'Login'
                }
            ]
        };
    },
    components: { RouterLink }
})
</script>

<style scoped>
.active{
    background-color: #4B2473;
}
.activeLink{
    color: white;
}
</style>