<template>
    <div class="bg-[#622C98] w-full fixed h-full top-0 space-y-10 overflow-y-auto">
        <div @click="$emit('isNavTrue')" tabindex="0" class="m-6 h-fit cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="none" stroke="white" stroke-linecap="round" stroke-width="1.5" d="M4 7h3m13 0h-9m9 10h-3M4 17h9m-9-5h16"/></svg></div>

        <div class="flex flex-col gap-20 h-full relative z-[999]">
            <div class="space-y-4"> 
                <nav v-for="navLink in navLinks">
                    <RouterLink :to="navLink.link" class="w-fit focus:outline-none focus:bg-[#4B2473] flex gap-[10px] items-center p-2 rounded-r-md hover:bg-[#4B2473]" :class="{ 'active' : $route.name === navLink.routeName}">
                        <div class="text-white" v-html="navLink.icon"></div>
                        <p class="text-[#D9D9D9] text-lg" :class="{ 'activeLink' : $route.name === navLink.routeName}">{{ navLink.name }}</p>
                    </RouterLink>
                </nav>
            </div>
            <div>
                <nav v-for="account in accounts">
                        <RouterLink  :to="account.link" class="w-fit focus:outline-none focus:bg-[#4B2473] flex gap-[10px] items-center p-2 rounded-r-md hover:bg-[#4B2473]">
                            <div class="text-white" v-html="account.icon"></div>
                            <p class="text-[#D9D9D9] text-lg">{{ account.name }}</p>
                        </RouterLink>
                </nav>
            </div>
        </div>



        <svg class="absolute top-0 right-0 z-[999]" width="176" height="798" viewBox="0 0 176 798" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="-1" y="24.3574" width="356" height="776.278" rx="24" transform="rotate(-4.08454 -1 24.3574)" fill="white"/></svg>

        <svg class="absolute top-20 right-20" width="211" height="728" viewBox="0 0 211 728" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="-1" y="24.3574" width="356" height="707" rx="24" transform="rotate(-4.08454 -1 24.3574)" fill="#3A1560"/></svg>

    </div>


</template>

