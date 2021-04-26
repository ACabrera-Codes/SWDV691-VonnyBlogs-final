import React from "react";

function Contact() {
  return (
    <div className="contact">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">          
          {/* <form className="my-form" action="" method="post">
            <div className="field">
              <label for="name">Name</label>
              <input type="text" name="name" id="name" required />
            </div>
            <div className="field">
              <label for="email">Email</label>
              <input type="email" name="email" id="email" required />
            </div>
            <div className="field">
              <label for="name">Message</label>
              <textarea rows="5" name="msg" id="msg" required />
            </div>
            <button>
              Send
            </button>
            
          </form> */}
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">Let's Talk!</h1>
            <p>
            If you have any blog suggestions, questions, or just generally would like to chat, then fill out the form and I’ll get back to you. ♥
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
