import { useState } from "react";

const ProductForm = () => {
  const [productData, setProductData] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    images: [],
  });

  const handleInputChange = (e) => {
    setProductData({ ...productData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setProductData({ ...productData, images: Array.from(e.target.files) });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(productData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-100">
        <div className="px-8 py-6 border-b border-gray-100">
          <h1 className="text-2xl font-semibold text-gray-900">Add New Product</h1>
          <p className="mt-2 text-sm text-gray-500">Fill in the details to add a new product to your inventory</p>
        </div>
        
        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          <div className="space-y-1">
            <label className="block text-sm font-medium text-gray-700">Product Name</label>
            <input
              type="text"
              name="name"
              value={productData.name}
              onChange={handleInputChange}
              className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              required
              placeholder="Enter product name"
            />
          </div>

          <div className="space-y-1">
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              name="description"
              value={productData.description}
              onChange={handleInputChange}
              rows="4"
              className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none"
              required
              placeholder="Enter product description"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700">Price</label>
              <div className="relative">
                <span className="absolute left-3 top-2.5 text-gray-500">$</span>
                <input
                  type="number"
                  name="price"
                  value={productData.price}
                  onChange={handleInputChange}
                  className="w-full pl-8 pr-4 py-2.5 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  required
                  placeholder="0.00"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700">Category</label>
              <input
                type="text"
                name="category"
                value={productData.category}
                onChange={handleInputChange}
                className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                required
                placeholder="Enter category"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="block text-sm font-medium text-gray-700">Product Images</label>
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg hover:border-gray-400 transition-colors">
              <div className="space-y-1 text-center">
                <svg
                  className="mx-auto h-12 w-12 text-gray-400"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 48 48"
                  aria-hidden="true"
                >
                  <path
                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className="flex text-sm text-gray-600">
                  <label className="relative cursor-pointer rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2">
                    <span>Upload files</span>
                    <input
                      type="file"
                      name="images"
                      onChange={handleFileChange}
                      multiple
                      className="sr-only"
                    />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
              </div>
            </div>
          </div>

          <div className="pt-4">
            <button
              type="submit"
              className="w-full px-4 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
            >
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductForm;