import { Button, message, Input, Form, FormItem } from "ant-design-vue";
import { App, ComponentPublicInstance } from "vue";

interface componentDictionary {
  [key: string]:
    | ComponentPublicInstance
    // | { install: (app: App, ...options: any[]) => void };
    | any;
}

function install(app: App) {
  Object.keys(components).forEach((key) => {
    const component = components[key];
    app.use(component);
  });
  app.config.globalProperties.$message = message;
}

export const components: componentDictionary = {
  Button,
  Input,
  Form,
  FormItem,
};

export default { install };
