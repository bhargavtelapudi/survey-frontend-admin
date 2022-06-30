<template>
  <v-row class="album__list-item">
    <v-col cols="9" sm="2">
      <span>{{ album.username }}</span>
    </v-col>
    <v-col cols="9" sm="2">
      <span> {{ album.email }}</span>
    </v-col>
    <v-col cols="4" sm="2">
      <span> {{ album.organisation }}</span>
    </v-col>
    <v-col cols="9" sm="1">
      <v-btn
        size="x-small"
        icon="mdi-format-list-bulleted-type"
        @click="viewAlbum"
      />
    </v-col>
    <v-col cols="9" sm="1">
      <v-btn size="x-small" icon="mdi-trash-can" @click="deleteAlbum" />
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    album: Object,
  },
  data() {
    return {};
  },
  methods: {
    deleteAlbum() {
      this.$emit("deleteAlbum");
    },
    viewAlbum() {
      this.$emit("viewAlbum");
    },
  },
};
</script>
<style>
.album__list-item{
  display: flex;
  justify-content: center;
  margin:0;
  padding: 5px 0;
  border-top: 1px solid var(--lightGrey);
}
</style>
