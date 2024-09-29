import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchUserPositions } from '../../utils/getUserService';
import copyURL from '../../utils/copyURL';
import OrigamiCanvas from '../../components/three/OrigamiCanvas';
import ToastMessage from './ToastMessage';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import closeIcon from '../../assets/img/close.png';
import shareIcon from '../../assets/img/share.png';

const ModalWrap = styled.div`
  position: absolute;
  top: 0;
  left: 0%;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
`;

const Modal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40vw;
  height: 60vh;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  background-color: #fff;
  padding: 80px;
  border-radius: 50px;
`;

const ModalText = styled.h3`
  width: 300px;
  padding-top: 30px;
  text-align: center;
  color: #343394;
  font-size: 32px;
  font-weight: 900;
`;

const CloseButton = styled.span`
  display: block;
  width: 45px;
  height: 45px;
  position: absolute;
  top: 40px;
  right: 40px;
  padding: 10px;
  background-color: #343394;
  border-radius: 5px;
  cursor: pointer;
  img {
    width: 100%;
    height: auto;
  }
`;

const ShareButton = styled.span`
  display: block;
  width: 45px;
  height: 45px;
  position: absolute;
  bottom: 40px;
  right: 40px;
  padding: 12px;
  background-color: #c2c2c2;
  object-fit: contain;
  border-radius: 999px;
  box-sizing: border-box;
  cursor: pointer;
  img {
    width: 100%;
    height: auto;
  }
`;

const GalleryModal = ({ onClick, data }) => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get('id');
  const [positions, setPositions] = useState([]);
  const [toastMessage, setToastMessage] = useState('');

  const selectedItem = data.find(item => item.id === id);

  useEffect(() => {
    const getUserpositions = async () => {
      setPositions(await fetchUserPositions(id));
    };

    getUserpositions();
  }, [id]);

  const handleCopyURL = async () => {
    const message = await copyURL();
    setToastMessage(message);
  };

  return (
    <div>
      <ModalWrap>
        <Modal>
          <CloseButton onClick={onClick}>
            <img src={closeIcon} alt="닫는버튼" />
          </CloseButton>
          <OrigamiCanvas positions={positions} />
          <ModalText>{selectedItem.nickname}</ModalText>
          <ShareButton onClick={handleCopyURL}>
            <img src={shareIcon} alt="공유버튼" />
          </ShareButton>
        </Modal>
      </ModalWrap>
      {toastMessage && (
        <ToastMessage
          message={toastMessage}
          onClose={() => setToastMessage('')}
        />
      )}
    </div>
  );
};

GalleryModal.propTypes = {
  onClick: PropTypes.func,
  data: PropTypes.array,
};

export default GalleryModal;