// import React from 'react';


// const Laptops = () => {
//   const laptops = [
//     {
//       id: 1,
//       name: "Quantum X Pro",
//       brand: "NOVATECH",
//       price: "$1,099",
//       originalPrice: "$1,199",
//       discount: "-8%",
//       image: "💻",
//       rating: 4.8,
//       reviews: "2,341",
//       badge: "Best Seller"
//     },
//     {
//       id: 2,
//       name: "Blade 16 Ultra",
//       brand: "RAZERTECH",
//       price: "$2,499",
//       originalPrice: "$2,799",
//       discount: "-11%",
//       image: "💻",
//       rating: 4.9,
//       reviews: "876",
//       badge: "Gaming"
//     },
//     {
//       id: 3,
//       name: "AetherBook Pro",
//       brand: "LUMEN",
//       price: "$899",
//       originalPrice: "$999",
//       discount: "-10%",
//       image: "💻",
//       rating: 4.6,
//       reviews: "1,543",
//       badge: "New"
//     },
//     {
//       id: 4,
//       name: "Forge 14 Slim",
//       brand: "NOVATECH",
//       price: "$1,399",
//       originalPrice: "$1,599",
//       discount: "-13%",
//       image: "💻",
//       rating: 4.7,
//       reviews: "2,098",
//       badge: ""
//     },
//     {
//       id: 5,
//       name: "Velocity Z16",
//       brand: "RAZERTECH",
//       price: "$1,799",
//       originalPrice: "$1,999",
//       discount: "-10%",
//       image: "💻",
//       rating: 4.8,
//       reviews: "654",
//       badge: "Premium"
//     },
//     {
//       id: 6,
//       name: "NeoBook Air",
//       brand: "LUMEN",
//       price: "$649",
//       originalPrice: "$749",
//       discount: "-13%",
//       image: "💻",
//       rating: 4.5,
//       reviews: "3,214",
//       badge: ""
//     },
//   ];

//   return (
//     <>
     

//       {/* Page Header */}
//       <section className="bg-black text-white pt-24 pb-12 px-6">
//         <div className="max-w-7xl mx-auto text-center">
//           <h1 className="text-5xl font-bold tracking-tight mb-4">Laptops</h1>
//           <p className="text-gray-400 text-lg max-w-2xl mx-auto">
//             Powerful laptops engineered for performance, creativity, and portability.
//           </p>
//         </div>
//       </section>

//       {/* Products Grid */}
//       <section className="bg-black text-white pb-20 px-6">
//         <div className="max-w-7xl mx-auto">
//           <div className="flex justify-between items-center mb-10">
//             <p className="text-gray-400">Showing 32 premium laptops</p>
//             <select className="bg-[#0a0f1c] border border-gray-800 rounded-xl px-5 py-3 text-sm focus:outline-none focus:border-[#4d61fc]">
//               <option>Sort by: Featured</option>
//               <option>Price: Low to High</option>
//               <option>Price: High to Low</option>
//               <option>Best Rating</option>
//               <option>Newest First</option>
//             </select>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
//             {laptops.map((laptop) => (
//               <div
//                 key={laptop.id}
//                 className="group bg-[#0a0f1c] border border-gray-900 rounded-3xl overflow-hidden hover:border-[#4d61fc] transition-all duration-300 hover:-translate-y-2"
//               >
//                 {/* Image Area */}
//                 <div className="relative h-72 bg-gradient-to-b from-[#1a2338] to-[#0a0f1c] flex items-center justify-center text-8xl transition-transform group-hover:scale-110">
//                   {laptop.image}
                  
//                   {laptop.badge && (
//                     <span className="absolute top-5 left-5 bg-[#4d61fc] text-white text-xs font-bold px-4 py-1.5 rounded-full">
//                       {laptop.badge}
//                     </span>
//                   )}
//                 </div>

//                 {/* Content */}
//                 <div className="p-6">
//                   <div className="text-xs font-medium text-gray-500 mb-1">{laptop.brand}</div>
//                   <h3 className="text-xl font-semibold mb-3 group-hover:text-[#4d61fc] transition-colors">
//                     {laptop.name}
//                   </h3>

