"use client";

import dynamic from "next/dynamic";

function FormControls({ controls, formData, setFormData }) {
  return controls.map((controlItem) => (
    <div key={controlItem.id} className="mb-4">
      <label
        htmlFor={controlItem.name}
        className="block text-gray-700 text-sm font-bold mb-2"
      >
        {controlItem.label}
      </label>
      <input
        className="shadow border rounded w-full py-2 px-3 text-gray-700 tracking-wide focus:outline-none focus:shadow-outline"
        placeholder={controlItem.placeholder}
        type={controlItem.type}
        name={controlItem.name}
        id={controlItem.name}
        value={formData[controlItem.name] || ""}
        onChange={(e) => {
          setFormData({
            ...formData,
            [controlItem.name]: e.target.value,
          });
        }}
      />
    </div>
  ));
}

export default dynamic(() => Promise.resolve(FormControls), { ssr: false });
