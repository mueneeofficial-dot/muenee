"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Heart,
  Trash2,
  Sparkles,
} from "lucide-react";

import { menus } from "@/data";
import { Menu } from "@/lib/menu";
import {
  getFavorites,
  toggleFavorite,
} from "@/lib/favorites";

import MenuCard from "@/components/MenuCard";

export default function FavoritesPage() {
  const [favoriteMenus, setFavoriteMenus] = useState<Menu[]>([]);

  // =====================================
  // LOAD FAVORITES
  // =====================================

  const loadFavorites = () => {
    const favoriteIds = getFavorites();

    const result = menus.filter((menu) =>
      favoriteIds.includes(menu.id)
    );

    setFavoriteMenus(result);
  };

  useEffect(() => {
    loadFavorites();
  }, []);

  // =====================================
  // REMOVE FAVORITE
  // =====================================

  const removeFavorite = (id: string) => {
    toggleFavorite(id);
    loadFavorites();
  };

  return (
    <main
      className="
        min-h-screen
        bg-orange-50
        px-5
        py-12
        transition-colors
        duration-300
        dark:bg-slate-950
        md:px-6
        md:py-16
      "
    >
      <div className="mx-auto max-w-7xl">

        {/* =====================================
            HEADER
        ===================================== */}

        <div className="mb-10 text-center">

          <div className="flex items-center justify-center gap-3">

            <Heart
              size={28}
              className="
                fill-orange-500
                text-orange-500
                dark:fill-orange-400
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
              เมนูโปรดของฉัน
            </h1>

            <Heart
              size={28}
              className="
                fill-orange-500
                text-orange-500
                dark:fill-orange-400
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
            รวมเมนูที่คุณชอบ เก็บไว้ทำกินทีหลังได้เลย
          </p>

        </div>

        {/* =====================================
            EMPTY STATE
        ===================================== */}

        {favoriteMenus.length === 0 ? (

          <section
            className="
              rounded-[1.75rem]
              border
              border-gray-100
              bg-white
              p-10
              text-center
              shadow-lg
              dark:border-slate-800
              dark:bg-slate-900
              dark:shadow-black/30
              md:p-16
            "
          >

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
                dark:bg-orange-500/10
              "
            >
              <Heart
                size={46}
                className="
                  text-orange-400
                  dark:text-orange-500
                "
              />
            </div>

            <h2
              className="
                mt-7
                text-2xl
                font-black
                text-gray-900
                dark:text-white
              "
            >
              ยังไม่มีเมนูโปรด
            </h2>

            <p
              className="
                mt-3
                text-gray-500
                dark:text-gray-400
              "
            >
              กดหัวใจ ❤️ ที่เมนูที่คุณชอบ
              เพื่อบันทึกไว้ที่นี่
            </p>

            <div className="mt-7 flex flex-wrap justify-center gap-3">

              <Link
                href="/menus"
                className="
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
                  transition-all
                  hover:-translate-y-0.5
                  hover:bg-orange-600
                  hover:shadow-lg
                "
              >
                <Sparkles size={18} />
                ไปเลือกเมนู
              </Link>

              <Link
                href="/random"
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
                  transition-all
                  hover:-translate-y-0.5
                  hover:bg-gray-900
                  dark:bg-slate-700
                  dark:hover:bg-slate-600
                "
              >
                <Sparkles size={18} />
                สุ่มเมนู
              </Link>

            </div>

          </section>

        ) : (

          <>
            {/* =====================================
                RESULT INFO
            ===================================== */}

            <div
              className="
                mb-7
                flex
                flex-col
                gap-2
                sm:flex-row
                sm:items-center
                sm:justify-between
              "
            >

              <div>

                <p
                  className="
                    text-gray-600
                    dark:text-gray-300
                  "
                >
                  คุณมี{" "}
                  <span
                    className="
                      font-black
                      text-orange-500
                      dark:text-orange-400
                    "
                  >
                    {favoriteMenus.length}
                  </span>{" "}
                  เมนูโปรด
                </p>

                <p
                  className="
                    mt-1
                    text-xs
                    text-gray-400
                    dark:text-gray-500
                  "
                >
                  เลือกเมนูที่อยากทำ แล้วเข้าไปดูสูตรได้เลย
                </p>

              </div>

              <Link
                href="/menus"
                className="
                  inline-flex
                  items-center
                  gap-2
                  font-bold
                  text-orange-500
                  transition
                  hover:text-orange-600
                  hover:underline
                  dark:text-orange-400
                  dark:hover:text-orange-300
                "
              >
                <Sparkles size={17} />
                เพิ่มเมนูโปรด
              </Link>

            </div>

            {/* =====================================
                FAVORITE GRID
            ===================================== */}

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

              {favoriteMenus.map((menu) => (

                <div
                  key={menu.id}
                  className="relative"
                >

                  {/* REMOVE BUTTON */}

                  <button
                    type="button"
                    onClick={() =>
                      removeFavorite(menu.id)
                    }
                    aria-label={`ลบ ${menu.name} จากเมนูโปรด`}
                    title="ลบออกจากเมนูโปรด"
                    className="
                      absolute
                      right-4
                      top-4
                      z-20
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-full
                      bg-white/95
                      text-red-500
                      shadow-lg
                      backdrop-blur
                      transition-all
                      hover:scale-110
                      hover:bg-red-50
                      dark:bg-slate-900/95
                      dark:hover:bg-red-500/10
                    "
                  >
                    <Trash2 size={18} />
                  </button>

                  {/* MENU CARD */}

                  <MenuCard menu={menu} />

                </div>

              ))}

            </div>

          </>
        )}

        {/* =====================================
            BOTTOM
        ===================================== */}

        <div className="mt-14 text-center">

          <p
            className="
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