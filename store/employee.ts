
import { defineStore } from "pinia";
const employeeStore = defineStore('employee' , () => {
  const employee = reactive({
    name: 'Sibin Xavier',
    age: 33
  });

  const employeeInfo = computed(() => {
    return `${employee.name} ${employee.age}` 
  })

  const updateAge = () => {
    employee.age = 34
  }

  return { employee, employeeInfo, updateAge}

});