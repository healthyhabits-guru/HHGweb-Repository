import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal } from 'react-responsive-modal';
import { selectModalOpenStatus } from '../../reduxModules/hhgSelectors';
import { updateModalOpenStatus } from '../../reduxModules/hhgSlice';
import ResponsiveVideo from '../responsiveVideo/responsiveVideo';

import 'react-responsive-modal/styles.css';
import './modalComp.css';

const ModalComp = () => {
    const modalOpenStatus = useSelector(selectModalOpenStatus);
    const dispatch = useDispatch();

    const onCloseModal = () => {
        dispatch(updateModalOpenStatus(false));
    };

    return (
        <div>
            <Modal open={modalOpenStatus} onClose={onCloseModal} center>
               
                <div className="modal-content">
                    <ResponsiveVideo />
                    <button onClick={onCloseModal}>Watch Now</button>
                </div>
            </Modal>
        </div>
    );
};

export default ModalComp;
