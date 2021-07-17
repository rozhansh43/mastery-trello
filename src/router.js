import Vue from 'vue'
import Router from 'vue-router'
import Board from './components/Board.vue'
import Task from './components/Task.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'board',
      component: Board,
      children: [
        {
          path: 'task/:id',
          name: 'task',
          component: Task
        }
      ]
    }
  ]
})
