import Button from './components/Button';
import { GoBell , GoDownload , GoDatabase} from 'react-icons/go';


function Buttons() {
 
  return (
    <div>
      <div>
        <Button
          secondary
          
          rounded
        >
          <GoBell />
          Click me!!
        </Button>
      </div>
      <div>
        <Button danger  >
          <GoDownload />
          Buy Now!
        </Button>
      </div>
      <div>
        <Button warning >
          <GoDatabase />
          See Deal!
        </Button>
      </div>
      <div>
        <Button secondary >
          Hide Ads!
        </Button>
      </div>
      <div>
        <Button primary rounded>
          Something!
        </Button>
      </div>
    </div>




  );
}

export default Buttons;
