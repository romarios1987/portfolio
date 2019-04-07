import React, {Component} from 'react';
import Zoom from 'react-reveal/Zoom';
import Flip from 'react-reveal/Flip';

class Home extends Component {


  render() {

    const bgHome = {
      backgroundImage: `url(./img/beach-clouds-dawn-391522.jpg)`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      height: '100vh',
      backgroundRepeat: 'no-repeat'
    };

    return (
          <div className="home-page" style={bgHome}>

            <header className="App-header">
              <Zoom>
                <h3 className="text-center">Hi! My name is Roman. I'm...</h3>
              </Zoom>


              <Flip top delay={1500}>
                <h1 className="text-center ">Full stack developer</h1>
              </Flip>
            </header>

          </div>
    );
  }
}

export default Home;