"use client";

import dynamic from "next/dynamic";
import FormControls from "../form-controls";

const controls = [
  {
    id: 1,
    name: "degree",
    placeholder: "Degree Name",
    type: "text",
    label: "Enter Degree Name",
  },
  {
    id: 2,
    name: "year",
    placeholder: "Year",
    type: "text",
    label: "Year",
  },
  {
    id: 3,
    name: "college",
    placeholder: "College Name",
    type: "text",
    label: "Enter College Name",
  },
];

function AdminEducationView({ handleSaveData, formData, setFormData, data }) {
  return (
    <div className="w-full">
      <div className="bg-[#ffffff] shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-10">
          {data && data.length
            ? data.map((item) => (
                <div
                  key={item.degree}
                  className="flex flex-col gap-4 border p-4 border-green-600"
                >
                  <p>{item.degree}</p>
                  <p>{item.college}</p>
                  <p>{item.year}</p>
                </div>
              ))
            : null}
        </div>
        <FormControls
          controls={controls}
          formData={formData}
          setFormData={setFormData}
        />
        <button
          onClick={() => handleSaveData("education")}
          className="mt-[10px] border border-green-600 p-4 font-bold text-[16px]"
        >
          Add Info
        </button>
      </div>
    </div>
  );
}

export default dynamic(() => Promise.resolve(AdminEducationView), {
  ssr: false,
});
