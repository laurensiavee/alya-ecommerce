import '@radix-ui/themes/styles.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PromotionCarousel from "./component/PromotionCarousel";
import ProductList from "./component/ProductList";
export default function Home() {
  return (
    <div>
      <PromotionCarousel/>
      <ProductList />
    </div> 
  );
}
