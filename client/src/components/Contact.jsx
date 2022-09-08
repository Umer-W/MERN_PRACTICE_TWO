import React from "react";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contactData">
        <div className="contactInfo">
          <h4>Phone No:</h4>
          <p>03161458838</p>
        </div>
        <div className="contactInfo">
          <h4>Email:</h4>
          <p>umerwaqar154@gmail.com</p>
        </div>
        <div className="contactInfo">
          <h4>Address:</h4>
          <p>12-D Gulberg, Lahore</p>
        </div>
      </div>
      <div className="messageData">
        <form action="/">
        <h4 className="contactheading">CONTACT FORM</h4>
          <div className="comment">
            <input className="inp" type="text" placeholder="Enter Name" name="name" />
            <input className="inp" type="email" placeholder="Enter Email" name="email" />
            <input
            className="inp"
              type="number"
              placeholder="Enter Phone Number"
              name="phone"
            />
          </div>
          
          <div>
            <textarea name="comments" className="commentbox" placeholder="Comments"></textarea>
          </div>
          <div>
            <input type="submit" value="Submit" className="submitBtn submit"/>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
