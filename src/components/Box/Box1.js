import React, { useState } from 'react';
import { motion } from "framer-motion"

const Box1 = () => {

    const [isAnimating, setIsAnimating] = useState(false);

    return (
        <div className='box-container'>

            <motion.div
                className='box'
                style={{ opacity: 0.2 }}
                animate={{
                    x: isAnimating ? 1000 : 0,
                    opacity: isAnimating ? 1 : 0.5,
                    // backgroundColor: "blue",
                    // scale: 2
                    rotate: isAnimating ? 360 : 0
                }}
                initial={{
                    opacity: 0.1
                }}
                transition={{
                    // type: "tween",
                    type: "spring",
                    // duration: 2
                    stiffness: 60,
                    damping: 75
                }}
                onClick={() => setIsAnimating(!isAnimating)}
            >

            </motion.div>


        </div>
    );
};

export default Box1;