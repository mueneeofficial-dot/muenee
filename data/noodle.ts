import { Menu } from "@/lib/menu";

export const noodleMenus: Menu[] = [
  {
    id: "tom-yum-noodle",
    name: "ก๋วยเตี๋ยวต้มยำ",
    category: "ก๋วยเตี๋ยว",
    price: 60,
    time: "30 นาที",
    spicy: "🌶️🌶️ เผ็ดกลาง",
    image: "/images/tom-yum-noodle.jpg",

    calories: 450,
    difficulty: "ง่าย",
    tags: [
      "เส้น",
      "ต้มยำ",
      "เผ็ด"
    ],
    favorite: false,

    ingredients: [
      "เส้นก๋วยเตี๋ยว",
      "หมูสับ",
      "ลูกชิ้น",
      "ไข่ต้ม",
      "ถั่วลิสง",
      "พริก",
      "มะนาว",
    ],

    recipe: [
      "ลวกเส้นและเตรียมเครื่อง",
      "ปรุงน้ำต้มยำด้วยมะนาว พริก และเครื่องปรุง",
      "ใส่หมูสับและลูกชิ้น",
      "ใส่เส้นลงในน้ำต้มยำ",
      "โรยถั่วลิสงและเสิร์ฟ",
    ],
  },

  {
    id: "boat-noodle",
    name: "ก๋วยเตี๋ยวเรือ",
    category: "ก๋วยเตี๋ยว",
    price: 50,
    time: "25 นาที",
    spicy: "🌶️ เผ็ดน้อย",
    image: "/images/tom-yum-noodle.jpg",

    calories: 500,
    difficulty: "ปานกลาง",
    tags: [
      "เส้น",
      "หมู",
      "น้ำตก"
    ],
    favorite: false,

    ingredients: [
      "เส้นเล็ก",
      "หมูสด",
      "ลูกชิ้น",
      "เลือดหมู",
      "ผักบุ้ง",
      "เครื่องเทศ",
    ],

    recipe: [
      "ต้มน้ำซุปให้หอม",
      "ใส่เครื่องปรุงน้ำตก",
      "ลวกเส้นและเนื้อหมู",
      "ใส่ลูกชิ้นและผัก",
      "เสิร์ฟพร้อมเครื่องเคียง",
    ],
  },
];