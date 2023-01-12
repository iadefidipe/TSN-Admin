import PropTypes from 'prop-types';

export const SectionTitle = ({ heading, description }) => {
  return (
    <div>
      <h2 className="text-[#2D2D2D] karla-b text-4xl lg:text-[42px] text-center mb-3 lg:mb-[18px]">{ heading }</h2>
      { description && <p className="text-[#75706A] text-sm lg:text-lg text-center max-w-lg mx-auto">{ description }</p> }
    </div>
  )
}

