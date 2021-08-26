<template>
  <section>
    <base-card>
      <header>
        <h2>Request recieved</h2>
      </header>

      <ul v-if="hasRequests">
        <request-item v-for="req in recievedRequest" :key="req.id">
          {{}}

        </request-item>

      </ul>
      <h3 v-else>
        You have no requests
      </h3>
    </base-card>
  </section>

</template>

<script>
import RequestItem from "@/components/requests/RequestItem";
export default {
  name: "RequestsReceived",
  components: {RequestItem},
  computed:{
    recievedRequest(){
      return this.$store.getters['requests/requests'];
    },
    hasRequests(){
      return this.$store.getters['requests/hasRequests']
    }
  },
  data(){
    return{

    }
  }
}
</script>

<style scoped>
header {
  text-align: center;
}

ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 30rem;
}

h3 {
  text-align: center;
}
</style>