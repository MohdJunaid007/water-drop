import { v4 as uuidv4 } from "uuid";

const dataSlider = [
  {
    id: uuidv4(),
    title: "Looking for a solution?",
    image: "SliderImage1.png",
    subTitle: "How tedious is it to call for each order of water cans?",
    button: "Click here for the solution",
    link: "https://play.google.com/store/apps/details?id=com.waterdrop.customer",
  },
  {
    id: uuidv4(),
    title: "Seems magical, isn't it?",
    image: "SliderImage2.png",
    subTitle:
      "What if all orders placed through your shop get automatically registered in one place?",
    button: "Click here to make it real",
    link: "https://play.google.com/store/apps/details?id=com.waterdrop.supplier",
  },
  {
    id: uuidv4(),
    title: "Really convenient, right?",
    image: "SliderImage3.png",
    subTitle:
      "Imagine if you could see all the orders you need to deliver on your phone at once?",
    button: "Click here to start experiencing",
    link: "https://play.google.com/store/apps/details?id=com.waterdrop.delivery_partner",
  },
];

export default dataSlider;
