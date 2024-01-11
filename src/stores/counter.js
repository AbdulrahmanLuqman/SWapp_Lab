import { defineStore } from 'pinia'

export default function store() {
  return defineStore('elements', {
    state: ()=>({
      usersReport: [
        {
          id: "",
          date: '',
          time:'',
          staffName: '',
          clientsName: '',
          typeOfIncident:'',
          description: '',
        }
      ]
    })
  })()
}
