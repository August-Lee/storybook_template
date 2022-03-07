/**
 * @file stories index.js
 * @author lijianan
 */

 
import MyButton from "../../components/Button.vue";

export default {
  title: "MyButton",     
  component: MyButton,   
};
export const withText = () => ({
  components: {
    MyButton,
  },
  template: `
    <my-button text="Hello"/>
    `,
});

