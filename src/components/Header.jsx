
import React, { useState, useContext } from 'react';
import { ApiContext } from '../contexts/ApiContext';
import logo from '../assets/logo.png';
import { CiSearch } from "react-icons/ci";
import Notification from '../assets/Notification'
import mask from '../assets/mask.png';
import Drop from '../assets/Drop';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "../../components/ui/dropdown-menu";

const Header = () => {
    const { setSupplier, setSearchTerm } = useContext(ApiContext);
    const [selectedSupplier, setSelectedSupplier] = useState('');
    const [searchTerm, setSearchInput] = useState('');

    const handleSupplierChange = (e) => {
        setSelectedSupplier(e.target.value);
        setSupplier(e.target.value);
    };

    const handleSearchInputChange = (e) => {
        setSearchInput(e.target.value);
        setSearchTerm(e.target.value);
    };

    return (
        <div className='p-6 flex items-center justify-between px-10 bg-white'>
            <div className='flex items-center gap-16'>
                <img src={logo} alt="" className='w-[300px]' />
                <div className='flex items-center gap-3 border p-2 px-5  md:flex w-[264px] h-[42px] rounded-xl'>
                    <CiSearch fontSize={20} />
                    <input
                        type='text'
                        placeholder='Search by products...'
                        value={searchTerm}
                        onChange={handleSearchInputChange}
                        className='outline-none w-full'
                    />
                </div>
            </div>

            <div className='flex gap-5 items-center'>
                <Notification />
                <img src={mask} alt="" className='w-[30px]' />
                <h3>Deko</h3>

                <DropdownMenu className='bg-white z-20'>
                    <DropdownMenuTrigger className='outline-none focus-within:outline-none focus:outline-none'>
                        <button type="button"><Drop /></button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuLabel>Catalog</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem onSelect={() => handleSupplierChange({ target: { value: 'FragranceX' } })}>Fragrance X</DropdownMenuItem>
                        <DropdownMenuItem onSelect={() => handleSupplierChange({ target: { value: 'FragranceNet' } })}>Fragrance Net</DropdownMenuItem>
                        <DropdownMenuItem onSelect={() => handleSupplierChange({ target: { value: 'Morris Costumes' } })}>Morris Costumes</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>
    );
};

export default Header;

