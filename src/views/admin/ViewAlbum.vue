<template>
  <h2>View Album</h2>
  <h4 class="highlight__text">{{ message }}</h4>
  <div class="view__album--details">
    <h3>Album Name : {{ album.title }}</h3>
    <h3>Artist Name : {{ album.artist }}</h3>
  </div>
  <v-row>
    <v-col cols="8" sm="2">
      <v-btn color="success" @click="goAddSong(id)">Add Song</v-btn>
    </v-col>
  </v-row>
  <v-row class="albums__list--search">
    <div>
      <v-text-field
        class="input-search"
        clearable
        label="Search Songs"
        v-model="title"
      />
    </div>
    <div>
      <v-btn color="success" @click="serachSong">Search</v-btn>
    </div>
  </v-row>
  <div v-if="songs.length > 0">
    <v-row class="albums__list--table">
      <v-col cols="8" sm="2">
        <span class="text-h6">Title</span>
      </v-col>
      <v-col cols="8" sm="4">
        <span class="text-h6">Description</span>
      </v-col>
      <v-col cols="8" sm="2">
        <span class="text-h6">Status</span>
      </v-col>
      <v-col cols="8" sm="1">
        <span class="text-h6">Edit</span>
      </v-col>
      <v-col cols="8" sm="1">
        <span class="text-h6">Delete</span>
      </v-col>
      <div class="album__item--wrapper">
        <SongDisplay
          v-for="song in songs"
          :key="song.id"
          :song="song"
          @deleteSong="goDeleteSong(song)"
          @updateSong="goEditSong(song)"
        />
      </div>
    </v-row>
    <v-btn @click="removeAllSongs" color="error">Remove All Songs</v-btn>
  </div>
  <h2
    class="highlight__text"
    v-else-if="songs.length < 1"
    style="text-align: center"
  >
    NO SONGS FOUND
  </h2>
</template>
<script>
import AlbumDataService from "../../services/AlbumDataService";
export default {
  name: "view-album",
  props: ["id"],
  components: {
    SongDisplay,
  },
  data() {
    return {
      album: {},
      songs: [],
      title: "",
      message: "Manage Songs",
    };
  },
  methods: {
   
  },
  created() {
    this.retrieveSongs();
  },
};
</script>

<style>
.view__album--details {
  border: 1px solid var(--lightGrey);
  padding: 10px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 10px 0;
  border-radius: 10px;
}
</style>