import { useState, useRef } from 'react';
import Image from 'next/image';

export const NavbarInput = () => {
  const [search, setSearch] = useState('');
  const refInput = useRef(null);

  const handleFocusInput = () => {
    refInput.current.focus();
  }

  return (
    <div className="relative w-full lg:max-w-[360px] overflow-hidden order-2 lg:order-1">
      <div
        className="absolute left-6 top-1/2 -translate-y-1/2"
        onClick={handleFocusInput}
      >
        <Image
          src={`${process.env.deploymentPath}/icons/profile/search_icon.svg`}
          alt="Search Icon"
          width={24}
          height={24}
        />
      </div>
      <input
        type="text"
        placeholder="Search"
        className="w-full outline-none pl-14 pr-5 h-[54px] bg-[#F4F4F4] lg:rounded-lg outfit-l text-sm"
        value={ search }
        onChange={ (e) => setSearch(e.target.value) }
        ref={ refInput }
      />
    </div>
  )
}
