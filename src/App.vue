<template lang="pug">
div.container.grid-md.py-2
  header.navbar
    section.navbar-section
      router-link.btn.btn-link(to="/") Home
      router-link.btn.btn-link(to="/kanban") Kanban
    section.navbar-center
      span.text-large.text-bold Todo list vue
    section.navbar-section
      a.btn.btn-link(href='https://linkedin.com/in/samuelfilipefaria' target="_blank") LinkedIn
      a.btn.btn-link(href='https://github.com/samuelfilipefaria' target="_blank") GitHub
  router-view
</template>

<script>

export default {
  name: 'App'
}
</script>
