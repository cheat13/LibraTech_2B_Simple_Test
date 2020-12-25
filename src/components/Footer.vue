<template>
  <footer class="navbar-footer">
    <div class="header-box-footer">
      <div class="logo-box">
        <img src="@/assets/libra_logo.png" />
      </div>
      <p class="topic-text-footer">LIBRA TECH</p>
    </div>
    <div class="ul-box-footer">
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
    <div className="quote-box">
      <p>© LIBRA TECH, Inc. 2020. We love our users!</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>