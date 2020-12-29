<template>
  <div>
    <UsersList />
  </div>
</template>


<script>
import UsersList from "~/components/cabinet/users-list.vue";

export default {
  components: {
    UsersList
  },
  layout: "cabinet"
};
</script>