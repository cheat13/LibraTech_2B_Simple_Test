import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";

const routes = [{
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/solution",
        name: "Solution",
        component: () =>
            import ( /* webpackChunkName: "solution" */ "@/views/Solution")
    },
    {
        path: "/courses",
        name: "Courses",
        component: () =>
            import ( /* webpackChunkName: "courses" */ "@/views/Courses")
    },
    {
        path: "/jobs",
        name: "Jobs",
        component: () =>
            import ( /* webpackChunkName: "jobs" */ "@/views/Jobs")
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;