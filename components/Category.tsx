import Link from "next/link";
import { Sparkles } from "lucide-react";

const categories = [
  {
    slug: "thai",
    icon: "🍛",
    title: "อาหารไทย",
    description: "เมนูไทยยอดนิยม รสชาติคุ้นเคย",
    color:
      "from-orange-100 to-orange-50 dark:from-orange-950/70 dark:to-slate-900",
  },
  {
    slug: "isan",
    icon: "🌶️",
    title: "อาหารอีสาน",
    description: "แซ่บ นัว ครบเครื่องแบบอีสาน",
    color:
      "from-red-100 to-orange-50 dark:from-red-950/70 dark:to-slate-900",
  },
  {
    slug: "noodle",
    icon: "🍜",
    title: "ก๋วยเตี๋ยว",
    description: "เมนูเส้นหลากหลาย",
    color:
      "from-yellow-100 to-yellow-50 dark:from-yellow-950/70 dark:to-slate-900",
  },
  {
    slug: "dessert",
    icon: "🍰",
    title: "ของหวาน",
    description: "ของหวานทุกประเภท",
    color:
      "from-pink-100 to-pink-50 dark:from-pink-950/70 dark:to-slate-900",
  },
  {
    slug: "drinks",
    icon: "🥤",
    title: "เครื่องดื่ม",
    description: "ชา กาแฟ น้ำผลไม้",
    color:
      "from-blue-100 to-blue-50 dark:from-blue-950/70 dark:to-slate-900",
  },
];

export default function Category() {
  return (
    <section
      className="
        bg-white
        px-5
        py-16
        transition-colors
        duration-500
        dark:bg-slate-950
        md:px-6
        md:py-20
      "
    >
      <div className="mx-auto max-w-7xl">

        {/* =====================================
            HEADER
        ===================================== */}

        <div className="text-center">

          <div
            className="
              mb-4
              inline-flex
              items-center
              gap-2
              rounded-full
              bg-orange-100
              px-4
              py-2
              text-sm
              font-bold
              text-orange-600
              dark:bg-orange-500/10
              dark:text-orange-400
            "
          >
            <Sparkles size={16} />
            MueNee Categories
          </div>

          <h2
            className="
              text-3xl
              font-black
              tracking-tight
              text-gray-900
              dark:text-white
              md:text-4xl
            "
          >
            หมวดอาหาร
          </h2>

          <p
            className="
              mx-auto
              mt-3
              max-w-xl
              text-gray-500
              dark:text-gray-400
            "
          >
            เลือกหมวดอาหารที่อยากกิน
            แล้วไปดูเมนูที่เหมาะกับคุณได้เลย
          </p>

        </div>

        {/* =====================================
            CATEGORY GRID
        ===================================== */}

        <div
          className="
            mt-10
            grid
            grid-cols-2
            gap-4
            sm:gap-5
            md:grid-cols-3
            lg:grid-cols-5
          "
        >
          {categories.map((category, index) => (
            <Link
              key={category.slug}
              href={`/category/${category.slug}`}
              className={`
                group
                relative
                overflow-hidden
                rounded-[1.75rem]
                border
                border-gray-100
                bg-gradient-to-br
                ${category.color}
                p-5
                text-center
                shadow-md
                transition-all
                duration-300
                hover:-translate-y-2
                hover:shadow-xl
                dark:border-slate-800
                dark:shadow-black/30
                dark:hover:border-orange-500/20
                animate-[fadeIn_0.5s_ease-out]
                md:p-6
              `}
              style={{
                animationDelay: `${index * 80}ms`,
              }}
            >

              {/* Decorative glow */}

              <div
                className="
                  pointer-events-none
                  absolute
                  -right-8
                  -top-8
                  h-24
                  w-24
                  rounded-full
                  bg-white/30
                  blur-2xl
                  transition-all
                  duration-500
                  group-hover:scale-150
                  dark:bg-white/5
                "
              />

              {/* =====================================
                  ICON
              ===================================== */}

              <div
                className="
                  relative
                  mx-auto
                  flex
                  h-20
                  w-20
                  items-center
                  justify-center
                  rounded-3xl
                  bg-white/80
                  text-5xl
                  shadow-sm
                  transition-all
                  duration-300
                  group-hover:scale-110
                  group-hover:-rotate-2
                  dark:bg-slate-800/80
                "
              >
                {category.icon}
              </div>

              {/* =====================================
                  TITLE
              ===================================== */}

              <h3
                className="
                  mt-5
                  text-lg
                  font-black
                  text-gray-900
                  transition-colors
                  group-hover:text-orange-600
                  dark:text-white
                  dark:group-hover:text-orange-400
                  md:text-xl
                "
              >
                {category.title}
              </h3>

              {/* =====================================
                  DESCRIPTION
              ===================================== */}

              <p
                className="
                  mt-2
                  min-h-[40px]
                  text-xs
                  leading-relaxed
                  text-gray-600
                  dark:text-gray-300
                  sm:text-sm
                "
              >
                {category.description}
              </p>

              {/* =====================================
                  BUTTON
              ===================================== */}

              <div
                className="
                  mt-5
                  inline-flex
                  w-full
                  items-center
                  justify-center
                  rounded-full
                  bg-white
                  px-4
                  py-2.5
                  text-sm
                  font-bold
                  text-orange-500
                  shadow-sm
                  transition-all
                  duration-300
                  group-hover:bg-orange-500
                  group-hover:text-white
                  group-hover:shadow-md
                  dark:bg-slate-800
                  dark:text-orange-400
                  dark:group-hover:bg-orange-500
                  dark:group-hover:text-white
                "
              >
                ดูเมนู
                <span
                  className="
                    ml-1
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                >
                  →
                </span>
              </div>

            </Link>
          ))}
        </div>

        {/* =====================================
            BOTTOM HINT
        ===================================== */}

        <div className="mt-8 text-center">
          <p
            className="
              text-sm
              text-gray-400
              dark:text-gray-500
            "
          >
            ✨ เลือกหมวดที่อยากกิน แล้วค้นหาเมนูที่ใช่สำหรับวันนี้
          </p>
        </div>

      </div>
    </section>
  );
}