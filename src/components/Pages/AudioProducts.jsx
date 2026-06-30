// import React from 'react';

// const Audio = () => {
//   const audioProducts = [
//     {
//       id: 1,
//       name: "Pulse ANC Pro",
//       brand: "SONORA",
//       price: "$329",
//       originalPrice: "$399",
//       discount: "-18%",
//       image: "🎧",
//       rating: 4.9,
//       reviews: "4,872",
//       badge: "Best Seller"
//     },
//     {
//       id: 2,
//       name: "ThunderBeat X1",
//       brand: "RAZERTECH",
//       price: "$279",
//       originalPrice: "$329",
//       discount: "-15%",
//       image: "🎧",
//       rating: 4.8,
//       reviews: "2,341",
//       badge: "Gaming"
//     },
//     {
//       id: 3,
//       name: "AetherBuds Max",
//       brand: "LUMEN",
//       price: "$189",
//       originalPrice: "$229",
//       discount: "-17%",
//       image: "🌫️",
//       rating: 4.7,
//       reviews: "3,109",
//       badge: "New"
//     },
//     {
//       id: 4,
//       name: "Clarity Studio 3",
//       brand: "SONORA",
//       price: "$449",
//       originalPrice: "$549",
//       discount: "-18%",
//       image: "🎤",
//       rating: 4.9,
//       reviews: "1,876",
//       badge: "Premium"
//     },
//     {
//       id: 5,
//       name: "BassForge Portable",
//       brand: "RAZERTECH",
//       price: "$159",
//       originalPrice: "$189",
//       discount: "-16%",
//       image: "🔊",
//       rating: 4.6,
//       reviews: "2,654",
//       badge: ""
//     },
//     {
//       id: 6,
//       name: "NeoBuds Lite",
//       brand: "LUMEN",
//       price: "$89",
//       originalPrice: "$119",
//       discount: "-25%",
//       image: "🌫️",
//       rating: 4.5,
//       reviews: "5,432",
//       badge: ""
//     },
//   ];

//   return (
//     <>
//       {/* Page Header */}
//       <section className="bg-black text-white pt-24 pb-12 px-6">
//         <div className="max-w-7xl mx-auto text-center">
//           <h1 className="text-5xl font-bold tracking-tight mb-4">Audio</h1>
//           <p className="text-gray-400 text-lg max-w-2xl mx-auto">
//             Premium audio gear engineered for immersive sound, clarity, and style.
//           </p>
//         </div>
//       </section>

//       {/* Products Grid */}
//       <section className="bg-black text-white pb-20 px-6">
//         <div className="max-w-7xl mx-auto">
//           <div className="flex justify-between items-center mb-10">
//             <p className="text-gray-400">Showing 48 premium audio products</p>
//             <select className="bg-[#0a0f1c] border border-gray-800 rounded-xl px-5 py-3 text-sm focus:outline-none focus:border-[#4d61fc]">
//               <option>Sort by: Featured</option>
//               <option>Price: Low to High</option>
//               <option>Price: High to Low</option>
//               <option>Best Rating</option>
//               <option>Newest First</option>
//             </select>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
//             {audioProducts.map((product) => (
//               <div
//                 key={product.id}
//                 className="group bg-[#0a0f1c] border border-gray-900 rounded-3xl overflow-hidden hover:border-[#4d61fc] transition-all duration-300 hover:-translate-y-2"
//               >
//                 {/* Image Area */}
//                 <div className="relative h-72 bg-gradient-to-b from-[#1a2338] to-[#0a0f1c] flex items-center justify-center text-8xl transition-transform group-hover:scale-110">
//                   {product.image}
                  
//                   {product.badge && (
//                     <span className="absolute top-5 left-5 bg-[#4d61fc] text-white text-xs font-bold px-4 py-1.5 rounded-full">
//                       {product.badge}
//                     </span>
//                   )}
//                 </div>

//                 {/* Content */}
//                 <div className="p-6">
//                   <div className="text-xs font-medium text-gray-500 mb-1">{product.brand}</div>
//                   <h3 className="text-xl font-semibold mb-3 group-hover:text-[#4d61fc] transition-colors">
//                     {product.name}
//                   </h3>

//                   {/* Rating */}
//                   <div className="flex items-center gap-2 mb-4">
//                     <div className="flex text-amber-400">
//                       {[...Array(5)].map((_, i) => (
//                         <span key={i}>★</span>
//                       ))}
//                     </div>
//                     <span className="text-sm text-gray-400">({product.reviews})</span>
//                   </div>

//                   {/* Price */}
//                   <div className="flex items-baseline gap-3">
//                     <span className="text-3xl font-bold text-white">{product.price}</span>
//                     <span className="text-gray-500 line-through text-lg">{product.originalPrice}</span>
//                     <span className="text-emerald-400 text-sm font-medium">{product.discount}</span>
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

// export default Audio;





import React, { useEffect, useState } from "react";

