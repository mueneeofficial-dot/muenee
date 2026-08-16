"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  Sparkles,
  Menu,
  X,
  Heart,
  Moon,
  Sun,
  Utensils,
  ChefHat,
} from "lucide-react";
import { useTheme } from "next-themes";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <nav
      className="
        sticky
        top-0
        z-50
        border-b
        border-gray-200/70
        bg-white/90
        backdrop-blur-md
        transition-colors
        duration-300
        dark:border-slate-800/70
        dark:bg-slate-950/90
      "
    >
      <div
        className="
          mx-auto
          flex
          h-20
          max-w-7xl
          items-center
          justify-between
          px-5
          md:px-6
        "
      >
        {/* =====================================
            LOGO
        ===================================== */}

        <Link
          href="/"
          onClick={closeMenu}
          className="
            flex
            items-center
            gap-3
            transition-transform
            hover:scale-[1.02]
          "
        >
          <Image
            src="/images/logo.png"
            alt="MueNee Logo"
            width={48}
            height={48}
            priority
            className="rounded-full"
          />

          <div>
            <h1
              className="
                text-2xl
                font-black
                tracking-tight
                text-orange-500
                dark:text-orange-400
              "
            >
              MueNee
            </h1>

            <p
              className="
                text-xs
                text-gray-500
                dark:text-gray-400
              "
            >
              วันนี้กินอะไรดี?
            </p>
          </div>
        </Link>

        {/* =====================================
            DESKTOP MENU
        ===================================== */}

        <div className="hidden items-center gap-6 md:flex">

          {/* HOME */}

          <Link
            href="/"
            className="
              font-semibold
              text-gray-700
              transition
              hover:text-orange-500
              dark:text-gray-200
              dark:hover:text-orange-400
            "
          >
            หน้าแรก
          </Link>

          {/* ALL MENUS */}

          <Link
            href="/menus"
            className="
              font-semibold
              text-gray-700
              transition
              hover:text-orange-500
              dark:text-gray-200
              dark:hover:text-orange-400
            "
          >
            เมนูทั้งหมด
          </Link>

          {/* CATEGORY */}

          <Link
            href="/category"
            className="
              flex
              items-center
              gap-1.5
              font-semibold
              text-gray-700
              transition
              hover:text-orange-500
              dark:text-gray-200
              dark:hover:text-orange-400
            "
          >
            <Utensils size={17} />
            หมวดอาหาร
          </Link>

          {/* RECIPES */}

          <Link
            href="/menus"
            className="
              flex
              items-center
              gap-1.5
              font-semibold
              text-gray-700
              transition
              hover:text-orange-500
              dark:text-gray-200
              dark:hover:text-orange-400
            "
          >
            <ChefHat size={17} />
            สูตรอาหาร
          </Link>

          {/* FAVORITES */}

          <Link
            href="/favorites"
            className="
              flex
              items-center
              gap-1.5
              font-semibold
              text-gray-700
              transition
              hover:text-red-500
              dark:text-gray-200
              dark:hover:text-red-400
            "
          >
            <Heart size={18} />
            เมนูโปรด
          </Link>

          {/* THEME */}

          <button
            type="button"
            onClick={toggleTheme}
            aria-label="เปลี่ยนธีม"
            className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              bg-gray-100
              text-gray-700
              transition-all
              hover:-translate-y-0.5
              hover:bg-gray-200
              dark:bg-slate-800
              dark:text-yellow-300
              dark:hover:bg-slate-700
            "
          >
            {mounted ? (
              theme === "dark" ? (
                <Sun size={20} />
              ) : (
                <Moon size={20} />
              )
            ) : (
              <Moon size={20} />
            )}
          </button>

          {/* RANDOM */}

          <Link
            href="/random"
            className="
              flex
              items-center
              gap-2
              rounded-full
              bg-orange-500
              px-5
              py-2.5
              font-black
              text-white
              shadow-md
              transition-all
              duration-200
              hover:-translate-y-0.5
              hover:bg-orange-600
              hover:shadow-lg
            "
          >
            <Sparkles size={18} />
            สุ่มเมนู
          </Link>
        </div>

        {/* =====================================
            MOBILE BUTTON
        ===================================== */}

        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          aria-label={open ? "ปิดเมนู" : "เปิดเมนู"}
          aria-expanded={open}
          className="
            rounded-xl
            p-2.5
            text-gray-700
            transition
            hover:bg-gray-100
            dark:text-gray-200
            dark:hover:bg-slate-800
            md:hidden
          "
        >
          {open ? <X size={29} /> : <Menu size={29} />}
        </button>
      </div>

      {/* =====================================
          MOBILE MENU
      ===================================== */}

      {open && (
        <div
          className="
            border-t
            border-gray-200
            bg-white
            px-5
            py-6
            shadow-xl
            dark:border-slate-800
            dark:bg-slate-950
            md:hidden
          "
        >
          <div className="space-y-3">

            {/* HOME */}

            <Link
              href="/"
              onClick={closeMenu}
              className="
                flex
                items-center
                rounded-2xl
                px-4
                py-3
                text-lg
                font-semibold
                text-gray-700
                transition
                hover:bg-orange-50
                hover:text-orange-500
                dark:text-gray-200
                dark:hover:bg-slate-900
                dark:hover:text-orange-400
              "
            >
              หน้าแรก
            </Link>

            {/* MENUS */}

            <Link
              href="/menus"
              onClick={closeMenu}
              className="
                flex
                items-center
                rounded-2xl
                px-4
                py-3
                text-lg
                font-semibold
                text-gray-700
                transition
                hover:bg-orange-50
                hover:text-orange-500
                dark:text-gray-200
                dark:hover:bg-slate-900
                dark:hover:text-orange-400
              "
            >
              เมนูทั้งหมด
            </Link>

            {/* CATEGORY */}

            <Link
              href="/category"
              onClick={closeMenu}
              className="
                flex
                items-center
                gap-2
                rounded-2xl
                px-4
                py-3
                text-lg
                font-semibold
                text-gray-700
                transition
                hover:bg-orange-50
                hover:text-orange-500
                dark:text-gray-200
                dark:hover:bg-slate-900
                dark:hover:text-orange-400
              "
            >
              <Utensils size={20} />
              หมวดอาหาร
            </Link>

            {/* RECIPES */}

            <Link
              href="/menus"
              onClick={closeMenu}
              className="
                flex
                items-center
                gap-2
                rounded-2xl
                px-4
                py-3
                text-lg
                font-semibold
                text-gray-700
                transition
                hover:bg-orange-50
                hover:text-orange-500
                dark:text-gray-200
                dark:hover:bg-slate-900
                dark:hover:text-orange-400
              "
            >
              <ChefHat size={20} />
              สูตรอาหาร
            </Link>

            {/* FAVORITES */}

            <Link
              href="/favorites"
              onClick={closeMenu}
              className="
                flex
                items-center
                gap-2
                rounded-2xl
                px-4
                py-3
                text-lg
                font-semibold
                text-gray-700
                transition
                hover:bg-red-50
                hover:text-red-500
                dark:text-gray-200
                dark:hover:bg-slate-900
                dark:hover:text-red-400
              "
            >
              <Heart size={20} />
              เมนูโปรด
            </Link>

            {/* THEME */}

            <button
              type="button"
              onClick={toggleTheme}
              className="
                flex
                w-full
                items-center
                justify-center
                gap-3
                rounded-full
                bg-gray-100
                py-3.5
                font-bold
                text-gray-700
                transition
                hover:bg-gray-200
                dark:bg-slate-800
                dark:text-gray-200
                dark:hover:bg-slate-700
              "
            >
              {mounted ? (
                theme === "dark" ? (
                  <>
                    <Sun size={20} />
                    โหมดสว่าง
                  </>
                ) : (
                  <>
                    <Moon size={20} />
                    โหมดมืด
                  </>
                )
              ) : (
                <>
                  <Moon size={20} />
                  โหมดมืด
                </>
              )}
            </button>

            {/* RANDOM */}

            <Link
              href="/random"
              onClick={closeMenu}
              className="
                flex
                items-center
                justify-center
                gap-2
                rounded-full
                bg-orange-500
                py-3.5
                font-black
                text-white
                shadow-md
                transition-all
                hover:-translate-y-0.5
                hover:bg-orange-600
              "
            >
              <Sparkles size={19} />
              สุ่มเมนู
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}