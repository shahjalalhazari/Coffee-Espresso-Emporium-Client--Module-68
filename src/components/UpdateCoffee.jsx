import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const coffee = useLoaderData();

  const { _id, name, chef, supplier, taste, category, details, photo } = coffee;

  const handleUpdateCoffee = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const updatedCoffee = {
      name,
      chef,
      supplier,
      taste,
      category,
      details,
      photo,
    };
    console.log(updatedCoffee);

    fetch(`http://localhost:8080/coffee/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          Swal.fire({
            title: "Success!",
            text: "Coffee Updated Successfully.",
            icon: "success",
            confirmButtonText: "Cool",
          });
          form.reset();
        }
      });
  };

  return (
    <div className="mx-72 mt-12">
      <div>
        <div className="text-sm breadcrumbs">
          <ul>
            <li>
              <Link to="/">
                <FaArrowLeft className="mr-2" />
                Home
              </Link>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="w-4 h-4 mr-2 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                ></path>
              </svg>
              Add Coffee
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-[#F4F3F0] mt-12 px-28 py-16 text-center">
        <h2 className="text-4xl mb-8">
          Update <span className="text-bold">{name}</span> Details
        </h2>
        <p className="text-base">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here.
        </p>
        <form onSubmit={handleUpdateCoffee} className="mt-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="grid">
              <label
                htmlFor="name"
                className="text-start text-[rgba(27, 26, 26, 0.8)] mb-2"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                defaultValue={name}
                className="p-3 rounded-lg"
              />
            </div>
            <div className="grid">
              <label
                htmlFor="chef"
                className="text-start text-[rgba(27, 26, 26, 0.8)] mb-2"
              >
                Chef
              </label>
              <input
                type="text"
                name="chef"
                defaultValue={chef}
                className="p-3 rounded-lg"
              />
            </div>
            <div className="grid">
              <label
                htmlFor="supplier"
                className="text-start text-[rgba(27, 26, 26, 0.8)] mb-2"
              >
                Supplier
              </label>
              <input
                type="text"
                name="supplier"
                defaultValue={supplier}
                className="p-3 rounded-lg"
              />
            </div>
            <div className="grid">
              <label
                htmlFor="taste"
                className="text-start text-[rgba(27, 26, 26, 0.8)] mb-2"
              >
                Taste
              </label>
              <input
                type="text"
                name="taste"
                defaultValue={taste}
                className="p-3"
              />
            </div>
            <div className="grid">
              <label
                htmlFor="category"
                className="text-start text-[rgba(27, 26, 26, 0.8)] mb-2"
              >
                Category
              </label>
              <input
                type="text"
                name="category"
                defaultValue={category}
                className="p-3 rounded-lg"
              />
            </div>
            <div className="grid">
              <label
                htmlFor="details"
                className="text-start text-[rgba(27, 26, 26, 0.8)] mb-2"
              >
                Details
              </label>
              <input
                type="text"
                name="details"
                defaultValue={details}
                className="p-3 rounded-lg"
              />
            </div>
          </div>

          <div className="grid mt-6">
            <label
              htmlFor="photo"
              className="text-start text-[rgba(27, 26, 26, 0.8)] mb-2"
            >
              Photo
            </label>
            <input
              type="text"
              name="photo"
              defaultValue={photo}
              className="p-3 w-full rounded-lg"
            />
          </div>
          <input
            type="submit"
            value="Update Coffee"
            className="mt-6 w-full py-3 cursor-pointer text-bold text-base bg-[#D2B48C] rounded-lg border-[#331A15] border-2"
          />
        </form>
      </div>
    </div>
  );
};

export default UpdateCoffee;
