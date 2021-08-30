<template>
  <section>
    <base-dialog :show="!!error" title="Error occurred!" @close="handleError">
      <p>{{ error }}</p>
    </base-dialog>
    <base-card>
      <header>
        <h2>Request recieved</h2>
      </header>
      <base-spinner v-if="isLoading">

      </base-spinner>

      <ul v-else-if="hasRequests && !isLoading">
        <request-item v-for="req in recievedRequest" :key="req.id" :email="req.userEmail" :message="req.message">

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
import BaseCard from "@/components/ui/BaseCard";
import BaseDialog from "@/components/ui/BaseDialog";
import BaseSpinner from "@/components/ui/BaseSpinner";
export default {
  name: "RequestsReceived",
  components: {BaseSpinner, RequestItem, BaseCard, BaseDialog},
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
      isLoading: false,
      error: null,
    }
  },
  created() {
    this.loadRequests();
  },
  methods:{
    async loadRequests(){
      this.isLoading = true;
      try{
        await this.$store.dispatch('requests/fetchRequests');
      } catch(error) {
        this.error = error.message || 'Something went wrong'
      }

      this.isLoading = false;
    },
    handleError(){
      this.error = null;

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