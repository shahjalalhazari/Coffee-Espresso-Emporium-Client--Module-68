import { data } from "autoprefixer";
import React from "react";
import { FaEye, FaPen, FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee }) => {
  const { _id, name, chef, supplier, taste, category, details, photo } = coffee;

  const handleDeleteCoffe = (_id) => {

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {

        fetch(`http://localhost:8080/coffee/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your Coffee has been deleted.", "success");
            }
          });
      }
    });
  };

  return (
    <div className="card lg:card-side p-4 shadow-lg bg-[#F5F4F1] border-[#331A15] border-2">
      <figure>
        <img src={photo} alt={name} />
      </figure>
      <div className="card-body text-start flex-row">
        <div className="">
          <h2 className="card-title">{name}</h2>
          <p>Chef: {chef}</p>
          <p>Taste: {taste}</p>
          <p>Supplier: {supplier}</p>
          <p>Category: {category}</p>
        </div>
        <div className="btn-group btn-group-vertical gap-y-4">
          <button className="btn bg-[#D2B48C] border-0">
            <FaEye />
          </button>
          <button className="btn bg-[#3C393B] border-0">
            <FaPen />
          </button>
          <button
            onClick={() => handleDeleteCoffe(_id)}
            className="btn bg-[#EA4744] border-0"
          >
            <FaTrash />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