const Audio = () => {
  const [allAudio, setAllAudio] = useState([]);
  const [filteredAudio, setFilteredAudio] = useState([]);
  const [activeFilter, setActiveFilter] = useState("all");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  // Subcategory IDs (match your database)
  const SUBCATEGORY_IDS = {
    ALL: "all",
    HEADPHONES: 1,
    SPEAKERS: 2,
    HOME_AUDIO: 3,
    PROFESSIONAL: 4,
    CAR_AUDIO: 5,
  };

  const fetchAudioProducts = async () => {
    setIsLoading(true);
    setError("");

    try {
      const res = await fetch("http://localhost/electronics_store/api/get_products.php");
      const data = await res.json();

      if (data.success && Array.isArray(data.data)) {
        // Filter only Audio products (category_id = 3)
        const audioItems = data.data.filter(
          item => Number(item.category_id) === 3
        );
        setAllAudio(audioItems);
        setFilteredAudio(audioItems);
      } else {
        setError("Failed to load audio products");
      }
    } catch (err) {
      console.error(err);
      setError("Cannot connect to server. Make sure backend is running.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchAudioProducts();
  }, []);

  // Filter when activeFilter changes
  useEffect(() => {
    if (activeFilter === "all") {
      setFilteredAudio(allAudio);
    } else {
      const filtered = allAudio.filter(
        item => Number(item.sub_category_id) === activeFilter
      );
      setFilteredAudio(filtered);
    }
  }, [activeFilter, allAudio]);

  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-LK").format(price);
  };

  return (
    <>
      {/* Page Header */}
      <section className="bg-black text-white pt-24 pb-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold tracking-tight mb-4">Audio</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Premium audio gear engineered for immersive sound, clarity, and style.
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
                All Audio
              </button>

              <button
                onClick={() => setActiveFilter(SUBCATEGORY_IDS.HEADPHONES)}
                className={`px-5 py-2.5 rounded-full transition-all ${
                  activeFilter === SUBCATEGORY_IDS.HEADPHONES ? "bg-[#4d61fc] text-white" : "bg-[#0a0f1c] text-gray-400 hover:text-white"
                }`}
              >
                Headphones &amp; Earphones
              </button>

              <button
                onClick={() => setActiveFilter(SUBCATEGORY_IDS.SPEAKERS)}
                className={`px-5 py-2.5 rounded-full transition-all ${
                  activeFilter === SUBCATEGORY_IDS.SPEAKERS ? "bg-[#4d61fc] text-white" : "bg-[#0a0f1c] text-gray-400 hover:text-white"
                }`}
              >
                Speakers
              </button>

              <button
                onClick={() => setActiveFilter(SUBCATEGORY_IDS.HOME_AUDIO)}
                className={`px-5 py-2.5 rounded-full transition-all ${
                  activeFilter === SUBCATEGORY_IDS.HOME_AUDIO ? "bg-[#4d61fc] text-white" : "bg-[#0a0f1c] text-gray-400 hover:text-white"
                }`}
              >
                Home Audio
              </button>

              <button
                onClick={() => setActiveFilter(SUBCATEGORY_IDS.PROFESSIONAL)}
                className={`px-5 py-2.5 rounded-full transition-all ${
                  activeFilter === SUBCATEGORY_IDS.PROFESSIONAL ? "bg-[#4d61fc] text-white" : "bg-[#0a0f1c] text-gray-400 hover:text-white"
                }`}
              >
                Professional
              </button>

              <button
                onClick={() => setActiveFilter(SUBCATEGORY_IDS.CAR_AUDIO)}
                className={`px-5 py-2.5 rounded-full transition-all ${
                  activeFilter === SUBCATEGORY_IDS.CAR_AUDIO ? "bg-[#4d61fc] text-white" : "bg-[#0a0f1c] text-gray-400 hover:text-white"
                }`}
              >
                Car Audio
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
              Loading Audio Collection...
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
                  Showing {filteredAudio.length} premium audio products
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {filteredAudio.map((product) => (
                  <div
                    key={product.id}
                    className="group bg-[#0a0f1c] border border-gray-900 rounded-3xl overflow-hidden hover:border-[#4d61fc] transition-all duration-300 hover:-translate-y-2"
                  >
                    {/* Image Area */}
                    <div className="relative h-72 bg-gradient-to-b from-[#1a2338] to-[#0a0f1c] flex items-center justify-center text-8xl transition-transform group-hover:scale-110 overflow-hidden">
                      {product.image_url ? (
                        <img
                          src={`http://localhost/electronics_store/${product.image_url}`}
                          alt={product.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.target.style.display = "none";
                            e.target.parentElement.innerHTML = "🎧";
                          }}
                        />
                      ) : (
                        "🎧"
                      )}

                      {product.popular === "1" && (
                        <span className="absolute top-5 left-5 bg-[#4d61fc] text-white text-xs font-bold px-4 py-1.5 rounded-full">
                          Best Seller
                        </span>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="text-xs font-medium text-gray-500 mb-1">
                        {product.brand || "PREMIUM"}
                      </div>

                      <h3 className="text-xl font-semibold mb-3 group-hover:text-[#4d61fc] transition-colors line-clamp-2">
                        {product.name}
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
                          Rs. {formatPrice(product.price)}
                        </span>

                        {product.original_price && product.original_price > product.price && (
                          <>
                            <span className="text-gray-500 line-through text-lg">
                              Rs. {formatPrice(product.original_price)}
                            </span>
                            {product.discount && (
                              <span className="text-emerald-400 text-sm font-medium">
                                {product.discount}
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

              {filteredAudio.length === 0 && !isLoading && (
                <p className="text-center text-gray-400 py-20 text-xl">
                  No products available in this category yet.
                </p>
              )}
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default Audio;