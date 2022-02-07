import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';


const Contact = () => {
  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('servicecon30', 'tempcon30', e.target, 'user_kcAzEkhO8nHHiO74ownKr')
      .then((result) => {
        console.log(result.text);
        Swal.fire({
          icon: 'success',
          title: 'Message Sent Successfully'
        })
      }, (error) => {
        console.log(error.text);
        Swal.fire({
          icon: 'error',
          title: 'Ooops, something went wrong',
          text: error.text,
        })
      });
    e.target.reset()
  };
  return (
    <section className="contact" id="contact">
      <div className="contact_content_wrapper">
        <div className="contact_form">
          <div className="contact_form_title">
            <h2>Contact</h2>
            <p>
              Connect with me via email: {" "}
              <span></span>
            </p>
          </div>

          <form className="form" onSubmit={handleOnSubmit}>
            <div className="single_field">
              <input id='form-input-control-last-name' type="text" placeholder="Your Name" name="name" required />
            </div>
            <div className="single_field">
              <input id='form-input-control-email' type="email" placeholder="Your Email" name="email" required />
            </div>
            <div className="single_field">
              <input id='form-input-control-subject' type="text" placeholder="Subject" name="subject" />
            </div>
            <div className="single_field">
              <textarea id='form-textarea-control-opinion'name="message" placeholder="Your Message" rows="4"></textarea>
            </div>
            <div className="submit_button">
              <button type="submit">Send Message</button>
            </div>
          </form>
        </div>

        {/* <div className="contact_img">
          <img src={ContactImg} alt="contact me portfolio image" />
        </div> */}
      </div>
    </section>
  );
};

export default Contact;
