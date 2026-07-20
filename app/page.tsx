import Hero from "@/components/home/Hero";
import SearchBar from "@/components/home/SearchBar";
import PopularTags from "@/components/home/PopularTags";
import EmptyState from "@/components/home/EmptyState";

function page() {
  return (
    <>
      <Hero />
      <SearchBar />
      <PopularTags />
      <EmptyState />
    </>
  );
}

export default page;
