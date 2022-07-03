<template>
  <h1>Add Album</h1>
  <h4 class="highlight__text">{{ message }}</h4>
  <v-form class="form">
    <v-text-field label="Title" v-model="album.title" />
    <v-text-field label="Description" v-model="album.description" />
    <v-select v-model="album.artistName" :items="artists" label="Artist Name"></v-select>
    <v-checkbox v-model="album.published" label="Published" color="success" class="checkbox"></v-checkbox>
    <v-row justify="center">
      <v-col col="2"> </v-col>
      <v-col col="2">
        <v-btn color="success" @click="saveAlbum()">Create Album</v-btn>
      </v-col>
      <v-col col="2">
        <v-btn color="info" @click="cancel()">Cancel</v-btn>
      </v-col>
    </v-row>
  </v-form>
</template>
<script>
import AdminDataService from "../../services/AdminDataService";
import ArtistDataService from "../../services/ArtistDataService";

export default {
  name: "add-album",
  data() {
    return {
      album: {
        id: null,
        title: "",
        description: "",
        artistName: "",
        published: false,
      },
      artists: [],
      message: "Enter data and click save",
    };
  },
  methods: {
    saveAlbum() {
      var data = {
        title: this.album.title,
        description: this.album.description,
        artist: this.album.artistName,
        published: this.album.published,
      };
      AdminDataService.create(data)
        .then((response) => {
          this.album.id = response.data.id;
          console.log("add???" + response.data);
          this.$router.push({ name: "albums" });
        })
        .catch((e) => {
          this.message = e.response.data.message;
        });
    },
    cancel() {
      this.$router.push({ name: "albums" });
    },
    retrieveArtists() {
      ArtistDataService.getAllArtists()
        .then((response) => {
          const artists = response.data.map(item => item.artist)
          console.log(artists);
          this.artists = artists;
        })
        .catch((e) => {
          this.message = e.response.data.message;
        });
    }
  },
  mounted() {
    this.retrieveArtists();
  },
};
</script>
<style>
</style>