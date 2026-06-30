// import React, { useState, useEffect } from "react";
// // import GamingBanner from "../../assets/Mains/Gaming/GamingBanner.jpg"; // ← Add your banner image

// const GamingPage = () => {
//   const [gamingItems, setGamingItems] = useState([]);
//   const [error, setError] = useState("");
//   const [isLoading, setIsLoading] = useState(true);

//   const whatsappNumber = "94712345678"; // ← CHANGE TO YOUR WHATSAPP NUMBER

//   const fetchGamingItems = async () => {
//     setIsLoading(true);
//     setError("");

//     try {
//       const res = await fetch("http://localhost/officestuff_db/api/get_products.php");
//       const data = await res.json();

//       if (data.success && Array.isArray(data.data)) {
//         // Change category_id to your actual Gaming category ID
//         const gamingProducts = data.data.filter(
//           item => Number(item.category_id) === 3 // ← UPDATE THIS
//         );
//         setGamingItems(gamingProducts);
//       } else {
//         setError("Could not load gaming products");
//       }
//     } catch (e) {
//       console.error(e);
//       setError("Failed to fetch items. Please check if the backend is running.");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchGamingItems();
//   }, []);

//   const whatsappMessage = (item) => encodeURIComponent(
//     `Hi, I'm interested in "${item.name}" (Rs. ${new Intl.NumberFormat("en-LK").format(item.price)}). Please send me more details.`
//   );

//   const GamingCard = ({ item }) => {
//     const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage(item)}`;

//     return (
//       <div className="group bg-[#0a0f1c] border border-gray-900 rounded-3xl overflow-hidden hover:border-[#4d61fc] transition-all duration-300 hover:-translate-y-2">
//         <div className="relative h-72 bg-gradient-to-b from-[#1a2338] to-[#0a0f1c] flex items-center justify-center text-8xl overflow-hidden">
//           <img
//             src={
//               item.image_url
//                 ? `http://localhost/officestuff_db/${item.image_url}`
//                 : "https://via.placeholder.com/600x400?text=Gaming+Gear"
//             }
//             alt={item.name}
//             className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//             onError={(e) => {
//               e.target.src = "https://via.placeholder.com/600x400?text=No+Image";
//             }}
//           />

//           {item.popular && (
//             <span className="absolute top-5 left-5 bg-[#4d61fc] text-white text-xs font-bold px-4 py-1.5 rounded-full">
//               Best Seller
//             </span>
//           )}
//         </div>

//         <div className="p-6">
//           <div className="text-xs font-medium text-gray-500 mb-1">
//             {item.brand || "PREMIUM GEAR"}
//           </div>
//           <h3 className="text-xl font-semibold mb-3 group-hover:text-[#4d61fc] transition-colors">
//             {item.name}
//           </h3>

//           <div className="flex items-center gap-2 mb-4">
//             <div className="flex text-amber-400">
//               {[...Array(5)].map((_, i) => (
//                 <span key={i}>★</span>
//               ))}
//             </div>
//             <span className="text-sm text-gray-400">(High Rating)</span>
//           </div>

//           <div className="flex items-baseline gap-3">
//             <span className="text-3xl font-bold text-white">
//               Rs. {new Intl.NumberFormat("en-LK").format(item.price)}
//             </span>
//           </div>

//           <a
//             href={whatsappLink}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="mt-6 w-full bg-[#4d61fc] hover:bg-[#5a71ff] py-3.5 rounded-2xl font-medium transition-all duration-300 flex items-center justify-center gap-2"
//           >
//             Inquire on WhatsApp
//             <span className="text-lg transition-transform group-hover:translate-x-1">→</span>
//           </a>
//         </div>
//       </div>
//     );
//   };

//   return (
//     <>
//       {/* Page Header / Hero */}
//       <section className="bg-black text-white pt-24 pb-12 px-6">
//         <div className="max-w-7xl mx-auto text-center">
//           <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-4">Gaming</h1>
//           <p className="text-gray-400 text-lg max-w-2xl mx-auto">
//             Ultimate gaming gear engineered for performance, precision, and victory.
//           </p>
//         </div>
//       </section>

//       {error && (
//         <div className="p-4 bg-red-900/50 text-red-400 text-center font-medium">
//           {error}
//         </div>
//       )}

//       {isLoading && (
//         <div className="text-center py-20 text-gray-400">Loading Gaming Collection...</div>
//       )}

