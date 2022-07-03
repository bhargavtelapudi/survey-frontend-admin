<template>
<div class="wrapper">
  <div class="register">
    <div class="register-wrapper">
      <div class="register-headings">
        <h1>Create Account For User</h1>
      </div>
      <v-form class="register-form">
        <v-text-field v-model="form.email" label="Email"></v-text-field>
        <v-text-field v-model="form.username" label="User Name"></v-text-field>
        <v-text-field
          v-model="form.organisation"
          label="Organisation"
        ></v-text-field>
        <v-text-field
          v-model="form.password"
          label="Password"
          type="password"
        ></v-text-field>
        <button @click="handleregister" class="black-button width-100">
          CREATE USER
        </button>
      </v-form>
    </div>
  </div>
</div>
</template>
<script>
export default {
  name: "RegisterUsers",
  data() {
    return {
      message: "",
      form: {
        email: "",
        password: "",
        username: "",
        organisation: "",
      },
    };
  },
};
</script>
 
<style>
.register {
  height: 100%;
  display: grid;
  place-items: center;
  position: relative;
}
.register-wrapper {
  backdrop-filter: blur(8px);
  color: var(--colorBlack);
  width: 40%;
  padding: 10px 30px 20px 30px;
  border-radius: 15px;
  border: 1px solid var(--colorLightGrey);
  box-shadow: 0px 10px 25px #2b2b2b7a;
}
.register-headings {
  margin: 15px 0;
  font-weight: 600;
  font-size: 18px;
}
.register-headings h1 {
  font-size: 25px;
  text-align: center;
  margin: 10px 0;
  font-weight: 800;
}


</style>