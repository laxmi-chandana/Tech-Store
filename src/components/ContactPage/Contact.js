import React from "react"
import Title from "../Title.js"


export default function Contact (){
    return (
        <section className = "py-5">
            <div className = "row">
                <div className = "col-10 mx-auto col-md-6 my-3">
                    <Title title = "contact us" />
                    <form 
                        className = "mt-5"
                        action="https://formspree.io/alaxmichandana@gmail.com"
                        method="POST"
                    >
                        {/* First */}
                        <div className = "form-group">
                            <input  
                                type = "text"
                                name = "firstName"
                                className = "form-control"
                                placeholder = "Enter you name"
                            />
                        </div>
                        <div className = "form-group">
                            <input  
                                type = "email"
                                name = "email"
                                className = "form-control"
                                placeHolder = "Enter your Email"
                            />
                        </div>
                        <div className = "form-group">
                            <input
                                type = "text"
                                name = "subject"
                                className = "form-control"
                                placeholder = "Enter Subject"
                            />
                        </div>
                        <div className = "form-group">
                            <textarea   
                                name = "message"
                                className = "form-control"
                                placeholder = "Type your Message here"
                            /> 
                        </div>
                        <div className = "form-group mt-3">
                            <input
                                type = "submit"
                                value  = "send"
                                className = "form-control bg-primary text-white"
                            />
                        </div>
                    </form>
                </div>
                

            </div>
        </section>
    )
}