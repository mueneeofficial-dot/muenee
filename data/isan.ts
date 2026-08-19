import { Menu } from "@/lib/menu";

export const isanMenus: Menu[] = [
  {
    id: "som-tam-thai-isan",
    name: "ส้มตำไทย",
    category: "อาหารอีสาน",
    price: 45,
    time: "10 นาที",
    spicy: "เผ็ดน้อย",
    image: "/images/som-tam-thai.jpg",

    calories: 120,
    difficulty: "ง่าย",
    tags: [
      "มะละกอ",
      "อีสาน",
      "เผ็ด"
    ],
    favorite: false,

    ingredients: [
      "มะละกอ",
      "มะเขือเทศ",
      "ถั่วฝักยาว",
      "น้ำปลา",
      "มะนาว",
      "พริก",
      "กระเทียม",
      "ถั่วลิสง",
    ],

    recipe: [
      "ตำพริกและกระเทียมให้ละเอียด",
      "ใส่น้ำปลา น้ำมะนาว และเครื่องปรุง",
      "ใส่มะละกอและผักต่าง ๆ",
      "คลุกเคล้าให้เข้ากัน",
      "โรยถั่วลิสงก่อนเสิร์ฟ",
    ],
  },
    {
    id: "som-tam-pu-pla-ra",
    name: "ส้มตำปูปลาร้า",
    category: "อาหารอีสาน",
    price: 50,
    time: "15 นาที",
    spicy: "🌶️🌶️🌶️ เผ็ดมาก",
    image: "/images/default-food.jpg",

    calories: 180,
    difficulty: "ง่าย",
    tags: ["มะละกอ", "ปลาร้า", "เผ็ด"],
    favorite: false,

    ingredients: [
      "มะละกอดิบ",
      "ปูเค็ม",
      "ปลาร้า",
      "พริก",
      "มะนาว",
      "มะเขือเทศ",
    ],

    recipe: [
      "ตำพริกกับกระเทียม",
      "ใส่มะละกอและเครื่องปรุง",
      "เติมปลาร้า",
      "คลุกให้เข้ากัน",
    ],
  },

  {
    id: "larb-moo-isan",
    name: "ลาบหมูอีสาน",
    category: "อาหารอีสาน",
    price: 70,
    time: "20 นาที",
    spicy: "🌶️🌶️ เผ็ดกลาง",
    image: "/images/default-food.jpg",

    calories: 320,
    difficulty: "ง่าย",
    tags: ["หมู", "ข้าวคั่ว", "อีสาน"],
    favorite: false,

    ingredients: [
      "หมูสับ",
      "ข้าวคั่ว",
      "พริกป่น",
      "หอมแดง",
      "ต้นหอม",
      "มะนาว",
    ],

    recipe: [
      "รวนหมูให้สุก",
      "ใส่เครื่องปรุง",
      "ใส่ข้าวคั่ว",
      "คลุกให้เข้ากัน",
    ],
  },

  {
    id: "nam-tok-moo",
    name: "น้ำตกหมู",
    category: "อาหารอีสาน",
    price: 80,
    time: "25 นาที",
    spicy: "🌶️🌶️ เผ็ดกลาง",
    image: "/images/default-food.jpg",

    calories: 350,
    difficulty: "ง่าย",
    tags: ["หมู", "ย่าง", "เผ็ด"],
    favorite: false,

    ingredients: [
      "หมูย่าง",
      "ข้าวคั่ว",
      "พริกป่น",
      "หอมแดง",
      "ใบสะระแหน่",
    ],

    recipe: [
      "ย่างหมูจนสุก",
      "หั่นเป็นชิ้น",
      "คลุกกับเครื่องปรุง",
      "ใส่ข้าวคั่วและสมุนไพร",
    ],
  },

  {
    id: "tom-saab-moo",
    name: "ต้มแซ่บกระดูกหมู",
    category: "อาหารอีสาน",
    price: 100,
    time: "45 นาที",
    spicy: "🌶️🌶️🌶️ เผ็ดมาก",
    image: "/images/default-food.jpg",

    calories: 280,
    difficulty: "ปานกลาง",
    tags: ["หมู", "ต้ม", "แซ่บ"],
    favorite: false,

    ingredients: [
      "กระดูกหมู",
      "ข่า",
      "ตะไคร้",
      "ใบมะกรูด",
      "พริก",
      "มะนาว",
    ],

    recipe: [
      "ต้มกระดูกหมูจนเปื่อย",
      "ใส่สมุนไพร",
      "ปรุงรสด้วยมะนาว",
      "เติมพริก",
    ],
  },

  {
    id: "gai-yang-isan",
    name: "ไก่ย่างอีสาน",
    category: "อาหารอีสาน",
    price: 90,
    time: "40 นาที",
    spicy: "ไม่เผ็ด",
    image: "/images/default-food.jpg",

    calories: 550,
    difficulty: "ปานกลาง",
    tags: ["ไก่", "ย่าง", "อีสาน"],
    favorite: false,

    ingredients: [
      "ไก่",
      "กระเทียม",
      "รากผักชี",
      "พริกไทย",
      "ซอสปรุงรส",
    ],

    recipe: [
      "หมักไก่",
      "ย่างด้วยไฟกลาง",
      "กลับด้านจนสุก",
      "เสิร์ฟพร้อมน้ำจิ้ม",
    ],
  },

  {
    id: "kor-moo-yang",
    name: "คอหมูย่าง",
    category: "อาหารอีสาน",
    price: 100,
    time: "35 นาที",
    spicy: "🌶️ เผ็ดน้อย",
    image: "/images/default-food.jpg",

    calories: 700,
    difficulty: "ปานกลาง",
    tags: ["หมู", "ย่าง", "น้ำจิ้มแจ่ว"],
    favorite: false,

    ingredients: [
      "คอหมู",
      "กระเทียม",
      "พริกไทย",
      "น้ำปลา",
    ],

    recipe: [
      "หมักคอหมู",
      "ย่างจนหอม",
      "หั่นเป็นชิ้น",
      "กินคู่กับแจ่ว",
    ],
  },

  {
    id: "sai-krok-isan",
    name: "ไส้กรอกอีสาน",
    category: "อาหารอีสาน",
    price: 60,
    time: "30 นาที",
    spicy: "ไม่เผ็ด",
    image: "/images/default-food.jpg",

    calories: 450,
    difficulty: "ปานกลาง",
    tags: ["หมู", "ของกินเล่น", "อีสาน"],
    favorite: false,

    ingredients: [
      "หมูบด",
      "ข้าวเหนียว",
      "กระเทียม",
      "เกลือ",
    ],

    recipe: [
      "ผสมส่วนผสม",
      "ยัดใส่ไส้",
      "หมักให้เปรี้ยว",
      "ย่างจนสุก",
    ],
  },

  {
    id: "kaeng-om",
    name: "แกงอ่อมหมู",
    category: "อาหารอีสาน",
    price: 90,
    time: "40 นาที",
    spicy: "🌶️ เผ็ดน้อย",
    image: "/images/default-food.jpg",

    calories: 300,
    difficulty: "ปานกลาง",
    tags: ["หมู", "แกง", "สมุนไพร"],
    favorite: false,

    ingredients: [
      "หมู",
      "ผักชีลาว",
      "ข้าวคั่ว",
      "ผักรวม",
    ],

    recipe: [
      "ต้มน้ำแกง",
      "ใส่หมู",
      "ใส่ผักและสมุนไพร",
      "ปรุงรส",
    ],
  },

  {
    id: "moo-manao-isan",
    name: "หมูมะนาว",
    category: "อาหารอีสาน",
    price: 80,
    time: "20 นาที",
    spicy: "🌶️🌶️ เผ็ดกลาง",
    image: "/images/default-food.jpg",

    calories: 250,
    difficulty: "ง่าย",
    tags: ["หมู", "มะนาว", "เผ็ด"],
    favorite: false,

    ingredients: [
      "หมู",
      "มะนาว",
      "พริก",
      "กระเทียม",
      "คะน้า",
    ],

    recipe: [
      "ลวกหมู",
      "ทำน้ำยำ",
      "ราดบนหมู",
      "เสิร์ฟพร้อมผัก",
    ],
  },

  {
    id: "laap-ped",
    name: "ลาบเป็ด",
    category: "อาหารอีสาน",
    price: 120,
    time: "35 นาที",
    spicy: "🌶️🌶️ เผ็ดกลาง",
    image: "/images/default-food.jpg",

    calories: 400,
    difficulty: "ปานกลาง",
    tags: ["เป็ด", "ลาบ", "อีสาน"],
    favorite: false,

    ingredients: [
      "เนื้อเป็ด",
      "ข้าวคั่ว",
      "พริกป่น",
      "หอมแดง",
      "มะนาว",
    ],

    recipe: [
      "รวนเนื้อเป็ด",
      "ใส่เครื่องลาบ",
      "คลุกให้เข้ากัน",
    ],
  },

  {
    id: "tom-khlong",
    name: "ต้มโคล้งปลาย่าง",
    category: "อาหารอีสาน",
    price: 100,
    time: "40 นาที",
    spicy: "🌶️🌶️ เผ็ดกลาง",
    image: "/images/default-food.jpg",

    calories: 250,
    difficulty: "ปานกลาง",
    tags: ["ปลา", "ต้ม", "สมุนไพร"],
    favorite: false,

    ingredients: [
      "ปลาย่าง",
      "ตะไคร้",
      "ใบมะกรูด",
      "พริกแห้ง",
      "เห็ด",
    ],

    recipe: [
      "ต้มน้ำกับสมุนไพร",
      "ใส่ปลาย่าง",
      "ปรุงรส",
      "เติมพริก",
    ],
  },

  {
    id: "nam-tok-neua",
    name: "น้ำตกเนื้อ",
    category: "อาหารอีสาน",
    price: 120,
    time: "30 นาที",
    spicy: "🌶️🌶️ เผ็ดกลาง",
    image: "/images/default-food.jpg",

    calories: 420,
    difficulty: "ปานกลาง",
    tags: ["เนื้อ", "ย่าง", "ข้าวคั่ว"],
    favorite: false,

    ingredients: [
      "เนื้อวัว",
      "ข้าวคั่ว",
      "พริกป่น",
      "หอมแดง",
      "สะระแหน่",
    ],

    recipe: [
      "ย่างเนื้อ",
      "หั่นเป็นชิ้น",
      "คลุกเครื่องปรุง",
      "ใส่ข้าวคั่ว",
    ],
  },

  {
    id: "tom-saab-neua",
    name: "ต้มแซ่บเนื้อ",
    category: "อาหารอีสาน",
    price: 120,
    time: "50 นาที",
    spicy: "🌶️🌶️🌶️ เผ็ดมาก",
    image: "/images/default-food.jpg",

    calories: 300,
    difficulty: "ปานกลาง",
    tags: ["เนื้อ", "ต้ม", "แซ่บ"],
    favorite: false,

    ingredients: [
      "เนื้อวัว",
      "ข่า",
      "ตะไคร้",
      "ใบมะกรูด",
      "พริก",
    ],

    recipe: [
      "ต้มเนื้อจนเปื่อย",
      "ใส่สมุนไพร",
      "ปรุงรสจัดจ้าน",
    ],
  },

  {
    id: "pla-som-tod",
    name: "ปลาส้มทอด",
    category: "อาหารอีสาน",
    price: 100,
    time: "25 นาที",
    spicy: "ไม่เผ็ด",
    image: "/images/default-food.jpg",

    calories: 450,
    difficulty: "ง่าย",
    tags: ["ปลา", "ทอด", "อีสาน"],
    favorite: false,

    ingredients: [
      "ปลาส้ม",
      "น้ำมัน",
      "กระเทียม",
    ],

    recipe: [
      "ทอดปลาส้มจนเหลือง",
      "พักให้สะเด็ดน้ำมัน",
      "เสิร์ฟพร้อมผัก",
    ],
  },

  {
    id: "gaeng-pak-wan",
    name: "แกงเห็ดอีสาน",
    category: "อาหารอีสาน",
    price: 70,
    time: "30 นาที",
    spicy: "🌶️ เผ็ดน้อย",
    image: "/images/default-food.jpg",

    calories: 180,
    difficulty: "ง่าย",
    tags: ["เห็ด", "แกง", "ผัก"],
    favorite: false,

    ingredients: [
      "เห็ดรวม",
      "ใบแมงลัก",
      "พริก",
      "น้ำปลาร้า",
    ],

    recipe: [
      "ต้มน้ำแกง",
      "ใส่เห็ด",
      "ปรุงรส",
      "ใส่ใบแมงลัก",
    ],
  },

  {
    id: "moo-dad-diew",
    name: "หมูแดดเดียว",
    category: "อาหารอีสาน",
    price: 90,
    time: "45 นาที",
    spicy: "ไม่เผ็ด",
    image: "/images/default-food.jpg",

    calories: 600,
    difficulty: "ปานกลาง",
    tags: ["หมู", "ทอด", "ของกินเล่น"],
    favorite: false,

    ingredients: [
      "หมู",
      "น้ำปลา",
      "น้ำตาล",
      "งา",
    ],

    recipe: [
      "หมักหมู",
      "ตากแดด",
      "ทอดจนสุก",
    ],
  },

  {
    id: "koi-neua",
    name: "ก้อยเนื้อ",
    category: "อาหารอีสาน",
    price: 120,
    time: "25 นาที",
    spicy: "🌶️🌶️🌶️ เผ็ดมาก",
    image: "/images/default-food.jpg",

    calories: 350,
    difficulty: "ปานกลาง",
    tags: ["เนื้อ", "อีสาน", "เผ็ด"],
    favorite: false,

    ingredients: [
      "เนื้อ",
      "ข้าวคั่ว",
      "พริก",
      "มะนาว",
      "สมุนไพร",
    ],

    recipe: [
      "เตรียมเนื้อ",
      "คลุกเครื่องปรุง",
      "ใส่สมุนไพร",
    ],
  },

  {
    id: "kaeng-om-kai",
    name: "แกงอ่อมไก่",
    category: "อาหารอีสาน",
    price: 90,
    time: "40 นาที",
    spicy: "🌶️ เผ็ดน้อย",
    image: "/images/default-food.jpg",

    calories: 320,
    difficulty: "ปานกลาง",
    tags: ["ไก่", "แกง", "ผักชีลาว"],
    favorite: false,

    ingredients: [
      "ไก่",
      "ผักชีลาว",
      "ข้าวคั่ว",
      "ผักรวม",
    ],

    recipe: [
      "ต้มไก่",
      "ใส่เครื่องแกง",
      "ใส่ผัก",
      "ปรุงรส",
    ],
  },
    {
    id: "som-tam-khai-khem",
    name: "ส้มตำไข่เค็ม",
    category: "อาหารอีสาน",
    price: 70,
    time: "15 นาที",
    spicy: "🌶️ เผ็ดกลาง",
    image: "/images/default-food.jpg",

    calories: 280,
    difficulty: "ง่าย",
    tags: ["มะละกอ", "ไข่เค็ม", "ส้มตำ"],
    favorite: false,

    ingredients: [
      "มะละกอดิบ",
      "ไข่เค็ม",
      "พริก",
      "มะนาว",
      "ถั่วฝักยาว",
    ],

    recipe: [
      "ตำพริกกับกระเทียม",
      "ใส่มะละกอ",
      "เติมเครื่องปรุง",
      "ใส่ไข่เค็ม",
    ],
  },

  {
    id: "pla-neung-manow",
    name: "ปลานึ่งมะนาว",
    category: "อาหารอีสาน",
    price: 150,
    time: "40 นาที",
    spicy: "🌶️🌶️ เผ็ดกลาง",
    image: "/images/default-food.jpg",

    calories: 350,
    difficulty: "ปานกลาง",
    tags: ["ปลา", "นึ่ง", "มะนาว"],
    favorite: false,

    ingredients: [
      "ปลานิล",
      "มะนาว",
      "พริก",
      "กระเทียม",
      "ผักชี",
    ],

    recipe: [
      "นึ่งปลาจนสุก",
      "ทำน้ำราดมะนาว",
      "ราดบนปลา",
      "โรยผักชี",
    ],
  },

  {
    id: "kai-yang-jaew",
    name: "ไก่ย่างน้ำจิ้มแจ่ว",
    category: "อาหารอีสาน",
    price: 100,
    time: "40 นาที",
    spicy: "🌶️ เผ็ดน้อย",
    image: "/images/default-food.jpg",

    calories: 560,
    difficulty: "ปานกลาง",
    tags: ["ไก่", "ย่าง", "แจ่ว"],
    favorite: false,

    ingredients: [
      "ไก่",
      "กระเทียม",
      "พริกไทย",
      "น้ำปลา",
      "ข้าวคั่ว",
    ],

    recipe: [
      "หมักไก่",
      "ย่างจนสุก",
      "ทำน้ำจิ้มแจ่ว",
      "เสิร์ฟพร้อมกัน",
    ],
  },

  {
    id: "yum-mama-isan",
    name: "ยำมาม่าอีสาน",
    category: "อาหารอีสาน",
    price: 60,
    time: "15 นาที",
    spicy: "🌶️🌶️ เผ็ดกลาง",
    image: "/images/default-food.jpg",

    calories: 450,
    difficulty: "ง่าย",
    tags: ["เส้น", "ยำ", "เผ็ด"],
    favorite: false,

    ingredients: [
      "บะหมี่กึ่งสำเร็จรูป",
      "หมูสับ",
      "ไส้กรอก",
      "พริก",
      "มะนาว",
    ],

    recipe: [
      "ลวกเส้น",
      "เตรียมน้ำยำ",
      "ใส่เครื่อง",
      "คลุกให้เข้ากัน",
    ],
  },

  {
    id: "pla-tod-samunphrai",
    name: "ปลาทอดสมุนไพร",
    category: "อาหารอีสาน",
    price: 120,
    time: "35 นาที",
    spicy: "🌶️ เผ็ดน้อย",
    image: "/images/default-food.jpg",

    calories: 500,
    difficulty: "ปานกลาง",
    tags: ["ปลา", "ทอด", "สมุนไพร"],
    favorite: false,

    ingredients: [
      "ปลา",
      "ตะไคร้",
      "ใบมะกรูด",
      "กระเทียม",
    ],

    recipe: [
      "ทอดปลาให้กรอบ",
      "ทอดสมุนไพร",
      "โรยบนตัวปลา",
    ],
  },

  {
    id: "moo-krob-jaew",
    name: "หมูกรอบแจ่ว",
    category: "อาหารอีสาน",
    price: 100,
    time: "30 นาที",
    spicy: "🌶️ เผ็ดกลาง",
    image: "/images/default-food.jpg",

    calories: 750,
    difficulty: "ปานกลาง",
    tags: ["หมูกรอบ", "แจ่ว", "ข้าว"],
    favorite: false,

    ingredients: [
      "หมูกรอบ",
      "พริกป่น",
      "ข้าวคั่ว",
      "มะนาว",
    ],

    recipe: [
      "เตรียมน้ำจิ้มแจ่ว",
      "หั่นหมูกรอบ",
      "เสิร์ฟคู่กัน",
    ],
  },

  {
    id: "soup-nor-mai",
    name: "ซุปหน่อไม้",
    category: "อาหารอีสาน",
    price: 50,
    time: "20 นาที",
    spicy: "🌶️ เผ็ดกลาง",
    image: "/images/default-food.jpg",

    calories: 150,
    difficulty: "ง่าย",
    tags: ["หน่อไม้", "สมุนไพร", "อีสาน"],
    favorite: false,

    ingredients: [
      "หน่อไม้",
      "พริก",
      "ข้าวคั่ว",
      "ใบย่านาง",
    ],

    recipe: [
      "ต้มหน่อไม้",
      "ปรุงรส",
      "ใส่ข้าวคั่ว",
      "คลุกให้เข้ากัน",
    ],
  },

  {
    id: "lap-kai",
    name: "ลาบไก่",
    category: "อาหารอีสาน",
    price: 70,
    time: "25 นาที",
    spicy: "🌶️🌶️ เผ็ดกลาง",
    image: "/images/default-food.jpg",

    calories: 300,
    difficulty: "ง่าย",
    tags: ["ไก่", "ลาบ", "ข้าวคั่ว"],
    favorite: false,

    ingredients: [
      "ไก่สับ",
      "ข้าวคั่ว",
      "พริกป่น",
      "หอมแดง",
    ],

    recipe: [
      "รวนไก่ให้สุก",
      "ใส่เครื่องลาบ",
      "คลุกให้เข้ากัน",
    ],
  },

  {
    id: "nam-prik-pla-ra",
    name: "น้ำพริกปลาร้า",
    category: "อาหารอีสาน",
    price: 50,
    time: "20 นาที",
    spicy: "🌶️🌶️🌶️ เผ็ดมาก",
    image: "/images/default-food.jpg",

    calories: 220,
    difficulty: "ง่าย",
    tags: ["ปลาร้า", "น้ำพริก", "ผัก"],
    favorite: false,

    ingredients: [
      "ปลาร้า",
      "พริก",
      "กระเทียม",
      "มะนาว",
    ],

    recipe: [
      "คั่วพริกและกระเทียม",
      "ตำรวมกัน",
      "ปรุงรส",
      "กินคู่ผักสด",
    ],
  },

  {
    id: "moo-kluk-krueng",
    name: "หมูคลุกฝุ่น",
    category: "อาหารอีสาน",
    price: 90,
    time: "30 นาที",
    spicy: "🌶️🌶️ เผ็ดกลาง",
    image: "/images/default-food.jpg",

    calories: 500,
    difficulty: "ปานกลาง",
    tags: ["หมู", "ทอด", "ข้าวคั่ว"],
    favorite: false,

    ingredients: [
      "หมู",
      "ข้าวคั่ว",
      "พริกป่น",
      "น้ำปลา",
    ],

    recipe: [
      "หมักหมู",
      "ทอดจนสุก",
      "คลุกข้าวคั่วและพริก",
    ],
  },
  {
    id: "pla-pao",
    name: "ปลาเผาเกลือ",
    category: "อาหารอีสาน",
    price: 150,
    time: "40 นาที",
    spicy: "ไม่เผ็ด",
    image: "/images/default-food.jpg",

    calories: 400,
    difficulty: "ปานกลาง",
    tags: ["ปลา", "ย่าง", "แจ่ว"],
    favorite: false,

    ingredients: [
      "ปลานิล",
      "เกลือ",
      "ตะไคร้",
      "สมุนไพร",
    ],

    recipe: [
      "ยัดสมุนไพรในตัวปลา",
      "คลุกเกลือ",
      "ย่างจนสุก",
      "เสิร์ฟกับน้ำจิ้มแจ่ว",
    ],
  },

  {
    id: "gang-nor-mai",
    name: "แกงหน่อไม้",
    category: "อาหารอีสาน",
    price: 70,
    time: "35 นาที",
    spicy: "🌶️ เผ็ดน้อย",
    image: "/images/default-food.jpg",

    calories: 220,
    difficulty: "ปานกลาง",
    tags: ["หน่อไม้", "แกง", "ผัก"],
    favorite: false,

    ingredients: [
      "หน่อไม้",
      "ใบย่านาง",
      "เห็ด",
      "พริก",
      "น้ำปลาร้า",
    ],

    recipe: [
      "ต้มน้ำใบย่านาง",
      "ใส่หน่อไม้",
      "ใส่ผักและเครื่องปรุง",
      "เคี่ยวจนเข้ากัน",
    ],
  },

  {
    id: "moo-tod-pla-ra",
    name: "หมูทอดปลาร้า",
    category: "อาหารอีสาน",
    price: 90,
    time: "30 นาที",
    spicy: "🌶️ เผ็ดน้อย",
    image: "/images/default-food.jpg",

    calories: 650,
    difficulty: "ง่าย",
    tags: ["หมู", "ทอด", "ปลาร้า"],
    favorite: false,

    ingredients: [
      "หมู",
      "ปลาร้า",
      "กระเทียม",
      "แป้งทอด",
    ],

    recipe: [
      "หมักหมูกับปลาร้า",
      "คลุกแป้ง",
      "ทอดจนกรอบ",
    ],
  },

  {
    id: "yam-khai-pla-salid",
    name: "ยำไข่ปลาสลิด",
    category: "อาหารอีสาน",
    price: 100,
    time: "25 นาที",
    spicy: "🌶️🌶️ เผ็ดกลาง",
    image: "/images/default-food.jpg",

    calories: 380,
    difficulty: "ง่าย",
    tags: ["ปลา", "ยำ", "เผ็ด"],
    favorite: false,

    ingredients: [
      "ไข่ปลาสลิด",
      "หอมแดง",
      "พริก",
      "มะนาว",
    ],

    recipe: [
      "ทอดไข่ปลา",
      "ทำน้ำยำ",
      "คลุกส่วนผสม",
    ],
  },

  {
    id: "kaeng-hed",
    name: "แกงเห็ดสามอย่าง",
    category: "อาหารอีสาน",
    price: 70,
    time: "30 นาที",
    spicy: "🌶️ เผ็ดน้อย",
    image: "/images/default-food.jpg",

    calories: 180,
    difficulty: "ง่าย",
    tags: ["เห็ด", "ผัก", "สุขภาพ"],
    favorite: false,

    ingredients: [
      "เห็ดฟาง",
      "เห็ดนางฟ้า",
      "เห็ดเข็มทอง",
      "ใบแมงลัก",
    ],

    recipe: [
      "ต้มน้ำแกง",
      "ใส่เห็ด",
      "ปรุงรส",
      "ใส่ใบแมงลัก",
    ],
  },

  {
    id: "laap-pla",
    name: "ลาบปลา",
    category: "อาหารอีสาน",
    price: 100,
    time: "30 นาที",
    spicy: "🌶️🌶️ เผ็ดกลาง",
    image: "/images/default-food.jpg",

    calories: 280,
    difficulty: "ปานกลาง",
    tags: ["ปลา", "ลาบ", "ข้าวคั่ว"],
    favorite: false,

    ingredients: [
      "เนื้อปลา",
      "ข้าวคั่ว",
      "พริกป่น",
      "หอมแดง",
      "มะนาว",
    ],

    recipe: [
      "นึ่งหรือรวนปลา",
      "แกะเนื้อปลา",
      "คลุกเครื่องลาบ",
    ],
  },

  {
    id: "kor-moo-tod",
    name: "คอหมูทอด",
    category: "อาหารอีสาน",
    price: 100,
    time: "30 นาที",
    spicy: "ไม่เผ็ด",
    image: "/images/default-food.jpg",

    calories: 720,
    difficulty: "ง่าย",
    tags: ["หมู", "ทอด", "ของกินเล่น"],
    favorite: false,

    ingredients: [
      "คอหมู",
      "กระเทียม",
      "พริกไทย",
      "น้ำปลา",
    ],

    recipe: [
      "หมักคอหมู",
      "ทอดจนเหลือง",
      "หั่นเสิร์ฟ",
    ],
  },

  {
    id: "yam-khai-dao-isan",
    name: "ยำไข่ดาวอีสาน",
    category: "อาหารอีสาน",
    price: 60,
    time: "15 นาที",
    spicy: "🌶️🌶️ เผ็ดกลาง",
    image: "/images/default-food.jpg",

    calories: 400,
    difficulty: "ง่าย",
    tags: ["ไข่", "ยำ", "อีสาน"],
    favorite: false,

    ingredients: [
      "ไข่ดาว",
      "พริก",
      "มะนาว",
      "หอมแดง",
    ],

    recipe: [
      "ทอดไข่ดาว",
      "ทำน้ำยำ",
      "ราดบนไข่",
    ],
  },

  {
    id: "gang-om-neua",
    name: "แกงอ่อมเนื้อ",
    category: "อาหารอีสาน",
    price: 120,
    time: "45 นาที",
    spicy: "🌶️ เผ็ดกลาง",
    image: "/images/default-food.jpg",

    calories: 350,
    difficulty: "ปานกลาง",
    tags: ["เนื้อ", "แกง", "ผักชีลาว"],
    favorite: false,

    ingredients: [
      "เนื้อวัว",
      "ผักชีลาว",
      "ข้าวคั่ว",
      "ผักรวม",
    ],

    recipe: [
      "ต้มเนื้อจนสุก",
      "ใส่เครื่องแกง",
      "เติมผัก",
      "ปรุงรส",
    ],
  },
    {
    id: "som-tam-khai-pu",
    name: "ส้มตำไข่ปู",
    category: "อาหารอีสาน",
    price: 120,
    time: "20 นาที",
    spicy: "🌶️🌶️ เผ็ดกลาง",
    image: "/images/default-food.jpg",

    calories: 350,
    difficulty: "ง่าย",
    tags: ["ส้มตำ", "ไข่ปู", "ทะเล"],
    favorite: false,

    ingredients: [
      "มะละกอ",
      "ไข่ปู",
      "พริก",
      "มะนาว",
      "น้ำปลาร้า",
    ],

    recipe: [
      "ตำพริกและเครื่องปรุง",
      "ใส่มะละกอ",
      "ใส่ไข่ปู",
      "คลุกให้เข้ากัน",
    ],
  },

  {
    id: "pla-ra-song-krueng",
    name: "ปลาร้าทรงเครื่อง",
    category: "อาหารอีสาน",
    price: 80,
    time: "25 นาที",
    spicy: "🌶️🌶️ เผ็ดกลาง",
    image: "/images/default-food.jpg",

    calories: 250,
    difficulty: "ง่าย",
    tags: ["ปลาร้า", "เครื่องเคียง", "อีสาน"],
    favorite: false,

    ingredients: [
      "ปลาร้า",
      "สมุนไพร",
      "พริก",
      "หอมแดง",
      "มะนาว",
    ],

    recipe: [
      "เตรียมน้ำปลาร้า",
      "ใส่สมุนไพร",
      "ปรุงรส",
    ],
  },

  {
    id: "yam-sai-krok-isan",
    name: "ยำไส้กรอกอีสาน",
    category: "อาหารอีสาน",
    price: 70,
    time: "15 นาที",
    spicy: "🌶️ เผ็ดกลาง",
    image: "/images/default-food.jpg",

    calories: 450,
    difficulty: "ง่าย",
    tags: ["ไส้กรอก", "ยำ", "อีสาน"],
    favorite: false,

    ingredients: [
      "ไส้กรอกอีสาน",
      "พริก",
      "มะนาว",
      "หอมแดง",
    ],

    recipe: [
      "หั่นไส้กรอก",
      "ทำน้ำยำ",
      "คลุกส่วนผสม",
    ],
  },

  {
    id: "moo-ping-isan",
    name: "หมูปิ้งอีสาน",
    category: "อาหารอีสาน",
    price: 60,
    time: "30 นาที",
    spicy: "ไม่เผ็ด",
    image: "/images/default-food.jpg",

    calories: 500,
    difficulty: "ง่าย",
    tags: ["หมู", "ปิ้ง", "ของกินเล่น"],
    favorite: false,

    ingredients: [
      "หมู",
      "กระเทียม",
      "รากผักชี",
      "น้ำปลา",
    ],

    recipe: [
      "หมักหมู",
      "เสียบไม้",
      "ปิ้งจนสุก",
    ],
  },

  {
    id: "pla-tod-nam-pla-isan",
    name: "ปลาทอดน้ำปลา",
    category: "อาหารอีสาน",
    price: 120,
    time: "35 นาที",
    spicy: "ไม่เผ็ด",
    image: "/images/default-food.jpg",

    calories: 550,
    difficulty: "ปานกลาง",
    tags: ["ปลา", "ทอด", "น้ำปลา"],
    favorite: false,

    ingredients: [
      "ปลา",
      "น้ำปลา",
      "น้ำมัน",
    ],

    recipe: [
      "ทอดปลา",
      "ทำน้ำปลาราด",
      "เสิร์ฟพร้อมข้าว",
    ],
  },

  {
    id: "laap-wun-sen",
    name: "ลาบวุ้นเส้น",
    category: "อาหารอีสาน",
    price: 70,
    time: "20 นาที",
    spicy: "🌶️🌶️ เผ็ดกลาง",
    image: "/images/default-food.jpg",

    calories: 300,
    difficulty: "ง่าย",
    tags: ["วุ้นเส้น", "ลาบ", "เผ็ด"],
    favorite: false,

    ingredients: [
      "วุ้นเส้น",
      "หมูสับ",
      "ข้าวคั่ว",
      "พริกป่น",
    ],

    recipe: [
      "ลวกวุ้นเส้น",
      "รวนหมู",
      "คลุกเครื่องลาบ",
    ],
  },

  {
    id: "gang-kua-kai",
    name: "แกงคั่วไก่บ้าน",
    category: "อาหารอีสาน",
    price: 100,
    time: "45 นาที",
    spicy: "🌶️ เผ็ดกลาง",
    image: "/images/default-food.jpg",

    calories: 450,
    difficulty: "ปานกลาง",
    tags: ["ไก่บ้าน", "แกง", "สมุนไพร"],
    favorite: false,

    ingredients: [
      "ไก่บ้าน",
      "พริกแกง",
      "สมุนไพร",
      "ผัก",
    ],

    recipe: [
      "ผัดเครื่องแกง",
      "ใส่ไก่",
      "เคี่ยวจนสุก",
    ],
  },

  {
    id: "yum-plara",
    name: "ยำปลาร้า",
    category: "อาหารอีสาน",
    price: 80,
    time: "20 นาที",
    spicy: "🌶️🌶️🌶️ เผ็ดมาก",
    image: "/images/default-food.jpg",

    calories: 220,
    difficulty: "ง่าย",
    tags: ["ปลาร้า", "ยำ", "เผ็ด"],
    favorite: false,

    ingredients: [
      "ปลาร้า",
      "พริก",
      "มะนาว",
      "ผักสด",
    ],

    recipe: [
      "เตรียมน้ำยำ",
      "ใส่ปลาร้า",
      "คลุกส่วนผสม",
    ],
  },

  {
    id: "moo-nam-tok-khao",
    name: "ข้าวน้ำตกหมู",
    category: "อาหารอีสาน",
    price: 80,
    time: "25 นาที",
    spicy: "🌶️🌶️ เผ็ดกลาง",
    image: "/images/default-food.jpg",

    calories: 600,
    difficulty: "ง่าย",
    tags: ["หมู", "ข้าว", "น้ำตก"],
    favorite: false,

    ingredients: [
      "หมูย่าง",
      "ข้าว",
      "ข้าวคั่ว",
      "พริกป่น",
    ],

    recipe: [
      "ย่างหมู",
      "ปรุงน้ำตก",
      "จัดเสิร์ฟกับข้าว",
    ],
  },

  {
    id: "kai-tod-samunphrai",
    name: "ไก่ทอดสมุนไพร",
    category: "อาหารอีสาน",
    price: 90,
    time: "30 นาที",
    spicy: "ไม่เผ็ด",
    image: "/images/default-food.jpg",

    calories: 600,
    difficulty: "ง่าย",
    tags: ["ไก่", "ทอด", "สมุนไพร"],
    favorite: false,

    ingredients: [
      "ไก่",
      "กระเทียม",
      "ตะไคร้",
      "ใบมะกรูด",
    ],

    recipe: [
      "หมักไก่",
      "ทอดจนกรอบ",
      "โรยสมุนไพรทอด",
    ],
  },
];