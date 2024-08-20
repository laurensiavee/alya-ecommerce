import Image from "next/image";
import '@radix-ui/themes/styles.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Home() {
  return (
    <main>
      <div>
        <ToastContainer />
        hello!
      </div>
    </main> 
  );
}
