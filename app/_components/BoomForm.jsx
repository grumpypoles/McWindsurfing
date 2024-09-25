import { useState, useEffect } from "react";

import Image from "next/image";
import { addBoom, editBoom } from "@/app/_lib/actions_booms";

const BoomForm = ({ equipment, edit }) => {
  const [imageUrls, setImageUrls] = useState([]);
  const [invoiceUrls, setInvoiceUrls] = useState([]);

  useEffect(() => {
    if (edit) {
      const imageUrlsString = equipment[0]?.image || "[]"; // Default to '[]' if image is undefined
      const parsedImageUrls = JSON.parse(imageUrlsString);
      setImageUrls(parsedImageUrls); // Update state with image URLs
    }
  }, [edit, equipment]);

  useEffect(() => {
    if (edit) {
      const invoiceImageUrls = equipment[0]?.invoice || "[]";
      setInvoiceUrls(invoiceImageUrls); // Update state with image URLs
      console.log(setInvoiceUrls);
    }
  }, [edit, equipment]);

  // State for form data
  const [formData, setFormData] = useState({
    selcode: "BMxx",
    model: "",
    make: "",
    year: "",
    length: "",
    adj_length: "",
    adj_type: "",
    weight: "",
    diameter: "",
    body: "",
    front_end: "",
    back_end: "",
    // image: "",
    web_url: "",
    is_active: "",
    app_user_id: "",
    purchase_date: "",
    merchant: "",
    retail_price: "",
    paid_price: "",
    comments: "",
    // invoice: "",
    disposal_date: "1990-01-01",
    disposal: "",
    disposal_price: "0.00",
    // Add other fields here...
  });

  // Populate form if `edit` is true and `mastData` is provided
  useEffect(() => {
    if (edit && equipment) {
      setFormData({
        selcode: equipment[0].selcode || "",
        model: equipment[0].model || "",
        make: equipment[0].make || "",
        year: equipment[0].year || "",
        length: equipment[0].length || "",
        adj_length: equipment[0].adj_length || "",
        adj_type: equipment[0].adj_type || "",
        weight: equipment[0].weight || "",
        diameter: equipment[0].diameter || "",
        body: equipment[0].body || "",
        front_end: equipment[0].front_end || "",
        back_end: equipment[0].back_end || "",
        // image: equipment[0].image || "",
        web_url: equipment[0].web_url || "",
        is_active: equipment[0].is_active || "",
        app_user_id: equipment[0].app_user_id || "",
        purchase_date: equipment[0].purchase_date || "",
        merchant: equipment[0].merchant || "",
        retail_price: equipment[0].retail_price || "",
        paid_price: equipment[0].paid_price || "",
        comments: equipment[0].comments || "",
        invoice: equipment[0].invoice || "",
        disposal_date: equipment[0].disposal_date || "1990-01-01",
        disposal: equipment[0].disposal || "",
        disposal_price: equipment[0].disposal_price || "0.00",
        // Add other fields here...
      });
    }
  }, [edit, equipment]);

  // Handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      <div className="flex items-center justify-center py-3">
        <div className="w-full mx-auto bg-primary-800">
          <div className="px-8 pt-6 pb-4 border-b-4 border-primary-700 ">
            <h1 className="text-4xl font-semibold text-primary-500">
              {edit ? "Edit Boom" : "Add New Boom"}
            </h1>
          </div>
          <form className="px-8 pb-6" action={edit ? editBoom : addBoom}>
            <div className="grid grid-cols-12 gap-2 pt-4 mb-5">
              <div>
                <label
                  htmlFor="selcode"
                  className="block mb-3 text-base font-medium text-primary-300"
                >
                  Code
                </label>
                <input
                  type="text"
                  name="selcode"
                  id="selcode"
                  placeholder="MT"
                  value={formData.selcode}
                  onChange={handleInputChange}
                  required
                  className="w-full rounded-md border border-primary-200 bg-primary-100 py-2.5 px-6 text-base font-medium text-primary-900 focus:ring focus:ring-opacity-50 disabled:opacity-50"
                />
              </div>
              <div>
                <label
                  htmlFor="year"
                  className="block mb-3 text-base font-medium text-primary-300"
                >
                  Year
                </label>
                <input
                  type="text"
                  name="year"
                  id="year"
                  required
                  value={formData.year}
                  onChange={handleInputChange}
                  className="w-full rounded-md border border-primary-200 bg-primary-100 py-2.5 px-6 text-base font-medium text-primary-900 focus:ring focus:ring-opacity-50 disabled:opacity-50"
                />
              </div>
              <div className="col-span-2">
                <label
                  htmlFor="make"
                  className="block mb-3 text-base font-medium text-primary-300"
                >
                  Maker
                </label>
                <input
                  type="text"
                  name="make"
                  id="make"
                  value={formData.make}
                  onChange={handleInputChange}
                  className="w-full rounded-md border border-primary-200 bg-primary-100 py-2.5 px-6 text-base font-medium text-primary-900 focus:ring focus:ring-opacity-50 disabled:opacity-50"
                />
              </div>
              <div className="col-span-2">
                <label
                  htmlFor="model"
                  className="block mb-3 text-base font-medium text-primary-300"
                >
                  Model
                </label>
                <input
                  type="text"
                  name="model"
                  id="model"
                  required
                  value={formData.model}
                  onChange={handleInputChange}
                  className="w-full rounded-md border border-primary-200 bg-primary-100 py-2.5 px-6 text-base font-medium text-primary-900 focus:ring focus:ring-opacity-50 disabled:opacity-50"
                />
              </div>

              <div className="col-span-2">
                <label
                  htmlFor="length"
                  className="block mb-3 text-base font-medium text-primary-300"
                >
                  Length
                </label>
                <input
                  type="text"
                  name="length"
                  id="length"
                  required
                  value={formData.length}
                  onChange={handleInputChange}
                  className="w-full rounded-md border border-primary-200 bg-primary-100 py-2.5 px-6 text-base font-medium text-primary-900 focus:ring focus:ring-opacity-50 disabled:opacity-50"
                />
              </div>
              <div className="col-span-2">
                <label
                  htmlFor="adj_length"
                  className="block mb-3 text-base font-medium text-primary-300"
                >
                  Adjustment Length
                </label>
                <input
                  type="text"
                  name="adj_length"
                  id="adj_length"
                  required
                  value={formData.adj_length}
                  onChange={handleInputChange}
                  className="w-full rounded-md border border-primary-200 bg-primary-100 py-2.5 px-6 text-base font-medium text-primary-900 focus:ring focus:ring-opacity-50 disabled:opacity-50"
                />
              </div>
              <div className="col-span-2">
                <label
                  htmlFor="adj_type"
                  className="block mb-3 text-base font-medium text-primary-300"
                >
                  Adjustment Type
                </label>
                <input
                  type="text"
                  name="adj_type"
                  id="adj_type"
                  required
                  value={formData.adj_type}
                  onChange={handleInputChange}
                  className="w-full rounded-md border border-primary-200 bg-primary-100 py-2.5 px-6 text-base font-medium text-primary-900 focus:ring focus:ring-opacity-50 disabled:opacity-50"
                />
              </div>
            </div>
            <div className="grid grid-cols-10 gap-2 pt-4 mb-5">
            <div className="col-span-2">
                <label
                  htmlFor="weight"
                  className="block mb-3 text-base font-medium text-primary-300"
                >
                  Weight
                </label>
                <input
                  type="number"
                  step="0.01"
                  name="weight"
                  id="weight"
                  required
                  value={formData.weight}
                  onChange={handleInputChange}
                  className="w-full rounded-md border border-primary-200 bg-primary-100 py-2.5 px-6 text-base font-medium text-primary-900 focus:ring focus:ring-opacity-50 disabled:opacity-50"
                />
              </div>

              <div className="col-span-2">
                <label
                  htmlFor="diameter"
                  className="block mb-3 text-base font-medium text-primary-300"
                >
                  Diameter
                </label>
                <input
                  type="text"
                  name="diameter"
                  id="diameter"
                  required
                  value={formData.diameter}
                  onChange={handleInputChange}
                  className="w-full rounded-md border border-primary-200 bg-primary-100 py-2.5 px-6 text-base font-medium text-primary-900 focus:ring focus:ring-opacity-50 disabled:opacity-50"
                />
              </div>
              <div className="col-span-2">
                <label
                  htmlFor="body"
                  className="block mb-3 text-base font-medium text-primary-300"
                >
                  Body
                </label>
                <input
                  type="text"
                  name="body"
                  id="body"
                  required
                  value={formData.body}
                  onChange={handleInputChange}
                  className="w-full rounded-md border border-primary-200 bg-primary-100 py-2.5 px-6 text-base font-medium text-primary-900 focus:ring focus:ring-opacity-50 disabled:opacity-50"
                />
              </div>
              <div className="col-span-2">
                <label
                  htmlFor="front_end"
                  className="block mb-3 text-base font-medium text-primary-300"
                >
                  Front End
                </label>
                <input
                  type="text"
                  name="front_end"
                  id="front_end"
                  required
                  value={formData.front_end}
                  onChange={handleInputChange}
                  className="w-full rounded-md border border-primary-200 bg-primary-100 py-2.5 px-6 text-base font-medium text-primary-900 focus:ring focus:ring-opacity-50 disabled:opacity-50"
                />
              </div>
              <div className="col-span-2">
                <label
                  htmlFor="back_end"
                  className="block mb-3 text-base font-medium text-primary-300"
                >
                  Back End
                </label>
                <input
                  type="text"
                  name="back_end"
                  id="back_end"
                  required
                  value={formData.back_end}
                  onChange={handleInputChange}
                  className="w-full rounded-md border border-primary-200 bg-primary-100 py-2.5 px-6 text-base font-medium text-primary-900 focus:ring focus:ring-opacity-50 disabled:opacity-50"
                />
              </div>
            </div>
            <div className="grid grid-cols-12 gap-2 mb-5 ">
              <div className="col-span-4">
                <label
                  htmlFor="image"
                  className="block mb-3 text-base font-medium text-primary-300"
                >
                  Select Image
                </label>
                <input
                  type="file"
                  name="image"
                  id="image"
                  required
                  className="w-full text-sm font-semibold text-primary-800 bg-primary-100 border rounded cursor-pointer file:cursor-pointer file:border-0 file:py-2.5 file:px-4 file:mr-4 file:bg-primary-100 file:hover:bg-primary-200 file:text-primary-900"
                />
              </div>
              <div className="col-span-4">
                <label
                  htmlFor="web_url"
                  className="block mb-3 text-base font-medium text-primary-300"
                >
                  Maker URL
                </label>
                <input
                  type="url"
                  name="web_url"
                  id="web_url"
                  value={formData.web_url}
                  onChange={handleInputChange}
                  className="w-full rounded-md border border-primary-200 bg-primary-100 py-2.5 px-6 text-base font-medium text-primary-900 focus:ring focus:ring-opacity-50 disabled:opacity-50"
                />
              </div>
              <div className="col-span-4">
                <label
                  htmlFor="merchant"
                  className="block mb-3 text-base font-medium text-primary-300"
                >
                  Merchant
                </label>
                <input
                  type="text"
                  name="merchant"
                  id="merchant"
                  required
                  value={formData.merchant}
                  onChange={handleInputChange}
                  className="w-full rounded-md border border-primary-200 bg-primary-100 py-2.5 px-6 text-base font-medium text-primary-900 focus:ring focus:ring-opacity-50 disabled:opacity-50"
                />
              </div>
            </div>
            <div className="grid grid-cols-12 gap-2 mb-5 ">
              <div className="col-span-2">
                <label
                  htmlFor="purchase_date"
                  className="block mb-3 text-base font-medium text-primary-300"
                >
                  Purchase Date
                </label>
                <input
                  type="date"
                  name="purchase_date"
                  id="purchase_date"
                  required
                  value={formData.purchase_date}
                  onChange={handleInputChange}
                  className="w-full rounded-md border border-primary-200 bg-primary-100 py-2.5 px-6 text-base font-medium text-primary-900 focus:ring focus:ring-opacity-50 disabled:opacity-50"
                />
              </div>
              <div className="col-span-2">
                <label
                  htmlFor="retail_price"
                  className="block mb-3 text-base font-medium text-primary-300"
                >
                  $ Retail Price
                </label>
                <input
                  type="number"
                  name="retail_price"
                  id="retail_price"
                  required
                  step="0.10"
                  value={formData.retail_price}
                  onChange={handleInputChange}
                  className="w-full rounded-md border border-primary-200 bg-primary-100 py-2.5 px-6 text-base font-medium text-primary-900 focus:ring focus:ring-opacity-50 disabled:opacity-50"
                />
              </div>
              <div className="col-span-2">
                <label
                  htmlFor="paid_price"
                  className="block mb-3 text-base font-medium text-primary-300"
                >
                  $ Paid Price
                </label>
                <input
                  type="number"
                  name="paid_price"
                  step="0.10"
                  id="paid_price"
                  required
                  value={formData.paid_price}
                  onChange={handleInputChange}
                  className="w-full rounded-md border border-primary-200 bg-primary-100 py-2.5 px-6 text-base font-medium text-primary-900 focus:ring focus:ring-opacity-50 disabled:opacity-50"
                />
              </div>
              <div className="col-span-2">
                <label
                  htmlFor="comments"
                  className="block mb-3 text-base font-medium text-primary-300"
                >
                  Comments
                </label>
                <input
                  type="text"
                  name="comments"
                  id="comments"
                  value={formData.comments}
                  onChange={handleInputChange}
                  className="w-full rounded-md border border-primary-200 bg-primary-100 py-2.5 px-6 text-base font-medium text-primary-900 focus:ring focus:ring-opacity-50 disabled:opacity-50"
                />
              </div>

              <div className="col-span-4">
                <label
                  htmlFor="invoice"
                  className="block mb-3 text-base font-medium text-primary-300"
                >
                  Select Invoice
                </label>
                <input
                  type="file"
                  name="invoice"
                  id="invoice"
                  className="w-full text-sm font-semibold text-primary-800 bg-primary-100 border rounded cursor-pointer file:cursor-pointer file:border-0 file:py-2.5 file:px-4 file:mr-4 file:bg-primary-100 file:hover:bg-primary-200 file:text-primary-900"
                />
              </div>
            </div>
            <div className="grid grid-cols-12 gap-2 mb-5 ">
              <div className="col-span-2">
                <label
                  htmlFor="disposal_date"
                  className="block mb-3 text-base font-medium text-primary-300"
                >
                  Disposal Date
                </label>
                <input
                  type="date"
                  name="disposal_date"
                  id="disposal_date"
                  defaultValue={"1990-01-01"}
                  value={formData.disposal_date}
                  onChange={handleInputChange}
                  className="w-full rounded-md border border-primary-200 bg-primary-100 py-2.5 px-6 text-base font-medium text-primary-900 focus:ring focus:ring-opacity-50 disabled:opacity-50"
                />
              </div>
              <div className="col-span-2">
                <label
                  htmlFor="disposal"
                  className="block mb-3 text-base font-medium text-primary-300"
                >
                  Disposal Method
                </label>
                <input
                  type="text"
                  name="disposal"
                  id="disposal"
                  value={formData.disposal}
                  onChange={handleInputChange}
                  className="w-full rounded-md border border-primary-200 bg-primary-100 py-2.5 px-6 text-base font-medium text-primary-900 focus:ring focus:ring-opacity-50 disabled:opacity-50"
                />
              </div>
              <div className="col-span-2">
                <label
                  htmlFor="disposal_price"
                  className="block mb-3 text-base font-medium text-primary-300"
                >
                  $ Disposal Revenue
                </label>
                <input
                  type="number"
                  name="disposal_price"
                  id="disposal_price"
                  step="0.10"
                  value={formData.disposal_price}
                  onChange={handleInputChange}
                  className="w-full rounded-md border border-primary-200 bg-primary-100 py-2.5 px-6 text-base font-medium text-primary-900 focus:ring focus:ring-opacity-50 disabled:opacity-50"
                />
              </div>
              <div className="col-span-2"></div>
              <div className="col-span-2">
                <label
                  htmlFor="is_active"
                  className="block mb-3 text-base font-medium text-primary-300"
                >
                  Status
                </label>
                <select
                  id="is_active"
                  name="is_active"
                  value={formData.is_active}
                  onChange={handleInputChange}
                  className="w-full px-6 py-3 text-base font-medium border rounded-md border-primary-200 bg-primary-100 text-primary-900 focus:ring focus:ring-opacity-50 disabled:opacity-50"
                >
                  <option value="true" className="text-centre">
                    Active
                  </option>
                  <option value="false" className="text-left">
                    Inactive
                  </option>
                </select>
              </div>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="px-8 py-4 font-semibold transition-all rounded-md bg-primary-700 text-primary-100 hover:bg-gray-500 disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300"
              >
                {edit ? "Edit Boom" : "Add Boom"}
              </button>
            </div>
          </form>
        </div>
      </div>
      {edit && imageUrls.length > 0 && (
        <div className="flex flex-row justify-between px-6 py-8 max-h-96 bg-primary-800">
          <Image
            src={imageUrls[0]} // Use the first image URL
            alt="Sail Image"
            height={0}
            width={0}
            sizes="100vw"
            className="w-4/6 h-auto rounded-t-xl"
          />
          <Image
            src={invoiceUrls[0]}
            alt=""
            height={0}
            width={0}
            sizes="100vw"
            className="w-1/6 h-auto rounded-t-xl"
          />
        </div>
      )}
    </>
  );
};

export default BoomForm;
