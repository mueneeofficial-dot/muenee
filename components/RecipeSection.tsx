
import Link from "next/link";
import Image from "next/image";

const recipes = [
  {
    id: "kaprao-moo-kai-dao",
    image: "/images/kaprao-pork-egg.jpg",
    title: "ผัดกะเพราหมูไข่ดาว",
    time: "15 นาที",
    level: "ง่าย",
    ingredients: [
      "หมูสับ",
      "ใบกะเพรา",
      "พริก",
      "กระเทียม",
      "ไข่ไก่",
    ],
    steps: [
      "โขลกพริกและกระเทียมให้ละเอียด",
      "ผัดพริกกระเทียมกับน้ำมันจนหอม",
      "ใส่หมูสับผัดจนสุก",
      "ปรุงรสและใส่ใบกะเพรา",
      "ทอดไข่ดาวเสิร์ฟพร้อมข้าว",
    ],
  },
  {
    id: "som-tam-thai",
    image: "/images/default-food.jpg",
    title: "ส้มตำไทย",
    time: "15 นาที",
    level: "ง่าย",
    ingredients: [
      "มะละกอดิบ",
      "มะเขือเทศ",
      "ถั่วฝักยาว",
      "ถั่วลิสง",
      "น้ำปลา",
    ],
    steps: [
      "ตำพริกกับกระเทียม",
      "ใส่มะละกอและผัก",
      "ปรุงรสด้วยน้ำปลาและมะนาว",
      "คลุกให้เข้ากัน",
    ],
  },
];

export default function RecipeSection() {
  return (
    <section className="bg-white dark:bg-gray-900 py-16 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">
        {/* หัวข้อ */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white">
            สูตรอาหารยอดนิยม
          </h2>

          <p className="mt-4 text-gray-500 dark:text-gray-400">
            เรียนรู้วิธีทำอาหารง่าย ๆ ที่บ้าน
          </p>
        </div>

        {/* สูตรอาหาร */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {recipes.map((recipe, index) => (
            <div
              key={recipe.id}
              className="
                bg-orange-50
                dark:bg-gray-950
                rounded-[35px]
                overflow-hidden
                shadow-md
                dark:shadow-black/30
                hover:shadow-xl
                hover:-translate-y-2
                transition-all
                duration-300
                border
                border-transparent
                dark:border-gray-800
                animate-[fadeIn_0.6s_ease-out]
              "
              style={{
                animationDelay: `${index * 120}ms`,
              }}
            >
              {/* Image */}
              <div className="h-64 overflow-hidden">
                <Image
                  src={recipe.image}
                  alt={recipe.title}
                  width={800}
                  height={500}
                  className="
                    w-full
                    h-full
                    object-cover
                    transition-transform
                    duration-700
                    hover:scale-105
                  "
                />
              </div>

              <div className="p-8">
                {/* ชื่อเมนู */}
                <h3 className="text-3xl font-bold text-gray-800 dark:text-white">
                  {recipe.title}
                </h3>

                {/* เวลา / ระดับ */}
                <div className="mt-4 flex flex-wrap gap-3">
                  <span className="bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 px-4 py-2 rounded-full text-sm shadow-sm">
                    ⏱️ {recipe.time}
                  </span>

                  <span className="bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 px-4 py-2 rounded-full text-sm shadow-sm">
                    👨‍🍳 {recipe.level}
                  </span>
                </div>

                {/* วัตถุดิบ */}
                <div className="mt-8">
                  <h4 className="font-bold text-orange-600 dark:text-orange-400">
                    🥕 วัตถุดิบ
                  </h4>

                  <ul className="mt-3 text-gray-600 dark:text-gray-300 space-y-1">
                    {recipe.ingredients.map((item, i) => (
                      <li key={i}>• {item}</li>
                    ))}
                  </ul>
                </div>

                {/* วิธีทำ */}
                <div className="mt-8">
                  <h4 className="font-bold text-orange-600 dark:text-orange-400">
                    👨‍🍳 วิธีทำ
                  </h4>

                  <ol className="mt-3 text-gray-600 dark:text-gray-300 space-y-2 list-decimal list-inside">
                    {recipe.steps.map((step, i) => (
                      <li key={i}>{step}</li>
                    ))}
                  </ol>
                </div>

                {/* ปุ่ม */}
                <Link
                  href={`/recipe/${recipe.id}`}
                  className="
                    mt-8
                    block
                    w-full
                    bg-orange-500
                    hover:bg-orange-600
                    text-white
                    text-center
                    py-3
                    rounded-full
                    font-bold
                    shadow-md
                    hover:shadow-lg
                    hover:scale-[1.02]
                    transition-all
                    duration-300
                  "
                >
                  ดูสูตรเต็ม →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
