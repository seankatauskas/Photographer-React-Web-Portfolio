import React from 'react'
import './Mailer.css'

function Mailer() {
  return (
    <div className='containerborder'>
    <h1 className='contactheader'>Contact</h1>
    <h5>Image Syndication: <a href='https://www.eyevine.com/' target='_blank' className='eyevine'>Eyevine</a> +44 (0)20 8709 8709</h5>
    <h5>jonathan@jonathanroot.co.uk</h5>
    <h5>tel: +44 (0)20 7485 5522</h5>
    <h5>mobile: +44 (0)7768 292666</h5>

    <form className='contactform'>
        <label>Name</label>
        <input type="text" name="name" placeholder='Name' />

        <label>Email</label>
        <input type="email" name="email" placeholder='Your Email' />

        <label>Message</label>
        <textarea className='messagebox' name="message" rows='4 ' placeholder='Please detail your inquiry.' />
        <input className='inputbutton' type='submit' value='Submit'  />

    </form>
    
    </div>
  )
}

export default Mailer