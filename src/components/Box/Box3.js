import React, { useState } from 'react';
import { motion } from "framer-motion"
const Box3 = () => {

    // const boxVariant = {
    //     lion: {
    //         x: 100,
    //         scale: 1.5,
    //         backgroundColor: "yellow"
    //     },
    //     elephant: {
    //         x: 1000,
    //         scale: 0.3,
    //         backgroundColor: "green"
    //     }
    // }
    const boxVariant = {
        hidden: {
            x: "-100vw"
        },
        visible: {
            x: 0,
            transition: {
                delay: 0.5,
                when: "beforeChildren"
            }
        }
    }

    const listVariant = {
        hidden: {
            x: -10,
            opacity: 0
        },
        visible: {
            x: 0,
            opacity: 1,
            staggerChildren: 0.2
        }
    }

    return (
        <div className='box-container'>

            <motion.div
                className='box'
                variants={boxVariant}
                animate="visible"
                initial="hidden"
            // variants={boxVariant}
            // initial="lion"
            // animate="elephant"
            >
                {[1, 2, 3].map(box => {
                    return (<motion.li className='boxItem'
                        variants={listVariant}
                        animate="visible"
                        initial="hidden">

                    </motion.li>)
                })}
            </motion.div>


        </div>
    );
};

export default Box3;