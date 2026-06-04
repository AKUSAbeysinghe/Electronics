import React, { useEffect, useState } from "react";

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState("products");
  const [showForm, setShowForm] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);

  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [products, setProducts] = useState([]);

  const [formData, setFormData] = useState({
    category_id: "",
    sub_category_id: "",
    name: "",
    price: "",
    original_price: "",
    discount: "",
    description: "",
    image: null,
    popular: false,
    stock: 0,
  });

  const admin = {
    name: "Store Admin",
    email: "admin@yourstore.com",
    profilePic: "https://i.pravatar.cc/100?img=68",
  };

  // Fetch functions (same as before, just updated URLs)
  const fetchCategories = async () => {
    try {
      const res = await fetch("http://localhost/electronics/api/get_categories.php");
      const data = await res.json();
      if (data.success) {
        setCategories(data.data);
        if (data.data.length > 0) {
          const firstId = data.data[0].id;
          setFormData(prev => ({ ...prev, category_id: firstId }));
          fetchSubCategories(firstId);
        }
      }
    } catch (err) {
      setError("Cannot connect to server.");
    }
  };

  const fetchSubCategories = async (categoryId) => {
    if (!categoryId) return;
    try {
      const res = await fetch(
        `http://localhost/electronics/api/get_subcategories.php?category_id=${categoryId}`
      );
      const data = await res.json();
      if (data.success) setSubCategories(data.data || []);
    } catch (err) {
      console.error(err);
    }
  };

  const fetchProducts = async () => {
    try {
      const res = await fetch("http://localhost/electronics/api/get_products.php");
      const data = await res.json();
      if (data.success) setProducts(data.data || []);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchCategories();
    fetchProducts();
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked
            : type === "file" ? files[0]
            : ["price", "original_price", "stock"].includes(name) ? Number(value) || 0
            : value,
    }));

    if (name === "category_id") {
      fetchSubCategories(value);
      setFormData(prev => ({ ...prev, sub_category_id: "" }));
    }
  };

  // handleSubmit, resetForm, handleEdit, handleDelete remain almost same
  // (Just change API URLs to /electronics/api/...)

  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8 bg-gray-900 rounded-2xl shadow p-6 border border-gray-800">
        <div className="flex items-center gap-6">
          <img src={admin.profilePic} alt="admin" className="w-20 h-20 rounded-full border-4 border-blue-600" />
          <div>
            <h1 className="text-3xl font-bold">{admin.name}</h1>
            <p className="text-gray-400">{admin.email}</p>
            <p className="text-blue-500 font-semibold">Electronics Store Admin</p>
          </div>
        </div>
      </div>

      {/* Messages */}
      {message && <div className="mb-6 p-4 bg-green-900 border border-green-700 text-green-400 rounded-xl">{message}</div>}
      {error && <div className="mb-6 p-4 bg-red-900 border border-red-700 text-red-400 rounded-xl">{error}</div>}

      <button
        onClick={() => { /* resetForm */ setShowForm(true); }}
        className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold mb-8"
      >
        + Add New Product
      </button>

      {/* Products Table - Dark Theme */}
      <div className="bg-gray-900 rounded-2xl shadow overflow-hidden border border-gray-800">
        <div className="p-6 border-b border-gray-800">
          <h2 className="text-2xl font-bold">All Products</h2>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-gray-800">
              <tr>
                <th className="p-4 text-left">Image</th>
                <th className="p-4 text-left">Product Name</th>
                <th className="p-4 text-left">Category</th>
                <th className="p-4 text-left">Subcategory</th>
                <th className="p-4 text-left">Price</th>
                <th className="p-4 text-left">Stock</th>
                <th className="p-4 text-left">Popular</th>
                <th className="p-4 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id} className="border-b border-gray-800 hover:bg-gray-800">
                  <td className="p-4">
                    <img src={product.image_url ? `http://localhost/electronics/${product.image_url}` : "https://via.placeholder.com/80"} 
                         className="w-16 h-16 object-cover rounded-lg" alt={product.name} />
                  </td>
                  <td className="p-4 font-medium">{product.name}</td>
                  <td className="p-4">{product.category_name}</td>
                  <td className="p-4">{product.sub_category_name}</td>
                  <td className="p-4 font-semibold text-emerald-400">Rs. {Number(product.price).toLocaleString()}</td>
                  <td className="p-4">{product.stock}</td>
                  <td className="p-4">{product.popular ? "Yes" : "No"}</td>
                  <td className="p-4 space-x-3">
                    <button onClick={() => handleEdit(product)} className="bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-full text-sm">Edit</button>
                    <button onClick={() => confirmDelete(product.id)} className="bg-red-600 hover:bg-red-700 px-5 py-2 rounded-full text-sm">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Form Modal & Delete Modal - Same as before but with dark styling */}
      {/* ... (I can provide full updated code if needed) */}
    </div>
  );
};

export default AdminPanel;