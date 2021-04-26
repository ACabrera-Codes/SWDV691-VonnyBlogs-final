import React from "react";

function Home() {
  return (
    <div className="about">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="https://media.giphy.com/media/26uflx833zUfLpSP6/giphy.gif"
              alt=""
            />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">Welcome! ♥</h1>
            <p>
            My name is Avontece, and I will be using this blog to highlight 
            the voices and topics that I find interesting and important. Please feel free to 
            check out the contact page to reach me or the submissions page to submit your own blog posts!
            </p>
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;