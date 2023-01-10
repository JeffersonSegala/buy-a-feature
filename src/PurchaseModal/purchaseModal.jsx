import './style.css';
import { Box, InputAdornment, TextField, Typography } from '@mui/material';
import Modal from '@mui/material/Modal';
import { useEffect, useState } from 'react';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';

const PurchaseModal = ({ open, handleClose, handleBuy, handleInvest, feature }) => {
  const [sendValue, setSendValue] = useState(feature.price);
  const [purchaseModeBuy, setPurchaseModeBuy] = useState(true);

  useEffect(() => {
    setSendValue(feature.price)
  }, [feature]);

  const handleChangeSendValue = (e) => {
    setSendValue(e.target.value)
  }

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 450,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
  };

  return (
    <>
    <Modal
      open={open}
      onClose={handleClose} >
      <Box sx={style}>
        <div>
          <Typography variant="h6" component="h2" className='purchase-header-container' >
            <div>{feature.title}</div>
            <CloseOutlinedIcon onClick={handleClose} style={{ cursor: 'pointer' }} />
          </Typography>
        </div>
        <br/>
        <div className='purchase-mode-container' >
          <div onClick={() => {
            setPurchaseModeBuy(true)
            setSendValue(feature.price)
          }} className={purchaseModeBuy ? 'purchase-mode-button purchase-mode-button__active' : 'purchase-mode-button'} >
            Comprar o produto
          </div>
          <div onClick={() => setPurchaseModeBuy(false)} className={!purchaseModeBuy ? 'purchase-mode-button purchase-mode-button__active' : 'purchase-mode-button'} >
            Investir uma cota
          </div>
        </div>
        <br/>
        <div>
          {purchaseModeBuy ? 
          <TextField 
            type="number" 
            label="Valor do investimento" 
            variant="standard"
            value={feature.price} 
            disabled={true}
            className='purchase-value'
            helperText={'O valor do investimento é o valor total da Feature'}
            InputProps={{
              startAdornment: <InputAdornment position="start">$</InputAdornment>,
            }}
            onChange={handleChangeSendValue}
            key='featureBuyValue' />
            :
          <TextField 
            type="number" 
            label="Valor do investimento" 
            variant="standard"
            defaultValue={sendValue} 
            className='purchase-value'
            helperText={'Informe o valor a ser investido'}
            InputProps={{
              startAdornment: <InputAdornment position="start">$</InputAdornment>,
            }}
            onChange={handleChangeSendValue} 
            key='featureInvestValue' />
          }
        </div>
        <br/>
        <br/>
        <div className='purchase-button-container'>
          <div onClick={purchaseModeBuy ? handleBuy : handleInvest} className='purchase-button' >
            <CheckOutlinedIcon />{purchaseModeBuy ? 'Comprar' : 'Investir'}
          </div> 
        </div>
      </Box>
    </Modal>
    </>
  );
}

export default PurchaseModal;
