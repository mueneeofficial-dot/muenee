"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import {
  Sparkles,
  Clock,
  Wallet,
  Flame,
  Star,
  Heart,
} from "lucide-react";

import { menus } from "@/data";
import { Menu } from "@/lib/menu";

import {
  toggleFavorite as saveFavorite,
  isFavorite,
} from "@/lib/favorites";

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

export default function RandomPage() {
  const [result, setResult] = useState<Menu | null>(null);
  const [loading, setLoading] = useState(false);

  const [selectedCategory, setSelectedCategory] =
    useState("ทั้งหมด");

  // เช็คว่าหมวดที่เลือกเคยสุ่มแล้วหรือยัง
  const [hasRandomized, setHasRandomized] = useState(false);

  const [favorite, setFavorite] = useState(false);

  /* =========================
     RANDOM MENU
  ========================= */
  const randomMenu = (
    category = selectedCategory
  ) => {
    setLoading(true);

    setTimeout(() => {
      const filteredMenus =
        category === "ทั้งหมด"
          ? menus
          : menus.filter(
              (item) =>
                item.category === category
            );

      if (filteredMenus.length === 0) {
        setLoading(false);
        return;
      }

      const random =
        filteredMenus[
          Math.floor(
            Math.random() *
              filteredMenus.length
          )
        ];

      setResult(random);
      setSelectedCategory(category);
      setFavorite(isFavorite(random.id));

      // หลังจากสุ่มแล้ว ให้เปลี่ยนข้อความปุ่ม
      setHasRandomized(true);

      setLoading(false);
    }, 700);
  };

  /* =========================
     SELECT CATEGORY
     ========================= */
  const selectCategory = (category: string) => {
    setSelectedCategory(category);

    // เปลี่ยนหมวดใหม่ = ยังไม่ได้สุ่มหมวดนี้
    setHasRandomized(false);
  };

  /* =========================
     FAVORITE
  ========================= */
  const toggleHeart = () => {
    if (!result) return;

    const updated = saveFavorite(result.id);

    setFavorite(updated.includes(result.id));
  };

  /* =========================
     BUTTON TEXT
  ========================= */
  const getRandomButtonText = () => {
    if (loading) {
      return "กำลังคิดเมนู...";
    }

    if (selectedCategory === "ทั้งหมด") {
      return hasRandomized
        ? "สุ่มเมนูทั้งหมดอีกครั้ง"
        : "สุ่มเมนูทั้งหมด";
    }

    return hasRandomized
      ? `สุ่ม${selectedCategory}อีกครั้ง`
      : `สุ่ม${selectedCategory}`;
  };

  return (
    <main
      className="
        min-h-screen
        bg-orange-50
        dark:bg-gray-950
        px-5
        py-12
        md:py-16
        transition-colors
        duration-300
      "
    >
      <div
        className="
          w-full
          max-w-4xl
          mx-auto
        "
      >

        {/* =========================
            HEADER
        ========================= */}
        <div
          className="
            text-center
            flex
            flex-col
            items-center
          "
        >
          <div
            className="
              inline-flex
              items-center
              gap-2
              bg-orange-100
              dark:bg-orange-500/10
              text-orange-600
              dark:text-orange-400
              px-4
              py-2
              rounded-full
              text-sm
              font-bold
            "
          >
            <Sparkles size={16} />
            MueNee Random
          </div>

          <h1
            className="
              mt-4
              text-3xl
              md:text-4xl
              font-black
              text-gray-900
              dark:text-white
              text-center
            "
          >
            วันนี้กินอะไรดี?
          </h1>

          <p
            className="
              mt-2
              text-sm
              md:text-base
              text-gray-500
              dark:text-gray-400
              text-center
            "
          >
            เลือกหมวดอาหาร
            แล้วให้ MueNee ช่วยเลือกให้
          </p>
        </div>

        {/* =========================
            CATEGORY
        ========================= */}
        <div
          className="
            mt-7
            flex
            flex-wrap
            justify-center
            items-center
            gap-2
            max-w-3xl
            mx-auto
          "
        >
          {categories.map((category) => (
            <button
              key={category.value}
              type="button"
              onClick={() =>
                selectCategory(category.value)
              }
              disabled={loading}
              className={`
                inline-flex
                items-center
                justify-center
                gap-1.5
                px-3.5
                py-2
                rounded-full
                text-sm
                font-bold
                transition-all
                duration-200
                hover:-translate-y-0.5
                disabled:opacity-50
                disabled:cursor-not-allowed

                ${
                  selectedCategory ===
                  category.value
                    ? "bg-orange-500 text-white shadow-md"
                    : "bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-200 shadow-sm hover:bg-orange-100 dark:hover:bg-gray-800"
                }
              `}
            >
              <span>{category.icon}</span>

              {category.label}
            </button>
          ))}
        </div>

        {/* =========================
            RANDOM BUTTON
        ========================= */}
        <div
          className="
            mt-6
            flex
            justify-center
            items-center
          "
        >
          <button
            type="button"
            onClick={() => randomMenu()}
            disabled={loading}
            className="
              inline-flex
              items-center
              justify-center
              gap-2
              bg-orange-500
              hover:bg-orange-600
              disabled:bg-orange-300
              dark:disabled:bg-orange-800
              text-white
              px-6
              py-3
              rounded-full
              font-bold
              shadow-md
              transition-all
              duration-200
              hover:-translate-y-0.5
              disabled:hover:translate-y-0
            "
          >
            <Sparkles
              size={19}
              className={
                loading
                  ? "animate-spin"
                  : ""
              }
            />

            {getRandomButtonText()}
          </button>
        </div>

        {/* =========================
            LOADING
        ========================= */}
        {loading && (
          <div
            className="
              mt-10
              text-center
              flex
              flex-col
              items-center
            "
          >
            <div
              className="
                text-5xl
                animate-bounce
              "
            >
              🍳
            </div>

            <p
              className="
                mt-3
                font-bold
                text-gray-700
                dark:text-gray-200
              "
            >
              กำลังคิดเมนูให้...
            </p>
          </div>
        )}

        {/* =========================
            RESULT
        ========================= */}
        {result && !loading && (
          <div
            className="
              mt-9
              w-full
              max-w-3xl
              mx-auto
              bg-white
              dark:bg-slate-800
              rounded-[2rem]
              shadow-xl
              dark:shadow-black/40
              overflow-hidden
              border
              border-gray-100
              dark:border-gray-700
            "
          >

            {/* IMAGE */}
            <div
              className="
                relative
                h-60
                md:h-72
                overflow-hidden
              "
            >
              <Image
                src={
                  result.image ||
                  "/images/default-food.jpg"
                }
                alt={result.name}
                fill
                sizes="
                  (max-width: 768px) 100vw,
                  768px
                "
                className="
                  object-cover
                  hover:scale-105
                  transition-transform
                  duration-500
                "
              />

              {/* FAVORITE */}
              <button
                type="button"
                onClick={toggleHeart}
                aria-label={
                  favorite
                    ? `ลบ ${result.name} ออกจากเมนูโปรด`
                    : `เพิ่ม ${result.name} ในเมนูโปรด`
                }
                className="
                  absolute
                  top-4
                  right-4
                  flex
                  items-center
                  justify-center
                  w-10
                  h-10
                  bg-white
                  dark:bg-gray-900
                  rounded-full
                  shadow-md
                  hover:scale-110
                  transition
                "
              >
                <Heart
                  size={21}
                  className={
                    favorite
                      ? "fill-red-500 text-red-500"
                      : "text-gray-500 dark:text-gray-300"
                  }
                />
              </button>
            </div>

            {/* CONTENT */}
            <div
              className="
                p-6
                md:p-7
                text-center
              "
            >

              {/* CATEGORY */}
              <span
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-1.5
                  bg-orange-100
                  dark:bg-orange-500/10
                  text-orange-600
                  dark:text-orange-400
                  px-3
                  py-1.5
                  rounded-full
                  text-xs
                  font-bold
                "
              >
                🍽️ {result.category}
              </span>

              {/* NAME */}
              <h2
                className="
                  mt-3
                  text-2xl
                  md:text-3xl
                  font-black
                  text-gray-900
                  dark:text-white
                "
              >
                {result.name}
              </h2>

              {/* INFO */}
              <div
                className="
                  mt-5
                  grid
                  grid-cols-2
                  md:grid-cols-4
                  gap-2.5
                  text-left
                "
              >

                {/* TIME */}
                <div
                  className="
                    bg-orange-50
                    dark:bg-gray-900
                    rounded-xl
                    p-3
                  "
                >
                  <Clock
                    size={18}
                    className="text-orange-500"
                  />

                  <p
                    className="
                      mt-1
                      text-xs
                      text-gray-500
                      dark:text-gray-400
                    "
                  >
                    เวลา
                  </p>

                  <p
                    className="
                      text-sm
                      font-bold
                      text-gray-900
                      dark:text-white
                    "
                  >
                    {result.time}
                  </p>
                </div>

                {/* PRICE */}
                <div
                  className="
                    bg-orange-50
                    dark:bg-gray-900
                    rounded-xl
                    p-3
                  "
                >
                  <Wallet
                    size={18}
                    className="text-orange-500"
                  />

                  <p
                    className="
                      mt-1
                      text-xs
                      text-gray-500
                      dark:text-gray-400
                    "
                  >
                    ราคา
                  </p>

                  <p
                    className="
                      text-sm
                      font-bold
                      text-gray-900
                      dark:text-white
                    "
                  >
                    {result.price} บาท
                  </p>
                </div>

                {/* SPICY */}
                <div
                  className="
                    bg-orange-50
                    dark:bg-gray-900
                    rounded-xl
                    p-3
                  "
                >
                  <Flame
                    size={18}
                    className="text-red-500"
                  />

                  <p
                    className="
                      mt-1
                      text-xs
                      text-gray-500
                      dark:text-gray-400
                    "
                  >
                    ความเผ็ด
                  </p>

                  <p
                    className="
                      text-sm
                      font-bold
                      text-gray-900
                      dark:text-white
                    "
                  >
                    {result.spicy}
                  </p>
                </div>

                {/* DIFFICULTY */}
                <div
                  className="
                    bg-orange-50
                    dark:bg-gray-900
                    rounded-xl
                    p-3
                  "
                >
                  <Star
                    size={18}
                    className="text-yellow-500"
                  />

                  <p
                    className="
                      mt-1
                      text-xs
                      text-gray-500
                      dark:text-gray-400
                    "
                  >
                    ความยาก
                  </p>

                  <p
                    className="
                      text-sm
                      font-bold
                      text-gray-900
                      dark:text-white
                    "
                  >
                    {result.difficulty}
                  </p>
                </div>
              </div>

              {/* CALORIES */}
              <div
                className="
                  mt-2.5
                  bg-gray-50
                  dark:bg-gray-900
                  rounded-xl
                  px-4
                  py-3
                  text-left
                "
              >
                <p
                  className="
                    text-xs
                    text-gray-500
                    dark:text-gray-400
                  "
                >
                  🔥 พลังงานโดยประมาณ
                </p>

                <p
                  className="
                    mt-1
                    text-sm
                    font-bold
                    text-gray-900
                    dark:text-white
                  "
                >
                  {result.calories} kcal
                </p>
              </div>

              {/* TAGS */}
              {result.tags &&
                result.tags.length > 0 && (
                  <div
                    className="
                      flex
                      flex-wrap
                      justify-center
                      gap-2
                      mt-4
                    "
                  >
                    {result.tags.map(
                      (tag, index) => (
                        <span
                          key={index}
                          className="
                            bg-orange-100
                            dark:bg-orange-950
                            text-orange-600
                            dark:text-orange-300
                            px-3
                            py-1
                            rounded-full
                            text-xs
                            font-bold
                          "
                        >
                          #{tag}
                        </span>
                      )
                    )}
                  </div>
                )}

              {/* ACTIONS */}
              <div
                className="
                  mt-6
                  flex
                  flex-wrap
                  justify-center
                  gap-2.5
                "
              >
                <Link
                  href={`/recipe/${result.id}`}
                  className="
                    inline-flex
                    items-center
                    justify-center
                    bg-orange-500
                    hover:bg-orange-600
                    text-white
                    px-5
                    py-2.5
                    rounded-full
                    text-sm
                    font-bold
                    transition
                  "
                >
                  📖 ดูสูตรอาหาร
                </Link>

                <button
                  type="button"
                  onClick={() => randomMenu()}
                  disabled={loading}
                  className="
                    inline-flex
                    items-center
                    gap-2
                    bg-gray-800
                    hover:bg-gray-900
                    dark:bg-gray-700
                    dark:hover:bg-gray-600
                    text-white
                    px-5
                    py-2.5
                    rounded-full
                    text-sm
                    font-bold
                    transition
                    disabled:opacity-50
                  "
                >
                  <Sparkles size={18} />
                  สุ่มใหม่
                </button>
              </div>

            </div>
          </div>
        )}
      </div>
    </main>
  );
}