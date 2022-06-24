import { useMediaQuery } from 'react-responsive';
const CheckDevice = () => useMediaQuery({ query: '(min-width: 980px)' })
export default CheckDevice; // return true if screen width is greater than 980px