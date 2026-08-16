import Link from "next/link";
import {
  ArrowRight,
  ChefHat,
  Sparkles,
  Utensils,
} from "lucide-react";

const categories = [
  {
    name: "อาหารไทย",
    slug: "thai",
    description: "เมนูไทยยอดนิยม ทำกินเองได้ง่าย ๆ",
    icon: "🍛",
  },
  {
    name: "อาหารอีสาน",
    slug: "isan",
    description: "แซ่บนัว จัดจ้านแบบอาหารอีสาน",
    icon: "🌶️",
  },
  {
    name: "ก๋วยเตี๋ยว",
    slug: "noodle",
    description: "รวมเมนูเส้นหลากหลายแบบ",
    icon: "🍜",
  },
  {
    name: "ของหวาน",
    slug: "dessert",
    description: "เติมความหวานให้มื้อของคุณ",
    icon: "🍰",
  },
  {
    name: "เครื่องดื่ม",
    slug: "drinks",
    description: "เครื่องดื่มสดชื่น ดื่มง่ายทุกวัน",
    icon: "🥤",
  },
];

export default function CategoryPage() {
  return (
    <main className="min-h-screen bg-orange-50 py-12 transition-colors duration-500 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-5 md:px-6">

        {/* HEADER */}
        <section className="mb-12 text-center">

          <div className="flex items-center justify-center gap-3">
            <Sparkles
              size={28}
              className="text-orange-500 dark:text-orange-400"
            />

            <h1 className="text-4xl font-black tracking-tight text-gray-900 dark:text-white md:text-5xl">
              หมวดอาหาร
            </h1>

            <Sparkles
              size={28}
              className="text-orange-500 dark:text-orange-400"
            />
          </div>

          <p className="mx-auto mt-4 max-w-2xl text-gray-500 dark:text-gray-400">
            เลือกหมวดอาหารที่อยากกิน แล้วค้นหาเมนูที่ใช่สำหรับวันนี้
          </p>

        </section>

        {/* CATEGORY GRID */}
        <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/category/${category.slug}`}
              className="
                group
                relative
                overflow-hidden
                rounded-[2rem]
                border
                border-gray-100
                bg-white
                p-7
                shadow-md
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-orange-200
                hover:shadow-xl
                dark:border-slate-800
                dark:bg-slate-900
                dark:hover:border-orange-500/30
              "
            >

              {/* DECORATION */}
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-orange-100/70 transition-transform duration-500 group-hover:scale-125 dark:bg-orange-500/5" />

              <div className="relative">

                {/* ICON */}
                <div
                  className="
                    flex
                    h-20
                    w-20
                    items-center
                    justify-center
                    rounded-[1.5rem]
                    bg-orange-100
                    text-4xl
                    shadow-sm
                    transition-transform
                    duration-300
                    group-hover:scale-110
                    group-hover:rotate-2
                    dark:bg-orange-500/10
                  "
                >
                  {category.icon}
                </div>

                {/* TITLE */}
                <h2 className="mt-6 text-2xl font-black text-gray-900 dark:text-white">
                  {category.name}
                </h2>

                <p className="mt-2 leading-relaxed text-gray-500 dark:text-gray-400">
                  {category.description}
                </p>

                {/* BUTTON */}
                <div
                  className="
                    mt-7
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    bg-orange-50
                    px-4
                    py-2.5
                    text-sm
                    font-black
                    text-orange-600
                    transition-all
                    group-hover:bg-orange-500
                    group-hover:text-white
                    dark:bg-slate-800
                    dark:text-orange-400
                    dark:group-hover:bg-orange-500
                    dark:group-hover:text-white
                  "
                >
                  ดูเมนูในหมวดนี้
                  <ArrowRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </div>

              </div>
            </Link>
          ))}

        </section>

        {/* BOTTOM CTA */}
        <section
          className="
            mt-12
            overflow-hidden
            rounded-[2rem]
            bg-gradient-to-r
            from-orange-500
            to-orange-400
            p-8
            text-center
            shadow-lg
            md:mt-14
            md:p-10
          "
        >

          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20 text-white">
            <ChefHat size={28} />
          </div>

          <h2 className="mt-5 text-2xl font-black text-white md:text-3xl">
            ยังไม่รู้ว่าจะกินอะไรดี?
          </h2>

          <p className="mt-2 text-sm text-orange-50 md:text-base">
            ให้ MueNee ช่วยสุ่มเมนูให้คุณเลย
          </p>

          <Link
            href="/random"
            className="
              mt-6
              inline-flex
              items-center
              gap-2
              rounded-full
              bg-white
              px-6
              py-3
              font-black
              text-orange-600
              shadow-md
              transition-all
              hover:-translate-y-0.5
              hover:shadow-xl
            "
          >
            <Sparkles size={18} />
            สุ่มเมนูให้ฉัน
          </Link>

        </section>

        {/* FOOTER HINT */}
        <p className="mt-10 flex items-center justify-center gap-2 text-sm text-gray-400 dark:text-gray-600">
          <Utensils size={15} />
          MueNee — วันนี้กินอะไรดี?
        </p>

      </div>
    </main>
  );
}