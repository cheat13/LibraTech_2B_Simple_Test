<template>
  <nav class="navbar">
    <div class="header-box">
      <div class="logo-box">
        <img :src="logo" />
      </div>
      <p class="topic-text">LIBRA TECH</p>
    </div>
    <div class="search-box">
      <input class="search-bar" type="text" placeholder="search" />
    </div>
    <div class="ul-box">
      <ul>
        <li>
          <router-link to="/home">Home</router-link>
        </li>
        <li>
          <router-link to="/solution">Solution</router-link>
        </li>
        <li>
          <router-link to="/courses">Courses</router-link>
        </li>
        <li>
          <router-link to="/jobs">Jobs</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      logo: require("@/assets/libra_logo.png"),
    };
  },
};
</script>