//       {/* Products Grid */}
//       <section className="bg-black text-white pb-20 px-6">
//         <div className="max-w-7xl mx-auto">
//           <div className="flex justify-between items-center mb-10">
//             <p className="text-gray-400">
//               Showing {gamingItems.length} premium gaming products
//             </p>
//             <select className="bg-[#0a0f1c] border border-gray-800 rounded-xl px-5 py-3 text-sm focus:outline-none focus:border-[#4d61fc]">
//               <option>Sort by: Featured</option>
//               <option>Price: Low to High</option>
//               <option>Price: High to Low</option>
//               <option>Best Rating</option>
//               <option>Newest First</option>
//             </select>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
//             {gamingItems.length === 0 && !isLoading ? (
//               <p className="col-span-full text-center text-gray-500 py-12">
//                 No gaming products available yet.
//               </p>
//             ) : (
//               gamingItems.map((item) => (
//                 <GamingCard key={item.id} item={item} />
//               ))
//             )}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="bg-[#0a0f1c] py-16 px-6">
//         <div className="max-w-4xl mx-auto text-center">
//           <h2 className="text-4xl font-bold mb-4">Ready to upgrade your setup?</h2>
//           <p className="text-gray-400 mb-8">Get expert recommendations and best pricing.</p>
          
//           <a
//             href={`https://wa.me/${whatsappNumber}?text=Hi,%20I%20want%20to%20build%20a%20gaming%20PC%20/%20setup.%20Please%20help%20me.`}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="inline-block bg-[#4d61fc] hover:bg-[#5a71ff] px-10 py-4 rounded-2xl font-semibold text-lg transition"
//           >
//             Talk to Us on WhatsApp
//           </a>
//         </div>
//       </section>
//     </>
//   );
// };

// export default GamingPage;



import React, { useEffect, useState } from "react";

