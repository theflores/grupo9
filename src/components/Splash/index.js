import Page from "../Page"
import logo from './games.svg';

import "./index.css";
const Splash = ()=>{
  return (
    <Page className="page-center">
      <div className="splash_swot">
      playing games
      </div>
      <img src={logo} style={{width:"64px"}}/>
      <div className="splash_swot">
        Loading ...
      </div>
    </Page>
  );
}

export default Splash;