<script>
    import { defineComponent } from 'vue';
    import { RouterLink } from 'vue-router';
    import store from '@/stores/counter';
    export default defineComponent({
    data() {
        return {
            navLinks: [
                {
                    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="#D9D9D9" d="M7 6V5q0-.825.588-1.412T9 3h6q.825 0 1.413.588T17 5v1h.7q.6 0 1.088.338t.712.862l2.35 5.4q.075.2.113.4t.037.4V18q0 .825-.587 1.413T20 20H4q-.825 0-1.412-.587T2 18v-4.6q0-.2.038-.4t.112-.4L4.5 7.2q.225-.525.713-.863T6.3 6zm2 0h6V5H9zm-2 6v-1h2v1h6v-1h2v1h2.4l-1.7-4H6.3l-1.7 4zm0 2H4v4h16v-4h-3v1h-2v-1H9v1H7zm5 0"/></svg>',
                    name: 'Service Profile',
                    link: '/',
                    routeName: ''
                },
                {
                    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="#D9D9D9" d="M5 17.85q1.35-1.325 3.138-2.087T12 15q2.075 0 3.863.763T19 17.85V5H5zM12 13q1.45 0 2.475-1.025T15.5 9.5q0-1.45-1.025-2.475T12 6q-1.45 0-2.475 1.025T8.5 9.5q0 1.45 1.025 2.475T12 13m-7 8q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm2-2h10v-.25q-1.05-.875-2.325-1.312T12 17q-1.4 0-2.675.438T7 18.75zm5-8q-.625 0-1.062-.437T10.5 9.5q0-.625.438-1.062T12 8q.625 0 1.063.438T13.5 9.5q0 .625-.437 1.063T12 11m0 .425"/></svg>',
                    name: 'YP Profile',
                    link: '/yp-profile',
                    routeName: 'YoungPersonProfile'
                },
                {
                    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 32 32"><path fill="#D9D9D9" d="M10 18h8v2h-8zm0-5h12v2H10zm0 10h5v2h-5z"/><path fill="currentColor" d="M25 5h-3V4a2 2 0 0 0-2-2h-8a2 2 0 0 0-2 2v1H7a2 2 0 0 0-2 2v21a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2M12 4h8v4h-8Zm13 24H7V7h3v3h12V7h3Z"/></svg>',
                    name: 'Reports',
                    link: '/reports',
                    routeName: 'Reports'
                },
                {
                    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 48 48"><path fill="#D9D9D9" fill-rule="evenodd" d="M6 6h31v5h-2V8H8v23h21.387v2H6zm30 13a3 3 0 1 0 0-6a3 3 0 0 0 0 6m2.031 2.01c1.299 0 2.327.584 3 1.486c.629.845.895 1.89.955 2.855a7.626 7.626 0 0 1-.397 2.92c-.3.87-.807 1.77-1.589 2.387V40.5a1.5 1.5 0 0 1-2.98.247L35.73 33h-.298l-1.458 7.776A1.5 1.5 0 0 1 31 40.5V26.233a63.223 63.223 0 0 0-.592.919l-.078.123l-.02.032l-.005.009a1.5 1.5 0 0 1-1.274.707h-5a1.5 1.5 0 1 1 0-3h4.177c.243-.376.563-.864.899-1.354c.35-.511.736-1.052 1.08-1.476c.167-.207.354-.423.542-.6c.092-.087.22-.2.376-.3a1.72 1.72 0 0 1 .926-.282z" clip-rule="evenodd"/></svg>',
                    name: 'Training Hub',
                    link: '/training-hub',
                    routeName: 'TrainingHub'
                },
                {
                    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="#D9D9D9" d="M12 21.9q-.175 0-.325-.025t-.3-.075Q8 20.675 6 17.638T4 11.1V6.375q0-.625.363-1.125t.937-.725l6-2.25q.35-.125.7-.125t.7.125l6 2.25q.575.225.938.725T20 6.375V11.1q0 1.875-.587 3.663T17.725 18q-.2.275-.537.288t-.588-.238l-2.6-2.6q-.45.275-.962.413T12 16q-1.65 0-2.825-1.175T8 12q0-1.65 1.175-2.825T12 8q1.65 0 2.825 1.175T16 12q0 .55-.137 1.063t-.413.987l1.5 1.5q.5-1.025.775-2.15T18 11.1V6.375l-6-2.25l-6 2.25V11.1q0 3.025 1.7 5.5t4.3 3.3q.4-.125.788-.3t.762-.4q.35-.2.762-.15t.663.4q.25.35.162.75t-.437.625q-.5.3-1 .538t-1.075.437q-.15.05-.3.075T12 21.9m0-7.9q.825 0 1.413-.588T14 12q0-.825-.587-1.412T12 10q-.825 0-1.412.588T10 12q0 .825.588 1.413T12 14m.2-1.925"/></svg>',
                    name: 'Policies',
                    link: '/policies',
                    routeName: 'Policies'
                },
                {
                    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="#D9D9D9" d="M8.5 11.5v-1h7v1zm0-4v-1h7v1zm-2.5 7h7.5q.61 0 1.12.264q.509.265.876.744L18 18.758V4.615q0-.269-.173-.442T17.385 4H6.615q-.269 0-.442.173T6 4.615zm.615 5.5h11.07l-2.975-3.883q-.227-.296-.536-.456q-.309-.161-.674-.161H6v3.885q0 .269.173.442t.442.173m10.77 1H6.615q-.69 0-1.152-.462Q5 20.075 5 19.385V4.615q0-.69.463-1.152Q5.925 3 6.615 3h10.77q.69 0 1.152.463q.463.462.463 1.152v14.77q0 .69-.462 1.152q-.463.463-1.153.463M6 20V4zm0-4.5v-1z"/></svg>',
                    name: 'S/W Profile',
                    link: '/sw-profile',
                    routeName: 'SwProfile'
                },
                {
                    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="#D9D9D9" d="m10.95 15.858l4.958-4.958l-.714-.713l-4.244 4.244l-2.144-2.144l-.714.713zM12 21q-1.663 0-3.118-.626q-1.455-.626-2.543-1.713q-1.087-1.088-1.713-2.543Q4 14.663 4 13q0-1.663.626-3.118q.626-1.455 1.713-2.543q1.088-1.087 2.543-1.713Q10.337 5 12 5q1.663 0 3.118.626q1.455.626 2.543 1.713q1.087 1.088 1.713 2.543Q20 11.337 20 13q0 1.663-.626 3.118q-.626 1.455-1.713 2.543q-1.088 1.087-2.543 1.713Q13.663 21 12 21M5.908 3.427l.707.708l-3.48 3.48l-.708-.707zm12.184 0l3.481 3.48l-.708.708l-3.48-3.48zM12 20q2.906 0 4.953-2.047T19 13q0-2.906-2.047-4.953T12 6Q9.094 6 7.047 8.047T5 13q0 2.906 2.047 4.953T12 20"/></svg>',
                    name: 'Time Sheet',
                    link: '/time-sheet',
                    routeName: 'TimeSheet'
                }
            ],
            accounts: [
                {
                    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="#D9D9D9" d="M9.833 11.385q-.472 0-.786-.348q-.314-.349-.247-.825l.306-2.393q.142-1.06.973-1.747q.83-.687 1.921-.687t1.921.687q.83.688.973 1.747l.306 2.393q.067.476-.247.825q-.314.348-.786.348zm-.058-1h4.45l-.325-2.4q-.1-.7-.637-1.15T12 6.385q-.725 0-1.262.45t-.638 1.15zM5 18.615V16.97q0-.619.36-1.158q.361-.54.97-.838q1.416-.679 2.833-1.018q1.418-.34 2.837-.34q1.42 0 2.837.34q1.417.34 2.832 1.018q.61.298.97.838q.361.539.361 1.158v1.646zm1-1h12v-.646q0-.332-.214-.625q-.215-.292-.594-.494q-1.234-.598-2.546-.916q-1.31-.319-2.646-.319q-1.335 0-2.646.319q-1.312.318-2.546.916q-.38.202-.594.494Q6 16.637 6 16.97zm6 0"/></svg>',
                    name: 'John Doe',
                    link: '/',
                    // routeName: 'John'
                },
                {
                    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="#D9D9D9" d="M7 6V5q0-.825.588-1.412T9 3h6q.825 0 1.413.588T17 5v1h.7q.6 0 1.088.338t.712.862l2.35 5.4q.075.2.113.4t.037.4V18q0 .825-.587 1.413T20 20H4q-.825 0-1.412-.587T2 18v-4.6q0-.2.038-.4t.112-.4L4.5 7.2q.225-.525.713-.863T6.3 6zm2 0h6V5H9zm-2 6v-1h2v1h6v-1h2v1h2.4l-1.7-4H6.3l-1.7 4zm0 2H4v4h16v-4h-3v1h-2v-1H9v1H7zm5 0"/></svg>',
                    name: 'Log Out',
                    link: '/',
                    // routeName: ''
                }
            ]
        };
    },
    components: { RouterLink },
})
</script>

<style scoped>
.active{
    background-color: white;
}
.activeLink{
    color: #622C98;
}
</style>