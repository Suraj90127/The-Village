import React from 'react'
import { MdFilterList } from "react-icons/md";
import { IoMdStar } from "react-icons/io";
import { IoMdHeartEmpty } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { LuRefreshCw } from "react-icons/lu";
import {Link} from "react-router-dom"
import ProductImg from '../../assets/product.jpg'

const Product = () => {
  return (
    <div>
      <main className=' bg-white pt-15 pb-9 flex lg:flex-row mat-50 justify-center items-start w-full sm:flex-col'>
        <div className='pl-3 pr-5 bg-white w-[25%]'>
            <div className='p-[30px] mb-6 border-[1px] border-[#d7d7d7] rounded-md'>
                <div className='mb-5'>
                    <h3 className='flex justify-start items-center'>
                        <span className='mr-3'><MdFilterList /></span>
                        <span className='text-[18px] font-semibold'>Filter by Categories</span>
                    </h3>
                </div>
                <div>
                    <ul>
                        <li>
                            <div className='mb-4'>
                                <div className='flex justify-between items-center'>
                                    <div className='flex gap-2 items-center'>
                                        <input type="checkbox" />
                                        <label htmlFor="">
                                            <span>Beverage</span>
                                        </label>
                                    </div>
                                    <div>(8)</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className='mb-4'>
                                <div className='flex justify-between items-center'>
                                    <div className='flex gap-2 items-center'>
                                        <input type="checkbox" />
                                        <label htmlFor="">
                                            <span>Beverage</span>
                                        </label>
                                    </div>
                                    <div>(8)</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className='mb-4'>
                                <div className='flex justify-between items-center'>
                                    <div className='flex gap-2 items-center'>
                                        <input type="checkbox" />
                                        <label htmlFor="">
                                            <span>Beverage</span>
                                        </label>
                                    </div>
                                    <div>(8)</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className='mb-4'>
                                <div className='flex justify-between items-center'>
                                    <div className='flex gap-2 items-center'>
                                        <input type="checkbox" />
                                        <label htmlFor="">
                                            <span>Beverage</span>
                                        </label>
                                    </div>
                                    <div>(8)</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className='mb-4'>
                                <div className='flex justify-between items-center'>
                                    <div className='flex gap-2 items-center'>
                                        <input type="checkbox" />
                                        <label htmlFor="">
                                            <span>Beverage</span>
                                        </label>
                                    </div>
                                    <div>(8)</div>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div>+ More</div>
                </div>
            </div>
            
            <div className='p-[30px] mb-6 border-[1px] border-[#d7d7d7] rounded-md'>
                <div className='mb-5'>
                    <h3 className='flex justify-start items-center'>
                        <span className='mr-3'><MdFilterList /></span>
                        <span className='text-[18px] font-semibold'>Filter by Color</span>
                    </h3>
                </div>
                <div>
                    <ul>
                        <li>
                            <div className='mb-4'>
                                <div className='flex justify-between items-center'>
                                    <div className='flex gap-2 items-center'>
                                        <input type="checkbox" />
                                        <label htmlFor="">
                                            <span>Black</span>
                                        </label>
                                    </div>
                                    <div>(1)</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className='mb-4'>
                                <div className='flex justify-between items-center'>
                                    <div className='flex gap-2 items-center'>
                                        <input type="checkbox" />
                                        <label htmlFor="">
                                            <span>Green</span>
                                        </label>
                                    </div>
                                    <div>(2)</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className='mb-4'>
                                <div className='flex justify-between items-center'>
                                    <div className='flex gap-2 items-center'>
                                        <input type="checkbox" />
                                        <label htmlFor="">
                                            <span>Grey</span>
                                        </label>
                                    </div>
                                    <div>(1)</div>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div>+ More</div>
                </div>
            </div>

            <div className='p-[30px] mb-6 border-[1px] border-[#d7d7d7] rounded-md'>
                <div className='mb-5'>
                    <h3 className='flex justify-start items-center'>
                        <span className='mr-3'><MdFilterList /></span>
                        <span className='text-[18px] font-semibold'>Filter by Size</span>
                    </h3>
                </div>
                <div>
                    <ul>
                        <li>
                            <div className='mb-4'>
                                <div className='flex justify-between items-center'>
                                    <div className='flex gap-2 items-center'>
                                        <input type="checkbox" />
                                        <label htmlFor="">
                                            <span>M</span>
                                        </label>
                                    </div>
                                    <div>(2)</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className='mb-4'>
                                <div className='flex justify-between items-center'>
                                    <div className='flex gap-2 items-center'>
                                        <input type="checkbox" />
                                        <label htmlFor="">
                                            <span>S</span>
                                        </label>
                                    </div>
                                    <div>(2)</div>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div>+ More</div>
                </div>
            </div>

            <div className='p-[30px] mb-6 border-[1px] border-[#d7d7d7] rounded-md'>
                <div className='mb-5'>
                    <h3 className='flex justify-start items-center'>
                        <span className='mr-3'><MdFilterList /></span>
                        <span className='text-[18px] font-semibold'>Filter by Weight</span>
                    </h3>
                </div>
                <div>
                    <ul>
                        <li>
                            <div className='mb-4'>
                                <div className='flex justify-between items-center'>
                                    <div className='flex gap-2 items-center'>
                                        <input type="checkbox" />
                                        <label htmlFor="">
                                            <span>100gm</span>
                                        </label>
                                    </div>
                                    <div>(12)</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className='mb-4'>
                                <div className='flex justify-between items-center'>
                                    <div className='flex gap-2 items-center'>
                                        <input type="checkbox" />
                                        <label htmlFor="">
                                            <span>1kg</span>
                                        </label>
                                    </div>
                                    <div>(1)</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className='mb-4'>
                                <div className='flex justify-between items-center'>
                                    <div className='flex gap-2 items-center'>
                                        <input type="checkbox" />
                                        <label htmlFor="">
                                            <span>375ml</span>
                                        </label>
                                    </div>
                                    <div>(7)</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className='mb-4'>
                                <div className='flex justify-between items-center'>
                                    <div className='flex gap-2 items-center'>
                                        <input type="checkbox" />
                                        <label htmlFor="">
                                            <span>500gm</span>
                                        </label>
                                    </div>
                                    <div>(12)</div>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div>+ More</div>
                </div>
            </div>

            <div className='p-[30px] mb-6 border-[1px] border-[#d7d7d7] rounded-md'>
                <div className='mb-5'>
                    <h3 className='flex justify-start items-center'>
                        <span className='mr-3'><MdFilterList /></span>
                        <span className='text-[18px] font-semibold'>Filter by Sale</span>
                    </h3>
                </div>
                <div>
                    <ul>
                        <li>
                            <div className='mb-4'>
                                <div className='flex justify-between items-center'>
                                    <div className='flex gap-2 items-center'>
                                        <input type="checkbox" />
                                        <label htmlFor="">
                                            <span>One Sale</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className='mb-4'>
                                <div className='flex justify-between items-center'>
                                    <div className='flex gap-2 items-center'>
                                        <input type="checkbox" />
                                        <label htmlFor="">
                                            <span>Regular</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div>+ More</div>
                </div>
            </div>

            <div className='p-[30px] mb-6 border-[1px] border-[#d7d7d7] rounded-md'>
                <div className='mb-5'>
                    <h3 className='flex justify-start items-center'>
                        <span className='mr-3'><MdFilterList /></span>
                        <span className='text-[18px] font-semibold'>Filter by Rating</span>
                    </h3>
                </div>
                <div>
                    <ul>
                        <li>
                            <div className='mb-4'>
                                <div className='flex justify-between items-center'>
                                    <div className='flex gap-2 items-center'>
                                        <input type="checkbox" />
                                        <label htmlFor="">
                                            <div className='flex '>
                                                <span className='text-yellow-500'><IoMdStar /></span>
                                                <span className='text-yellow-500'><IoMdStar /></span>
                                                <span className='text-yellow-500'><IoMdStar /></span>
                                                <span className='text-yellow-500'><IoMdStar /></span>
                                                <span className='text-yellow-500'><IoMdStar /></span>
                                            </div>
                                        </label>
                                    </div>
                                    <div>(8)</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className='mb-4'>
                                <div className='flex justify-between items-center'>
                                    <div className='flex gap-2 items-center'>
                                        <input type="checkbox" />
                                        <label htmlFor="">
                                            <div className='flex '>
                                                <span className='text-yellow-500'><IoMdStar /></span>
                                                <span className='text-yellow-500'><IoMdStar /></span>
                                                <span className='text-yellow-500'><IoMdStar /></span>
                                                <span className='text-yellow-500'><IoMdStar /></span>
                                                <span className='text-[#d7d7d7]'><IoMdStar /></span>
                                            </div>
                                        </label>
                                    </div>
                                    <div>(8)</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className='mb-4'>
                                <div className='flex justify-between items-center'>
                                    <div className='flex gap-2 items-center'>
                                        <input type="checkbox" />
                                        <label htmlFor="">
                                            <div className='flex '>
                                                <span className='text-yellow-500'><IoMdStar /></span>
                                                <span className='text-yellow-500'><IoMdStar /></span>
                                                <span className='text-yellow-500'><IoMdStar /></span>
                                                <span className='text-[#d7d7d7]'><IoMdStar /></span>
                                                <span className='text-[#d7d7d7]'><IoMdStar /></span>
                                            </div>
                                        </label>
                                    </div>
                                    <div>(8)</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className='mb-4'>
                                <div className='flex justify-between items-center'>
                                    <div className='flex gap-2 items-center'>
                                        <input type="checkbox" />
                                        <label htmlFor="">
                                            <div className='flex '>
                                                <span className='text-yellow-500'><IoMdStar /></span>
                                                <span className='text-yellow-500'><IoMdStar /></span>
                                                <span className='text-[#d7d7d7]'><IoMdStar /></span>
                                                <span className='text-[#d7d7d7]'><IoMdStar /></span>
                                                <span className='text-[#d7d7d7]'><IoMdStar /></span>
                                            </div>
                                        </label>
                                    </div>
                                    <div>(8)</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className='mb-4'>
                                <div className='flex justify-between items-center'>
                                    <div className='flex gap-2 items-center'>
                                        <input type="checkbox" />
                                        <label htmlFor="">
                                            <div className='flex '>
                                                <span className='text-yellow-500'><IoMdStar /></span>
                                                <span className='text-[#d7d7d7]'><IoMdStar /></span>
                                                <span className='text-[#d7d7d7]'><IoMdStar /></span>
                                                <span className='text-[#d7d7d7]'><IoMdStar /></span>
                                                <span className='text-[#d7d7d7]'><IoMdStar /></span>
                                            </div>
                                        </label>
                                    </div>
                                    <div>(8)</div>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div>+ More</div>
                </div>
            </div>
        </div>
        <div className='px-3 py-5 w-[75%]'>
            <div className='pb-8'>
                <div className='flex justify-between items-center'>
                    <div className='text-[14px] text-[#626571] font-medium'>Showing 1–<span>16</span> of 54 results</div>
                    <div>
                        <form>
                            <select className='py-[5px] pl-[10px] pr-[24px] border-[1px] border-[#d7d7d7] rounded-md' name="" id="">
                                <option value="menu_order" selected="selected">Default sorting</option>
                                <option value="popularity">Sort by popularity</option>
                                <option value="rating">Sort by average rating</option>
                                <option value="date">Sort by latest</option>
                                <option value="price">Sort by price: low to high</option>
                                <option value="price-desc">Sort by price: high to low</option>
                            </select>
                        </form>
                    </div>
                </div>
            </div>
            <ul className='grid grid-cols-12 gap-[15px]'>
                <li className='lg:col-span-3 md:col-span-4 sm:col-span-6 border-[1px] border-[#d7d7d7] rounded-md'>
                    <div className='pt-4 px-6 pb-6'>
                        <div>
                            <div className='flex justify-between items-center mb-3'>
                                <div className='text-[#d7d7d7] hover:text-[#1b8057]'>
                                    <Link to="">Fresh<span>Fruits</span></Link>
                                </div>
                                <div className='flex justify-center items-center text-[#d7d7d7] gap-2'>
                                    <Link className='hover:text-[#1b8057] text-[23px]' to=""><IoMdHeartEmpty /></Link>
                                    <Link className='hover:text-[#1b8057] text-[23px]' to=""><CiSearch /></Link>
                                    <Link className='hover:text-[#1b8057] text-[23px]' to=""><LuRefreshCw /></Link>
                                </div>
                            </div>
                            <div className='mb-3 product-img' >
                                <Link to="/shop-details">
                                    <img src={ProductImg} alt="" />
                                </Link>
                            </div>
                        </div>
                        <div>
                            <div>
                                <div className='mb-2'>
                                    <div>
                                        {/* <select name="" id="">
                                            <option value="">Choose an option</option>
                                            <option value="">375ml</option>
                                            <option value="">500gm</option>
                                        </select> */}
                                        <div className='flex justify-start items-center text-[#626571] gap-2'>
                                            <div className='rounded-2xl px-[5px] py-[3px] border-[1px] text-[12px] border-[#d7d7d7] hover:border-[#1b8057] cursor-pointer'>
                                                <span className='px-[5px]'>375ml</span>
                                            </div>
                                            <div className='rounded-2xl px-[5px] py-[3px] border-[1px] text-[12px] border-[#d7d7d7] hover:border-[#1b8057] cursor-pointer'>
                                                <span>500gm</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='flex justify-start items-center gap-2'>
                                <div className='text-[17px] font-semibold'>
                                    <span><span>$</span>20.00</span>-
                                    <span><span>$</span>47.00</span>
                                </div>
                                <span className='clip px-[8px] py-[2px] rounded-[4px] font-medium bg-[#e00000] text-white text-[12px]'>-41%</span>
                            </div>
                            <div>
                                <div className='flex justify-start items-center gap-2 mb-[8px]'>
                                    <div className='flex '>
                                        <span className='text-yellow-500'><IoMdStar /></span>
                                        <span className='text-yellow-500'><IoMdStar /></span>
                                        <span className='text-yellow-500'><IoMdStar /></span>
                                        <span className='text-yellow-500'><IoMdStar /></span>
                                        <span className='text-yellow-500'><IoMdStar /></span>
                                    </div>
                                    <span className='text-[#626571]'>(5.00)</span>
                                </div>
                            </div>
                            <div>
                                <h3 className='mb-[12px] hover:text-[#1b8057] cursor-pointer'>
                                    <Link to="">100% Premium Quality Garden Fresh Mango</Link>
                                </h3>
                            </div>
                        </div>
                        <div>
                            <div className='px-[18px] py-[15px] text-[14px] font-medium text-[#1b8057] bg-[#f3f9f9] rounded-[50px] flex justify-center items-center hover:text-white hover:bg-[#1b8057]'>
                                <Link to="">Select options</Link>
                            </div>
                        </div>
                    </div>
                </li>
                <li className='lg:col-span-3 md:col-span-4 sm:col-span-6 border-[1px] border-[#d7d7d7] rounded-md'>
                    <div className='pt-4 px-6 pb-6'>
                        <div>
                            <div className='flex justify-between items-center mb-3'>
                                <div className='text-[#d7d7d7] hover:text-[#1b8057]'>
                                    <Link to="">Fresh<span>Fruits</span></Link>
                                </div>
                                <div className='flex justify-center items-center text-[#d7d7d7] gap-2'>
                                    <Link className='hover:text-[#1b8057] text-[23px]' to=""><IoMdHeartEmpty /></Link>
                                    <Link className='hover:text-[#1b8057] text-[23px]' to=""><CiSearch /></Link>
                                    <Link className='hover:text-[#1b8057] text-[23px]' to=""><LuRefreshCw /></Link>
                                </div>
                            </div>
                            <div className='mb-3 product-img' >
                                <Link to="/shop-details">
                                    <img src={ProductImg} alt="" />
                                </Link>
                            </div>
                        </div>
                        <div>
                            <div>
                                <div className='mb-2'>
                                    <div>
                                        {/* <select name="" id="">
                                            <option value="">Choose an option</option>
                                            <option value="">375ml</option>
                                            <option value="">500gm</option>
                                        </select> */}
                                        <div className='flex justify-start items-center text-[#626571] gap-2'>
                                            <div className='rounded-2xl px-[5px] py-[3px] border-[1px] text-[12px] border-[#d7d7d7] hover:border-[#1b8057] cursor-pointer'>
                                                <span className='px-[5px]'>375ml</span>
                                            </div>
                                            <div className='rounded-2xl px-[5px] py-[3px] border-[1px] text-[12px] border-[#d7d7d7] hover:border-[#1b8057] cursor-pointer'>
                                                <span>500gm</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='flex justify-start items-center gap-2'>
                                <div className='text-[17px] font-semibold'>
                                    <span><span>$</span>20.00</span>-
                                    <span><span>$</span>47.00</span>
                                </div>
                                <span className='clip px-[8px] py-[2px] rounded-[4px] font-medium bg-[#e00000] text-white text-[12px]'>-41%</span>
                            </div>
                            <div>
                                <div className='flex justify-start items-center gap-2 mb-[8px]'>
                                    <div className='flex '>
                                        <span className='text-yellow-500'><IoMdStar /></span>
                                        <span className='text-yellow-500'><IoMdStar /></span>
                                        <span className='text-yellow-500'><IoMdStar /></span>
                                        <span className='text-yellow-500'><IoMdStar /></span>
                                        <span className='text-yellow-500'><IoMdStar /></span>
                                    </div>
                                    <span className='text-[#626571]'>(5.00)</span>
                                </div>
                            </div>
                            <div>
                                <h3 className='mb-[12px] hover:text-[#1b8057] cursor-pointer'>
                                    <Link to="">100% Premium Quality Garden Fresh Mango</Link>
                                </h3>
                            </div>
                        </div>
                        <div>
                            <div className='px-[18px] py-[15px] text-[14px] font-medium text-[#1b8057] bg-[#f3f9f9] rounded-[50px] flex justify-center items-center hover:text-white hover:bg-[#1b8057]'>
                                <Link to="">Select options</Link>
                            </div>
                        </div>
                    </div>
                </li>

                
            </ul>
            <div></div>
        </div>
      </main>
    </div>
  )
}

export default Product;


