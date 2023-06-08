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
margin-right: 10px;

@media screen and (min-width: 768px) {
  margin-right: 20px;
};
`;

export const ModalWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
`;

export const CloseModalBtn = styled.button`
position: absolute;
justify-content: center;
align-items: center;
width: 25px;
height: 25px;
border-radius: 50%;
border: none;
background-color: ${p => p.theme.colors.accent};
top: 10px;
right: 10px;
cursor: pointer;
`;

export const Total = styled.p`
font-size: ${p => p.theme.fontSizes.secondaryTextSize};
margin-top: 0px;
margin-bottom: 0px;

@media screen and (min-width: 768px) {
font-size: ${p => p.theme.fontSizes.subTitleSize};

}
`