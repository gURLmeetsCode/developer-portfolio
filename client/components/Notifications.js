import React from 'react'
import styled from 'styled-components'
import ee from 'event-emitter'

const Container = styled.div`
    background-color: var(--overlay-color);
    color: #FFF;
    padding: 10px;
    position: absolute;
    top: ${props => props.top}px;
    right: 16px;
    z-index: 999;
    transition: top 0.5s ease;
`;

const emitter = new ee();

export const notify = (msg) => {
  emitter.emit('notification', msg)
}


export default class Notifications extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      top: -100,
      msg: ''
    }

    this.timeout = null

    emitter.on('notification', (msg) => {
      this.onShow(msg)
    })
  }


  onShow = () => {
    if(this.timeout){
      clearTimeout(this.timeout)
      this.setState({
        top: -100
      }, () => {
        this.timeout = setTimeout(() => {
          this.showNotification(msg)
        }, 500)
      })
    }
    else{
      this.showNotification(msg)
    }
  }

  showNotification = (msg) => {
    this.setState({
      top: 10,
      msg
    } , () => {
      this.timeout = setTimeout(() => {
        this.setState({
          top: -100
        })
      }, 10000)
    })
  }

  render(){
    return(
      <Container>
        <p><img className= "success-icon"src="/assets/icons/success.png" alt="success-icon" height="20" width="20"/>Successfully Sent!</p>
      </Container>
    )
  }
}
