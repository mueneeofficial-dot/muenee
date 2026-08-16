"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { menus } from "@/data";

import {
  Clock,
  Wallet,
  Flame,
  ChefHat,
  Heart,
  Sparkles,
} from "lucide-react";

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

export default function RandomMenu() {
  const [menu, setMenu] = useState(menus[0]);
  const [loading, setLoading] = useState(false);
  const [favorite, setFavorite] = useState(false);

  const [selectedCategory, setSelectedCategory] =
    useState("ทั้งหมด");

  useEffect(() => {
    setFavorite(isFavorite(menu.id));
  }, [menu.id]);

  const toggleHeart = () => {
    const updated = saveFavorite(menu.id);

    setFavorite(updated.includes(menu.id));
  };

  const randomMenu = (
    category = selectedCategory
  ) => {
    setLoading(true);

    setTimeout(() => {
      const filteredMenus =
        category === "ทั้งหมด"
          ? menus
          : menus.filter(
              (item) => item.category === category
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
      setSelectedCategory(category);
      setLoading(false);
    }, 700);
  };

  const isSweetCategory =
    menu.category === "ของหวาน" ||
    menu.category === "เครื่องดื่ม";

  return (
    <section
      className="
        bg-orange-50
        py-14
        transition-colors
        duration-500
        dark:bg-gray-950
        md:py-18
      "
    >
      <div className="mx-auto max-w-4xl px-5 md:px-6">

        {/* MAIN CARD */}
        <div
          className="
            rounded-[2rem]
            border
            border-gray-100
            bg-white
            px-5
            py-7
            shadow-lg
            transition-colors
            dark:border-gray-800
            dark:bg-gray-900
            dark:shadow-black/40
            md:px-8
            md:py-9
          "
        >

          {/* HEADER */}
          <div className="text-center">

            <div
              className="
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
              MueNee Random
            </div>

            <h2
              className="
                mt-4
                text-3xl
                font-black
                text-gray-900
                dark:text-white
                md:text-4xl
              "
            >
              วันนี้กินอะไรดี?
            </h2>

            <p
              className="
                mt-2
                text-sm
                text-gray-500
                dark:text-gray-400
                md:text-base
              "
            >
              เลือกหมวดอาหาร แล้วให้ MueNee ช่วยสุ่มให้
            </p>

          </div>

          {/* CATEGORY BUTTONS */}
          <div
            className="
              mt-6
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
                onClick={() =>
                  randomMenu(category.value)
                }
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
                      : "bg-gray-100 text-gray-700 hover:bg-orange-100 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
                  }
                `}
              >
                <span>{category.icon}</span>
                {category.label}
              </button>
            ))}
          </div>

          {/* RESULT CARD */}
          <div
            className="
              mt-7
              rounded-[1.5rem]
              bg-orange-50
              p-4
              dark:bg-gray-800
              md:p-5
            "
          >

            {/* IMAGE */}
            <div
              className="
                relative
                h-52
                w-full
                overflow-hidden
                rounded-2xl
                md:h-64
              "
            >
              <Image
                src={
                  menu.image ||
                  "/images/default-food.jpg"
                }
                alt={menu.name}
                fill
                sizes="(max-width: 768px) 100vw, 800px"
                className="
                  object-cover
                  transition-transform
                  duration-500
                  hover:scale-105
                "
              />

              {/* FAVORITE */}
              <button
                type="button"
                onClick={toggleHeart}
                aria-label={
                  favorite
                    ? `ลบ ${menu.name} ออกจากเมนูโปรด`
                    : `เพิ่ม ${menu.name} ในเมนูโปรด`
                }
                className="
                  absolute
                  right-3
                  top-3
                  z-20
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  bg-white
                  shadow-md
                  transition-all
                  hover:scale-110
                  dark:bg-gray-900
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

            {/* CATEGORY */}
            <div className="mt-4 text-center">
              <span
                className="
                  inline-flex
                  items-center
                  gap-1.5
                  rounded-full
                  bg-orange-100
                  px-3
                  py-1.5
                  text-xs
                  font-bold
                  text-orange-600
                  dark:bg-orange-500/10
                  dark:text-orange-400
                "
              >
                🍽️ {menu.category}
              </span>
            </div>

            {/* NAME */}
            <h3
              className="
                mt-3
                text-center
                text-2xl
                font-black
                text-gray-900
                dark:text-white
                md:text-3xl
              "
            >
              {menu.name}
            </h3>

            {/* INFO */}
            <div
              className="
                mt-5
                grid
                grid-cols-3
                gap-2.5
              "
            >

              {/* TIME */}
              <div
                className="
                  rounded-xl
                  bg-white
                  p-3
                  text-center
                  dark:bg-gray-900
                "
              >
                <Clock
                  size={19}
                  className="mx-auto text-orange-500"
                />

                <p
                  className="
                    mt-1.5
                    text-xs
                    text-gray-500
                    dark:text-gray-400
                  "
                >
                  เวลา
                </p>

                <p
                  className="
                    mt-0.5
                    text-sm
                    font-bold
                    text-gray-900
                    dark:text-white
                  "
                >
                  {menu.time}
                </p>
              </div>

              {/* PRICE */}
              <div
                className="
                  rounded-xl
                  bg-white
                  p-3
                  text-center
                  dark:bg-gray-900
                "
              >
                <Wallet
                  size={19}
                  className="mx-auto text-orange-500"
                />

                <p
                  className="
                    mt-1.5
                    text-xs
                    text-gray-500
                    dark:text-gray-400
                  "
                >
                  ราคา
                </p>

                <p
                  className="
                    mt-0.5
                    text-sm
                    font-bold
                    text-gray-900
                    dark:text-white
                  "
                >
                  {menu.price} บาท
                </p>
              </div>

              {/* SPICY / SWEETNESS */}
              <div
                className="
                  rounded-xl
                  bg-white
                  p-3
                  text-center
                  dark:bg-gray-900
                "
              >
                <Flame
                  size={19}
                  className={
                    isSweetCategory
                      ? "mx-auto text-pink-500"
                      : "mx-auto text-red-500"
                  }
                />

                <p
                  className="
                    mt-1.5
                    text-xs
                    text-gray-500
                    dark:text-gray-400
                  "
                >
                  {isSweetCategory
                    ? "ความหวาน"
                    : "ความเผ็ด"}
                </p>

                <p
                  className="
                    mt-0.5
                    text-sm
                    font-bold
                    text-gray-900
                    dark:text-white
                  "
                >
                  {isSweetCategory
                    ? menu.sweetness || "-"
                    : menu.spicy || "-"}
                </p>
              </div>

            </div>

            {/* RECIPE PREVIEW */}
            {menu.recipe && menu.recipe.length > 0 && (
              <div
                className="
                  mt-4
                  rounded-xl
                  border
                  border-gray-100
                  bg-white
                  p-4
                  text-left
                  dark:border-gray-700
                  dark:bg-gray-900
                "
              >
                <h4
                  className="
                    text-base
                    font-bold
                    text-gray-900
                    dark:text-white
                  "
                >
                  👨‍🍳 วิธีทำแบบย่อ
                </h4>

                <ol
                  className="
                    mt-2
                    list-decimal
                    space-y-1
                    pl-5
                    text-sm
                    text-gray-600
                    dark:text-gray-300
                  "
                >
                  {menu.recipe
                    .slice(0, 3)
                    .map(
                      (
                        step: string,
                        index: number
                      ) => (
                        <li key={`${step}-${index}`}>
                          {step}
                        </li>
                      )
                    )}
                </ol>
              </div>
            )}

            {/* RECIPE BUTTON */}
            <div className="text-center">

              <Link
                href={`/recipe/${menu.id}`}
                className="
                  mt-5
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  bg-gray-800
                  px-5
                  py-2.5
                  text-sm
                  font-bold
                  text-white
                  transition-all
                  hover:-translate-y-0.5
                  hover:bg-gray-700
                  dark:bg-orange-500
                  dark:hover:bg-orange-600
                "
              >
                <ChefHat size={18} />
                ดูสูตรอาหารเต็ม
              </Link>

            </div>

          </div>

          {/* RANDOM BUTTON */}
          <div className="mt-6 text-center">

            <button
              type="button"
              onClick={() => randomMenu()}
              disabled={loading}
              className="
                inline-flex
                items-center
                justify-center
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
                hover:shadow-lg
                disabled:bg-orange-300
              "
            >
              <Sparkles
                size={19}
                className={
                  loading ? "animate-spin" : ""
                }
              />

              {loading
                ? "กำลังสุ่ม..."
                : selectedCategory === "ทั้งหมด"
                ? "สุ่มเมนูทั้งหมด"
                : `สุ่ม${selectedCategory}อีกครั้ง`}
            </button>

          </div>

        </div>
      </div>
    </section>
  );
}