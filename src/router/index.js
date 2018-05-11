import Vue from "vue";
import Router from "vue-router";
import Hello from "@/components/Hello";
import demo from "@/components/demo";

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: "/",
            redirect: "/demo"
        },
        {
            path: "/demo",
            name: "demo",
            component: demo
        },
        {
            path: "/hello",
            name: "Hello",
            component: Hello
        }
    ]
});
