import React from 'react'
import Carousel from 'react-bootstrap/Carousel';



function Carouselle() {
  return (
    <div style={{marginLeft:"5%"}} >
      <Carousel>
    <Carousel.Item interval={1000}>
     <img style={{width:"95%"}} src="https://scontent.ftun1-2.fna.fbcdn.net/v/t39.30808-6/467158700_18100998637460132_6866097790828163441_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=IiFEKvAfvAoQ7kNvgEynSJo&_nc_zt=23&_nc_ht=scontent.ftun1-2.fna&_nc_gid=AfwhjA-G77I9-UOPQln5Lrm&oh=00_AYBGAOA10C9XeDmpjyio6jBOgffcoJijv0gZovd6GoIY1g&oe=6772F186" alt="" />
      <Carousel.Caption>
        <h2 style={{marginBottom:"600px",fontFamily:"monospace"
        }}>Nos <br /> Best-sellers</h2>
        
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={1000}>
    <img style={{width:"95%"}} src="https://scontent.ftun1-2.fna.fbcdn.net/v/t39.30808-6/466469446_18100997581460132_2328237516723038903_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=_lxVNn26ku4Q7kNvgHkBTL_&_nc_zt=23&_nc_ht=scontent.ftun1-2.fna&_nc_gid=AHFLWbfjTqhqEOBFSN9_AQm&oh=00_AYAPKgaMjUv0jzXj8LkMQgn8UKYB_jhMce2os9hCfm6iew&oe=6772F37C" alt="" />
      <Carousel.Caption>
        <h2 style={{marginBottom:"600px",fontFamily:"monospace"
        }}>Nos <br /> Best-sellers</h2>
        
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img style={{width:"95%"}} src="https://scontent.ftun1-2.fna.fbcdn.net/v/t39.30808-6/466980101_18100998436460132_6865192666186665271_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=XxeAuv9O9roQ7kNvgE855sL&_nc_zt=23&_nc_ht=scontent.ftun1-2.fna&_nc_gid=A37wvKo14DizVUM-Cxh57LK&oh=00_AYAoXqprjjaVqvqEqKUyB5zSvE5ffOBisJN2AmqNxUb-Fg&oe=6773141C" alt="" />
      <Carousel.Caption>
        <h2 style={{marginBottom:"600px",fontFamily:"monospace"
        }}>Nos <br /> Best-sellers</h2>
       
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel></div>
  )
}

export default Carouselle