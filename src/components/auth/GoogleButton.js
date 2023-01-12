import Image from 'next/image';
import PropTypes from 'prop-types';

export const GoogleButton = ({ buttonText, handleClick }) => {
  return (
    <button
      className="flex items-center justify-center w-full gap-2 transition-opacity duration-300 rounded-lg btn_google hover:opacity-75"
      onClick={ handleClick }  
    >
      <Image
        src={`${process.env.deploymentPath}/img/google_image.png`}
        height={32}
        width={32}
      />

      <span className="btn_google_text">{ buttonText } with Google</span>
    </button>
  )
}

GoogleButton.propTypes = {
  buttonText: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired
}
