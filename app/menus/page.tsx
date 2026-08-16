"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import {
  Search,
  ArrowUpDown,
  Sparkles,
  X,
  Flame,
  SlidersHorizontal,
} from "lucide-react";

import { menus } from "@/data";


import MenuCard from "@/components/MenuCard";

const ITEMS_PER_PAGE = 12;

const categories = [
  "ทั้งหมด",
  "อาหารไทย",
  "อาหารอีสาน",
  "ก๋วยเตี๋ยว",
  "ของหวาน",
  "เครื่องดื่ม",
];

const spicyOptions = [
  "ทั้งหมด",
  "ไม่เผ็ด",
  "เผ็ดน้อย",
  "เผ็ดกลาง",
  "เผ็ดมาก",
];

const sweetnessOptions = [
  "ทั้งหมด",
  "ไม่หวาน",
  "หวานน้อย",
  "หวาน",
  "หวานธรรมชาติ",
];

const calorieOptions = [
  "ทั้งหมด",
  "ต่ำกว่า 300 kcal",
  "300-500 kcal",
  "500-700 kcal",
  "มากกว่า 700 kcal",
];

const difficultyOptions = [
  "ทั้งหมด",
  "ง่าย",
  "ปานกลาง",
  "ยาก",
];

export default function MenusPage() {
  const router = useRouter();

  const [keyword, setKeyword] = useState("");
  const [category, setCategory] =
    useState("ทั้งหมด");
  const [spicy, setSpicy] =
    useState("ทั้งหมด");
  const [sweetness, setSweetness] =
    useState("ทั้งหมด");
  const [calories, setCalories] =
    useState("ทั้งหมด");
  const [difficulty, setDifficulty] =
    useState("ทั้งหมด");
  const [tag, setTag] =
    useState("ทั้งหมด");

  const [currentPage, setCurrentPage] =
    useState(1);

  const [sort, setSort] =
    useState("default");

  // =====================================
  // TAG OPTIONS
  // =====================================

  const tagOptions = useMemo(() => {
    return [
      "ทั้งหมด",
      ...Array.from(
        new Set(
          menus.flatMap(
            (menu) => menu.tags || []
          )
        )
      ),
    ];
  }, []);

  // =====================================
  // RESET PAGE
  // =====================================

  useEffect(() => {
    setCurrentPage(1);
  }, [
    keyword,
    category,
    spicy,
    sweetness,
    calories,
    difficulty,
    tag,
    sort,
  ]);

  // =====================================
  // FILTER + SORT
  // =====================================

  const filteredMenus = useMemo(() => {
    let result = menus.filter((menu) => {
      const normalizedKeyword =
        keyword.trim().toLowerCase();

      const matchKeyword =
        !normalizedKeyword ||
        menu.name
          .toLowerCase()
          .includes(normalizedKeyword) ||
        (menu.tags || []).some((item) =>
          item
            .toLowerCase()
            .includes(normalizedKeyword)
        );

      const matchCategory =
        category === "ทั้งหมด" ||
        menu.category === category;

      // SPICY

      const menuSpicy = menu.spicy
        ? menu.spicy
            .replace(/🌶️/g, "")
            .trim()
        : "";

      const matchSpicy =
        spicy === "ทั้งหมด" ||
        menuSpicy.includes(spicy);

      // SWEETNESS

      const menuSweetness =
        menu.sweetness?.trim() || "";

      const matchSweetness =
        sweetness === "ทั้งหมด" ||
        menuSweetness.includes(sweetness);

      // CALORIES

      const matchCalories =
        calories === "ทั้งหมด" ||
        (calories === "ต่ำกว่า 300 kcal" &&
          menu.calories < 300) ||
        (calories === "300-500 kcal" &&
          menu.calories >= 300 &&
          menu.calories <= 500) ||
        (calories === "500-700 kcal" &&
          menu.calories > 500 &&
          menu.calories <= 700) ||
        (calories === "มากกว่า 700 kcal" &&
          menu.calories > 700);

      // DIFFICULTY

      const matchDifficulty =
        difficulty === "ทั้งหมด" ||
        menu.difficulty === difficulty;

      // TAG

      const matchTag =
        tag === "ทั้งหมด" ||
        (menu.tags || []).includes(tag);

      return (
        matchKeyword &&
        matchCategory &&
        matchSpicy &&
        matchSweetness &&
        matchCalories &&
        matchDifficulty &&
        matchTag
      );
    });

    // SORT

    if (sort === "name") {
      result.sort((a, b) =>
        a.name.localeCompare(b.name, "th")
      );
    }

    if (sort === "price-low") {
      result.sort(
        (a, b) => a.price - b.price
      );
    }

    if (sort === "price-high") {
      result.sort(
        (a, b) => b.price - a.price
      );
    }

    if (sort === "time-low") {
      result.sort((a, b) => {
        const timeA =
          Number(a.time.replace(/\D/g, "")) || 0;

        const timeB =
          Number(b.time.replace(/\D/g, "")) || 0;

        return timeA - timeB;
      });
    }

    if (sort === "calories-low") {
      result.sort(
        (a, b) => a.calories - b.calories
      );
    }

    if (sort === "calories-high") {
      result.sort(
        (a, b) => b.calories - a.calories
      );
    }

    return result;
  }, [
    keyword,
    category,
    spicy,
    sweetness,
    calories,
    difficulty,
    tag,
    sort,
  ]);

  // =====================================
  // PAGINATION
  // =====================================

  const totalPages = Math.ceil(
    filteredMenus.length / ITEMS_PER_PAGE
  );

  const currentMenus = filteredMenus.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  // =====================================
  // RANDOM MENU
  // =====================================

  const randomMenu = () => {
    if (filteredMenus.length === 0) {
      return;
    }

    const random =
      filteredMenus[
        Math.floor(
          Math.random() *
            filteredMenus.length
        )
      ];

    router.push(`/recipe/${random.id}`);
  };

  // =====================================
  // CLEAR FILTERS
  // =====================================

  const clearFilters = () => {
    setKeyword("");
    setCategory("ทั้งหมด");
    setSpicy("ทั้งหมด");
    setSweetness("ทั้งหมด");
    setCalories("ทั้งหมด");
    setDifficulty("ทั้งหมด");
    setTag("ทั้งหมด");
    setSort("default");
    setCurrentPage(1);
  };

  // =====================================
  // ACTIVE FILTER
  // =====================================

  const hasActiveFilters =
    keyword.trim() !== "" ||
    category !== "ทั้งหมด" ||
    spicy !== "ทั้งหมด" ||
    sweetness !== "ทั้งหมด" ||
    calories !== "ทั้งหมด" ||
    difficulty !== "ทั้งหมด" ||
    tag !== "ทั้งหมด" ||
    sort !== "default";

  return (
    <main
      className="
        min-h-screen
        bg-orange-50
        py-12
        transition-colors
        duration-500
        dark:bg-slate-950
      "
    >
      <div className="mx-auto max-w-7xl px-5 md:px-6">

        {/* =====================================
            HEADER
        ===================================== */}

        <div className="mb-10 text-center">

          <div className="flex items-center justify-center gap-3">

            <Sparkles
              size={28}
              className="
                text-orange-500
                dark:text-orange-400
              "
            />

            <h1
              className="
                text-4xl
                font-black
                tracking-tight
                text-gray-900
                dark:text-white
                md:text-5xl
              "
            >
              เมนูทั้งหมด
            </h1>

            <Sparkles
              size={28}
              className="
                text-orange-500
                dark:text-orange-400
              "
            />

          </div>

          <p
            className="
              mt-4
              text-gray-500
              dark:text-gray-400
            "
          >
            ค้นหาเมนูที่อยากกิน
            แล้วเลือกสูตรที่ใช่สำหรับวันนี้
          </p>

        </div>

        {/* =====================================
            SEARCH
        ===================================== */}

        <div
          className="
            relative
            mx-auto
            mb-8
            max-w-4xl
          "
        >

          <Search
            size={22}
            className="
              absolute
              left-5
              top-1/2
              -translate-y-1/2
              text-gray-400
              dark:text-gray-500
            "
          />

          <input
            type="text"
            value={keyword}
            onChange={(e) =>
              setKeyword(e.target.value)
            }
            placeholder="ค้นหาเมนู เช่น ผัดกะเพรา ชาไทย ข้าว..."
            className="
              h-14
              w-full
              rounded-full
              border
              border-gray-200
              bg-white
              pl-14
              pr-14
              text-gray-900
              shadow-sm
              outline-none
              transition-all
              placeholder:text-gray-400
              focus:border-orange-400
              focus:ring-4
              focus:ring-orange-500/10
              dark:border-slate-700
              dark:bg-slate-900
              dark:text-white
              dark:placeholder:text-gray-500
              dark:focus:border-orange-500
            "
          />

          {keyword && (
            <button
              type="button"
              onClick={() =>
                setKeyword("")
              }
              aria-label="ล้างการค้นหา"
              className="
                absolute
                right-3
                top-1/2
                flex
                h-9
                w-9
                -translate-y-1/2
                items-center
                justify-center
                rounded-full
                text-gray-400
                transition
                hover:bg-gray-100
                hover:text-gray-700
                dark:hover:bg-slate-800
                dark:hover:text-white
              "
            >
              <X size={18} />
            </button>
          )}

        </div>

        {/* =====================================
            FILTER PANEL
        ===================================== */}

        <section
          className="
            mb-10
            rounded-[1.75rem]
            border
            border-gray-100
            bg-white
            p-5
            shadow-sm
            dark:border-slate-800
            dark:bg-slate-900
            md:p-7
          "
        >

          <div className="mb-6 flex items-center justify-between gap-3">

            <div className="flex items-center gap-3">

              <div
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-xl
                  bg-orange-100
                  text-orange-500
                  dark:bg-orange-500/10
                  dark:text-orange-400
                "
              >
                <SlidersHorizontal
                  size={20}
                />
              </div>

              <div>

                <h2
                  className="
                    font-black
                    text-gray-900
                    dark:text-white
                  "
                >
                  ค้นหาและกรองเมนู
                </h2>

                <p
                  className="
                    text-xs
                    text-gray-500
                    dark:text-gray-400
                  "
                >
                  เลือกเงื่อนไขที่ต้องการได้เลย
                </p>

              </div>

            </div>

            {hasActiveFilters && (
              <button
                type="button"
                onClick={clearFilters}
                className="
                  rounded-full
                  px-4
                  py-2
                  text-sm
                  font-bold
                  text-orange-500
                  transition
                  hover:bg-orange-50
                  dark:text-orange-400
                  dark:hover:bg-orange-500/10
                "
              >
                ล้างทั้งหมด
              </button>
            )}

          </div>

          {/* CATEGORY */}

          <FilterSection title="หมวดอาหาร">
            {categories.map((item) => (
              <FilterButton
                key={item}
                active={category === item}
                onClick={() =>
                  setCategory(item)
                }
              >
                {item}
              </FilterButton>
            ))}
          </FilterSection>

          {/* SPICY */}

          <FilterSection title="ระดับความเผ็ด">
            {spicyOptions.map((item) => (
              <FilterButton
                key={item}
                active={spicy === item}
                activeClass="red"
                onClick={() =>
                  setSpicy(item)
                }
              >
                {item}
              </FilterButton>
            ))}
          </FilterSection>

          {/* SWEETNESS */}

          <FilterSection title="ระดับความหวาน">
            {sweetnessOptions.map((item) => (
              <FilterButton
                key={item}
                active={sweetness === item}
                activeClass="pink"
                onClick={() =>
                  setSweetness(item)
                }
              >
                {item}
              </FilterButton>
            ))}
          </FilterSection>

          {/* CALORIES */}

          <FilterSection title="แคลอรี่">
            {calorieOptions.map((item) => (
              <FilterButton
                key={item}
                active={calories === item}
                activeClass="green"
                onClick={() =>
                  setCalories(item)
                }
              >
                {item}
              </FilterButton>
            ))}
          </FilterSection>

          {/* DIFFICULTY */}

          <FilterSection title="ระดับความยาก">
            {difficultyOptions.map((item) => (
              <FilterButton
                key={item}
                active={
                  difficulty === item
                }
                activeClass="blue"
                onClick={() =>
                  setDifficulty(item)
                }
              >
                {item}
              </FilterButton>
            ))}
          </FilterSection>

          {/* TAG */}

          <FilterSection
            title="แท็กเมนู"
            last
          >
            <div className="max-h-36 overflow-y-auto pr-1">
              <div className="flex flex-wrap gap-2">

                {tagOptions.map((item) => (
                  <FilterButton
                    key={item}
                    active={tag === item}
                    activeClass="purple"
                    onClick={() =>
                      setTag(item)
                    }
                  >
                    {item}
                  </FilterButton>
                ))}

              </div>
            </div>
          </FilterSection>

        </section>

        {/* =====================================
            ACTION BAR
        ===================================== */}

        <div
          className="
            mb-8
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
                {filteredMenus.length}
              </span>{" "}
              เมนู
            </p>

            {hasActiveFilters && (
              <p
                className="
                  mt-1
                  text-xs
                  text-gray-400
                  dark:text-gray-500
                "
              >
                กำลังแสดงผลตามตัวกรองที่เลือก
              </p>
            )}

          </div>

          <div className="flex flex-wrap gap-3">

            <button
              type="button"
              onClick={randomMenu}
              disabled={
                filteredMenus.length === 0
              }
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
                hover:shadow-lg
                disabled:cursor-not-allowed
                disabled:opacity-40
              "
            >
              <Sparkles size={18} />
              สุ่มเมนู
            </button>

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
                value={sort}
                onChange={(e) =>
                  setSort(e.target.value)
                }
                className="
                  h-12
                  appearance-none
                  rounded-full
                  border
                  border-gray-200
                  bg-white
                  pl-11
                  pr-10
                  font-semibold
                  text-gray-700
                  shadow-sm
                  outline-none
                  transition
                  focus:border-orange-400
                  dark:border-slate-700
                  dark:bg-slate-900
                  dark:text-gray-200
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

          </div>

        </div>

        {/* =====================================
            MENU GRID
        ===================================== */}

        {currentMenus.length > 0 ? (

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
            {currentMenus.map(
              (menu, index) => (
                <MenuCard
                  key={menu.id}
                  menu={menu}
                  priority={index < 4}
                />
              )
            )}
          </div>

        ) : (

          <div
            className="
              rounded-[1.75rem]
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
                size={38}
                className="
                  text-orange-400
                  dark:text-orange-500
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
              ไม่พบเมนูที่ค้นหา
            </h2>

            <p
              className="
                mt-3
                text-gray-500
                dark:text-gray-400
              "
            >
              ลองเปลี่ยนคำค้นหาหรือปรับตัวกรองดูอีกครั้ง
            </p>

            <button
              type="button"
              onClick={clearFilters}
              className="
                mt-6
                rounded-full
                bg-orange-500
                px-6
                py-3
                font-black
                text-white
                shadow-md
                transition-all
                hover:-translate-y-0.5
                hover:bg-orange-600
              "
            >
              ล้างตัวกรอง
            </button>

          </div>
        )}

        {/* =====================================
            PAGINATION
        ===================================== */}

        {totalPages > 1 && (
          <div
            className="
              mt-10
              flex
              flex-wrap
              items-center
              justify-center
              gap-2
            "
          >

            <button
              type="button"
              onClick={() =>
                setCurrentPage((prev) =>
                  Math.max(prev - 1, 1)
                )
              }
              disabled={currentPage === 1}
              className="
                rounded-full
                border
                border-gray-200
                bg-white
                px-5
                py-2.5
                font-semibold
                text-gray-700
                shadow-sm
                transition
                hover:border-orange-300
                hover:text-orange-500
                disabled:cursor-not-allowed
                disabled:opacity-40
                dark:border-slate-700
                dark:bg-slate-900
                dark:text-gray-200
              "
            >
              ← ก่อนหน้า
            </button>

            <div className="flex flex-wrap gap-2">

              {Array.from(
                { length: totalPages },
                (_, index) => index + 1
              ).map((page) => (
                <button
                  key={page}
                  type="button"
                  onClick={() =>
                    setCurrentPage(page)
                  }
                  className={`
                    flex
                    h-10
                    min-w-10
                    items-center
                    justify-center
                    rounded-full
                    px-3
                    font-bold
                    transition-all
                    ${
                      currentPage === page
                        ? "bg-orange-500 text-white shadow-md"
                        : "border border-gray-200 bg-white text-gray-700 hover:border-orange-300 hover:text-orange-500 dark:border-slate-700 dark:bg-slate-900 dark:text-gray-200"
                    }
                  `}
                >
                  {page}
                </button>
              ))}

            </div>

            <button
              type="button"
              onClick={() =>
                setCurrentPage((prev) =>
                  Math.min(
                    prev + 1,
                    totalPages
                  )
                )
              }
              disabled={
                currentPage === totalPages
              }
              className="
                rounded-full
                border
                border-gray-200
                bg-white
                px-5
                py-2.5
                font-semibold
                text-gray-700
                shadow-sm
                transition
                hover:border-orange-300
                hover:text-orange-500
                disabled:cursor-not-allowed
                disabled:opacity-40
                dark:border-slate-700
                dark:bg-slate-900
                dark:text-gray-200
              "
            >
              ถัดไป →
            </button>

          </div>
        )}

        {/* =====================================
            BOTTOM
        ===================================== */}

        <div className="mt-14 text-center">

          <Link
            href="/category"
            className="
              text-sm
              font-bold
              text-orange-500
              hover:underline
              dark:text-orange-400
            "
          >
            ← ดูหมวดอาหารทั้งหมด
          </Link>

          <p
            className="
              mt-5
              text-sm
              text-gray-400
              dark:text-gray-600
            "
          >
            ✨ MueNee — วันนี้กินอะไรดี?
          </p>

        </div>

      </div>
    </main>
  );
}

