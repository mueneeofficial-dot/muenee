import Link from "next/link";
import Image from "next/image";
import { menus } from "@/data";

export default function RecipePage() {
  return (
    <main className="min-h-screen bg-orange-50 dark:bg-gray-900 px-6 py-20">

      <h1
        className="
          text-4xl
          font-black
          mb-4
          text-gray-900
          dark:text-white
        "
      >
        สูตรอาหารทั้งหมด
      </h1>

      <p
        className="
          text-gray-500
          dark:text-gray-400
          mb-10
        "
      >
        เลือกเมนูที่อยากทำ แล้วดูวิธีทำได้เลย
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

        {menus.map((menu) => (

          <Link
            key={menu.id}
            href={`/recipe/${menu.id}`}
            className="
              bg-white
              dark:bg-gray-800
              rounded-3xl
              overflow-hidden
              shadow-md
              hover:shadow-xl
              transition
            "
          >

            <div className="relative h-56">

              <Image
                src={menu.image}
                alt={menu.name}
                fill
                sizes="(max-width:768px)100vw,(max-width:1200px)50vw,25vw"
                className="object-cover"
              />

            </div>

            <div className="p-5">

              <h2
                className="
                  text-xl
                  font-bold
                  text-gray-900
                  dark:text-white
                "
              >
                {menu.name}
              </h2>

              <p
                className="
                  mt-2
                  text-gray-500
                  dark:text-gray-400
                "
              >
                {menu.category}
              </p>

              <p
                className="
                  mt-2
                  text-gray-700
                  dark:text-gray-300
                "
              >
                ⏱ {menu.time}
              </p>

              <p
                className="
                  text-gray-700
                  dark:text-gray-300
                "
              >
                💰 {menu.price} บาท
              </p>

            </div>

          </Link>

        ))}

      </div>

    </main>
  );
}