import React from 'react'
import Products from "../../assets/product.jpg"
import { RiArrowRightSLine, RiDeleteBin6Line } from 'react-icons/ri'
import { Link } from 'react-router-dom'
const Wishlists = () => {
  return (
    <>
       <div className="container-section">
        <div className="flex px-3 items-center mat-50 text-base mb-4">
          {" "}
          <Link className="text-base">Home</Link> <RiArrowRightSLine />{" "}
          <span className="text-sm">Wishlists</span>
        </div>
        {/* <hr /> */}
       <table className='bg-white w-full mt-5 mb-5'>
        <thead className='border-2'>
          <tr key="" className='border-2'>
            <th className='w-[50%] border-2  p-2'>Product </th>
            <th className='w-[15%] border-2 p-2'>Price</th>
            <th className='w-[15%] border-2 p-2'>Availability</th>
            <th className='w-[15%] border-2 p-2'>Add To Cart</th>
            <th className='w-[5%] border-2  p-2'>Delete</th>
          </tr>
        </thead>
        <tbody className='w-full'>
          <tr key="w-full">
            <td className='w-[100%]  border-b-2 border-s-2 flex p-4 items-center'>
              <img src={Products} className='w-[50px]' alt="" />
              <p>SunChips Minis, Garden Salsa Flavored Canister, Multigrain Chip, 3.75 oz Canister</p>
            </td>
            <td className='w-[15%] border-2 text-center'> ₹ 1230</td>
            <td className='w-[15%] border-2 text-center'> In stock</td>
            <td className='w-[15%] border-2 text-center m-1'> <button className='btn-tr'>Add to Card</button></td>
            <td className='w-[5%] border-2 text-center m-auto cursor-pointer'> <RiDeleteBin6Line className='m-auto text-lime-600'/></td>
          </tr>
          <tr key="w-full">
            <td className='w-[100%]   border-b-2 border-s-2 flex p-4 items-center'>
              <img src={Products} className='w-[50px]' alt="" />
              <p>SunChips Minis, Garden Salsa Flavored Canister, Multigrain Chip, 3.75 oz Canister</p>
            </td>
            <td className='w-[15%] border-2 text-center'> ₹ 1230</td>
            <td className='w-[15%] border-2 text-center'> In stock</td>
            <td className='w-[15%] border-2 text-center m-1'> <button className='btn-tr'>Add to Card</button></td>
            <td className='w-[5%] border-2 text-center m-auto cursor-pointer'> <RiDeleteBin6Line className='m-auto text-lime-600'/></td>
          </tr>
          <tr key="w-full">
            <td className='w-[100%]  border-b-2 border-s-2 flex p-4 items-center'>
              <img src={Products} className='w-[50px]' alt="" />
              <p>SunChips Minis, Garden Salsa Flavored Canister, Multigrain Chip, 3.75 oz Canister</p>
            </td>
            <td className='w-[15%] border-2 text-center'> ₹ 1230</td>
            <td className='w-[15%] border-2 text-center'> In stock</td>
            <td className='w-[15%] border-2 text-center m-1'> <button className='btn-tr'>Add to Card</button></td>
            <td className='w-[5%] border-2 text-center m-auto cursor-pointer'> <RiDeleteBin6Line className='m-auto text-lime-600'/></td>
          </tr>
        </tbody>
       </table>
</div>
    </>
  )
}

export default Wishlists
