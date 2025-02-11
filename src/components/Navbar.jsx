import NavbarItems from "./NavbarItems";

export default function Navbar() {
  return (
    <div className="flex max-w-7xl mx-auto dark:bg-gray-800 bg-amber-200 p-4 lg:text-lg justify-center gap-6">
      <NavbarItems title="Trending" param="fetchTrending" />
      <NavbarItems title="Top Rated" param="fetchTopRated" />
    </div>
  );
}
