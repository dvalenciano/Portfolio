<template>
  <nav>
    <div class="nav-bar">
    <b-nav class="nav-title">
          <div>
            <h2 class="nav-title">Derek Valenciano</h2>
        
          </div>
        
        </b-nav>
        <div class="nav-right"><div>
    <router-link style="text-decoration: none; font-size: 30px; color: inherit;" to="/">About |  </router-link>
          </div>
          <div>
    <router-link style="text-decoration: none; font-size: 30px; color: inherit;" to="/skills">Skills |  </router-link>
          </div>
          <div>
    <router-link style="text-decoration: none; font-size: 30px; color: inherit;" to="/projects">  Projects   </router-link>
          </div>
        </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Nav'
}
</script>

<style scoped></style>