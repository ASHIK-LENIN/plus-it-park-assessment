import React, { useEffect, useState } from 'react'
import axios from 'axios'


const Register = () => {
    const [district, setDistrict] = useState([])
    const [selectedDistrict, setselectedDistrict] = useState('')
    const [constituency, setConstituency] = useState([])
    const [selectedConstituency, setselectedConstituency] = useState('')


    const fetchDistrict = async () => {
        const res = await axios.get('https://dccbackend.plusitpark.com/api/admin/districtv4')
        const data = await res.data;
        setDistrict(data)

    }
    useEffect(() => {
        fetchDistrict();
        
    }, [])

    const handleDistrictChange = async (district) => {
        setselectedDistrict(district);
        console.log(selectedDistrict);
        const res = await axios.get(`https://dccbackend.plusitpark.com/api/admin/districtv4?district=${selectedDistrict}&constituency=${selectedDistrict}`)
        const data = await res.data;
        setConstituency(data)
    };

    const fetchContituency = async () => {
        const res = await axios.get(`https://dccbackend.plusitpark.com/api/admin/districtv4?district=${selectedDistrict}&constituency=${selectedDistrict}`)
        const data = await res.data;
        setConstituency(data)
        
    }

    // fetchContituency();


const handleConstituencyChange =async  (constituency) => {
    setselectedConstituency(constituency);
    console.log(selectedConstituency)
    const res = await axios.get(`https://dccbackend.plusitpark.com/api/admin/districtv4?district=${selectedDistrict}&constituency=${selectedDistrict}`)
        const data = await res.data;
        setConstituency(data)
        
};


    return (
        <>
            <div className="flex items-center justify-center p-12">

                <div className="mx-auto w-full max-w-[300px] bg-white">
                    <form>
                        <div className="mb-3">
                            <label for="name" className="mb-3 block text-base font-medium text-[#07074D]">
                                Name
                            </label>
                            <input type="text" name="name" id="name" placeholder="Full Name"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                        </div>
                        <div className="mb-3">
                            <label for="phone" className="mb-3 block text-base font-medium text-[#07074D]">
                                Phone
                            </label>
                            <input type="text" name="phone" id="phone" placeholder=" phone number"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                        </div>
                        <div className="mb-3">
                            <label for="email" className="mb-3 block text-base font-medium text-[#07074D]">
                                Email Address
                            </label>
                            <input type="email" name="email" id="email" placeholder="Enter your email"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                        </div>
                        <div className="mb-3">
                            <label for="text" className="mb-3 block text-base font-medium text-[#07074D]">
                                Password
                            </label>
                            <input type="email" name="email" id="email" placeholder="password"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                        </div>
                        <div className="-mx-3 flex flex-wrap">
                            <div className="w-full px-3 sm:w-1/2">
                                <div className="mb-3">
                                    <label for="date" className="mb-3 block text-base font-medium text-[#07074D]">
                                        Date
                                    </label>
                                    <input type="date" name="date" id="date"
                                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                                </div>
                            </div>

                        </div>
                        <div className="">

                            {selectedDistrict ? (
                                <details className="dropdown">
                                    <summary className="m-1 btn bg-white">{selectedDistrict}</summary>

                                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-white rounded-box w-52 ">
                                        {district?.map((item, index) => {
                                            return (
                                                <li className='text-black' key={index}
                                                    onClick={() => handleDistrictChange(item)}
                                                >
                                                    <a  >
                                                        {item}
                                                    </a>
                                                </li>
                                            )
                                        })}
                                    </ul>


                                </details>
                            ) : (
                                <details className="dropdown">
                                    <summary className="m-1 btn bg-white">District</summary>

                                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-white rounded-box w-52 ">
                                        {district?.map((item, index) => {
                                            return (
                                                <li className='text-black' key={index}
                                                    onClick={() => handleDistrictChange(item)}
                                                >
                                                    <a  >
                                                        {item}
                                                    </a>
                                                </li>
                                            )
                                        })}
                                    </ul>


                                </details>
                            )}

                        </div>

                        <div className="mt-10">
                            <details className="dropdown">
                                <summary className="m-1 btn bg-white">Constituency</summary>


                                <ul className="p-2 shadow menu dropdown-content z-[1] bg-white rounded-box w-52 ">
                                    {constituency?.map((item2) => {
                                        return (
                                            <li className='text-black'
                                            onClick={() => handleConstituencyChange(item2)}><a>
                                                {item2}
                                                </a></li>
                                        )
                                    })}



                                </ul>
                            </details>
                        </div>

                        <div className="mt-10">
                            <details className="dropdown">
                                <summary className="m-1 btn bg-white">Assembly</summary>
                                <ul className="p-2 shadow menu dropdown-content z-[1] bg-white rounded-box w-52 ">
                                    <li className='text-black'><a>Item 1</a></li>
                                    <li className='text-black' ><a>Item 2</a></li>
                                </ul>
                            </details>
                        </div>

                        <div className="">

                        </div>


                        <div>
                            <button
                                className="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
                                Register
                            </button>
                        </div>
                    </form>
                </div>
            </div>

        </>
    )
}

export default Register