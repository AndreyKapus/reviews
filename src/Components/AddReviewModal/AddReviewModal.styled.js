import styled from '@emotion/styled'

export const customStyles = {
    content: {
      width: 'auto',
      height: 'auto',
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

export const OpenModalBtn = styled.button`
width: 40px;
height: 40px;
border-radius: 50%;
border: none;
background-color: ${p => p.theme.colors.accent};
padding: 10px;
`;

export const ModalWrapper = styled.div`

`;

