import { useState } from 'react';

export default function ContactForm() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Brewing your message....");
    const formData = new FormData(event.target);
    formData.append("access_key", "e37e7dd2-0ac1-489a-9820-e8c6a5d831be");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    if (data.success) {
      setResult("Message sent! We'll get back to you soon.");
      event.target.reset();
    } else {
      setResult("Oops! Something went wrong.");
    }
  };

  // Styles based on your palette
  const styles = {
    container: {
      backgroundColor: '#F5F1E8', // cream
      padding: '40px',
      borderRadius: '12px',
      maxWidth: '450px',
      margin: '20px auto',
      boxShadow: '0 10px 25px rgba(44, 24, 16, 0.15)',
      fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif'
    },
    header: {
      color: '#2C1810', // espresso
      textAlign: 'center',
      marginBottom: '20px',
      fontSize: '24px'
    },
    input: {
      width: '100%',
      padding: '12px',
      marginBottom: '15px',
      border: '1px solid #D4A574', // latte
      borderRadius: '6px',
      backgroundColor: '#FFF',
      boxSizing: 'border-box',
      fontSize: '16px',
      outlineColor: '#C17C4A' // accent
    },
    textarea: {
      width: '100%',
      padding: '12px',
      marginBottom: '15px',
      border: '1px solid #D4A574',
      borderRadius: '6px',
      minHeight: '120px',
      boxSizing: 'border-box',
      fontSize: '16px',
      outlineColor: '#C17C4A'
    },
    button: {
      width: '100%',
      padding: '14px',
      backgroundColor: '#4A3428', // coffee-dark
      color: '#F5F1E8', // cream
      border: 'none',
      borderRadius: '6px',
      fontSize: '18px',
      fontWeight: 'bold',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease'
    },
    status: {
      display: 'block',
      marginTop: '15px',
      textAlign: 'center',
      color: '#C17C4A', // accent
      fontSize: '14px',
      fontWeight: '500'
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Get in Touch</h2>
      <form onSubmit={onSubmit}>
        <input 
          type="text" 
          name="name" 
          placeholder="Your Name" 
          style={styles.input} 
          required 
        />
        <input 
          type="email" 
          name="email" 
          placeholder="Your Email" 
          style={styles.input} 
          required 
        />
        <textarea 
          name="message" 
          placeholder="How can we help?" 
          style={styles.textarea} 
          required
        ></textarea>
        <button 
          type="submit" 
          style={styles.button}
          onMouseOver={(e) => e.target.style.backgroundColor = '#2C1810'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#4A3428'}
        >
          Send Message
        </button>
        <span style={styles.status}>{result}</span>
      </form>
    </div>
  );
}