import React, { useEffect, useState } from "react";

const AdminPanel = () => {
  const [activeTab] = useState("products");

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

  // ---------------- FETCH ----------------

  const fetchCategories = async () => {
    try {
      const res = await fetch("http://localhost/electronics/api/get_categories.php");
      const data = await res.json();

      if (data.success) {
        setCategories(data.data);

        if (data.data.length > 0) {
          const firstId = data.data[0].id;
          setFormData((prev) => ({ ...prev, category_id: firstId }));
          fetchSubCategories(firstId);
        }
      }
    } catch (err) {
      setError("Cannot load categories");
    }
  };

  const fetchSubCategories = async (categoryId) => {
    try {
      const res = await fetch(
        `http://localhost/electronics/api/get_subcategories.php?category_id=${categoryId}`
      );
      const data = await res.json();

      if (data.success) {
        setSubCategories(data.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const fetchProducts = async () => {
    try {
      const res = await fetch("http://localhost/electronics/api/get_products.php");
      const data = await res.json();

      if (data.success) {
        setProducts(data.data);
      }
    } catch (err) {
      setError("Cannot load products");
    }
  };

  useEffect(() => {
    fetchCategories();
    fetchProducts();
  }, []);

  // ---------------- HANDLE CHANGE ----------------

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox"
          ? checked
          : type === "file"
          ? files[0]
          : ["price", "original_price", "stock"].includes(name)
          ? Number(value)
          : value,
    }));

    if (name === "category_id") {
      fetchSubCategories(value);
      setFormData((prev) => ({ ...prev, sub_category_id: "" }));
    }
  };

  // ---------------- RESET ----------------

  const resetForm = () => {
    setFormData({
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

    setIsEditing(false);
    setEditId(null);
  };

  // ---------------- SUBMIT (ADD / UPDATE) ----------------

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const data = new FormData();

    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });

    if (isEditing) {
      data.append("id", editId);
    }

    const url = isEditing
      ? "http://localhost/electronics/api/update_product.php"
      : "http://localhost/electronics/api/add_product.php";

    try {
      const res = await fetch(url, {
        method: "POST",
        body: data,
      });

      const result = await res.json();

      if (result.success) {
        setMessage(isEditing ? "Product updated" : "Product added");

        fetchProducts();

        setShowForm(false);
        resetForm();
      } else {
        setError(result.message || "Error occurred");
      }
    } catch (err) {
      setError("Server error");
    }

    setIsSubmitting(false);
  };

  // ---------------- EDIT ----------------

  const handleEdit = (product) => {
    setFormData({
      category_id: product.category_id,
      sub_category_id: product.sub_category_id,
      name: product.name,
      price: product.price,
      original_price: product.original_price,
      discount: product.discount,
      description: product.description,
      image: null,
      popular: product.popular == 1,
      stock: product.stock,
    });

    fetchSubCategories(product.category_id);

    setEditId(product.id);
    setIsEditing(true);
    setShowForm(true);
  };

  // ---------------- DELETE ----------------

  const confirmDelete = (id) => {
    setItemToDelete(id);
    setShowConfirmModal(true);
  };

  const handleDelete = async () => {
    try {
      const res = await fetch(
        "http://localhost/electronics/api/delete_product.php",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id: itemToDelete }),
        }
      );

      const result = await res.json();

      if (result.success) {
        setMessage("Product deleted");
        fetchProducts();
      }
    } catch (err) {
      setError("Delete failed");
    }

    setShowConfirmModal(false);
  };

  // ---------------- UI ----------------

  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-8 bg-gray-900 p-6 rounded-xl">
        <div className="flex items-center gap-6">
          <img
            src={admin.profilePic}
            className="w-16 h-16 rounded-full border-2 border-blue-500"
          />
          <div>
            <h1 className="text-2xl font-bold">{admin.name}</h1>
            <p className="text-gray-400">{admin.email}</p>
          </div>
        </div>

        <button
          onClick={() => setShowForm(true)}
          className="bg-blue-600 px-6 py-3 rounded-full"
        >
          + Add Product
        </button>
      </div>

      {/* MESSAGES */}
      {message && (
        <div className="bg-green-900 p-3 rounded mb-4">{message}</div>
      )}
      {error && <div className="bg-red-900 p-3 rounded mb-4">{error}</div>}

      {/* TABLE */}
      <div className="bg-gray-900 rounded-xl overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-800">
            <tr>
              <th className="p-3">Image</th>
              <th>Name</th>
              <th>Category</th>
              <th>Sub</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {products.map((p) => (
              <tr key={p.id} className="border-b border-gray-800">
                <td className="p-3">
                  <img
                    src={
                      p.image_url
                        ? `http://localhost/electronics/${p.image_url}`
                        : "https://via.placeholder.com/60"
                    }
                    className="w-12 h-12 rounded"
                  />
                </td>

                <td>{p.name}</td>
                <td>{p.category_name}</td>
                <td>{p.sub_category_name}</td>
                <td>Rs {p.price}</td>
                <td>{p.stock}</td>

                <td className="flex gap-2 p-3">
                  <button
                    onClick={() => handleEdit(p)}
                    className="bg-blue-600 px-3 py-1 rounded"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => confirmDelete(p.id)}
                    className="bg-red-600 px-3 py-1 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* FORM MODAL */}
      {showForm && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center">
          <form
            onSubmit={handleSubmit}
            className="bg-gray-900 p-6 rounded-xl w-[500px]"
          >
            <h2 className="text-xl mb-4">
              {isEditing ? "Edit Product" : "Add Product"}
            </h2>

            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              className="w-full p-2 mb-2 bg-gray-800"
            />

            <select
              name="category_id"
              value={formData.category_id}
              onChange={handleChange}
              className="w-full p-2 mb-2 bg-gray-800"
            >
              <option>Select Category</option>
              {categories.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.name}
                </option>
              ))}
            </select>

            <select
              name="sub_category_id"
              value={formData.sub_category_id}
              onChange={handleChange}
              className="w-full p-2 mb-2 bg-gray-800"
            >
              <option>Select Subcategory</option>
              {subCategories.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.name}
                </option>
              ))}
            </select>

            <input
              name="price"
              type="number"
              value={formData.price}
              onChange={handleChange}
              placeholder="Price"
              className="w-full p-2 mb-2 bg-gray-800"
            />

            <input
              type="file"
              name="image"
              onChange={handleChange}
              className="w-full mb-2"
            />

            <label className="flex gap-2 mb-2">
              <input
                type="checkbox"
                name="popular"
                checked={formData.popular}
                onChange={handleChange}
              />
              Popular
            </label>

            <div className="flex gap-3">
              <button className="bg-blue-600 px-4 py-2 rounded">
                {isSubmitting ? "Saving..." : "Save"}
              </button>

              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="bg-gray-700 px-4 py-2 rounded"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      {/* DELETE MODAL */}
      {showConfirmModal && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center">
          <div className="bg-gray-900 p-6 rounded-xl">
            <p>Are you sure to delete?</p>

            <div className="flex gap-3 mt-4">
              <button
                onClick={handleDelete}
                className="bg-red-600 px-4 py-2 rounded"
              >
                Yes
              </button>

              <button
                onClick={() => setShowConfirmModal(false)}
                className="bg-gray-700 px-4 py-2 rounded"
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminPanel;