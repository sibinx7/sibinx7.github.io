import { defineStore } from "pinia";

const initialValue = {
  firstName: 'Sibin',
  lastNAme: 'Xavier',
  role: 'Software Developer',
  emailId: 'sibinx7@gmail.com'
}
const userStore = defineStore('userStore',{

  state: () => initialValue,
  actions: {
    updateInfo(info: any){
      return {
        ...this,
        info 
      }
    }
  },
  getters: {
    getFullName: (state) => {
      return `${state.firstName} ${state.lastNAme}`
    }
  }
  
})

export default userStore