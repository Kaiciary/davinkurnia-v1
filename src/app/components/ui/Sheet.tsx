import React from 'react';
import { motion, AnimatePresence } from 'framer-motion'
import { MdClose } from "react-icons/md";
interface SheetProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const Sheet = ({ isOpen, onClose, children }: SheetProps) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className='fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end'
                    initial={{ opacity: 0, x: '100%' }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: '100%' }}
                    transition={{ duration: 0.3 }}
                >
                    <div className='bg-black w-80 h-full shadow-lg p-4 relative'>
                        <button onClick={onClose} className='text-white-500 float-right absolute right-4'>
                            <MdClose size={24} />
                        </button>
                        <div className='h-64 flex items-center justify-center text-center'>
                        <h1 className='h2'>Davin <strong className='text-teal-500'>.</strong></h1>
                        </div>
                        <div className='h-40 flex items-center justify-center text-center flex-col gap-7 capitalize'>
                        {children}
                        </div>
                       
                    </div>
                </motion.div>
            )}
        </AnimatePresence>)
}

export default Sheet