"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { Search, Wallet, Clock, X } from "lucide-react";

type Menu = {
  id: string;
  name: string;
  image: string;
  price: number;
  time: string;
};

export default function CategoryMenuList({
  menus,
}: {
  menus: Menu[];
}) {
  const [search, setSearch] = useState("");

  const filteredMenus = useMemo(() => {
    const keyword = search.trim().toLowerCase();

    if (!keyword) {
      return menus;
    }

    return menus.filter((menu) =>
      menu.name.toLowerCase().includes(keyword)
    );
  }, [menus, search]);

  return (
    <>
      {/* Search */}
      <div className="mb-10">
        <div
          className="
            relative
            max-w-2xl
            mx-auto
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
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={`ค้นหาเมนู${menus.length > 0 ? "" : "..."}`}
            className="
              w-full
              rounded-full
              border
              border-gray-200
              dark:border-gray-700
              bg-white
              dark:bg-slate-800
              text-gray-900
              dark:text-white
              placeholder-gray-400
              dark:placeholder-gray-500
              py-4
              pl-14
              pr-14
              outline-none
              focus:border-orange-400
              focus:ring-4
              focus:ring-orange-500/10
              transition
            "
          />

          {search && (
            <button
              type="button"
              onClick={() => setSearch("")}
              aria-label="ล้างการค้นหา"
              className="
                absolute
                right-4
                top-1/2
                -translate-y-1/2
                w-9
                h-9
                rounded-full
                flex
                items-center
                justify-center
                text-gray-400
                hover:text-gray-700
                dark:hover:text-gray-200
                hover:bg-gray-100
                dark:hover:bg-gray-700
                transition
              "
            >
              <X size={18} />
            </button>
          )}
        </div>

        {/* Search result count */}
        <div className="mt-4 text-center">
          {search ? (
            <p className="text-gray-500 dark:text-gray-400">
              พบ{" "}
              <span className="font-bold text-orange-500">
                {filteredMenus.length}
              </span>{" "}
              เมนูจากการค้นหา
              {search && (
                <>
                  {" "}
                  <span className="font-bold text-gray-700 dark:text-gray-200">
                    "{search}"
                  </span>
                </>
              )}
            </p>
          ) : (
            <p className="text-gray-500 dark:text-gray-400">
              มีทั้งหมด {menus.length} เมนู
            </p>
          )}
        </div>
      </div>

      {/* No result */}
      {filteredMenus.length === 0 ? (
        <div className="py-20 text-center">
          <Search
            size={56}
            className="
              mx-auto
              text-orange-400
              dark:text-orange-500
            "
          />

          <h2
            className="
              text-2xl
              font-bold
              mt-6
              text-gray-900
              dark:text-white
            "
          >
            ไม่พบเมนูที่ค้นหา
          </h2>

          <p className="mt-3 text-gray-500 dark:text-gray-400">
            ลองค้นหาด้วยชื่อเมนูอื่น
          </p>

          <button
            type="button"
            onClick={() => setSearch("")}
            className="
              mt-6
              px-6
              py-3
              rounded-full
              bg-orange-500
              hover:bg-orange-600
              text-white
              font-bold
              transition
            "
          >
            ดูเมนูทั้งหมด
          </button>
        </div>
      ) : (
        /* Menu Grid */
        <div
          className="
            grid
            grid-cols-2
            md:grid-cols-3
            lg:grid-cols-4
            gap-6
          "
        >
          {filteredMenus.map((menu) => (
            <Link
              key={menu.id}
              href={`/recipe/${menu.id}`}
              className="
                group
                bg-white
                dark:bg-slate-800
                rounded-3xl
                overflow-hidden
                shadow-md
                dark:shadow-black/30
                hover:shadow-xl
                dark:hover:shadow-black/40
                hover:-translate-y-1
                transition-all
                duration-300
                border
                border-gray-100
                dark:border-slate-700
                hover:border-orange-300
                dark:hover:border-orange-500/50
              "
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={menu.image}
                  alt={menu.name}
                  fill
                  sizes="
                    (max-width:768px) 50vw,
                    (max-width:1200px) 33vw,
                    25vw
                  "
                  className="
                    object-cover
                    group-hover:scale-105
                    transition-transform
                    duration-500
                  "
                />
              </div>

              {/* Details */}
              <div className="p-5">
                <h2
                  className="
                    font-bold
                    text-xl
                    text-gray-900
                    dark:text-white
                  "
                >
                  {menu.name}
                </h2>

                <div
                  className="
                    mt-3
                    flex
                    items-center
                    gap-2
                    text-gray-600
                    dark:text-gray-300
                  "
                >
                  <Wallet
                    size={17}
                    className="text-orange-500"
                  />

                  <span>{menu.price} บาท</span>
                </div>

                <div
                  className="
                    mt-1
                    flex
                    items-center
                    gap-2
                    text-gray-600
                    dark:text-gray-300
                  "
                >
                  <Clock
                    size={17}
                    className="text-orange-500"
                  />

                  <span>{menu.time}</span>
                </div>

                <div
                  className="
                    mt-4
                    text-orange-500
                    dark:text-orange-400
                    font-semibold
                    group-hover:translate-x-1
                    transition-transform
                  "
                >
                  ดูสูตรอาหาร →
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </>
  );
}