import React, { useState, useEffect } from "react";
import BannerImageParmacy from "../../assets/Parmacy/parmacyBanner.jpg";

/* ================= ICONS ================= */
const PillIcon = () => (
  <svg className="w-14 h-14" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
    <path d="M10 14L4.5 8.5a4.24 4.24 0 016-6L16 8m-6 6l7.5-7.5a4.24 4.24 0 016 6L16 20a4.24 4.24 0 01-6 0" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M8 6l10 10" strokeLinecap="round" />
  </svg>
);

const StethoscopeIcon = () => (
  <svg className="w-14 h-14" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
    <path d="M7 3v5a4 4 0 008 0V3M7 8a5 5 0 0010 0" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M17 13a4 4 0 104 4v-2" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="21" cy="14" r="1.5" />
  </svg>
);

const FastIcon = () => (
  <svg className="w-14 h-14" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
    <path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ShieldIcon = () => (
  <svg className="w-14 h-14" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
    <path d="M12 3l7 3v5c0 5-3.5 8-7 10-3.5-2-7-5-7-10V6l7-3z" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M9.5 12l2 2 3.5-4" strokeLinecap="round" />
  </svg>
);

/* ================= HEADER ================= */
const PharmacyHeader = () => {
  const [activeTab, setActiveTab] = useState("Overview");
  const tabs = ["Overview", "Prescriptions", "Vaccinations", "Consultations"];

  return (
    <section className="bg-emerald-50/50 py-16 px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h4 className="text-[#2E7D56] font-semibold uppercase tracking-wide text-sm mb-4">Pharmacy</h4>
          <h2 className="text-5xl font-semibold text-gray-900 mb-6 leading-tight">
            Care that's just <br /> around the corner.
          </h2>
          <p className="text-lg text-gray-600 max-w-lg">
            Trusted prescriptions, everyday essentials and expert advice backed by certified pharmacists.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#pharmacy-products" className="px-8 py-4 bg-[#2E7D56] text-white rounded-full font-semibold hover:bg-[#256a47]">
              Explore Pharmacy
            </a>
            <a href="/consultation" className="px-8 py-4 border border-gray-900 rounded-full font-semibold hover:bg-gray-900 hover:text-white">
              Speak To Pharmacist
            </a>
          </div>
        </div>

        <div className="rounded-3xl overflow-hidden shadow-xl">
          <img src={BannerImageParmacy} alt="Pharmacy" className="w-full h-[420px] object-cover" />
        </div>
      </div>

      <div className="max-w-6xl mx-auto flex items-center gap-8 border-b border-gray-200 pb-4 flex-wrap">
        {tabs.map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-4 text-lg font-medium transition ${
              activeTab === tab ? "text-gray-900 border-b-2 border-gray-900" : "text-gray-500 hover:text-gray-700"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
    </section>
  );
};

/* ================= PRODUCT CARD ================= */
const PharmacyCard = ({ item }) => (
  <div className="bg-white rounded-3xl shadow-md border border-gray-100 overflow-hidden hover:shadow-2xl transition">
    <div className="relative">
      <img
        src={
          item.image_url
            ? `http://localhost/pharmacy-project/${item.image_url}`
            : "https://via.placeholder.com/600x400?text=Pharmacy"
        }
        alt={item.name}
        className="w-full h-72 object-cover"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = "https://via.placeholder.com/600x400?text=Image+Failed";
        }}
      />

      {item.popular && (
        <div className="absolute top-4 left-4 bg-[#2E7D56] text-white px-4 py-1 rounded-full text-sm font-semibold">
          Popular
        </div>
      )}

      <div className="absolute top-4 right-4 bg-black/80 text-white px-4 py-2 rounded-full font-semibold">
        Rs. {new Intl.NumberFormat("en-LK").format(item.price || 0)}
      </div>
    </div>

    <div className="p-7">
      <h3 className="text-2xl font-semibold">{item.name}</h3>
      <p className="mt-3 text-gray-600 line-clamp-2">
        {item.description || "Trusted pharmacy essentials for everyday care"}
      </p>
      <a
        href={`/product/${item.id}`}
        className="block mt-6 text-center py-4 bg-[#2E7D56] text-white rounded-xl hover:bg-[#256a47]"
      >
        View Details
      </a>
    </div>
  </div>
);

/* ================= PRODUCT SECTION ================= */
const ProductSection = ({ title, subtitle, items, bg }) => (
  <section id="pharmacy-products" className={`${bg} py-20 px-6`}>
    <div className="text-center mb-14">
      <h2 className="text-4xl font-bold">{title}</h2>
      <p className="mt-4 text-gray-600">{subtitle}</p>
    </div>

    <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10">
      {items.length > 0 ? (
        items.map(item => <PharmacyCard key={item.id} item={item} />)
      ) : (
        <p className="col-span-3 text-center text-gray-500">No products available</p>
      )}
    </div>
  </section>
);

/* ================= WHY CHOOSE & CTA ================= */
const WhyChoosePharmacy = () => {
  const benefits = [
    { icon: <PillIcon />, title: "Trusted Medicines", desc: "Reliable prescription and health products" },
    { icon: <StethoscopeIcon />, title: "Professional Advice", desc: "Support from certified pharmacists" },
    { icon: <FastIcon />, title: "Fast Access", desc: "Quick access to care and essentials" },
    { icon: <ShieldIcon />, title: "Quality Assurance", desc: "Safe trusted healthcare products" },
  ];

  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold">Why Choose Our Pharmacy?</h2>
        <p className="mt-4 text-gray-600">Convenient healthcare support you can trust.</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">
          {benefits.map((b, i) => (
            <div key={i} className="bg-white rounded-3xl p-10 shadow-sm hover:shadow-xl transition">
              <div className="w-24 h-24 mx-auto mb-6 rounded-3xl bg-emerald-50 flex items-center justify-center text-[#2E7D56]">
                {b.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-4">{b.title}</h3>
              <p className="text-gray-600">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};



const CallToAction = () => (
  <section className="py-24 px-6 bg-white">
    <div className="max-w-6xl mx-auto">
      <div className="rounded-[32px] bg-[#2E7D56] px-10 md:px-20 py-20 text-center text-white shadow-xl">
        <h2 className="text-5xl font-bold">Need Help With Your Health?</h2>
        <p className="mt-6 text-lg text-emerald-100 max-w-2xl mx-auto">
        Refill prescriptions or consult a pharmacist today.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-5">
          <a href="/shop-fitness" className="px-10 py-4 bg-white text-[#2E7D56] rounded-xl font-semibold hover:scale-105 transition">
          Refill Prescription
          </a>
          <a href="/personal-training" className="px-10 py-4 border-2 border-white rounded-xl font-semibold hover:bg-white hover:text-[#2E7D56] transition">
          Book Consultation
          </a>
        </div>
      </div>
    </div>
  </section>
);
/* ================= MAIN ================= */
const Pharmacy = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Corrected: Pharmacy category ID is 1
        const res = await fetch("http://localhost/pharmacy-project/api/get_products.php?category_id=1");
        const data = await res.json();

        if (data.success) {
          setProducts(data.data || []);
        } else {
          setError("Could not load products");
        }
      } catch (err) {
        setError("Failed to fetch products");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Filter by subcategory name
  const prescriptions = products.filter(i => i.sub_category_name?.toLowerCase().includes("prescription"));
  const otc = products.filter(i => 
    i.sub_category_name?.toLowerCase().includes("everyday") || 
    i.sub_category_name?.toLowerCase().includes("essentials") ||
    i.sub_category_name?.toLowerCase().includes("otc")
  );
  const wellness = products.filter(i => 
    i.sub_category_name?.toLowerCase().includes("vaccine") || 
    i.sub_category_name?.toLowerCase().includes("wellness")
  );

  return (
    <div className="bg-white">
      {error && <div className="p-4 bg-red-100 text-red-700 text-center">{error}</div>}
      {loading && <div className="py-20 text-center">Loading Pharmacy Products...</div>}

      <PharmacyHeader />

      <ProductSection
        title="Prescription Medicines"
        subtitle="Trusted prescription solutions and medications."
        items={prescriptions}
        bg="bg-white"
      />

      <ProductSection
        title="Everyday Health Essentials"
        subtitle="OTC products and everyday wellness support."
        items={otc}
        bg="bg-[#f7faf8]}"
      />

      <ProductSection
        title="Vaccines & Wellness Care"
        subtitle="Preventive care and wellness services."
        items={wellness}
        bg="bg-white"
      />

      <WhyChoosePharmacy />
      <CallToAction />
    </div>
  );
};

export default Pharmacy;