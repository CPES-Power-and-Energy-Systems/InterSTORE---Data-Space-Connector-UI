import React from 'react';
import {useTranslation} from 'react-i18next';
import {DateTime} from 'luxon';
import packageJSON from '../../../../package.json';

const Footer = () => {
  const [t] = useTranslation();
const EngineeringLogo =  "./img/ENG24-LOGO-FULL-DARK.png";
  return (
    <footer className="main-footer" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}> 
      <strong>
        <span> {DateTime.now().toFormat('y')} </span>
      
      </strong> 
     <img src={EngineeringLogo} alt="Logo" style={{width: '70px'}} />
      
     
      <div className="float-right d-none d-sm-inline-block">
        
        <b>{t<string>('footer.version')}</b>
        <span>&nbsp;{packageJSON.version}</span>
      </div>
    </footer>
  );
};

export default Footer;