//                   {/* Rating */}
//                   <div className="flex items-center gap-2 mb-4">
//                     <div className="flex text-amber-400">
//                       {[...Array(5)].map((_, i) => (
//                         <span key={i}>★</span>
//                       ))}
//                     </div>
//                     <span className="text-sm text-gray-400">({laptop.reviews})</span>
//                   </div>

//                   {/* Price */}
//                   <div className="flex items-baseline gap-3">
//                     <span className="text-3xl font-bold text-white">{laptop.price}</span>
//                     <span className="text-gray-500 line-through text-lg">{laptop.originalPrice}</span>
//                     <span className="text-emerald-400 text-sm font-medium">{laptop.discount}</span>
//                   </div>

//                   <button className="mt-6 w-full bg-[#4d61fc] hover:bg-[#5a71ff] py-3.5 rounded-2xl font-medium transition-all duration-300">
//                     Add to Cart
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Laptops;



import React, { useEffect, useState } from "react";

const Laptops = () => {
  const [allLaptops, setAllLaptops] = useState([]);
  const [filteredLaptops, setFilteredLaptops] = useState([]);
  const [activeFilter, setActiveFilter] = useState("all");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  // Subcategory IDs - Update these according to your database
  const SUBCATEGORY_IDS = {
    ALL: "all",
    GAMING: 1,
    ULTRABOOKS: 2,
    WORKSTATION: 3,
    EVERYDAY: 4,
    CONVERTIBLE: 5,
    // Add more as per your admin panel
  };

  const fetchLaptops = async () => {
    setIsLoading(true);
    setError("");

    try {
      const res = await fetch("http://localhost/electronics_store/api/get_products.php");
      const data = await res.json();

      if (data.success && Array.isArray(data.data)) {
        // Filter only Laptops (category_id = 2)
        const laptopItems = data.data.filter(
          item => Number(item.category_id) === 2
        );
        setAllLaptops(laptopItems);
        setFilteredLaptops(laptopItems);
      } else {
        setError("Failed to load laptops");
      }
    } catch (err) {
      console.error(err);
      setError("Cannot connect to server. Make sure backend is running.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchLaptops();
  }, []);

  // Filter when activeFilter changes
  useEffect(() => {
    if (activeFilter === "all") {
      setFilteredLaptops(allLaptops);
    } else {
      const filtered = allLaptops.filter(
        item => Number(item.sub_category_id) === activeFilter
      );
      setFilteredLaptops(filtered);
    }
  }, [activeFilter, allLaptops]);

  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-LK").format(price);
  };

  return (
    <>
      {/* Page Header */}
      <section className="bg-black text-white pt-24 pb-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold tracking-tight mb-4">Laptops</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Powerful laptops engineered for performance, creativity, and portability.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-black text-white pb-8 px-6 border-b border-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-sm flex-wrap">
              <button
                onClick={() => setActiveFilter("all")}
                className={`px-5 py-2.5 rounded-full transition-all ${
                  activeFilter === "all" ? "bg-[#4d61fc] text-white" : "bg-[#0a0f1c] text-gray-400 hover:text-white"
                }`}
              >
                All Laptops
              </button>

              <button
                onClick={() => setActiveFilter(SUBCATEGORY_IDS.GAMING)}
                className={`px-5 py-2.5 rounded-full transition-all ${
                  activeFilter === SUBCATEGORY_IDS.GAMING ? "bg-[#4d61fc] text-white" : "bg-[#0a0f1c] text-gray-400 hover:text-white"
                }`}
              >
                Gaming Laptops
              </button>

              <button
                onClick={() => setActiveFilter(SUBCATEGORY_IDS.ULTRABOOKS)}
                className={`px-5 py-2.5 rounded-full transition-all ${
                  activeFilter === SUBCATEGORY_IDS.ULTRABOOKS ? "bg-[#4d61fc] text-white" : "bg-[#0a0f1c] text-gray-400 hover:text-white"
                }`}
              >
                Ultrabooks
              </button>

              <button
                onClick={() => setActiveFilter(SUBCATEGORY_IDS.WORKSTATION)}
                className={`px-5 py-2.5 rounded-full transition-all ${
                  activeFilter === SUBCATEGORY_IDS.WORKSTATION ? "bg-[#4d61fc] text-white" : "bg-[#0a0f1c] text-gray-400 hover:text-white"
                }`}
              >
                Workstations
              </button>

              <button
                onClick={() => setActiveFilter(SUBCATEGORY_IDS.EVERYDAY)}
                className={`px-5 py-2.5 rounded-full transition-all ${
                  activeFilter === SUBCATEGORY_IDS.EVERYDAY ? "bg-[#4d61fc] text-white" : "bg-[#0a0f1c] text-gray-400 hover:text-white"
                }`}
              >
                Everyday
              </button>

              <button
                onClick={() => setActiveFilter(SUBCATEGORY_IDS.CONVERTIBLE)}
                className={`px-5 py-2.5 rounded-full transition-all ${
                  activeFilter === SUBCATEGORY_IDS.CONVERTIBLE ? "bg-[#4d61fc] text-white" : "bg-[#0a0f1c] text-gray-400 hover:text-white"
                }`}
              >
                2-in-1 / Convertible
              </button>
            </div>

            <select className="bg-[#0a0f1c] border border-gray-800 rounded-xl px-5 py-3 text-sm focus:outline-none focus:border-[#4d61fc]">
              <option>Sort by: Featured</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Best Rating</option>
              <option>Newest First</option>
            </select>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="bg-black text-white pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          {isLoading && (
            <div className="text-center py-20 text-gray-400 text-xl">
              Loading Laptops...
            </div>
          )}

          {error && (
            <div className="bg-red-900/30 border border-red-700 text-red-400 p-4 rounded-xl text-center mb-8">
              {error}
            </div>
          )}

          {!isLoading && !error && (
            <>
              <div className="flex justify-between items-center mb-10 flex-wrap gap-4 pt-8">
                <p className="text-gray-400">
                  Showing {filteredLaptops.length} premium laptops
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {filteredLaptops.map((laptop) => (
                  <div
                    key={laptop.id}
                    className="group bg-[#0a0f1c] border border-gray-900 rounded-3xl overflow-hidden hover:border-[#4d61fc] transition-all duration-300 hover:-translate-y-2"
                  >
                    {/* Image Area */}
                    <div className="relative h-72 bg-gradient-to-b from-[#1a2338] to-[#0a0f1c] flex items-center justify-center text-8xl transition-transform group-hover:scale-110 overflow-hidden">
                      {laptop.image_url ? (
                        <img
                          src={`http://localhost/electronics_store/${laptop.image_url}`}
                          alt={laptop.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.target.style.display = "none";
                            e.target.parentElement.innerHTML = "💻";
                          }}
                        />
                      ) : (
                        "💻"
                      )}

                      {laptop.popular === "1" && (
                        <span className="absolute top-5 left-5 bg-[#4d61fc] text-white text-xs font-bold px-4 py-1.5 rounded-full">
                          Best Seller
                        </span>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="text-xs font-medium text-gray-500 mb-1">
                        {laptop.brand || "PREMIUM"}
                      </div>

                      <h3 className="text-xl font-semibold mb-3 group-hover:text-[#4d61fc] transition-colors line-clamp-2">
                        {laptop.name}
                      </h3>

                      {/* Rating */}
                      <div className="flex items-center gap-2 mb-4">
                        <div className="flex text-amber-400">
                          {[...Array(5)].map((_, i) => (
                            <span key={i}>★</span>
                          ))}
                        </div>
                        <span className="text-sm text-gray-400">(Reviews)</span>
                      </div>

                      {/* Price */}
                      <div className="flex items-baseline gap-3 flex-wrap">
                        <span className="text-3xl font-bold text-white">
                          Rs. {formatPrice(laptop.price)}
                        </span>

                        {laptop.original_price && laptop.original_price > laptop.price && (
                          <>
                            <span className="text-gray-500 line-through text-lg">
                              Rs. {formatPrice(laptop.original_price)}
                            </span>
                            {laptop.discount && (
                              <span className="text-emerald-400 text-sm font-medium">
                                {laptop.discount}
                              </span>
                            )}
                          </>
                        )}
                      </div>

                      <button className="mt-6 w-full bg-[#4d61fc] hover:bg-[#5a71ff] py-3.5 rounded-2xl font-medium transition-all duration-300">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {filteredLaptops.length === 0 && !isLoading && (
                <p className="text-center text-gray-400 py-20 text-xl">
                  No laptops available in this category yet.
                </p>
              )}
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default Laptops;