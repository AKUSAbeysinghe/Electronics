import React, { useEffect, useState } from "react";

const Smartphones = () => {
  const [allPhones, setAllPhones] = useState([]);
  const [filteredPhones, setFilteredPhones] = useState([]);
  const [activeFilter, setActiveFilter] = useState("all");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const WHATSAPP_NUMBER = '94771234567'; // Same as Navbar

  const SUBCATEGORY_IDS = {
    ALL: "all",
    ANDROID: 1,
    IPHONES: 2,
    GAMING: 3,
    FOLDABLE: 4,
    FEATURE: 5,
  };

  const fetchPhones = async () => {
    setIsLoading(true);
    setError("");

    try {
      const res = await fetch("http://localhost/electronics_store/api/get_products.php");
      const data = await res.json();

      if (data.success && Array.isArray(data.data)) {
        const smartphoneItems = data.data.filter(
          item => Number(item.category_id) === 1
        );
        setAllPhones(smartphoneItems);
        setFilteredPhones(smartphoneItems);
      } else {
        setError("Failed to load products");
      }
    } catch (err) {
      console.error(err);
      setError("Cannot connect to server. Make sure backend is running.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPhones();
  }, []);

  useEffect(() => {
    if (activeFilter === "all") {
      setFilteredPhones(allPhones);
    } else {
      const filtered = allPhones.filter(
        item => Number(item.sub_category_id) === activeFilter
      );
      setFilteredPhones(filtered);
    }
  }, [activeFilter, allPhones]);

  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-LK").format(price);
  };

  // WhatsApp Message Function
  const handleWhatsAppClick = (product) => {
    const message = `Hi! I'm interested in this product:\n\n` +
                    `*${product.name}*\n` +
                    `Brand: ${product.brand || 'Premium'}\n` +
                    `Price: Rs. ${formatPrice(product.price)}\n\n` +
                    `Please provide more details.`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, '_blank');
  };

  return (
    <>
      {/* Page Header */}
      <section className="bg-black text-white pt-24 pb-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold tracking-tight mb-4">
            Smartphones
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Latest Androids, iPhones, Gaming Phones, Foldables &amp; Feature Phones
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
                All Smartphones
              </button>

              <button
                onClick={() => setActiveFilter(SUBCATEGORY_IDS.ANDROID)}
                className={`px-5 py-2.5 rounded-full transition-all ${
                  activeFilter === SUBCATEGORY_IDS.ANDROID ? "bg-[#4d61fc] text-white" : "bg-[#0a0f1c] text-gray-400 hover:text-white"
                }`}
              >
                Android
              </button>

              <button
                onClick={() => setActiveFilter(SUBCATEGORY_IDS.IPHONES)}
                className={`px-5 py-2.5 rounded-full transition-all ${
                  activeFilter === SUBCATEGORY_IDS.IPHONES ? "bg-[#4d61fc] text-white" : "bg-[#0a0f1c] text-gray-400 hover:text-white"
                }`}
              >
                iPhone
              </button>

              <button
                onClick={() => setActiveFilter(SUBCATEGORY_IDS.GAMING)}
                className={`px-5 py-2.5 rounded-full transition-all ${
                  activeFilter === SUBCATEGORY_IDS.GAMING ? "bg-[#4d61fc] text-white" : "bg-[#0a0f1c] text-gray-400 hover:text-white"
                }`}
              >
                Gaming
              </button>

              <button
                onClick={() => setActiveFilter(SUBCATEGORY_IDS.FOLDABLE)}
                className={`px-5 py-2.5 rounded-full transition-all ${
                  activeFilter === SUBCATEGORY_IDS.FOLDABLE ? "bg-[#4d61fc] text-white" : "bg-[#0a0f1c] text-gray-400 hover:text-white"
                }`}
              >
                Foldable
              </button>

              <button
                onClick={() => setActiveFilter(SUBCATEGORY_IDS.FEATURE)}
                className={`px-5 py-2.5 rounded-full transition-all ${
                  activeFilter === SUBCATEGORY_IDS.FEATURE ? "bg-[#4d61fc] text-white" : "bg-[#0a0f1c] text-gray-400 hover:text-white"
                }`}
              >
                Feature Phones
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
              Loading Smartphones...
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
                  Showing {filteredPhones.length} premium smartphones
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {filteredPhones.map((phone) => (
                  <div
                    key={phone.id}
                    className="group bg-[#0a0f1c] border border-gray-900 rounded-3xl overflow-hidden hover:border-[#4d61fc] transition-all duration-300 hover:-translate-y-2"
                  >
                    {/* Image Area */}
                    <div className="relative h-72 bg-gradient-to-b from-[#1a2338] to-[#0a0f1c] flex items-center justify-center text-8xl transition-transform duration-300 group-hover:scale-105 overflow-hidden">
                      {phone.image_url ? (
                        <img
                          src={`http://localhost/electronics_store/${phone.image_url}`}
                          alt={phone.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.target.style.display = "none";
                            e.target.parentElement.innerHTML = "📱";
                          }}
                        />
                      ) : (
                        "📱"
                      )}

                      {phone.popular === "1" && (
                        <span className="absolute top-5 left-5 bg-[#4d61fc] text-white text-xs font-bold px-4 py-1.5 rounded-full">
                          Best Seller
                        </span>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="text-xs font-medium text-gray-500 mb-1">
                        {phone.brand || "PREMIUM"}
                      </div>

                      <h3 className="text-xl font-semibold mb-3 group-hover:text-[#4d61fc] transition-colors duration-300 line-clamp-2">
                        {phone.name}
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
                          Rs. {formatPrice(phone.price)}
                        </span>

                        {phone.original_price && phone.original_price > phone.price && (
                          <>
                            <span className="text-gray-500 line-through text-lg">
                              Rs. {formatPrice(phone.original_price)}
                            </span>
                            {phone.discount && (
                              <span className="text-emerald-400 text-sm font-medium">
                                {phone.discount}
                              </span>
                            )}
                          </>
                        )}
                      </div>

                      {/* WhatsApp Button */}
                      <button
                        onClick={() => handleWhatsAppClick(phone)}
                        className="mt-6 w-full bg-[#4d61fc] hover:bg-[#5a71ff] py-3.5 rounded-2xl font-medium transition-all duration-300 flex items-center justify-center gap-2"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.198.297-.767.966-.94 1.164-.173.198-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.485-.883-.788-1.48-1.76-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.52-.075-.149-.669-1.612-.917-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.372-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                        </svg>
                        Chat on WhatsApp
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {filteredPhones.length === 0 && !isLoading && (
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

export default Smartphones;