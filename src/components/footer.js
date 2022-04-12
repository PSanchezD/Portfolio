import React from "react"




function Footer(){

    return (
        <div className=" container  butcon">
            <div className="form-row" id="form-c">
                <h1 className=" form-h d-flex justify-content-center">CONTACT ME </h1>
                <form className="form-g" action="https://formsubmit.co/pedrosanchez707@gmail.com" method="POST">
                    <input type="hidden" name="_captcha" value="false"/>
                    <input type="email" name="email" placeholder="Email Address" required/>
                    <input type="text" name="name"  placeholder="Name" required/>
                    <input type="text" name="LastName"  placeholder="Last Name" required/>
                    <textarea type="text" placeholder="Message" name="message" required/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}
export default Footer