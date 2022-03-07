import MyButton from "../../components/Button.vue";
import BUTTON from "./Button.md";

export default {
    title: "MyButton",
    component: MyButton,
};
const Template = args => ({
    components: { MyButton },
    props: Object.keys(args),
    template: '<my-button v-bind="$props" v-on="$props" />',
});

export const Primary = Template.bind({});
Primary.args = {
    type: 'primary',
    size: "small",
    text: 'button'
};

export const Error = Template.bind({});
Error.args = {
    type: 'danger',
    size: "large",
    text: 'Error'
};

export const notes插件 = () => ({
    components: {
        MyButton,
    },
    template: `
      <my-button text="带文档的"/>
      `,
});

notes插件.story = {
    parameters: {
        notes: { BUTTON },
    },
};
