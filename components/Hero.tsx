"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { menus } from "@/data";
import { Menu as MenuType } from "@/lib/menu";
import { Sparkles } from "lucide-react";

const categories = [
  {
    value: "ทั้งหมด",
    label: "ทั้งหมด",
    icon: "🍽️",
  },
  {
    value: "อาหารไทย",
    label: "ไทย",
    icon: "🍛",
  },
  {
    value: "อาหารอีสาน",
    label: "อีสาน",
    icon: "🌶️",
  },
  {
    value: "ก๋วยเตี๋ยว",
    label: "ก๋วยเตี๋ยว",
    icon: "🍜",
  },
  {
    value: "ของหวาน",
    label: "ของหวาน",
    icon: "🍰",
  },
  {
    value: "เครื่องดื่ม",
    label: "เครื่องดื่ม",
    icon: "🥤",
  },
];

export default function Hero() {
  const [menu, setMenu] = useState<MenuType | null>(null);
  const [loading, setLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] =
    useState("ทั้งหมด");

  const randomMenu = () => {
    setLoading(true);
    setMenu(null);

    setTimeout(() => {
      const filteredMenus =
        selectedCategory === "ทั้งหมด"
          ? menus
          : menus.filter(
              (item) =>
                item.category === selectedCategory
            );

      if (filteredMenus.length === 0) {
        setLoading(false);
        return;
      }

      const random =
        filteredMenus[
          Math.floor(
            Math.random() * filteredMenus.length
          )
        ];

      setMenu(random);
      setLoading(false);
    }, 800);
  };

  const selectedCategoryData = categories.find(
    (item) => item.value === selectedCategory
  );

  const isSweetCategory =
    selectedCategory === "ของหวาน" ||
    selectedCategory === "เครื่องดื่ม";

  const randomButtonText = loading
    ? "กำลังสุ่ม..."
    : selectedCategory === "ทั้งหมด"
      ? "สุ่มเมนูทั้งหมด"
      : menu
        ? `สุ่ม${selectedCategory}อีกครั้ง`
        : `สุ่ม${selectedCategory}`;

  return (
    <section
      className="
        bg-orange-50
        px-5
        py-12
        transition-colors
        duration-500
        dark:bg-slate-950
        md:px-6
        md:py-16
      "
    >
      <div
        className="
          mx-auto
          grid
          max-w-7xl
          items-center
          gap-10
          lg:grid-cols-2
          lg:gap-14
        "
      >

        {/* =====================================
            LEFT
        ===================================== */}

        <div
          className="
            mx-auto
            w-full
            max-w-xl
            text-center
          "
        >

          {/* TITLE */}

          <div className="mx-auto max-w-lg">

            <div
              className="
                mx-auto
                mb-5
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
              MueNee
            </div>

            <h1
              className="
                text-4xl
                font-black
                leading-tight
                tracking-tight
                text-gray-900
                dark:text-white
                sm:text-5xl
                md:text-6xl
              "
            >
              วันนี้กินอะไรดี?
            </h1>

            <p
              className="
                mt-5
                text-base
                leading-relaxed
                text-gray-600
                dark:text-gray-300
                sm:text-lg
              "
            >
              MueNee ช่วยคิดเมนูอาหารให้คุณ
              <br />
              สุ่มเมนูอาหารไทย อาหารอีสาน
              <br />
              พร้อมสูตรอาหารและไอเดียทำกินทุกวัน
            </p>

          </div>

          {/* =====================================
              CATEGORY
          ===================================== */}

          <div
            className="
              mt-7
              flex
              flex-wrap
              justify-center
              gap-2
            "
          >
            {categories.map((category) => (
              <button
                key={category.value}
                type="button"
                onClick={() => {
                  setSelectedCategory(category.value);
                  setMenu(null);
                }}
                disabled={loading}
                className={`
                  inline-flex
                  items-center
                  gap-1.5
                  rounded-full
                  px-3.5
                  py-2
                  text-sm
                  font-bold
                  transition-all
                  duration-200
                  hover:-translate-y-0.5
                  disabled:cursor-not-allowed
                  disabled:opacity-50

                  ${
                    selectedCategory === category.value
                      ? "bg-orange-500 text-white shadow-md"
                      : "border border-gray-200 bg-white text-gray-700 hover:border-orange-300 hover:bg-orange-50 dark:border-gray-700 dark:bg-slate-800 dark:text-gray-200 dark:hover:border-orange-500/50 dark:hover:bg-slate-700"
                  }
                `}
              >
                <span>{category.icon}</span>
                {category.label}
              </button>
            ))}
          </div>

          {/* =====================================
              MENU CARD
          ===================================== */}

          <div
            className="
              mt-7
              rounded-3xl
              border
              border-gray-100
              bg-white
              p-6
              shadow-xl
              transition-all
              duration-300
              dark:border-slate-800
              dark:bg-slate-900
              dark:shadow-black/30
              sm:p-7
              md:p-8
            "
          >

            <p
              className="
                text-sm
                text-gray-400
                dark:text-gray-500
              "
            >
              ✨ เมนูแนะนำวันนี้
            </p>

            {/* =====================================
                LOADING
            ===================================== */}

            {loading ? (
              <div className="animate-pulse">

                <h2
                  className="
                    mt-4
                    text-2xl
                    font-black
                    text-orange-500
                    sm:text-3xl
                  "
                >
                  กำลังคิดเมนูให้... ✨
                </h2>

                <div
                  className="
                    mt-5
                    flex
                    flex-col
                    items-center
                    space-y-2
                  "
                >
                  <div
                    className="
                      h-4
                      w-3/4
                      rounded-full
                      bg-gray-200
                      dark:bg-slate-700
                    "
                  />

                  <div
                    className="
                      h-4
                      w-1/2
                      rounded-full
                      bg-gray-200
                      dark:bg-slate-700
                    "
                  />
                </div>

              </div>
            ) : menu ? (

              /* =====================================
                  RESULT
              ===================================== */

              <div className="animate-[fadeIn_0.4s_ease-out]">

                <h2
                  className="
                    mt-4
                    text-2xl
                    font-black
                    text-orange-500
                    sm:text-3xl
                    md:text-4xl
                  "
                >
                  {menu.name}
                </h2>

                <div
                  className="
                    mt-5
                    grid
                    grid-cols-2
                    gap-x-4
                    gap-y-3
                    text-sm
                    text-gray-600
                    dark:text-gray-300
                  "
                >

                  <p>
                    🍽️ {menu.category}
                  </p>

                  <p>
                    💰 {menu.price} บาท
                  </p>

                  <p>
                    ⏱️ {menu.time}
                  </p>

                  <p>
                    ⭐ {menu.difficulty}
                  </p>

                  <p>
                    {isSweetCategory
                      ? `🍬 ${menu.sweetness || "-"}`
                      : `🔥 ${menu.spicy || "-"}`}
                  </p>

                  <p>
                    ⚡ {menu.calories} kcal
                  </p>

                </div>

                <Link
                  href={`/recipe/${menu.id}`}
                  className="
                    mt-6
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    bg-gray-800
                    px-6
                    py-3
                    font-bold
                    text-white
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    hover:bg-gray-900
                    dark:bg-orange-500
                    dark:hover:bg-orange-600
                  "
                >
                  📖 ดูสูตรอาหาร
                </Link>

              </div>

            ) : (

              /* =====================================
                  EMPTY
              ===================================== */

              <div>

                <h2
                  className="
                    mt-4
                    text-2xl
                    font-black
                    leading-tight
                    text-gray-900
                    dark:text-white
                    sm:text-3xl
                    md:text-4xl
                  "
                >
                  เลือกหมวดอาหาร
                  <br />
                  แล้วกดสุ่มได้เลย ✨
                </h2>

                <p
                  className="
                    mt-3
                    text-sm
                    text-gray-500
                    dark:text-gray-400
                  "
                >
                  ตอนนี้เลือกไว้{" "}
                  <span
                    className="
                      font-bold
                      text-orange-500
                      dark:text-orange-400
                    "
                  >
                    {selectedCategoryData?.icon}{" "}
                    {selectedCategoryData?.label}
                  </span>
                </p>

              </div>
            )}

            {/* =====================================
                RANDOM BUTTON
            ===================================== */}

            <button
              type="button"
              onClick={randomMenu}
              disabled={loading}
              className="
                mt-7
                inline-flex
                items-center
                justify-center
                gap-2
                rounded-full
                bg-orange-500
                px-8
                py-3
                text-base
                font-black
                text-white
                shadow-lg
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:bg-orange-600
                hover:shadow-xl
                disabled:cursor-not-allowed
                disabled:bg-orange-300
                disabled:hover:translate-y-0
                dark:disabled:bg-orange-800
                sm:px-10
                sm:py-3.5
                sm:text-lg
              "
            >
              <Sparkles
                size={21}
                strokeWidth={2.5}
                className={
                  loading ? "animate-spin" : ""
                }
              />

              {randomButtonText}
            </button>

          </div>
        </div>

        {/* =====================================
            HERO IMAGE
        ===================================== */}

        <div
          className="
            relative
            mx-auto
            w-full
            max-w-xl
            animate-[fadeIn_0.8s_ease-out]
          "
        >

          <div
            className="
              overflow-hidden
              rounded-[40px]
              shadow-2xl
              dark:shadow-black/40
            "
          >
            <Image
              src="/images/hero-food.jpg"
              alt="อาหารไทย"
              width={700}
              height={520}
              priority
              className="
                h-[320px]
                w-full
                object-cover
                transition-transform
                duration-700
                hover:scale-105
                sm:h-[420px]
                md:h-[500px]
                lg:h-[520px]
              "
            />
          </div>

          {/* =====================================
              MENU COUNT
          ===================================== */}

          <div
            className="
              absolute
              -bottom-5
              -left-3
              rounded-3xl
              border
              border-gray-100
              bg-white
              px-5
              py-3
              shadow-xl
              transition-all
              duration-300
              dark:border-slate-700
              dark:bg-slate-800
              dark:shadow-black/30
              sm:-left-5
              sm:px-6
              sm:py-4
            "
          >
            <span className="text-xl">
              🍛
            </span>

            <span
              className="
                ml-2
                font-bold
                text-gray-800
                dark:text-gray-100
              "
            >
              เมนูไทยกว่า 1000+
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}