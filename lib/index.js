import { createApp, h, reactive, shallowReadonly } from "vue";
import com from "../components/alert.vue";
import "../css/index.css";

const defaultOptions = reactive({
    animatonMask: "alert-ease",
    animationAlert: "alert-toggle",
    header: "Alert",
    ok: "ok",
    cancel: "cancel",
});

const create = (optionOrtext, func, type) => {
    const div = document.createElement("div");
    div.classList.add("--alert--");
    document.body.appendChild(div);

    const onHide = () => {
        setTimeout(() => {
            ins.unmount();
            div.remove();
        }, 100);
    };

    const onDone = () => {
        onHide();
        if (func) func();
    };

    let text = optionOrtext,
        header = defaultOptions.header,
        ok = defaultOptions.ok,
        cancel = defaultOptions.cancel;

    if (typeof optionOrtext === "object") {
        text = optionOrtext.text;
        header = optionOrtext.header || header;
        ok = optionOrtext.ok || ok;
        cancel = optionOrtext.cancel || cancel;
    }
    
    const ins = createApp({
        render() {
            return h(com,
                {
                    animationMask: defaultOptions.animatonMask,
                    animationAlert: defaultOptions.animationAlert,
                    text,
                    type,
                    header,
                    ok,
                    cancel,
                    onHide,
                    onDone,
                }
            );
        },
    });

    ins.mount(div);
};

export const alert = shallowReadonly({
    success(optionOrtext, func) {
        create(optionOrtext, func, "success");
    },
    error(optionOrtext, func) {
        create(optionOrtext, func, "error");
    },
    confirm(optionOrtext, func) {
        create(optionOrtext, func, "confirm");
    },
});

export default {
    install(app, options = {}) {
        if (typeof options === "object") {
            if (typeof options.animation === "object") {
                defaultOptions.animatonMask = options.animation.mask;
                defaultOptions.animationAlert = options.animation.alert;
            }
            defaultOptions.header = options.header;
            defaultOptions.ok = options.ok;
            defaultOptions.cancel = options.cancel;
        }

        app.provide("alert", alert);
        app.config.globalProperties.alert = alert;
    },
};
