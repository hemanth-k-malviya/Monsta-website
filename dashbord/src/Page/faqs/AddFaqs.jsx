import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useForm } from "react-hook-form";
import { Link, useParams,useNavigate} from "react-router-dom";
import { toast } from 'react-toastify';

export default function AddFaqs() {
 const params = useParams();
  const [updateId, setUpdateId] = useState('');
  const [faqsDetails, setfaqsDetails] = useState({});
  const navigate = useNavigate();

   useEffect(() => {
    if (params.id) {
      setUpdateId(params.id);
      axios.post(`${import.meta.env.VITE_BASE_URL}/${import.meta.env.VITE_FAQS_API}/details/${params.id}`)
        .then((result) => {
          if (result.data._status === true) {
            setfaqsDetails(result.data._data || {});
          } else {
            setfaqsDetails({});
          }
        })
        .catch(() => {
          toast.error('Something went wrong !!');
        });
    } else {
      setfaqsDetails({});
      setUpdateId('');
    }
  }, [params.id])

  const formHandler = (event) => {
    event.preventDefault();

    const payload = {
      question: event.target.question.value,
      answer: event.target.answer.value,
      order: event.target.order.value
    };

    if (!updateId) {
      // add FAQS
      axios.post(`${import.meta.env.VITE_BASE_URL}/${import.meta.env.VITE_FAQS_API}/create`, payload)
        .then((result) => {
          if (result.data._status === true) {
            toast.success(result.data._message);
            event.target.reset();
            navigate('/faqs/view');
          } else {
            toast.error(result.data._message);
          }
        })
        .catch(() => {
          toast.error('Something went wrong!');
        });
    } else {
      // update FAQS
      axios.put(`${import.meta.env.VITE_BASE_URL}/${import.meta.env.VITE_FAQS_API}/update/${updateId}`, payload)
        .then((result) => {
          if (result.data._status === true) {
            toast.success(result.data._message);
            event.target.reset();
            navigate('/faqs/view');
          } else {
            toast.error(result.data._message);
          }
        })
        .catch(() => {
          toast.error('Something went wrong !');
        });
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
              <Link to={"/faqs/view"} className="ms-1 text-md font-medium text-gray-700 hover:text-blue-600 md:ms-2">Faq</Link>
            </div>
          </li>
          <li aria-current="page">
            <div className="flex items-center">
              /
              <span className="ms-1 text-md font-medium text-gray-500 md:ms-2">{updateId ? "Update" : "Add"}</span>
            </div>
          </li>
        </ol>
      </nav>
      {/* <Breadcrumb path={"Faq"} path2= {updateIdState ? "Update" : "Add"}  slash={"/"} /> */}
      <div className="w-full min-h-[610px]">
        <div className="max-w-[1220px] mx-auto py-5">
          <h3 className="text-[26px] font-semibold bg-slate-100 py-3 px-4 rounded-t-md border border-slate-400">
            {updateId ? "Update Faq" : "Add Faq"}
          </h3>
          <form key={faqsDetails._id || 'new'} onSubmit={formHandler} autoComplete="off" className="border border-t-0 p-3 rounded-b-md border-slate-400">

            <div className="">
              <div className="mb-5">
                <label
                  htmlFor="Question"
                  className="block mb-2 text-md font-medium text-gray-900"
                >
                  Question
                </label>
                <input
                  type="text"
                  name='question'
                  defaultValue={faqsDetails.question || ''}
                  id="Question"
                  className="text-[19px] border-2 shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-3"
                  placeholder="Question"
                />
        
              </div>

              <div className="mb-5">
                <label
                  htmlFor="Answer"
                  className="block mb-2 text-md font-medium text-gray-900"
                >
                  Answer
                </label>
                <textarea
                  id="Answer"
                  name='answer'
                  defaultValue={faqsDetails.answer || ''}
                  className="text-[19px] h-[150px] border-2 shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-3"
                  placeholder="Answer"
                ></textarea>
            
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
                  defaultValue={faqsDetails.order || ''}
                 
                  id="order"
                  className="text-[19px] border-2 shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-3"
                  placeholder="Order"
                />
             
              </div>
            </div>

            <button
              type="submit"
              className="focus:outline-none my-5 text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5"
            >
              {updateId ? "Update Faq" : "Add Faq"}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
