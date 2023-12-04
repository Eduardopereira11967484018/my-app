// components
import Circles from "../../components/Circles";

// icons
import { BsArrowRight } from "react-icons/bs";

// framer 
import {motion} from 'framer-motion';

// variants
import { fadeIn } from "../../variants";



const Contact = () => {
  return <div className='bg-primary/30'>
    <div className='container mx-auto py-16 text-center xl:text-left flex items-center justify-center h-full'>
      {/*text & form */}
      <div className='flex flex-col w-full max-[650px] sm:w-auto'>
        {/*text*/}
        <motion.h2 
       variants={fadeIn('up',0.2)}
      initial='hidden'
      animate='show'
      exit='hidden'
      className='h2 text-center mb-12'>Entre <span className='text-accent'>Contato.</span>
        </motion.h2>
        {/*form */}

        <motion.form
         variants={fadeIn('up',0.4)}
         initial='hidden'
         animate='show'
         exit='hidden' 
         className='flex-1 flex flex-col gap-6 w-full mx-auto sm:w-auto'>
        {/*input group */}
        <div className='flex gap-x-6 w-full'>
          <input type='text'placeholder='nome' className='input'/>
          <input type='text'placeholder='email' className='input'/>
        </div>
        <input type='text'placeholder='assunto' className='input'/>
        <textarea placeholder='messagem' className='textarea'></textarea>
        <button className='btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group'>
          <span className='group-hover:translate-y-[120%] group-hover:opacity-0 transition-all duration-500'>Fale comigo</span>
          <BsArrowRight className='-trasnlate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]'/>
        </button>
        </motion.form>

      </div>
      </div>  
  </div>;
};

export default Contact;
