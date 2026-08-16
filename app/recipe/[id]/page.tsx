import Image from "next/image";
import Link from "next/link";
import { menus } from "@/data";
import { Menu } from "@/lib/menu";
import FavoriteButton from "@/components/FavoriteButton";

import {
  ArrowLeft,
  Clock,
  Wallet,
  Flame,
  ChefHat,
  Utensils,
  Star,
  Lightbulb,
  Check,
  Sparkles,
} from "lucide-react";

const categoryMap: Record<string, string> = {
  อาหารไทย: "thai",
  อาหารอีสาน: "isan",
  ก๋วยเตี๋ยว: "noodle",
  ของหวาน: "dessert",
  เครื่องดื่ม: "drinks",
};

export default async function RecipePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const menu: Menu | undefined = menus.find(
    (item: Menu) => item.id === id
  );

  /* =====================================
     NOT FOUND
  ===================================== */

  if (!menu) {
    return (
      <main className="min-h-screen bg-orange-50 transition-colors duration-300 dark:bg-slate-950">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center">
          <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-orange-100 dark:bg-orange-500/10">
            <ChefHat
              size={52}
              className="text-orange-500 dark:text-orange-400"
            />
          </div>

          <h1 className="mt-7 text-3xl font-black text-gray-900 dark:text-white md:text-4xl">
            ไม่พบเมนูนี้
          </h1>

          <p className="mt-3 text-gray-500 dark:text-gray-400">
            เมนูที่คุณกำลังค้นหาอาจถูกลบหรือไม่มีอยู่
          </p>

          <Link
            href="/menus"
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
              hover:shadow-lg
            "
          >
            <ArrowLeft size={18} />
            กลับหน้าเมนูทั้งหมด
          </Link>
        </div>
      </main>
    );
  }

  const categorySlug = categoryMap[menu.category] ?? "thai";

  /* =====================================
     RELATED MENUS
  ===================================== */

  const relatedMenus: Menu[] = menus
    .filter(
      (item: Menu) =>
        item.id !== menu.id &&
        item.category === menu.category
    )
    .slice(0, 3);

  /* =====================================
     TASTE
  ===================================== */

  const hasSpicy = Boolean(menu.spicy);
  const hasSweetness = Boolean(menu.sweetness);

  const tasteLabel = hasSpicy
    ? "ความเผ็ด"
    : hasSweetness
      ? "ความหวาน"
      : "รสชาติ";

  const tasteValue = hasSpicy
    ? menu.spicy
    : hasSweetness
      ? menu.sweetness
      : "ไม่ระบุ";

  /* =====================================
     SAFE DATA
  ===================================== */

  const tags = menu.tags ?? [];
  const ingredients = menu.ingredients ?? [];
  const recipe = menu.recipe ?? [];

  return (
    <main className="min-h-screen bg-orange-50 transition-colors duration-300 dark:bg-slate-950">
      <div className="mx-auto max-w-6xl px-5 py-8 md:px-6 md:py-12">

        {/* =====================================
            BACK
        ===================================== */}

        <div className="mb-7">
          <Link
            href={`/category/${categorySlug}`}
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              px-1
              py-2
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
            กลับหน้าหมวดอาหาร
          </Link>
        </div>

        {/* =====================================
            HERO
        ===================================== */}

        <section
          className="
            overflow-hidden
            rounded-[2rem]
            border
            border-gray-100
            bg-white
            shadow-xl
            transition-colors
            dark:border-slate-800
            dark:bg-slate-900
            dark:shadow-black/30
          "
        >
          <div className="grid lg:grid-cols-2">

            {/* IMAGE */}

            <div className="relative min-h-[330px] sm:min-h-[420px] lg:min-h-[580px]">
              <Image
                src={menu.image || "/images/default-food.jpg"}
                alt={menu.name}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="
                  object-cover
                  transition-transform
                  duration-700
                  hover:scale-105
                "
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent" />

              {/* FAVORITE */}

              <FavoriteButton id={menu.id} />

              {/* CATEGORY */}

              <div className="absolute bottom-5 left-5">
                <span
                  className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    bg-white/95
                    px-4
                    py-2
                    text-sm
                    font-black
                    text-orange-600
                    shadow-lg
                    backdrop-blur
                    dark:bg-slate-900/95
                    dark:text-orange-400
                  "
                >
                  <Utensils size={17} />
                  {menu.category}
                </span>
              </div>

              {/* BRAND */}

              <div className="absolute bottom-5 right-5 hidden sm:block">
                <div className="rounded-full bg-black/40 px-4 py-2 text-xs font-semibold text-white backdrop-blur">
                  ✨ MueNee
                </div>
              </div>
            </div>

            {/* INFO */}

            <div className="flex flex-col justify-center p-7 md:p-10 lg:p-12">

              {/* BADGE */}

              <div
                className="
                  inline-flex
                  w-fit
                  items-center
                  gap-2
                  rounded-full
                  bg-orange-100
                  px-4
                  py-2
                  text-sm
                  font-black
                  text-orange-600
                  dark:bg-orange-500/10
                  dark:text-orange-400
                "
              >
                <Sparkles size={16} />
                สูตรอาหาร
              </div>

              {/* TITLE */}

              <h1
                className="
                  mt-5
                  text-4xl
                  font-black
                  leading-tight
                  tracking-tight
                  text-gray-900
                  dark:text-white
                  md:text-5xl
                "
              >
                {menu.name}
              </h1>

              <p className="mt-4 leading-relaxed text-gray-500 dark:text-gray-400">
                เมนูอร่อยที่ทำเองได้ง่าย ๆ พร้อมรายละเอียดวัตถุดิบ
                และวิธีทำแบบทีละขั้นตอน
              </p>

              {/* TAGS */}

              {tags.length > 0 && (
                <div className="mt-5 flex flex-wrap gap-2">
                  {tags.map(
                    (tag: string, index: number) => (
                      <span
                        key={`${tag}-${index}`}
                        className="
                          rounded-full
                          bg-gray-100
                          px-3
                          py-1.5
                          text-sm
                          font-semibold
                          text-gray-600
                          dark:bg-slate-800
                          dark:text-gray-300
                        "
                      >
                        #{tag}
                      </span>
                    )
                  )}
                </div>
              )}

              {/* INFO GRID */}

              <div className="mt-8 grid grid-cols-2 gap-3">

                {/* TIME */}

                <div className="rounded-2xl bg-orange-50 p-4 dark:bg-slate-800">
                  <Clock
                    size={22}
                    className="text-orange-500 dark:text-orange-400"
                  />

                  <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                    เวลา
                  </p>

                  <p className="mt-0.5 font-black text-gray-900 dark:text-white">
                    {menu.time}
                  </p>
                </div>

                {/* PRICE */}

                <div className="rounded-2xl bg-orange-50 p-4 dark:bg-slate-800">
                  <Wallet
                    size={22}
                    className="text-orange-500 dark:text-orange-400"
                  />

                  <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                    ราคา
                  </p>

                  <p className="mt-0.5 font-black text-gray-900 dark:text-white">
                    {menu.price} บาท
                  </p>
                </div>

                {/* TASTE */}

                <div className="rounded-2xl bg-orange-50 p-4 dark:bg-slate-800">
                  <Flame
                    size={22}
                    className="text-red-500 dark:text-red-400"
                  />

                  <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                    {tasteLabel}
                  </p>

                  <p className="mt-0.5 font-black text-gray-900 dark:text-white">
                    {tasteValue}
                  </p>
                </div>

                {/* DIFFICULTY */}

                <div className="rounded-2xl bg-orange-50 p-4 dark:bg-slate-800">
                  <Star
                    size={22}
                    className="text-yellow-500"
                  />

                  <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                    ความยาก
                  </p>

                  <p className="mt-0.5 font-black text-gray-900 dark:text-white">
                    {menu.difficulty}
                  </p>
                </div>
              </div>

              {/* CALORIES */}

              <div
                className="
                  mt-4
                  flex
                  items-center
                  gap-4
                  rounded-2xl
                  bg-gray-50
                  px-5
                  py-4
                  dark:bg-slate-800
                "
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-orange-100 dark:bg-orange-500/10">
                  <Flame
                    size={22}
                    className="text-orange-500 dark:text-orange-400"
                  />
                </div>

                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    พลังงานโดยประมาณ
                  </p>

                  <p className="font-black text-gray-900 dark:text-white">
                    {menu.calories} kcal
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================
            INGREDIENTS
        ===================================== */}

        <section
          className="
            mt-8
            rounded-[1.75rem]
            border
            border-gray-100
            bg-white
            p-6
            shadow-lg
            dark:border-slate-800
            dark:bg-slate-900
            dark:shadow-black/20
            md:mt-10
            md:p-10
          "
        >
          <div className="mb-7 flex items-center gap-4">
            <div
              className="
                flex
                h-12
                w-12
                shrink-0
                items-center
                justify-center
                rounded-2xl
                bg-orange-100
                text-orange-500
                dark:bg-orange-500/10
                dark:text-orange-400
              "
            >
              <Utensils size={24} />
            </div>

            <div>
              <h2 className="text-2xl font-black text-gray-900 dark:text-white">
                วัตถุดิบ
              </h2>

              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                เตรียมวัตถุดิบให้พร้อมก่อนเริ่มทำ
              </p>
            </div>
          </div>

          {ingredients.length > 0 ? (
            <div className="grid gap-3 sm:grid-cols-2">
              {ingredients.map(
                (item: string, index: number) => (
                  <div
                    key={`${item}-${index}`}
                    className="
                      group
                      flex
                      items-center
                      gap-3
                      rounded-2xl
                      border
                      border-orange-100
                      bg-orange-50
                      px-4
                      py-4
                      transition-all
                      hover:border-orange-200
                      hover:bg-orange-100
                      dark:border-slate-700
                      dark:bg-slate-800
                      dark:hover:border-orange-500/30
                      dark:hover:bg-slate-800
                    "
                  >
                    <span
                      className="
                        flex
                        h-8
                        w-8
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-orange-500
                        text-xs
                        font-black
                        text-white
                      "
                    >
                      <Check size={15} />
                    </span>

                    <span className="font-medium text-gray-700 dark:text-gray-200">
                      {item}
                    </span>
                  </div>
                )
              )}
            </div>
          ) : (
            <p className="text-gray-500 dark:text-gray-400">
              ยังไม่มีข้อมูลวัตถุดิบสำหรับเมนูนี้
            </p>
          )}
        </section>

        {/* =====================================
            RECIPE STEPS
        ===================================== */}

        <section
          className="
            mt-8
            rounded-[1.75rem]
            border
            border-gray-100
            bg-white
            p-6
            shadow-lg
            dark:border-slate-800
            dark:bg-slate-900
            dark:shadow-black/20
            md:mt-10
            md:p-10
          "
        >
          <div className="mb-8 flex items-center gap-4">
            <div
              className="
                flex
                h-12
                w-12
                shrink-0
                items-center
                justify-center
                rounded-2xl
                bg-orange-100
                text-orange-500
                dark:bg-orange-500/10
                dark:text-orange-400
              "
            >
              <ChefHat size={25} />
            </div>

            <div>
              <h2 className="text-2xl font-black text-gray-900 dark:text-white">
                วิธีทำ
              </h2>

              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                ทำตามทีละขั้นตอนได้เลย
              </p>
            </div>
          </div>

          {recipe.length > 0 ? (
            <div className="space-y-4">
              {recipe.map(
                (step: string, index: number) => (
                  <div
                    key={`${step}-${index}`}
                    className="
                      flex
                      gap-4
                      rounded-2xl
                      bg-gray-50
                      p-5
                      transition-colors
                      dark:bg-slate-800
                    "
                  >
                    <div
                      className="
                        flex
                        h-11
                        w-11
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-orange-500
                        text-sm
                        font-black
                        text-white
                        shadow-sm
                      "
                    >
                      {index + 1}
                    </div>

                    <div className="flex-1">
                      <p className="mb-1 text-sm font-bold text-orange-500 dark:text-orange-400">
                        ขั้นตอนที่ {index + 1}
                      </p>

                      <p className="leading-relaxed text-gray-700 dark:text-gray-200">
                        {step}
                      </p>
                    </div>
                  </div>
                )
              )}
            </div>
          ) : (
            <p className="text-gray-500 dark:text-gray-400">
              ยังไม่มีข้อมูลวิธีทำสำหรับเมนูนี้
            </p>
          )}
        </section>

        {/* =====================================
            TIP
        ===================================== */}

        <section
          className="
            mt-8
            rounded-[1.75rem]
            border
            border-orange-200
            bg-orange-100
            p-6
            dark:border-orange-500/20
            dark:bg-orange-500/10
            md:mt-10
            md:p-8
          "
        >
          <div className="flex gap-4">
            <div
              className="
                flex
                h-12
                w-12
                shrink-0
                items-center
                justify-center
                rounded-2xl
                bg-orange-500
                text-white
              "
            >
              <Lightbulb size={24} />
            </div>

            <div>
              <h2 className="text-xl font-black text-gray-900 dark:text-white">
                เคล็ดลับ
              </h2>

              <p className="mt-2 leading-relaxed text-gray-700 dark:text-gray-300">
                เตรียมวัตถุดิบให้พร้อมก่อนเริ่มทำ
                และปรับปริมาณเครื่องปรุงตามความชอบของคุณได้เลย
              </p>
            </div>
          </div>
        </section>

        {/* =====================================
            RELATED
        ===================================== */}

        {relatedMenus.length > 0 && (
          <section className="mt-12 md:mt-14">
            <div className="mb-6 flex items-end justify-between gap-4">
              <div>
                <div className="flex items-center gap-2">
                  <Sparkles
                    size={20}
                    className="text-orange-500 dark:text-orange-400"
                  />

                  <h2 className="text-2xl font-black text-gray-900 dark:text-white">
                    เมนูที่น่าสนใจ
                  </h2>
                </div>

                <p className="mt-1 text-gray-500 dark:text-gray-400">
                  เมนูอื่น ๆ ในหมวดเดียวกัน
                </p>
              </div>

              <Link
                href={`/category/${categorySlug}`}
                className="
                  hidden
                  font-bold
                  text-orange-500
                  hover:underline
                  dark:text-orange-400
                  sm:block
                "
              >
                ดูทั้งหมด →
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
              {relatedMenus.map((related: Menu) => (
                <Link
                  key={related.id}
                  href={`/recipe/${related.id}`}
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
                    hover:-translate-y-1
                    hover:border-orange-200
                    hover:shadow-xl
                    dark:border-slate-800
                    dark:bg-slate-900
                    dark:hover:border-orange-500/30
                  "
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={
                        related.image ||
                        "/images/default-food.jpg"
                      }
                      alt={related.name}
                      fill
                      sizes="(max-width:640px) 100vw, 33vw"
                      className="
                        object-cover
                        transition-transform
                        duration-500
                        group-hover:scale-105
                      "
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                  </div>

                  <div className="p-5">
                    <span className="text-xs font-bold text-orange-500 dark:text-orange-400">
                      {related.category}
                    </span>

                    <h3
                      className="
                        mt-2
                        line-clamp-1
                        text-lg
                        font-black
                        text-gray-900
                        dark:text-white
                      "
                    >
                      {related.name}
                    </h3>

                    <div
                      className="
                        mt-3
                        flex
                        items-center
                        justify-between
                        text-sm
                        text-gray-500
                        dark:text-gray-400
                      "
                    >
                      <span className="flex items-center gap-1.5">
                        <Clock size={15} />
                        {related.time}
                      </span>

                      <span className="flex items-center gap-1.5">
                        <Wallet size={15} />
                        {related.price} บาท
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* MOBILE */}

            <div className="mt-5 text-center sm:hidden">
              <Link
                href={`/category/${categorySlug}`}
                className="font-bold text-orange-500 dark:text-orange-400"
              >
                ดูเมนูในหมวดนี้ทั้งหมด →
              </Link>
            </div>
          </section>
        )}

        {/* =====================================
            BOTTOM ACTION
        ===================================== */}

        <div
          className="
            mt-12
            flex
            flex-wrap
            justify-center
            gap-3
            md:mt-14
          "
        >
          <Link
            href="/random"
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              bg-orange-500
              px-6
              py-3.5
              font-black
              text-white
              shadow-lg
              transition-all
              hover:-translate-y-0.5
              hover:bg-orange-600
              hover:shadow-xl
            "
          >
            <Sparkles size={19} />
            สุ่มเมนูใหม่
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
              py-3.5
              font-black
              text-white
              transition-all
              hover:-translate-y-0.5
              hover:bg-gray-900
              dark:bg-slate-700
              dark:hover:bg-slate-600
            "
          >
            <Utensils size={19} />
            ดูเมนูทั้งหมด
          </Link>
        </div>

        {/* FOOTER HINT */}

        <p className="mt-8 text-center text-sm text-gray-400 dark:text-gray-600">
          ✨ MueNee — วันนี้กินอะไรดี?
        </p>
      </div>
    </main>
  );
}