import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

export default function AddCountry() {
  const [country, setCountry] = useState("#000000");
  const params = useParams();
  const [updateId, setUpdateId] = useState('');
  const [countryDetails, setCountryDetails] = useState('')
  const navigate = useNavigate();

  useEffect(() => {
    if (params.id != '') {
      setUpdateId(params.id);
      axios.post(`${import.meta.env.VITE_BASE_URL}/${import.meta.env.VITE_COUNTRY_API}/details/${params.id}`)
        .then((result) => {
          if (result.data._status == true) {
            setCountryDetails(result.data._data)
            setCountry(result.data._data.order)
          } else {
            setCountryDetails('');

          }
        })
        .catch(() => {
          toast.error('Something went wrong !!')
        })
    }
  }, [params])


  const formHandler = (event) => {
    event.preventDefault();

    const formData = {
      name: event.target.name.value,
      order: event.target.order.value,
    }


    if (!updateId) {
      //add color
      axios.post(`${import.meta.env.VITE_BASE_URL}/${import.meta.env.VITE_COUNTRY_API}/create`, formData)
        .then((result) => {
          if (result.data._status == true) {
            toast.success(result.data._message);
            event.target.reset()
            navigate('/country/view')
          } else {
            toast.error(result.data._message);
          }
        })
        .catch(() => {
          toast.error('Something went wrong !');
        })
    }
    else {
      //update color
      axios.put(`${import.meta.env.VITE_BASE_URL}/${import.meta.env.VITE_COUNTRY_API}/update/${updateId}`, formData)
        .then((result) => {
          if (result.data._status == true) {
            toast.success(result.data._message);
            event.target.reset()
            navigate('/country/view')
          } else {
            toast.error(result.data._message);
          }
        })
        .catch(() => {
          toast.error('Something went wrong !');
        })
    }
  }

  return (
    <section className="w-full">
      <nav className="flex border-b-2" aria-label="Breadcrumb">
        <ol className="p-3 px-6 inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
          <li className="inline-flex items-center ">
            <Link to={"/home"} className="inline-flex items-center text-md font-medium text-gray-700 hover:text-blue-600">
              Home
            </Link>
          </li>
          <li>
            <div className="flex items-center">
              /
              <Link to={"/country/view"} className="ms-1 text-md font-medium text-gray-700 hover:text-blue-600 md:ms-2">Country</Link>
            </div>
          </li>
          <li aria-current="page">
            <div className="flex items-center">
              /
              <span className="ms-1 text-md font-medium text-gray-500 md:ms-2"> {updateId ? "Update" : "Add"}</span>
            </div>
          </li>
        </ol>
      </nav>

      <div className="w-full min-h-[610px]">
        <div className="max-w-[1220px] mx-auto py-5">
          <h3 className="text-[26px] font-semibold bg-slate-100 py-3 px-4 rounded-t-md border border-slate-400">
            {updateId ? "Update Country" : "Add Country"}
          </h3>
          <form onSubmit={formHandler} autoComplete="off" className="border border-t-0 p-3 rounded-b-md border-slate-400">

            <div className="">
              <div className="mb-5">
                <label
                  htmlFor="Country"
                  className="block mb-2 text-md font-medium text-gray-900"
                >
                  Country Name
                </label>
                <input
                  type="text"
                  name='name'
                  // {...register("Country", { required: "Country name is required" })}
                  id="Country"
                  className="text-[19px] border-2 shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-3"
                  placeholder="Country Name"
                  defaultValue={countryDetails.name}
                />
                {/* {errors.Country && <p className="text-red-500">{errors.Country.message}</p>} */}
              </div>
              <div className="mb-5">
                <label
                  htmlFor="order"
                  className="block mb-2 text-md font-medium text-gray-900"
                >
                  Order
                </label>
                <input
                  type="number"
                  name='order'
                  defaultValue={countryDetails.order}
                  // {...register("order", { required: "Order is required" })}
                  id="order"
                  className="text-[19px] border-2 shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-3"
                  placeholder="Order"
                />
                {/* {errors.order && <p className="text-red-500">{errors.order.message}</p>} */}
              </div>
            </div>

            <button
              type="submit"
              className="focus:outline-none my-5 text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5"
            >
              {updateId ? "Update Country" : "Add Country"}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
