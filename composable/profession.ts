export default function useProfession(){
  const professions = ['Angular Developer', 'React Developer', 'Vue JS Developer', 'WordPress', 'MERN Stack', 'MEAN Stack', 'React Native', 'Laravel Developer'];
  let interval: any;
  const profession = ref(professions[0]);

  const updateProfession = () => {
    const remainingProfessions = professions.filter((item: string) => {
      return item !== profession.value
    });
    const randomProfession = professions[Math.floor(Math.random() * professions.length)];
    profession.value = randomProfession;
  }
  onMounted(() => {
    interval = setInterval(() => {
      updateProfession();
    }, 1000)
  })

  onUnmounted(() => {
    clearInterval(interval)
  })

  return { profession }
}