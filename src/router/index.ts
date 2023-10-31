import type { RouteRecordRaw } from "vue-router";
export const router: RouteRecordRaw[] = [
    {
        path: "/",
        name: "home",
        component: () => import("../views/Home.vue"),
    },
    {
        path: "/home2",
        name: "home2",
        component: () => import("../views/Home2.vue"),
    },
];
