import React from 'react'

const Location = () => {
   return (
      <section className="location" aria-labelledby="Location">
         <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.326734914573!2d90.36142261531057!3d23.8069777845615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c105f81691d5%3A0x4aa9bd97de918f7b!2sSher-E-Bangla%20National%20Cricket%20Stadium!5e0!3m2!1sen!2sin!4v1677142614442!5m2!1sen!2sin"
            width="100%" height="500" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
            style={{ border: 0 }}
         ></iframe>
      </section>
   )
}

export default Location