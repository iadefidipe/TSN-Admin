export const handleClickOutside = (ref, setState) => {
    document.addEventListener("mousedown", (e) => {
      const target = e.target
      if (ref.current && !ref.current.contains(target)) {
        setState(false)
      }
    })
  }