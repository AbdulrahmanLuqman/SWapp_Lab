<template>
    <div class="overflow-x-auto">
            <div class="relative min-w-[800px]">
                <!-- Loading State -->
                <div>
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
                            <tr v-for="stor in stores" class="text-center h-[7vh] text-[17px] border border-gray-300">
                                <td>1</td>
                                <td>2022-3-12</td>
                                <td>12:00pm</td>
                                <td>Abdulrahman</td>
                                <td>Sodiq</td>
                                <td>nothing much.</td>
                                <td>He beat me</td>
                                <td>
                                    <div class="flex justify-center relative z-1 top-0 items-center space-x-2">
                                        <div title="view">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="cursor-pointer" width="20    " height="20    " viewBox="0 0 14 14"><g fill="none" stroke="blue" stroke-linecap="round" stroke-linejoin="round"><path d="M13.23 6.33a1 1 0 0 1 0 1.34C12.18 8.8 9.79 11 7 11S1.82 8.8.77 7.67a1 1 0 0 1 0-1.34C1.82 5.2 4.21 3 7 3s5.18 2.2 6.23 3.33Z"/><circle cx="7" cy="7" r="2"/></g></svg>
                                        </div>
                                        <div title="edit">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="cursor-pointer" width="20" height="20" viewBox="0 0 24 24"><path fill="#622C98" d="M5 19h1.425L16.2 9.225L14.775 7.8L5 17.575zm-2 2v-4.25L17.625 2.175L21.8 6.45L7.25 21zM19 6.4L17.6 5zm-3.525 2.125l-.7-.725L16.2 9.225z"/></svg>
                                        </div>
                                        <div title="delete">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="text-red-600 cursor-pointer" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M7 21q-.825 0-1.413-.588T5 19V6q-.425 0-.713-.288T4 5q0-.425.288-.713T5 4h4q0-.425.288-.713T10 3h4q.425 0 .713.288T15 4h4q.425 0 .713.288T20 5q0 .425-.288.713T19 6v13q0 .825-.588 1.413T17 21H7Zm2-5q0 .425.288.713T10 17q.425 0 .713-.288T11 16V9q0-.425-.288-.713T10 8q-.425 0-.713.288T9 9v7Zm4 0q0 .425.288.713T14 17q.425 0 .713-.288T15 16V9q0-.425-.288-.713T14 8q-.425 0-.713.288T13 9v7Z"/></svg>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
    </div>
</template>

<script>
import store from '@/stores/counter';
    export default {
        data(){
            return{
                // money: store().$state.money
                stores: store().$state.usersReport
            }
        },
    }
</script>

<style scoped>

</style>