# Other

> <a href="https://github.com/CB279/vue-3-cb-validate">validate</a>

> <a href="https://github.com/CB279/vue-3-cb-modal">modal</a>

> <a href="https://github.com/CB279/vue-3-cb-grid">grid</a>

> <a href="https://github.com/CB279/vue-3-cb-datepicker">datepicker</a>

> <a href="https://github.com/CB279/vue-3-cb-select">select</a>

> <a href="https://github.com/CB279/vue-3-cb-side-nav">side-nav</a>

> <a href="https://github.com/CB279/vue-3-cb-paginate">paginate</a>

## Development

npm install @cb/alert

## Config

```js
import alert from "@cb/alert";

createApp(app).use(alert, {
    header: "แจ้งเตือน",
    ok: "ตกลง",
    cancel: "ยกเลิก",
});
```

## Usage

```js
const alert = inject("alert");
//or
import { alert } from "@cb/alert";

alert.success("is success");
alert.error("is error");
alert.confirm("is confirm", () => {
    //...
});
```

## Option

| name           | value              |
| -------------- | ------------------ |
| header         | string or computed |
| ok             | string or computed |
| cancel         | string or computed |
| animatonMask   | string or computed |
| animationAlert | string or computed |

## 📑 License

[MIT License](./LICENSE)
