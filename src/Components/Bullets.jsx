import { useRef, useEffect } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';


const Bullets = ({children, delay}) => {
    const ref = useRef(null);
    const isInview = useInView(ref, { once: true });
    const controls = useAnimation();

    useEffect(() => {
        if (isInview) {
          controls.start("visible");
        }
      }, [isInview]);
  return (
    <motion.div 
        ref={ref}
        variants={{
        hidden: { opacity: 0, translateX: 90 },
        visible: { opacity: 1, translateX: 0 },
        }}
        transition={{
        type: "spring",
        duration: 0.2,
        damping: 8,
        delay: delay,
        stiffness: 100,
      }}
        initial="hidden"
        whileInView="visible"
        animate={controls}
        className='w-full'
    >
    {children}
    </motion.div>

    
  )
}

export default Bullets;