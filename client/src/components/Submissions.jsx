import React from "react";
import emailjs from "emailjs-com";

function Submissions() {
  function sendEmail(e) {
    e.preventDefault();

emailjs.sendForm('gmail', 'template_i7b5yp2', e.target, 'user_Q1UGg9weXPWkwQAm0Vqvi')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    e.target.reset()
}
  return (
    <div className="submissions">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
          <form onSubmit={sendEmail}>
                    <div className="row pt-5 mx-auto">
                        <div className="col-8 form-group mx-auto">
                            <input type="text" className="form-control" placeholder="Name" name="name"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="email" className="form-control" placeholder="Email Address" name="email"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="text" className="form-control" placeholder="Your blog post title" name="subject"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your Content" name="message"></textarea>
                        </div>
                        <div className="col-8 pt-3 mx-auto">
                            <input type="submit" className="btn btn-info" value="Send submission"></input>
                        </div>
                    </div>
                </form>
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">Submissions FAQ ✨</h1>
            <li>
            Content can be fiction and non-fiction. We will publish short stories or poetry, just make sure to state that it is fiction/non-fiction.
            </li>
            <li>
            Content must be family-friendly. We reserve the right to reject content deemed offensive or inappropriate.
            </li> 
            <li>
            Personal information, such as last names, email addresses, and personal websites are not permitted with in the blog content.
            </li>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Submissions;