"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Clock,
  ChefHat,
  Flame,
  Wallet,
} from "lucide-react";

import { Menu } from "@/lib/menu";
import FavoriteButton from "@/components/FavoriteButton";

export default function MenuCard({
  menu,
  priority = false,
}: {
  menu: Menu;
  priority?: boolean;
}) {
  // =====================================
  // TASTE
  // =====================================

  const hasSweetness = Boolean(
    menu.sweetness?.trim()
  );

  const tasteValue = hasSweetness
    ? menu.sweetness
    : menu.spicy || "ไม่ระบุ";

  return (
    <Link
      href={`/recipe/${menu.id}`}
      className="
        group
        overflow-hidden
        rounded-3xl
        border
        border-gray-100
        bg-white
        shadow-md
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-orange-200
        hover:shadow-xl
        dark:border-slate-800
        dark:bg-slate-900
        dark:shadow-black/30
        dark:hover:border-orange-500/30
      "
    >
      {/* =====================================
          IMAGE
      ===================================== */}

      <div className="relative h-56 overflow-hidden">

        <Image
          src={
            menu.image ||
            "/images/default-food.jpg"
          }
          alt={menu.name}
          fill
          priority={priority}
          sizes="
            (max-width: 640px) 100vw,
            (max-width: 1024px) 50vw,
            (max-width: 1280px) 33vw,
            25vw
          "
          className="
            object-cover
            transition-transform
            duration-500
            group-hover:scale-105
          "
        />

        {/* IMAGE OVERLAY */}

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black/45
            via-black/5
            to-transparent
          "
        />

        {/* =====================================
            FAVORITE
        ===================================== */}

        <FavoriteButton id={menu.id} />

        {/* =====================================
            CATEGORY
        ===================================== */}

        <div
          className="
            absolute
            bottom-4
            left-4
            rounded-full
            bg-white/95
            px-3
            py-1.5
            text-xs
            font-black
            text-orange-600
            shadow-md
            backdrop-blur
            dark:bg-slate-900/95
            dark:text-orange-400
          "
        >
          {menu.category}
        </div>

      </div>

      {/* =====================================
          CONTENT
      ===================================== */}

      <div className="p-5">

        {/* NAME */}

        <h2
          className="
            line-clamp-1
            text-xl
            font-black
            text-gray-900
            dark:text-white
          "
        >
          {menu.name}
        </h2>

        {/* =====================================
            PRICE + TIME
        ===================================== */}

        <div className="mt-4 grid grid-cols-2 gap-2">

          {/* PRICE */}

          <div
            className="
              flex
              items-center
              gap-2
              rounded-xl
              bg-orange-50
              px-3
              py-2.5
              text-sm
              dark:bg-slate-800
            "
          >
            <Wallet
              size={16}
              className="
                shrink-0
                text-orange-500
                dark:text-orange-400
              "
            />

            <span
              className="
                truncate
                font-semibold
                text-gray-700
                dark:text-gray-200
              "
            >
              {menu.price} บาท
            </span>
          </div>

          {/* TIME */}

          <div
            className="
              flex
              items-center
              gap-2
              rounded-xl
              bg-orange-50
              px-3
              py-2.5
              text-sm
              dark:bg-slate-800
            "
          >
            <Clock
              size={16}
              className="
                shrink-0
                text-orange-500
                dark:text-orange-400
              "
            />

            <span
              className="
                truncate
                font-semibold
                text-gray-700
                dark:text-gray-200
              "
            >
              {menu.time}
            </span>
          </div>

        </div>

        {/* =====================================
            TASTE
        ===================================== */}

        <div
          className="
            mt-3
            flex
            items-center
            gap-2
            text-sm
            text-gray-500
            dark:text-gray-400
          "
        >
          {hasSweetness ? (
            <>
              <span className="text-pink-500">
                🍯
              </span>

              <span>{tasteValue}</span>
            </>
          ) : (
            <>
              <Flame
                size={16}
                className="
                  text-red-500
                  dark:text-red-400
                "
              />

              <span>{tasteValue}</span>
            </>
          )}
        </div>

        {/* =====================================
            CALORIES
        ===================================== */}

        <div
          className="
            mt-2
            flex
            items-center
            gap-2
            text-sm
            text-gray-500
            dark:text-gray-400
          "
        >
          <Flame
            size={16}
            className="
              text-orange-500
              dark:text-orange-400
            "
          />

          <span>
            {menu.calories} kcal
          </span>
        </div>

        {/* =====================================
            TAGS
        ===================================== */}

        {menu.tags &&
          menu.tags.length > 0 && (
            <div
              className="
                mt-4
                flex
                flex-wrap
                gap-1.5
              "
            >
              {menu.tags
                .slice(0, 3)
                .map(
                  (
                    tag: string,
                    index: number
                  ) => (
                    <span
                      key={`${tag}-${index}`}
                      className="
                        rounded-full
                        bg-gray-100
                        px-2.5
                        py-1
                        text-xs
                        font-semibold
                        text-gray-500
                        dark:bg-slate-800
                        dark:text-gray-400
                      "
                    >
                      #{tag}
                    </span>
                  )
                )}
            </div>
          )}

        {/* =====================================
            RECIPE BUTTON
        ===================================== */}

        <div
          className="
            mt-5
            flex
            items-center
            justify-center
            gap-2
            rounded-full
            bg-orange-500
            py-3
            font-black
            text-white
            shadow-sm
            transition-all
            duration-300
            group-hover:bg-orange-600
          "
        >
          <ChefHat size={18} />

          <span>
            ดูสูตรอาหาร
          </span>
        </div>

      </div>
    </Link>
  );
}