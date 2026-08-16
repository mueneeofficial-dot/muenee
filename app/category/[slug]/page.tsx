import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpDown,
  Search,
  Sparkles,
} from "lucide-react";

import { menus } from "@/data";
import { Menu } from "@/lib/menu";
import MenuCard from "@/components/MenuCard";

const categoryMap: Record<
  string,
  {
    name: string;
    description: string;
    icon: string;
  }
> = {
  thai: {
    name: "อาหารไทย",
    description:
      "เมนูไทยยอดนิยมที่ทำกินเองได้ง่าย ๆ",
    icon: "🍛",
  },

  isan: {
    name: "อาหารอีสาน",
    description:
      "เมนูแซ่บนัว จัดจ้านแบบอาหารอีสาน",
    icon: "🌶️",
  },

  noodle: {
    name: "ก๋วยเตี๋ยว",
    description:
      "รวมเมนูเส้นหลากหลายแบบ",
    icon: "🍜",
  },

  dessert: {
    name: "ของหวาน",
    description:
      "เมนูหวาน ๆ สำหรับปิดท้ายมื้ออร่อย",
    icon: "🍰",
  },

  drinks: {
    name: "เครื่องดื่ม",
    description:
      "เครื่องดื่มสดชื่น ดื่มง่ายทุกวัน",
    icon: "🥤",
  },
};

type Props = {
  params: Promise<{
    slug: string;
  }>;

  searchParams: Promise<{
    q?: string;
    sort?: string;
  }>;
};