const GamingPage = () => {
  const [allGaming, setAllGaming] = useState([]);
  const [filteredGaming, setFilteredGaming] = useState([]);
  const [activeFilter, setActiveFilter] = useState("all");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  // WhatsApp Configuration
  const whatsappNumber = "94712345678"; // ← CHANGE TO YOUR NUMBER

  // Subcategory IDs - Update according to your database
  const SUBCATEGORY_IDS = {
    ALL: "all",
    GAMING_LAPTOPS: 1,
    GAMING_MONITORS: 2,
    GAMING_KEYBOARDS: 3,
    GAMING_MICE: 4,
    HEADSETS: 5,
    CHAIRS: 6,
    CONSOLES: 7,
  };

  const fetchGamingProducts = async () => {
    setIsLoading(true);
    setError("");

    try {
      const res = await fetch("http://localhost/electronics_store/api/get_products.php");
      const data = await res.json();

      if (data.success && Array.isArray(data.data)) {
        // Filter Gaming products (category_id = 7)
        const gamingItems = data.data.filter(
          item => Number(item.category_id) === 7
        );
        setAllGaming(gamingItems);
        setFilteredGaming(gamingItems);
      } else {
        setError("Failed to load gaming products");
      }
    } catch (err) {
      console.error(err);
      setError("Cannot connect to server. Make sure backend is running.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchGamingProducts();
  }, []);

  // Filter handler
  useEffect(() => {
    if (activeFilter === "all") {
      setFilteredGaming(allGaming);
    } else {
      const filtered = allGaming.filter(
        item => Number(item.sub_category_id) === activeFilter
      );
      setFilteredGaming(filtered);
    }
  }, [activeFilter, allGaming]);

  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-LK").format(price);
  };

  const getWhatsAppLink = (item) => {
    const message = encodeURIComponent(
      `Hi, I'm interested in "${item.name}" (Rs. ${formatPrice(item.price)}). Please send me more details.`
    );
    return `https://wa.me/${whatsappNumber}?text=${message}`;
  };

  return (
    <>
      {/* Page Header */}
      <section className="bg-black text-white pt-24 pb-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-4">Gaming</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Ultimate gaming gear engineered for performance, precision, and victory.
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
                All Gaming
              </button>

              <button
                onClick={() => setActiveFilter(SUBCATEGORY_IDS.GAMING_LAPTOPS)}
                className={`px-5 py-2.5 rounded-full transition-all ${
                  activeFilter === SUBCATEGORY_IDS.GAMING_LAPTOPS ? "bg-[#4d61fc] text-white" : "bg-[#0a0f1c] text-gray-400 hover:text-white"
                }`}
              >
                Gaming Laptops
              </button>

              <button
                onClick={() => setActiveFilter(SUBCATEGORY_IDS.GAMING_MONITORS)}
                className={`px-5 py-2.5 rounded-full transition-all ${
                  activeFilter === SUBCATEGORY_IDS.GAMING_MONITORS ? "bg-[#4d61fc] text-white" : "bg-[#0a0f1c] text-gray-400 hover:text-white"
                }`}
              >
                Monitors
              </button>

              <button
                onClick={() => setActiveFilter(SUBCATEGORY_IDS.HEADSETS)}
                className={`px-5 py-2.5 rounded-full transition-all ${
                  activeFilter === SUBCATEGORY_IDS.HEADSETS ? "bg-[#4d61fc] text-white" : "bg-[#0a0f1c] text-gray-400 hover:text-white"
                }`}
              >
                Headsets
              </button>

              <button
                onClick={() => setActiveFilter(SUBCATEGORY_IDS.CONSOLES)}
                className={`px-5 py-2.5 rounded-full transition-all ${
                  activeFilter === SUBCATEGORY_IDS.CONSOLES ? "bg-[#4d61fc] text-white" : "bg-[#0a0f1c] text-gray-400 hover:text-white"
                }`}
              >
                Consoles
              </button>
            </div>

            <select className="bg-[#0a0f1c] border border-gray-800 rounded-xl px-5 py-3 text-sm focus:outline-none focus:border-[#4d61fc]">
              <option>Sort by: Featured</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Best Rating</option>
            </select>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="bg-black text-white pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          {isLoading && (
            <div className="text-center py-20 text-gray-400 text-xl">
              Loading Gaming Collection...
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
                  Showing {filteredGaming.length} premium gaming products
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {filteredGaming.map((item) => (
                  <div
                    key={item.id}
                    className="group bg-[#0a0f1c] border border-gray-900 rounded-3xl overflow-hidden hover:border-[#4d61fc] transition-all duration-300 hover:-translate-y-2"
                  >
                    {/* Image Area */}
                    <div className="relative h-72 bg-gradient-to-b from-[#1a2338] to-[#0a0f1c] flex items-center justify-center overflow-hidden">
                      {item.image_url ? (
                        <img
                          src={`http://localhost/electronics_store/${item.image_url}`}
                          alt={item.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          onError={(e) => (e.target.src = "https://via.placeholder.com/600x400?text=Gaming")}
                        />
                      ) : (
                        "🎮"
                      )}

                      {item.popular === "1" && (
                        <span className="absolute top-5 left-5 bg-[#4d61fc] text-white text-xs font-bold px-4 py-1.5 rounded-full">
                          Best Seller
                        </span>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="text-xs font-medium text-gray-500 mb-1">
                        {item.brand || "PREMIUM GEAR"}
                      </div>
                      <h3 className="text-xl font-semibold mb-3 group-hover:text-[#4d61fc] transition-colors line-clamp-2">
                        {item.name}
                      </h3>

                      {/* Rating */}
                      <div className="flex items-center gap-2 mb-4">
                        <div className="flex text-amber-400">
                          {[...Array(5)].map((_, i) => <span key={i}>★</span>)}
                        </div>
                        <span className="text-sm text-gray-400">(Reviews)</span>
                      </div>

                      {/* Price */}
                      <div className="flex items-baseline gap-3 flex-wrap">
                        <span className="text-3xl font-bold text-white">
                          Rs. {formatPrice(item.price)}
                        </span>
                        {item.original_price && (
                          <span className="text-gray-500 line-through">
                            Rs. {formatPrice(item.original_price)}
                          </span>
                        )}
                      </div>

                      {/* WhatsApp Button */}
                      <a
                        href={getWhatsAppLink(item)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-6 w-full bg-[#4d61fc] hover:bg-[#5a71ff] py-3.5 rounded-2xl font-medium transition-all duration-300 flex items-center justify-center gap-2"
                      >
                        Inquire on WhatsApp
                        <span className="text-lg transition-transform group-hover:translate-x-1">→</span>
                      </a>
                    </div>
                  </div>
                ))}

                {filteredGaming.length === 0 && !isLoading && (
                  <p className="col-span-full text-center text-gray-500 py-12">
                    No gaming products available yet.
                  </p>
                )}
              </div>
            </>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#0a0f1c] py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to upgrade your setup?</h2>
          <p className="text-gray-400 mb-8">Get expert recommendations and best pricing.</p>
          
          <a
            href={`https://wa.me/${whatsappNumber}?text=Hi,%20I%20want%20to%20build%20a%20gaming%20PC%20/%20setup.%20Please%20help%20me.`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#4d61fc] hover:bg-[#5a71ff] px-10 py-4 rounded-2xl font-semibold text-lg transition"
          >
            Talk to Us on WhatsApp
          </a>
        </div>
      </section>
    </>
  );
};

export default GamingPage;