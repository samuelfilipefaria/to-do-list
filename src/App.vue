<template lang="pug">
div.container.grid-md.py-2
  div.columns
    div.column.col-12.col-mx-auto
      header.navbar.hide-xs
        section.navbar-section
          router-link.btn.btn-link(to="/") Home
          router-link.btn.btn-link(to="/kanban") Kanban
        section.navbar-center
          span.text-large.text-bold(style="color: #5755d9") Todo list vue
        section.navbar-section
          a.btn.btn-link(href='https://linkedin.com/in/samuelfilipefaria' target="_blank") LinkedIn
          a.btn.btn-link(href='https://github.com/samuelfilipefaria' target="_blank") GitHub

      header.navbar.show-xs.text-center
        div.dropdown
          a.btn.btn-link.dropdown-toggle.text-large.text-bold(href='#' tabindex='0') Todo list vue
            i.icon.icon-caret
          ul.menu
            li.menu-item
              router-link.btn.btn-link(to="/") Home
              router-link.btn.btn-link(to="/kanban") Kanban
              a.btn.btn-link(href='https://linkedin.com/in/samuelfilipefaria' target="_blank") LinkedIn
              a.btn.btn-link(href='https://github.com/samuelfilipefaria' target="_blank") GitHub

      router-view
</template>

<script>

export default {
  name: 'App'
}
</script>