export default async function CategorySlugPage({
  params,
  searchParams,
}: Props) {
  const { slug } = await params;

  const {
    q = "",
    sort = "default",
  } = await searchParams;

  const category = categoryMap[slug];

  // =====================================
  // INVALID CATEGORY
  // =====================================

  if (!category) {
    return (
      <main
        className="
          min-h-screen
          bg-orange-50
          py-20
          dark:bg-slate-950
        "
      >
        <div className="mx-auto max-w-3xl px-5 text-center">

          <div
            className="
              mx-auto
              flex
              h-24
              w-24
              items-center
              justify-center
              rounded-full
              bg-orange-100
              text-5xl
              dark:bg-orange-500/10
            "
          >
            🍽️
          </div>

          <h1
            className="
              mt-7
              text-3xl
              font-black
              text-gray-900
              dark:text-white
            "
          >
            ไม่พบหมวดอาหาร
          </h1>

          <p
            className="
              mt-3
              text-gray-500
              dark:text-gray-400
            "
          >
            หมวดอาหารที่คุณกำลังค้นหาไม่มีอยู่ในระบบ
          </p>

          <Link
            href="/category"
            className="
              mt-8
              inline-flex
              items-center
              gap-2
              rounded-full
              bg-orange-500
              px-6
              py-3
              font-bold
              text-white
              shadow-md
              transition-all
              hover:-translate-y-0.5
              hover:bg-orange-600
            "
          >
            <ArrowLeft size={18} />
            กลับหมวดอาหาร
          </Link>

        </div>
      </main>
    );
  }

  // =====================================
  // CATEGORY MENUS
  // =====================================

  const normalizedQuery =
    q.trim().toLowerCase();

  let categoryMenus: Menu[] = menus.filter(
    (menu: Menu) =>
      menu.category === category.name
  );

  // =====================================
  // SEARCH
  // =====================================

  if (normalizedQuery) {
    categoryMenus =
      categoryMenus.filter(
        (menu: Menu) => {
          const matchName =
            menu.name
              .toLowerCase()
              .includes(normalizedQuery);

          const matchTags =
            (menu.tags || []).some(
              (tag) =>
                tag
                  .toLowerCase()
                  .includes(
                    normalizedQuery
                  )
            );

          return matchName || matchTags;
        }
      );
  }

  // =====================================
  // SORT
  // =====================================

  if (sort === "name") {
    categoryMenus.sort((a, b) =>
      a.name.localeCompare(b.name, "th")
    );
  }

  if (sort === "price-low") {
    categoryMenus.sort(
      (a, b) => a.price - b.price
    );
  }

  if (sort === "price-high") {
    categoryMenus.sort(
      (a, b) => b.price - a.price
    );
  }

  if (sort === "time-low") {
    categoryMenus.sort((a, b) => {
      const timeA =
        Number(a.time.replace(/\D/g, "")) || 0;

      const timeB =
        Number(b.time.replace(/\D/g, "")) || 0;

      return timeA - timeB;
    });
  }

  if (sort === "calories-low") {
    categoryMenus.sort(
      (a, b) => a.calories - b.calories
    );
  }

  if (sort === "calories-high") {
    categoryMenus.sort(
      (a, b) => b.calories - a.calories
    );
  }

  // =====================================
  // RANDOM MENU
  // =====================================

  const randomMenu =
    categoryMenus.length > 0
      ? categoryMenus[
          Math.floor(
            Math.random() *
              categoryMenus.length
          )
        ]
      : null;

  return (
    <main
      className="
        min-h-screen
        bg-orange-50
        py-10
        transition-colors
        duration-500
        dark:bg-slate-950
      "
    >
      <div className="mx-auto max-w-7xl px-5 md:px-6">

        {/* =====================================
            BACK
        ===================================== */}

        <div className="mb-7">

          <Link
            href="/category"
            className="
              inline-flex
              items-center
              gap-2
              font-bold
              text-orange-500
              transition-all
              hover:-translate-x-1
              hover:text-orange-600
              dark:text-orange-400
              dark:hover:text-orange-300
            "
          >
            <ArrowLeft size={19} />
            กลับหมวดอาหาร
          </Link>

        </div>

        {/* =====================================
            HEADER
        ===================================== */}

        <section
          className="
            mb-8
            overflow-hidden
            rounded-[2rem]
            border
            border-gray-100
            bg-white
            p-7
            shadow-md
            dark:border-slate-800
            dark:bg-slate-900
            md:p-10
          "
        >

          <div
            className="
              flex
              flex-col
              gap-6
              md:flex-row
              md:items-center
              md:justify-between
            "
          >

            <div className="flex items-center gap-5">

              <div
                className="
                  flex
                  h-20
                  w-20
                  shrink-0
                  items-center
                  justify-center
                  rounded-[1.5rem]
                  bg-orange-100
                  text-4xl
                  dark:bg-orange-500/10
                "
              >
                {category.icon}
              </div>

              <div>

                <div className="flex items-center gap-2">

                  <Sparkles
                    size={18}
                    className="
                      text-orange-500
                      dark:text-orange-400
                    "
                  />

                  <span
                    className="
                      text-sm
                      font-bold
                      text-orange-500
                      dark:text-orange-400
                    "
                  >
                    หมวดอาหาร
                  </span>

                </div>

                <h1
                  className="
                    mt-1
                    text-3xl
                    font-black
                    text-gray-900
                    dark:text-white
                    md:text-4xl
                  "
                >
                  {category.name}
                </h1>

                <p
                  className="
                    mt-2
                    text-gray-500
                    dark:text-gray-400
                  "
                >
                  {category.description}
                </p>

              </div>

            </div>

            <Link
              href="/menus"
              className="
                inline-flex
                items-center
                justify-center
                gap-2
                rounded-full
                border
                border-orange-200
                px-5
                py-3
                font-bold
                text-orange-500
                transition
                hover:bg-orange-50
                dark:border-orange-500/30
                dark:text-orange-400
                dark:hover:bg-orange-500/10
              "
            >
              <Search size={18} />
              ค้นหาเมนูทั้งหมด
            </Link>

          </div>

        </section>

        {/* =====================================
            SEARCH + SORT
        ===================================== */}

        <form
          action={`/category/${slug}`}
          method="GET"
          className="
            mb-8
            flex
            flex-col
            gap-3
            md:flex-row
          "
        >

          {/* SEARCH */}

          <div className="relative flex-1">

            <Search
              size={20}
              className="
                pointer-events-none
                absolute
                left-4
                top-1/2
                -translate-y-1/2
                text-gray-400
              "
            />

            <input
              name="q"
              defaultValue={q}
              placeholder={`ค้นหาเมนูในหมวด${category.name}...`}
              className="
                h-12
                w-full
                rounded-full
                border
                border-gray-200
                bg-white
                pl-12
                pr-5
                text-gray-900
                outline-none
                transition
                focus:border-orange-400
                focus:ring-4
                focus:ring-orange-500/10
                dark:border-slate-700
                dark:bg-slate-900
                dark:text-white
                dark:placeholder:text-gray-500
              "
            />

          </div>

          {/* SORT */}

          <div className="relative">

            <ArrowUpDown
              size={18}
              className="
                pointer-events-none
                absolute
                left-4
                top-1/2
                -translate-y-1/2
                text-orange-500
                dark:text-orange-400
              "
            />

            <select
              name="sort"
              defaultValue={sort}
              className="
                h-12
                w-full
                appearance-none
                rounded-full
                border
                border-gray-200
                bg-white
                pl-11
                pr-10
                font-semibold
                text-gray-700
                outline-none
                dark:border-slate-700
                dark:bg-slate-900
                dark:text-gray-200
                md:w-60
              "
            >
              <option value="default">
                เรียงลำดับ
              </option>

              <option value="name">
                ชื่อ ก-ฮ
              </option>

              <option value="price-low">
                ราคาน้อย → มาก
              </option>

              <option value="price-high">
                ราคามาก → น้อย
              </option>

              <option value="time-low">
                เวลาทำน้อย → มาก
              </option>

              <option value="calories-low">
                แคลอรี่น้อย → มาก
              </option>

              <option value="calories-high">
                แคลอรี่มาก → น้อย
              </option>
            </select>

          </div>

          <button
            type="submit"
            className="
              h-12
              rounded-full
              bg-orange-500
              px-6
              font-black
              text-white
              shadow-md
              transition-all
              hover:-translate-y-0.5
              hover:bg-orange-600
            "
          >
            ค้นหา
          </button>

        </form>

        {/* =====================================
            RESULT BAR
        ===================================== */}

        <div
          className="
            mb-7
            flex
            flex-col
            gap-4
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >

          <div>

            <p className="text-gray-600 dark:text-gray-300">
              พบ{" "}
              <span
                className="
                  font-black
                  text-orange-500
                  dark:text-orange-400
                "
              >
                {categoryMenus.length}
              </span>{" "}
              เมนู
            </p>

            {q && (
              <p
                className="
                  mt-1
                  text-sm
                  text-gray-400
                  dark:text-gray-500
                "
              >
                ผลการค้นหาสำหรับ “{q}”
              </p>
            )}

          </div>

          {randomMenu && (
            <Link
              href={`/recipe/${randomMenu.id}`}
              className="
                inline-flex
                items-center
                justify-center
                gap-2
                rounded-full
                bg-orange-500
                px-5
                py-3
                font-black
                text-white
                shadow-md
                transition-all
                hover:-translate-y-0.5
                hover:bg-orange-600
              "
            >
              <Sparkles size={18} />
              สุ่มเมนู
            </Link>
          )}

        </div>

        {/* =====================================
            MENU GRID
        ===================================== */}

        {categoryMenus.length > 0 ? (

          <div
            className="
              grid
              grid-cols-1
              gap-6
              sm:grid-cols-2
              lg:grid-cols-3
              xl:grid-cols-4
            "
          >
            {categoryMenus.map(
              (menu: Menu, index) => (
                <MenuCard
                  key={menu.id}
                  menu={menu}
                  priority={index < 4}
                />
              )
            )}
          </div>

        ) : (

          /* NO RESULT */

          <div
            className="
              rounded-[2rem]
              border
              border-gray-100
              bg-white
              p-12
              text-center
              shadow-sm
              dark:border-slate-800
              dark:bg-slate-900
            "
          >

            <div
              className="
                mx-auto
                flex
                h-20
                w-20
                items-center
                justify-center
                rounded-full
                bg-orange-100
                dark:bg-orange-500/10
              "
            >
              <Search
                size={36}
                className="
                  text-orange-500
                  dark:text-orange-400
                "
              />
            </div>

            <h2
              className="
                mt-6
                text-2xl
                font-black
                text-gray-900
                dark:text-white
              "
            >
              ไม่พบเมนู
            </h2>

            <p
              className="
                mt-3
                text-gray-500
                dark:text-gray-400
              "
            >
              ลองเปลี่ยนคำค้นหา แล้วลองอีกครั้ง
            </p>

            <Link
              href={`/category/${slug}`}
              className="
                mt-6
                inline-flex
                items-center
                gap-2
                rounded-full
                bg-orange-500
                px-6
                py-3
                font-black
                text-white
                shadow-md
                transition
                hover:bg-orange-600
              "
            >
              <ArrowLeft size={18} />
              ดูเมนูทั้งหมด
            </Link>

          </div>
        )}

        {/* =====================================
            BOTTOM
        ===================================== */}

        <div className="mt-12 flex flex-wrap justify-center gap-3">

          <Link
            href="/category"
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-gray-200
              bg-white
              px-6
              py-3
              font-bold
              text-gray-700
              transition
              hover:border-orange-300
              hover:text-orange-500
              dark:border-slate-700
              dark:bg-slate-900
              dark:text-gray-200
            "
          >
            <ArrowLeft size={18} />
            หมวดอาหารทั้งหมด
          </Link>

          <Link
            href="/menus"
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              bg-gray-800
              px-6
              py-3
              font-black
              text-white
              transition
              hover:bg-gray-900
              dark:bg-slate-700
              dark:hover:bg-slate-600
            "
          >
            <Search size={18} />
            เมนูทั้งหมด
          </Link>

        </div>

        <p
          className="
            mt-8
            text-center
            text-sm
            text-gray-400
            dark:text-gray-600
          "
        >
          ✨ MueNee — วันนี้กินอะไรดี?
        </p>

      </div>
    </main>
  );
}