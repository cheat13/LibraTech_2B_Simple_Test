<template>
  <div class="navbar">
    <div class="header-box">
      <div class="logo-box">
        <img src="@/assets/libra_logo.png" />
      </div>
      <p class="topic-text">LIBRA TECH</p>
    </div>
    <div class="search-box">
      <input class="search-bar" type="text" placeholder="search" />
    </div>
    <div class="ul-box">
      <ul>
        <li>
          <router-link to="/">Home</router-link>
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
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>