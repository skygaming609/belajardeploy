<template>
  <header>
    <nav>
      <div class="logo">My E-Commerce</div>
      <ul class="nav-links">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/cart">Cart</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<style scoped>
header {
  background-color: #333;
  color: #fff;
  padding: 1rem;
}
.nav-links {
  list-style-type: none;
  display: flex;
  gap: 1rem;
}
.nav-links a {
  color: #fff;
  text-decoration: none;
}
</style>
