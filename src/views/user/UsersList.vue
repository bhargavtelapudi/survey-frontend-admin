<template>
  <div class="wrapper">
    <h1>Users List</h1>
    <h4 class="highlight__text">{{ message }}</h4>
    <div v-if="users.length > 0">
      <v-row class="albums__list--table">
        <v-col cols="9" sm="2">
          <span>User Name</span>
        </v-col>
        <v-col cols="9" sm="2">
          <span>Organisation</span>
        </v-col>
        <v-col cols="4" sm="2">
          <span>Email</span>
        </v-col>
        <v-col cols="9" sm="1">
          <span>View</span>
        </v-col>
        <v-col cols="9" sm="1">
          <span>Delete</span>
        </v-col>
        <div class="album__item--wrapper">
          <UserListItem
            v-for="user in users"
            :key="user.id"
            :user="user"
            @deleteUser="goDelete(user)"
            @viewUser="goView(user)"
          />
        </div>
      </v-row>
    </div>
    <h2
      v-else-if="users.length < 1"
      class="highlight__text"
      style="text-align: center"
    >
      NO users FOUND
    </h2>
  </div>
</template>
<script>
import UserDataService from "../../services/UserDataService";
import UserListItem from "@/components/UserListItem.vue";
export default {
  name: "users-list",
  data() {
    return {
      users: [
        {
          username: "test",
          email: "test@email.com",
          organisation: "google",
          password: "",
        },
      ],
      message: "View or Delete users",
    };
  },
  components: {
    UserListItem,
  },
  methods: {
    goView(album) {
      this.$router.push({ name: "view", params: { id: album.id } });
    },
    goDelete(album) {
      UserDataService.delete(album.id)
        .then(() => {
          this.retreiveUsers();
        })
        .catch((e) => {
          this.message = e.response.data.message;
        });
    },
    retreiveUsers() {
      UserDataService.getAllUsers()
        .then((response) => {
          this.users = response.data;
        })
        .catch((e) => {
          this.message = e.response.data.message;
        });
    },
  },
  mounted() {
    this.retreiveUsers();
  },
};
</script>
<style>
.albums__list--table {
  border: 1px solid var(--colorLightGrey);
  border-radius: 10px;
  display: flex;
  justify-content: center;
  margin: 10px 0px 20px 0px;
  box-shadow: var(--boxShadow);
  background: var(--colorWhite);
}

.album__item--wrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
}
</style>