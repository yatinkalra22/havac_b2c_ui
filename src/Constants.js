import { dashboard, help, students, teachers, logout } from "./assets/index";

export default {
  options: [
    { id: 1, name: "Dashboard", icon: dashboard },
    { id: 2, name: "Teachers", icon: teachers },
    { id: 3, name: "Students", icon: students },
    { id: 4, name: "Help", icon: help },
    { id: 5, name: "Logout", icon: logout },
  ],
};
