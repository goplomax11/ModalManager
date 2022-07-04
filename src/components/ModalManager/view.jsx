import React, { useState } from 'react';
import closeIcon from '../../static/close-icon.png';
import { modals } from './config';
import './styles.sass';

export const View = ({active, setActive}) => {
    const [modalNumber, setModalNumber]= useState(0);

    const modal = modals[modalNumber]

    const isNextArrowVisible = modals.length - modalNumber -1;

    const openNewModal = () => {
        setModalNumber(modalNumber + 1)
    }

    return (
        <div className={active ? 'modal active' : 'modal'}>
            <div className='modal__content'>
                <>
                    <img className='close-icon' src={closeIcon} onClick={() => {setActive(false); setModalNumber(0)}}
                    alt='close-icon' width={24} height={24} />
                    <div className={isNextArrowVisible ? 'next-arrow' : 'next-arrow hidden'} onClick={openNewModal}>
                        next
                    </div>
                    {modal}
                </>
            </div>
        </div>
    )
}
