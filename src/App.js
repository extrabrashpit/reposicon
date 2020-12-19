import React from 'react';
import emailjs  from 'emailjs-com'
import Swal from 'sweetalert2'
function App() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_0mrs1zm', 'template_9pbh4ue', e.target,'user_Glmobb4KEe4UmVm1DMuHn' )
      .then((
        Swal.fire({
        background: 'transparent url("https://img.freepik.com/free-vector/white-background-with-blue-tech-hexagon_1017-19366.jpg?size=626&ext=jpg")',
        icon:'success',
        color:'#fff',
        title: 'Success',
        showConfirmButton: false,
        timer: 2000
      })) , (error) => {
          console.log(error.text);
      });
  }
  return (
    <div className='container'>
     <form className="contact-form" onSubmit={ sendEmail } >
      <label>Name</label>
      <input type="text" name="name" autoComplete="off" />
      <label>Email</label>
      <input type="email" name="email" autoComplete="off" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
    </div>
  );
}

export default App;
