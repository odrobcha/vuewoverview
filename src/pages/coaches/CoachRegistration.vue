<template>
<div>
 <section>
   <base-card>
     <h2>Register as coach</h2>
     <coach-form @saveData="saveData"></coach-form>
   </base-card>


 </section>
</div>
</template>

<script>
import CoachForm from "@/components/coaches/CoachForm";
import BaseCard from "@/components/ui/BaseCard";
export default {
  name: "CoachRegistration",
  components: {BaseCard, CoachForm},

  methods:{
    saveData(data){
      this.$store.dispatch('coaches/registerCoach', data);   // coaches/registerCoach - to dispatch action, and action will commit a mutation which will set the new data in state
      this.$router.replace('/coaches');// this.$router.push('/coaches');
    },
  }
}
</script>

<style scoped>

</style>