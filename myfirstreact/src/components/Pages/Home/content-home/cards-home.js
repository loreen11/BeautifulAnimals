import React from 'react';
import ReactDOM from 'react-dom';
import {Card, CardImg, CardBody, CardTitle, CardText, CardDeck, Container } from 'reactstrap';
import CardItem from './carditem.js'
import './cards-home.css'

class HomeCard extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div class= "animal">
      <h2 className="text-center">מסכנים!! כלבים חמודים לאימוץ</h2>
                <div className="card-deck car">
                  {this.props.data.map((item) => {
                     return(
                        <Card className="my-10 p-1" id="card-about">
                        <CardImg  src={process.env.PUBLIC_URL + item.img} alt="Card image cap"></CardImg>
                          <CardBody className= "test stext-dark">
                            <CardTitle tag="h3">{item.title}</CardTitle>
                            <CardText>
                               {item.body}
                            </CardText>
                          </CardBody>
                        </Card>
                            )
                          }
                          )
                    }
                </div>
      </div>
    )
  }
}


export default HomeCard;
