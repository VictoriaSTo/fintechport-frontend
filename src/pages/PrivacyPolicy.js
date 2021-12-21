import Wrapper from '../components/UI/WrapperNoColor';
import classes from './PrivacyPolicy.module.css';

// import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const PrivacyPolicy = () => {
  return (
    <Wrapper>
      <div className={classes.policy}>
        <h1 className={classes["policy__title"]}>Privacy Policy</h1>
        <h3 className={classes["policy__subtitle"]}>Copyright Statement</h3>
        <p>The materials on this website are protected by copyrights, trademarks, service marks, patents, trade-secrets, or other proprietary rights and laws. The materials provided by the Fintechport on this site are for your internal information purposes only. Therefore, unless otherwise authorized by the Fintechport, you agree not to sell, license, rent, modify, publish, edit, or create derivative works from such materials or content.</p>
        <h3 className={classes["policy__subtitle"]}>Limitation of Liability</h3>
        <p>UNDER NO CIRCUMSTANCES SHALL THE FINTECHPORT, ITS SUBSIDIARIES, AND RELATED COMPANIES BE LIABLE FOR ANY DIRECT, INDIRECT, PUNITIVE, INCIDENTAL, SPECIAL, OR CONSEQUENTIAL DAMAGES THAT MAY RESULT FROM THE USE OF, OR INABILITY TO USE THIS WEBSITE, INCLUDING, BUT NOT LIMITED TO, ANY LOST PROFITS, BUSINESS INTERRUPTION, OR LOSS OF YOUR PRODUCTS EVEN IF THE FINTECHPORT IS EXPRESSLY ADVISED ABOUT THE POSSIBILITY OF SUCH DAMAGES.</p>
        <h3 className={classes["policy__subtitle"]}>Privacy of Information Collected</h3>
        <p>The Innovation Institute intends to use personally identifiable information collected through our website for the purpose of responding to your inquiries or supplying you with requested information on the Fintechport’s products and services.</p>
      </div>
    </Wrapper>
  )
};

export default PrivacyPolicy;