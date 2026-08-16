import Link from "next/link";
import { Sparkles, ArrowRight } from "lucide-react";

import { menus } from "@/data";
import MenuCard from "./MenuCard";

export default function FeaturedMenu() {
  const featuredMenus = menus.slice(0, 8);

  return (
    <section
      className="
        bg-gray-50
        px-5
        py-16
        transition-colors
        duration-500
        dark:bg-slate-950
        md:px-6
        md:py-20
      "
    >
      <div className="mx-auto max-w-7xl">

        {/* =====================================
            HEADER
        ===================================== */}

        <div className="text-center">

          <div
            className="
              mb-4
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
            MueNee Selection
          </div>

          <h2
            className="
              text-3xl
              font-black
              tracking-tight
              text-gray-900
              dark:text-white
              md:text-4xl
            "
          >
            เมนูแนะนำวันนี้
          </h2>

          <p
            className="
              mx-auto
              mt-3
              max-w-xl
              text-gray-500
              dark:text-gray-400
            "
          >
            รวมเมนูน่าสนใจที่อยากให้คุณลอง
            เลือกเมนูที่ถูกใจแล้วไปดูสูตรได้เลย
          </p>

        </div>

        {/* =====================================
            MENU GRID
        ===================================== */}

        <div
          className="
            mt-10
            grid
            grid-cols-1
            gap-5
            sm:grid-cols-2
            lg:grid-cols-4
            lg:gap-6
          "
        >
          {featuredMenus.map((menu, index) => (
            <div
              key={menu.id}
              className="
                animate-[fadeIn_0.5s_ease-out]
              "
              style={{
                animationDelay: `${index * 70}ms`,
              }}
            >
              <MenuCard menu={menu} />
            </div>
          ))}
        </div>

        {/* =====================================
            VIEW ALL
        ===================================== */}

        <div className="mt-10 text-center">

          <Link
            href="/menus"
            className="
              group
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-orange-200
              bg-white
              px-6
              py-3
              font-bold
              text-orange-500
              shadow-sm
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:border-orange-500
              hover:bg-orange-500
              hover:text-white
              hover:shadow-lg
              dark:border-orange-500/20
              dark:bg-slate-900
              dark:text-orange-400
              dark:hover:border-orange-500
              dark:hover:bg-orange-500
              dark:hover:text-white
            "
          >
            ดูเมนูทั้งหมด

            <ArrowRight
              size={18}
              className="
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            />
          </Link>

        </div>

      </div>
    </section>
  );
}