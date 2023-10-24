import { MdArrowForwardIos } from 'react-icons/md'

const NavigationArrow = ({ direction }) => {
  const clickHandler = () => (direction === 'left') ? window.history.back() : window.history.forward()
  return (
    <button className={'ms-4 btn h-fit' + (direction === 'left' ? ' rotate-180' : '')} onClick={clickHandler}><MdArrowForwardIos fill='#fff'/></button>
  )
}

export default NavigationArrow
