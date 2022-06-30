<template>
  <div class="wrapper">
    <h1>Admins List</h1>
    <h4 class="highlight__text">{{ message }}</h4>
    <div v-if="admins.length > 0">
      <v-row class="albums__list--table">
        <v-col cols="9" sm="2">
          <span>Admin Name</span>
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
          <ListItemDisplay
            v-for="admin in admins"
            :key="admin.id"
            :album="admin"
            @deleteAlbum="goDelete(admin)"
            @viewAlbum="goView(admin)"
          />
        </div>
      </v-row>
    </div>
    <h2
      v-else-if="admins.length < 1"
      class="highlight__text"
      style="text-align: center"
    >
      NO ADMINS FOUND
    </h2>
  </div>
</template>
<script>
import AlbumDataService from "../../services/AlbumDataService";
import ListItemDisplay from "@/components/ListItemDisplay.vue";
export default {
  name: "admins-list",
  data() {
    return {
      admins: [
        {
          username: "test",
          email: "test@email.com",
          organisation: "google",
          password: "xsdwefadaddadfad",
        },
      ],
      currentAlbum: null,
      currentIndex: -1,
      title: "",
      message: "View or Delete Admins",
    };
  },
  components: {
    ListItemDisplay,
  },
  methods: {
    goView(album) {
      this.$router.push({ name: "view", params: { id: album.id } });
    },
    goDelete(album) {
      AlbumDataService.delete(album.id)
        .then(() => {
          this.retrieveAlbums();
        })
        .catch((e) => {
          this.message = e.response.data.message;
        });
    },
    retrieveAlbums() {
      AlbumDataService.getAll()
        .then((response) => {
          this.albums = response.data;
        })
        .catch((e) => {
          this.message = e.response.data.message;
        });
    },
  },
  mounted() {
    this.retrieveAlbums();
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