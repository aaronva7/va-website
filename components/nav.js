import React, {useEffect, useState} from 'react'
import Link from 'next/link'
import { Navbar, Nav } from 'react-bootstrap'
import './nav.css'

const links = [
  { href: '/', label: 'Home' },
  { href: '../products/fix', label: 'FIX' },
  { href: '../products/wrapped', label: 'FIX + Wrapped' },
  { href: '/about', label: 'About us' },
  { href: '/contact', label: 'Contact us' },
  { href: '/blog', label: 'Blog' },
  { href: 'https://fix.virtualagent.com.au/login', label: 'Sign in' }   
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})


// useEffect(() => {
//   var prevScrollpos = window.pageYOffset;
//   window.onscroll = function() {
//     var currentScrollPos = window.pageYOffset;
//     if(prevScrollpos > currentScrollPos) {
//       document.getElementById('vaNav').classList.add('active');
//     } else {
//       document.getElementById('vaNav').classList.remove('active');
//     }
//   }
// })


class Navigation extends React.Component {
  state = {
    isTop: true,
  };
  componentDidMount() {
    document.addEventListener('scroll', () => {
      const isTop = window.scrollY < 100;
      if (isTop !== this.state.isTop) {
        this.setState({ isTop })
      }
    });  
  }
  componentWillUnmount() {
    document.addEventListener('scroll', () => {
      const isTop = window.scrollY < 100;
      if (isTop !== this.state.isTop) {
        this.setState({ isTop })
      }
    });  
  }
  render() {
    return(
      <Navbar expand='lg' id='vaNav' className={this.state.isTop ? 'va-nav-static' : 'va-nav-static active'}>
      <Navbar.Brand href="/">
        <img src="/b-virtual-agent-logo.png" width="75" title="Virtual Agent" alt="Virtual Agent" />  
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="navigation-items ml-auto">
          {links.map(({key, href, label}) => (
            <Nav.Link key={key} href={href}>{label} <div className='underline'></div></Nav.Link>
          ))}
          <a href="/contact" className={this.state.isTop ? 'btn btn-outline-white btn-big f-light smooth-animation' : 'btn btn-outline-white btn-big f-light smooth-animation btn-outline-dark'}>Enquire Now</a>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    )
  }

}
export default Navigation