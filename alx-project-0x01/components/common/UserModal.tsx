// components/common/UserModal.tsx

import React, { useState } from "react";
import { UserData, UserModalProps } from "@/interfaces";

const UserModal: React.FC<UserModalProps> = ({ onClose, onSubmit }) => {
  const [user, setUser] = useState<UserData>({
    id: Date.now(), // simple unique ID
    name: "",
    username: "",
    email: "",
    street: "",
    address: {
      suite: "",
      city: "",
      zipcode: "",
      geo: {
        lat: "",
        lng: "",
      },
    },
    phone: "",
    website: "",
    company: {
      name: "",
      catchPhrase: "",
      bs: "",
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    const nestedFields = name.split(".");
    if (nestedFields.length === 1) {
      setUser((prev) => ({ ...prev, [name]: value }));
    } else {
      setUser((prev) => {
        const updatedUser = { ...prev };
        let current: any = updatedUser;

        for (let i = 0; i < nestedFields.length - 1; i++) {
          current = current[nestedFields[i]];
        }

        current[nestedFields[nestedFields.length - 1]] = value;
        return updatedUser;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(user);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-xl shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Add New User</h2>
        <form onSubmit={handleSubmit} className="space-y-4 overflow-y-auto max-h-[75vh] pr-2">
          <input name="name" placeholder="Name" value={user.name} onChange={handleChange} className="input" />
          <input name="username" placeholder="Username" value={user.username} onChange={handleChange} className="input" />
          <input name="email" placeholder="Email" value={user.email} onChange={handleChange} className="input" />
          <input name="address.street" placeholder="Street" value={user.street} onChange={handleChange} className="input" />
          <input name="address.suite" placeholder="Suite" value={user.address.suite} onChange={handleChange} className="input" />
          <input name="address.city" placeholder="City" value={user.address.city} onChange={handleChange} className="input" />
          <input name="address.zipcode" placeholder="Zipcode" value={user.address.zipcode} onChange={handleChange} className="input" />
          <input name="address.geo.lat" placeholder="Latitude" value={user.address.geo.lat} onChange={handleChange} className="input" />
          <input name="address.geo.lng" placeholder="Longitude" value={user.address.geo.lng} onChange={handleChange} className="input" />
          <input name="phone" placeholder="Phone" value={user.phone} onChange={handleChange} className="input" />
          <input name="website" placeholder="Website" value={user.website} onChange={handleChange} className="input" />
          <input name="company.name" placeholder="Company Name" value={user.company.name} onChange={handleChange} className="input" />
          <input name="company.catchPhrase" placeholder="Catch Phrase" value={user.company.catchPhrase} onChange={handleChange} className="input" />
          <input name="company.bs" placeholder="BS" value={user.company.bs} onChange={handleChange} className="input" />

          <div className="flex justify-between pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-600 hover:text-gray-900"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Add User
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserModal;
