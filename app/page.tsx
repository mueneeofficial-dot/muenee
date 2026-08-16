import Hero from "@/components/Hero";
import Category from "@/components/Category";
import FeaturedMenu from "@/components/FeaturedMenu";
import RecipeSection from "@/components/RecipeSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <Category />
      <FeaturedMenu />
      <RecipeSection />
    </main>
  );
}