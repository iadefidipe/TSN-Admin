import Link from 'next/link';
import PropTypes from 'prop-types';

export const SubmitButton = ({ btnText, handleClick, pText, linkText, linkHref }) => {
  return (
    <>
      <button
        className="w-full my-4 text-lg transition-opacity duration-300 rounded-lg btn_submit karla-eb hover:opacity-75 xl:my-7"
        onClick={handleClick}
      >{ btnText }</button>
      { pText && <p className="text-center outfit-l">{ pText } <Link href={ linkHref }><a className="transition-opacity duration-300 btn_submit-link-text outfit-b hover:opacity-75">{ linkText }</a></Link></p> }
    </>
  )
}

