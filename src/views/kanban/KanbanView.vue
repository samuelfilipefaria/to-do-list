<template lang="pug">
div.container(style="margin-top: 50px;")
  div.columns.hide-md
    div.column.col-6.col-mx-auto
      div.panel
        div.panel-header
          div.panel-title
            h2 A fazer
        div.panel-nav
        div.panel-body
          task-list(:tasks="uncheckeds")
        div.panel-footer.text-center
          button.btn.btn-primary(@click="checkAll") Mover tudo
            i.icon.icon-forward.ml-2
    div.column.col-6.col-mx-auto
      div.panel
        div.panel-header
          div.panel-title
            h2 Feito
        div.panel-nav
        div.panel-body
          task-list(:tasks="checkeds")
        div.panel-footer.text-center
          button.btn.btn-primary(@click="unCheckAll")
            i.icon.icon-back.mr-2
            span Mover tudo

  div.columns.show-md.mb-2
    div.column.col-12.col-mx-auto
      div.panel
        div.panel-header
          div.panel-title
            h2 A fazer
        div.panel-nav
        div.panel-body
          task-list(:tasks="uncheckeds")
        div.panel-footer.text-center
          button.btn.btn-primary(@click="checkAll") Mover tudo
            i.icon.icon-forward.ml-2
  div.columns.show-md
    div.column.col-12.col-mx-auto
      div.panel
        div.panel-header
          div.panel-title
            h2 Feito
        div.panel-nav
        div.panel-body
          task-list(:tasks="checkeds")
        div.panel-footer.text-center
          button.btn.btn-primary(@click="unCheckAll")
            i.icon.icon-back.mr-2
            span Mover tudo
</template>

<script>
import TaskList from '@/components/TaskList';
import { todoListStore } from '@/store';
import { mapActions, mapState } from 'pinia';

export default {
  name: 'KanbanView',
  components: {
    TaskList
  },
  computed: {
    ...mapState(todoListStore, ['uncheckeds', 'checkeds'])
  },
  methods: {
    ...mapActions(todoListStore, ['checkAll', 'unCheckAll'])
  }
}
</script>

<style scoped>
.container-kanban {
  margin-top: 30px;
  height: 80vh;
  width: 50vw;
}

.panel {
  margin-right: 30px;
  border: none;
  box-shadow:
    0px 0px 1.2px rgba(0, 0, 0, 0.013),
    0px 0px 2.7px rgba(0, 0, 0, 0.019),
    0px 0px 4.6px rgba(0, 0, 0, 0.023),
    0px 0px 6.9px rgba(0, 0, 0, 0.027),
    0px 0px 10px rgba(0, 0, 0, 0.03),
    0px 0px 14.2px rgba(0, 0, 0, 0.033),
    0px 0px 20.1px rgba(0, 0, 0, 0.037),
    0px 0px 29.2px rgba(0, 0, 0, 0.041),
    0px 0px 45px rgba(0, 0, 0, 0.047),
    0px 0px 80px rgba(0, 0, 0, 0.06)
  ;
}

.panel-footer {
  border-top: solid 2px #5755d9;
}

.columns {
  height: 100%;
}
</style>