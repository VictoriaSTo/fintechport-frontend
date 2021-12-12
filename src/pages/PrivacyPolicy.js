import Wrapper from '../components/UI/WrapperNoColor';
import classes from './PrivacyPolicy.module.css';

// import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const PrivacyPolicy = () => {
  return (
    <Wrapper>
      <div className={classes.policy}>
        <h2 className={classes["policy__title"]}>Privacy Policy</h2>
        <h3 className={classes["policy__subtitle"]}>Data security</h3>
        <p>We are required by the Ordinance to take all reasonable practicable steps to safeguard the security of personal data held by us. Cyberport will strive to protect any personal data held by us against unauthorized access or processing. Our web-servers are hardened, protected behind "firewalls" in order to prevent unauthorized virtual access. Measures have been implemented to protect the web-servers against physical harm or theft. Notwithstanding our obligation to safeguard the security of personal data, we are unable to guarantee complete security of communications through the internet given the open nature of the internet. You will have to assess and accept the relevant risks before sending personal data to us via our web site.</p>
        <h3 className={classes["policy__subtitle"]}>Access to personal data</h3>
        <p>We are required by the Ordinance to take all reasonable practicable steps to safeguard the security of personal data held by us. Cyberport will strive to protect any personal data held by us against unauthorized access or processing. </p>
      </div>
    </Wrapper>
  )
};

export default PrivacyPolicy;