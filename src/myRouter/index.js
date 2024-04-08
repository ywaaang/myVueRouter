import { inject, ref } from "vue";
import RouterLink from "./RouterLink.vue";
import RouterView from "./RouterView.vue";

const ROUTER_KEY = "__router__";

export function useRouter() {
    return inject(ROUTER_KEY);
}
export function createRouter(options) {
    return new Router(options);
}

export function createWebHashHistory() {
    function bindEvents(fn) {
        window.addEventListener("hashchange", fn);
    }
    return {
        bindEvents,
        url: window.location.hash.slice(1) || "/",
    };
}
class Router {
    constructor(options) {
        this.history = options.history;
        this.routes = options.routes;
        this.current = ref(this.history.url); // 当前路径

        this.history.bindEvents(() => {
            this.current.value = window.location.hash.slice(1);
        });
        this.initUrl();
    }
    initUrl() { // 为地址增加个#号
        let a = location.href.split('#/')
        location.href = `${ a[0] }#/${ a[1] ? a[1] : '' }`
    }
    install(app) {
        app.provide(ROUTER_KEY, this);
        app.component("RouterLink", RouterLink);
        app.component("RouterView", RouterView);
    }
    push(path) {
        window.location.hash = `#${path}`
    }
}
