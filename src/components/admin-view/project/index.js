"use client";

import dynamic from "next/dynamic";
import FormControls from "../form-controls";

const controls = [
  {
    id: 1,
    name: "name",
    placeholder: "Project Name",
    type: "text",
    label: "Project Name",
  },
  {
    id: 2,
    name: "technologies",
    placeholder: "Enter Technologies",
    type: "text",
    label: "Enter Technologies",
  },
  {
    id: 3,
    name: "website",
    placeholder: "Website",
    type: "text",
    label: "Website",
  },
  {
    id: 4,
    name: "github",
    placeholder: "Github",
    type: "text",
    label: "github",
  },
];

function AdminProjectView({ formData, setFormData, handleSaveData, data }) {
  return (
    <div className="w-full">
      <div className="bg-[#ffffff] shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-10">
          {data && data.length
            ? data.map((item) => (
                <div
                  key={item.name}
                  className="flex flex-col gap-4 border p-4 border-green-600"
                >
                  <p>{item.name}</p>
                  <p>{item.technologies}</p>
                  <p>{item.website}</p>
                  <p>{item.github}</p>
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
          onClick={() => handleSaveData("project")}
          className="mt-[10px] border border-green-600 p-4 font-bold text-[16px]"
        >
          Add Info
        </button>
      </div>
    </div>
  );
}

export default dynamic(() => Promise.resolve(AdminProjectView), { ssr: false });
