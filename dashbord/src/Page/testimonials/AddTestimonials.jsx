import React, { useEffect, useState } from 'react'
import { useForm } from "react-hook-form";
import $ from "jquery";
import "dropify/dist/css/dropify.min.css";
import "dropify/dist/js/dropify.min.js";
import { useParams, useNavigate } from "react-router-dom";
import Breadcrumb from '../../Comman/Breadcrumb';
import { toast } from 'react-toastify';
import axios from 'axios';

export default function AddTestimonials() {
  const [imageURL, setImageUrl] = useState('');
  const params = useParams();
  const [updateId, setUpdateId] = useState('');
  const [testimonialDetails, setTestimonialDetails] = useState('')
  const navigate = useNavigate();

  useEffect(() => {
    const dropifyElement = $("#image");

    if (dropifyElement.data("dropify")) {
      dropifyElement.data("dropify").destroy();
      dropifyElement.removeData("dropify");
    }

    // **Force Update Dropify Input**
    dropifyElement.replaceWith(
      `<input type="file" accept="image/*" name="image" id="image"
          class="dropify" data-height="250" data-default-file="${imageURL}"/>`
    );

    // **Reinitialize Dropify**
    $("#image").dropify();

  }, [imageURL]); // ✅ Runs when `defaultImage` updates

  useEffect(() => {
    if (params.id != '') {
      setUpdateId(params.id);
      axios.post(`${import.meta.env.VITE_BASE_URL}/${import.meta.env.VITE_TESTIMONIALS_API}/details/${params.id}`)
        .then((result) => {
          if (result.data._status == true) {
            setTestimonialDetails(result.data._data)
            if (result.data._data.image != '') {
              setImageUrl(`${result.data._image_path}${result.data._data.image}`)
            }
          } else {
            setTestimonialDetails('');

          }
        })
        .catch(() => {
          toast.error('Something went wrong !!')
        })
    }
  }, [params])

  const formHandler = (event) => {
    event.preventDefault();

    if (!updateId) {
      //add category
      axios.post(`${import.meta.env.VITE_BASE_URL}/${import.meta.env.VITE_TESTIMONIALS_API}/create`, event.target)
        .then((result) => {
          if (result.data._status == true) {
            toast.success(result.data._message);
            event.target.reset()
            navigate('/testimonials/view')
          } else {
            toast.error(result.data._message);
          }
        })
        .catch(() => {
          toast.error('Something went wrong!');
        })
    }
    else {
      //update category
      axios.put(`${import.meta.env.VITE_BASE_URL}/${import.meta.env.VITE_TESTIMONIALS_API}/update/${updateId}`, event.target)
        .then((result) => {
          if (result.data._status == true) {
            toast.success(result.data._message);
            event.target.reset()
            navigate('/testimonials/view')
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
      <Breadcrumb path={"testimonials"} path2={updateId ? "Update" : "Add"} slash={"/"} />
      <div className="w-full min-h-[610px]">
        <div className="max-w-[1220px] mx-auto py-5">
          <h3 className="text-[26px] font-semibold bg-slate-100 py-3 px-4 rounded-t-md border border-slate-400">
            {updateId ? "Update Silder" : "Add Slider"}
          </h3>
          <form onSubmit={formHandler} autoComplete="off" className="border border-t-0 p-3 rounded-b-md border-slate-400">
            <div className="flex gap-5">
              <div className="w-1/3">
                <label

                  className="block  text-md font-medium text-gray-900"
                >
                  Choose Image
                </label>
                <input
                  type="file"
                  id="image"
                  name='image'
                  className="dropify"
                  data-height="250"
                />
              </div>
              <div className="w-2/3">
                <div className="mb-5">
                  <label
                    htmlFor="Title"
                    className="block mb-1 text-md font-medium text-gray-900"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name='name'
                    defaultValue={testimonialDetails.name}
                    id="Name"
                    className="text-[19px] border-2 shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-3"
                    placeholder="Name"
                  />
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="Designation"
                    className="block mb-1 text-md font-medium text-gray-900"
                  >
                    Designation
                  </label>
                  <input
                    type="number"
                    name='designation'
                    defaultValue={testimonialDetails.designation}
                    id="Designation"
                    className="text-[19px] border-2 shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-3"
                    placeholder="Designation"
                  />
                </div>

                <div className="mb-5">
                  <label
                    htmlFor="Rating"
                    className="block mb-1 text-md font-medium text-gray-900"
                  >
                    Rating
                  </label>
                  <input
                    type="number"
                    name='rating'
                    defaultValue={testimonialDetails.rating}
                    id="Rating"
                    className="text-[19px] border-2 shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-3"
                    placeholder="Rating"
                  />
                </div>

                <div className="mb-5">
                  <label
                    htmlFor="Order"
                    className="block mb-1 text-md font-medium text-gray-900"
                  >
                    Order
                  </label>
                  <input
                    type="number"
                    name='order'
                      defaultValue={testimonialDetails.order}
                    id="Order"
                    className="text-[19px] border-2 shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-3"
                    placeholder="Order"
                  />
                </div>

                <div className="mb-5">
                  <label
                    htmlFor="Message"
                    className="block mb-1 text-md font-medium text-gray-900"
                  >
                    Message
                  </label>
                  <textarea
                  name='message'
                    defaultValue={testimonialDetails.message}
                    id="Message"
                    className="text-[19px] resize-none h-[100px] border-2 shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-3"
                    placeholder="Message"
                  > </textarea>
                </div>
              </div>
            </div>
            <button
              type="submit"
              className="focus:outline-none my-5 text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5"
            >
              {updateId ? "Update Testimonial" : "Add Testimonial"}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
