<template>
  <app-drop
    @drop="moveTaskOrColumn"
  >
    <app-drag
      class="task"
      :transferData="{
        type: 'task',
        fromColumnIndex: columnIndex,
        fromTaskIndex: taskIndex
      }"
      @click.native="goToTask(task)"
    >
      <span class="w-full flex-no-shrink font-bold">
        {{ task.name }}
      </span>
      <p
        v-if="task.description"
        class="w-full flex-no-shrink mt-1 text-sm"
      >
        {{ task.description }}
      </p>
    </app-drag>
  </app-drop>
</template>

<script>
import movingTasksAndColumnsMixin from '@/mixins/movingTasksAndColumnsMixin'
import AppDrag from './AppDrag'
import AppDrop from './AppDrop'

export default {
  components: { 
    AppDrag, 
    AppDrop 
  },
  mixins: [movingTasksAndColumnsMixin],
  props: {
    task: {
      type: Object,
      required: true
    },
    taskIndex: {
      type: Number,
      required: true
    }
  },
  methods: {
    goToTask (task) {
      this.$router.push({ name: 'task', params: { id: task.id } })
    }
  }
}
</script>

