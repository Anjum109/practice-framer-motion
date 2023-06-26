import React from 'react';
import { motion } from 'framer-motion';

const Box3 = () => {
    const boxVariant = {
        hidden: {
            x: '-100vw'
        },
        visible: {
            x: 0,
            transition: {
                delay: 0.5,
                when: 'beforeChildren'
            }
        }
    };

    const listVariant = {
        hidden: {
            x: -10,
            opacity: 0
        },
        visible: {
            x: 0,
            opacity: 1
        }
    };

    return (
        <div className='box-container'>
            <motion.div
                className='box'
                variants={boxVariant}
                animate='visible'
                initial='hidden'
            >
                {[1, 2, 3].map((box, index) => {
                    return (
                        <motion.li
                            className='boxItem'
                            key={box}
                            variants={listVariant}
                            transition={{ delay: index * 0.2 }} // Adjust the delay as needed
                        >
                            {/* Add your content here */}
                        </motion.li>
                    );
                })}
            </motion.div>
        </div>
    );
};

export default Box3;
