import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  Utensils,
  ChefHat,
  Heart,
  Mail,
} from "lucide-react";

export default function Footer() {
  return (
    <footer
      className="
        border-t
        border-gray-800
        bg-gray-950
        py-14
        text-white
        transition-colors
        duration-300
      "
    >
      <div className="mx-auto max-w-6xl px-6">

        {/* =========================
            MAIN
        ========================== */}

        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">

          {/* =========================
              BRAND
          ========================== */}

          <div className="md:col-span-2">

            <Link
              href="/"
              className="inline-flex items-center gap-3"
            >
              {/* LOGO เดิมของ MueNee */}
              <Image
                src="/images/logo.png"
                alt="MueNee Logo"
                width={56}
                height={56}
                className="rounded-full"
              />

              <div>
                <h2
                  className="
                    text-3xl
                    font-black
                    tracking-tight
                    text-orange-400
                  "
                >
                  MueNee
                </h2>

                <p className="text-xs text-gray-500">
                  วันนี้กินอะไรดี?
                </p>
              </div>
            </Link>

            <p
              className="
                mt-5
                max-w-md
                leading-relaxed
                text-gray-400
              "
            >
              วันนี้กินอะไรดี?
              <br />
              MueNee ช่วยคิดเมนูอาหาร
              พร้อมสูตรอาหารและไอเดียทำกินง่าย ๆ
              สำหรับทุกวัน
            </p>

            <Link
              href="/random"
              className="
                mt-6
                inline-flex
                items-center
                gap-2
                rounded-full
                bg-orange-500
                px-5
                py-2.5
                text-sm
                font-bold
                text-white
                transition-all
                hover:-translate-y-0.5
                hover:bg-orange-600
              "
            >
              <Sparkles size={17} />
              สุ่มเมนูง่าย ๆ ทุกวัน
            </Link>

          </div>

          {/* =========================
              MENU
          ========================== */}

          <div>

            <h3 className="text-xl font-bold text-white">
              เมนู
            </h3>

            <ul className="mt-5 space-y-3">

              <li>
                <Link
                  href="/"
                  className="
                    flex
                    items-center
                    gap-2
                    text-gray-400
                    transition
                    hover:text-orange-400
                  "
                >
                  <Sparkles size={16} />
                  หน้าแรก
                </Link>
              </li>

              <li>
                <Link
                  href="/menus"
                  className="
                    flex
                    items-center
                    gap-2
                    text-gray-400
                    transition
                    hover:text-orange-400
                  "
                >
                  <Utensils size={16} />
                  เมนูทั้งหมด
                </Link>
              </li>

              <li>
                <Link
                  href="/category"
                  className="
                    flex
                    items-center
                    gap-2
                    text-gray-400
                    transition
                    hover:text-orange-400
                  "
                >
                  <Utensils size={16} />
                  หมวดอาหาร
                </Link>
              </li>

              <li>
                <Link
                  href="/random"
                  className="
                    flex
                    items-center
                    gap-2
                    text-gray-400
                    transition
                    hover:text-orange-400
                  "
                >
                  <Sparkles size={16} />
                  สุ่มเมนู
                </Link>
              </li>

              <li>
                <Link
                  href="/menus"
                  className="
                    flex
                    items-center
                    gap-2
                    text-gray-400
                    transition
                    hover:text-orange-400
                  "
                >
                  <ChefHat size={16} />
                  สูตรอาหาร
                </Link>
              </li>

              <li>
                <Link
                  href="/favorites"
                  className="
                    flex
                    items-center
                    gap-2
                    text-gray-400
                    transition
                    hover:text-red-400
                  "
                >
                  <Heart size={16} />
                  เมนูโปรด
                </Link>
              </li>

            </ul>

          </div>

          {/* =========================
              CONTACT
          ========================== */}

          <div>

            <h3 className="text-xl font-bold text-white">
              ติดต่อ
            </h3>

            <div className="mt-5 space-y-3">

              {/* FACEBOOK */}

              <a
                href="#"
                className="
                  flex
                  items-center
                  gap-3
                  text-gray-400
                  transition
                  hover:text-orange-400
                "
              >
                <span
                  className="
                    flex
                    h-8
                    w-8
                    items-center
                    justify-center
                    rounded-full
                    bg-gray-800
                    text-sm
                    font-bold
                  "
                >
                  f
                </span>

                Facebook
              </a>

              {/* TIKTOK */}

              <a
                href="#"
                className="
                  flex
                  items-center
                  gap-3
                  text-gray-400
                  transition
                  hover:text-orange-400
                "
              >
                <span
                  className="
                    flex
                    h-8
                    w-8
                    items-center
                    justify-center
                    rounded-full
                    bg-gray-800
                    text-sm
                    font-bold
                  "
                >
                  ♪
                </span>

                TikTok
              </a>

              {/* EMAIL */}

              <a
                href="mailto:muenee.official@gmail.com"
                className="
                  flex
                  items-center
                  gap-3
                  text-gray-400
                  transition
                  hover:text-orange-400
                "
              >
                <span
                  className="
                    flex
                    h-8
                    w-8
                    items-center
                    justify-center
                    rounded-full
                    bg-gray-800
                  "
                >
                  <Mail size={16} />
                </span>

                Email
              </a>

            </div>

          </div>

        </div>

        {/* =========================
            BOTTOM
        ========================== */}

        <div
          className="
            mt-12
            flex
            flex-col
            gap-3
            border-t
            border-gray-800
            pt-6
            text-center
            text-sm
            text-gray-500
            md:flex-row
            md:items-center
            md:justify-between
            md:text-left
          "
        >
          <p>
            © 2026 MueNee. All rights reserved.
          </p>

          <p className="flex items-center justify-center gap-1">
            ทำด้วย
            <span className="text-orange-400">
              ♥
            </span>
            เพื่อคนที่ไม่รู้ว่า
            <span className="text-gray-400">
              วันนี้กินอะไรดี?
            </span>
          </p>
        </div>

      </div>
    </footer>
  );
}