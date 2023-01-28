const { createApp } = Vue;

const App = createApp({
  data() {
    return {
      items: [],
      text: "",
    };
  },
  methods: {
    handleSubmit() {
      if (this.text.length === 0) {
        return;
      }

      const newItem = {
        text: this.text,
        id: Date.now(),
      };

      this.items.push(newItem);
      this.text = "";
    },
  },
});

const todoList = {
  props: ["items"],
  data() {
    return {};
  },
  template: /*html*/ `
          <ul class="list-group">
            <li class="list-group-item" v-for="item in items">{{ item.text }}</li>
          </ul>
          `,
};

App.component("todolist", todoList);
App.mount("#app");
