<template>
    <transition :name="animationMask" @leave="close">
        <div class="--alert--mask--" v-if="show"></div>
    </transition>
    <transition :name="animationAlert" @leave="close">
        <div :class="['alert-box', 'alert-' + type]" v-if="show">
            <div class="alert-header">
                <svg
                    width="24"
                    height="24"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 90 90"
                    style="enable-background:new 0 0 90 90;"
                    xml:space="preserve"
                    v-if="type == 'success'"
                >
                    <path
                        fill="#f2f2f2"
                        d="M57.2,33.7c2.9-2.9,7,1,4,4c-3,3-18.5,18.5-21,21c-2.8,2.8-6.8-1.3-4-4S54.7,36.2,57.2,33.7z M45,6.4
	C23.7,6.4,6.4,23.7,6.4,45S23.7,83.6,45,83.6S83.6,66.3,83.6,45S66.3,6.4,45,6.4z M45,78.1c-18.3,0-33.1-14.8-33.1-33.1
	S26.7,11.9,45,11.9S78.1,26.7,78.1,45S63.3,78.1,45,78.1z M39.9,54.6c3.1,3.1-1.2,6.8-4,4c-0.7-0.7-5.8-5.8-6.5-6.5
	c-3.1-3.1,0.9-7.1,4-4C36,50.8,37.2,52,39.9,54.6z"
                    />
                </svg>
                <svg
                    width="24"
                    height="24"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 90 90"
                    style="enable-background:new 0 0 90 90;"
                    xml:space="preserve"
                    v-else-if="type == 'error'"
                >
                    <path
                        fill="#f2f2f2"
                        d="M53.4,32.5c2.9-2.9,7,1,4,4c-3,3-18.5,18.5-21,21c-2.8,2.8-6.8-1.3-4-4C35.2,50.8,50.9,35,53.4,32.5z M45,6.4
	C23.7,6.4,6.4,23.7,6.4,45S23.7,83.6,45,83.6S83.6,66.3,83.6,45S66.3,6.4,45,6.4z M45,78.1c-18.3,0-33.1-14.8-33.1-33.1
	S26.7,11.9,45,11.9S78.1,26.7,78.1,45S63.3,78.1,45,78.1z M57.5,53.4c2.9,2.9-1,7-4,4c-3-3-18.5-18.5-21-21c-2.8-2.8,1.3-6.8,4-4
	C39.2,35.2,55,50.9,57.5,53.4z"
                    />
                </svg>
                <svg
                    width="24"
                    height="24"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 90 90"
                    style="enable-background:new 0 0 90 90;"
                    xml:space="preserve"
                    v-else
                >
                    <path
                        fill="#f2f2f2"
                        d="M42.2,24.7c0-3.5,5.7-3.6,5.7,0c0,3.3,0,25.7,0,29.2c0,3.9-5.7,3.8-5.7,0S42.2,28.2,42.2,24.7z M45,6.4
	C23.7,6.4,6.4,23.7,6.4,45S23.7,83.6,45,83.6S83.6,66.3,83.6,45S66.3,6.4,45,6.4z M44.9,78.1c-18.3,0-33.1-14.8-33.1-33.1
	s14.8-33.1,33.1-33.1S78.1,26.7,78.1,45S63.3,78.1,44.9,78.1z M48.1,62.9c0,1.7-1.4,3.1-3.1,3.1s-3.1-1.4-3.1-3.1s1.4-3.1,3.1-3.1
	S48.1,61.2,48.1,62.9z"
                    />
                </svg>
                <span>{{ header }}</span>
            </div>
            <div class="alert-body">
                {{ textBody }}
            </div>
            <div class="alert-button">
                <button class="cancel" @click="hide" v-if="type == 'confirm'">
                    {{ textCancel }}
                </button>
                <button class="ok" @click="done">{{ textOk }}</button>
            </div>
        </div>
    </transition>
</template>

<script>
import { onMounted, ref } from "vue";

export default {
    props: [
        "animationMask",
        "animationAlert",
        "type",
        "text",
        "header",
        "ok",
        "cancel",
    ],
    emits: ["hide", "done"],
    setup({ text: textBody, ok: textOk, cancel: textCancel }, { emit }) {
        const show = ref(false);
        const emitType = ref("");
        const count = ref(2);

        const close = () => {
            count.value--;
            if (!count.value) {
                emit(emitType.value);
            }
        };

        const hide = () => {
            emitType.value = "hide";
            show.value = false;
        };

        const done = () => {
            emitType.value = "done";
            show.value = false;
        };

        onMounted(() => {
            show.value = true;
        });

        return { show, hide, done, close, textBody, textOk, textCancel };
    },
};
</script>