/* =========================================
   FILTER SECTION
========================================= */

function FilterSection({
  title,
  children,
  last = false,
}: {
  title: string;
  children: React.ReactNode;
  last?: boolean;
}) {
  return (
    <div className={last ? "" : "mb-6"}>

      <h3
        className="
          mb-3
          text-sm
          font-black
          text-gray-700
          dark:text-gray-200
        "
      >
        {title}
      </h3>

      <div className="flex flex-wrap gap-2">
        {children}
      </div>

    </div>
  );
}

/* =========================================
   FILTER BUTTON
========================================= */

function FilterButton({
  children,
  active,
  onClick,
  activeClass = "orange",
}: {
  children: React.ReactNode;
  active: boolean;
  onClick: () => void;
  activeClass?:
    | "orange"
    | "red"
    | "pink"
    | "green"
    | "blue"
    | "purple";
}) {
  const activeClasses = {
    orange:
      "bg-orange-500 text-white",
    red:
      "bg-red-500 text-white",
    pink:
      "bg-pink-500 text-white",
    green:
      "bg-green-500 text-white",
    blue:
      "bg-blue-500 text-white",
    purple:
      "bg-purple-500 text-white",
  };

  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        rounded-full
        px-4
        py-2
        text-sm
        font-semibold
        shadow-sm
        transition-all
        duration-200
        hover:-translate-y-0.5
        ${
          active
            ? activeClasses[activeClass]
            : "border border-gray-200 bg-gray-50 text-gray-700 hover:border-orange-300 hover:text-orange-500 dark:border-slate-700 dark:bg-slate-800 dark:text-gray-300 dark:hover:border-orange-500/40 dark:hover:text-orange-400"
        }
      `}
    >
      {children}
    </button>
  );
}