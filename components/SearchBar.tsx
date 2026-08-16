"use client";

import { useState } from "react";
import { Search } from "lucide-react";

type Props = {
  onSearch: (keyword: string) => void;
};

export default function SearchBar({ onSearch }: Props) {
  const [keyword, setKeyword] = useState("");

  return (
    <div className="relative w-full max-w-xl mx-auto mb-10">
      <Search
        size={20}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
      />

      <input
        type="text"
        placeholder="ค้นหาเมนูอาหาร..."
        value={keyword}
        onChange={(e) => {
          setKeyword(e.target.value);
          onSearch(e.target.value);
        }}
        className="
          w-full
          pl-12
          pr-4
          py-4
          rounded-full
          border
          border-gray-300
          shadow-sm
          focus:outline-none
          focus:ring-2
          focus:ring-orange-500
        "
      />
    </div>
  );
}