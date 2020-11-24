import { format, addDays } from "date-fns";

const state = {
  user_tasks: {
    1: [
      {
        id: 1,
        title: "Tarefa de exemplo",
        description:
          "Realizar atividades amanhã durante a manhã, ler durante a tarde, assistir documentários durante a noite",
        date: format(addDays(new Date(), 1), 'yyyy-MM-dd'),
      },
    ],
  },
};

const mutations = {
  ADD_TASK(state, data) {
    let { task, userId } = data;
    
    if (userId in state.user_tasks) {
      task['id'] = state.user_tasks[userId].length + 1;

      state.user_tasks[userId].push(task);
    } else {
      task['id'] = 1;
      state.user_tasks[userId] = [task];
    }
  },
  EDIT_TASK(state, data) {
    const { userId, taskId, infos } = data;

    if (userId in state.user_tasks) {
      const indexT = state.user_tasks[userId].findIndex((t) => t.id === taskId);

      if (indexT > -1) {
        state.user_tasks[userId][indexT] = infos;
      }
    }
  },
  REMOVE_TASK(state, data) {
    const { taskId, userId } = data;

    if (userId in state.user_tasks) {
      const indexT = state.user_tasks[userId].findIndex((t) => t.id === taskId);

      if (indexT > -1) {
        state.user_tasks[userId].splice(indexT, 1);
      }
    }
  },
  CLEAR_TASKS(state, userId) {
    if (userId in state.user_tasks) {
      state.user_tasks[userId] = [];
    }
  },
};

const actions = {
  /**
   * @param {Object} data.task Task informations
   * @param {Number} data.userId Id of user
   */
  CREATE_TASK({ commit }, data) {
    commit("ADD_TASK", data);
  },

  /**
   * @param {Object} data.infos Task informations to change
   * @param {Number} data.taskId Task to edit
   * @param {Number} data.userId Id of user
   */
  EDIT_TASK({ commit }, data) {
    commit("EDIT_TASK", data);
  },

  /**
   * @param {Number} data.taskId Task to remove
   * @param {Number} data.userId Id of user
   */
  REMOVE_TASK({ commit }, data) {
    // taskId, userId
    commit("REMOVE_TASK", data);
  },

  /**
   * @param {Number} userId Id of user
   */
  CLEAR_TASKS({ commit }, userId) {
    commit("CLEAR_TASKS", userId);
  },

  /**
   * @param {Number} userId Id of user
   */
  GET_USER_TASKS({ state }, userId) {
    if (userId in state.user_tasks) {
      return state.user_tasks[userId];
    } else {
      return [];
    }
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
