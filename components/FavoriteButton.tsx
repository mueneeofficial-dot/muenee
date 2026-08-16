"use client";

import { useEffect, useState } from "react";
import { Heart } from "lucide-react";

import {
  toggleFavorite as saveFavorite,
  isFavorite,
} from "@/lib/favorites";

export default function FavoriteButton({
  id,
}: {
  id: string;
}) {
  const [favorite, setFavorite] = useState(false);

  useEffect(() => {
    setFavorite(isFavorite(id));
  }, [id]);

  const toggleHeart = (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    e.stopPropagation();

    const updated = saveFavorite(id);

    setFavorite(updated.includes(id));
  };

  return (
    <button
      type="button"
      onClick={toggleHeart}
      aria-label={
        favorite
          ? "ลบออกจากเมนูโปรด"
          : "เพิ่มในเมนูโปรด"
      }
      aria-pressed={favorite}
      title={
        favorite
          ? "ลบออกจากเมนูโปรด"
          : "เพิ่มในเมนูโปรด"
      }
      className="
        absolute
        right-4
        top-4
        z-10
        flex
        h-11
        w-11
        items-center
        justify-center
        rounded-full
        bg-white/95
        shadow-lg
        backdrop-blur
        transition-all
        duration-200
        hover:scale-110
        active:scale-95
        dark:bg-slate-900/95
      "
    >
      <Heart
        size={21}
        strokeWidth={2.2}
        className={
          favorite
            ? "fill-red-500 text-red-500"
            : "text-gray-400 dark:text-gray-300"
        }
      />
    </button>
  );
}