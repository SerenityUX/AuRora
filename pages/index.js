import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useState } from "react";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [successful, setSuccessful] = useState(false);
  const [name, setName] = useState("");

  const [selectedClothes, setSelectedClothes] = useState([]);
  const [zipCode, setZipCode] = useState("");
  const [zipCodeState, setZipCodeState] = useState("");
  const { width, height } = useWindowSize()

  const [phone, setPhone] = useState("");
  var zipcodes = require('zipcodes');

  const handleSubmit = async () => {

    try {
      const response = await fetch('http://api.auroraalert.cc/users/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          user: {
            zip_code: zipCode,
            phone_number: phone,
            first_name: name
          }
        })
      });
      if (!response.ok) {

        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log(data);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <>
      <Head>
        <title>Aurora</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {successful ? (                  <Confetti
                  style={{height: "100vh", width: "100vw"}}
      width={"1000px"}
      height={"1000px"}
    />) : 
                  (null)}
              
              <main style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", height: "100vh", width: "100vw", margin: -8}}>


              
              {!successful ? (
                <div style={{flexDirection: "row"}}>

              <div style={{backgroundColor: "#fff", width: "fit-content", padding: 8, borderRadius: 16, margin: 16}}>

                <div>
                <div style={{width: "100%" }} className='gif' >
                <img style={{width: "100%", borderRadius:"16px"}} src="./vid.gif" alt="" />
              </div>  
                  <h1 style={{margin: 0, fontSize: 36}}>Aurora</h1>
                  <p style={{fontSize: 18, maxWidth: 512}}>Morning mobile notifications to let you know what clothes to wear based on the weather in your zip code</p>


                </div>
          
              <div style={{marginBottom: 16}}>
                <p style={{fontSize: 14, margin: 0}}>First Name</p>
                <input type="first" placeholder="Marsha" value={name} onChange={event => setName(event.target.value)}/>
              </div>
            <div style={{marginBottom: 16}}>
              
              <p style={{fontSize: 14, margin: 0}}>Zipcode</p>
              <input type="zipcode" placeholder="29135" value={zipCode} onChange={event => {
                setZipCode(event.target.value)
                if(zipcodes?.lookup(event.target.value) != undefined) {
                  setZipCodeState(zipcodes?.lookup(event.target.value))
                } else {
                  setZipCodeState(undefined)
                }
                
              }
            }/>
            <p style={{fontSize: 12, margin: 0}}>{zipCodeState?.city}{zipCodeState?.state != undefined ? (",") : ("")} {zipCodeState?.state}</p>
            </div>
            <div>
            <p style={{fontSize: 14, margin: 0}}>Phone Number</p>
              <PhoneInput
                placeholder="Enter phone number"
                value={phone}
                style={{width: 212}}
                defaultCountry="US"
                onChange={setPhone}/>
              <button 
                  disabled={!(phone != "" && zipCode != "" && name != "")}
                  onClick={() => {
                      handleSubmit()
                      setSuccessful(true)
                  }}
                  style={{backgroundColor: "#258CD6", opacity: phone != "" && zipCode != "" && name != "" ? (1) : (0.5), color: "#fff", padding: "10px 20px", marginTop: 16, width: "100%", border: "none", borderRadius: "5px", cursor: "pointer"}}
              >
                  Submit
              </button>
          </div>
        </div></div>) : (
          <div style={{backgroundColor: "#fff", maxWidth: 612, width: "fit-content", padding: 16, borderRadius: 16, margin: 16}}>
             <p> 
              Dear beloved Hack Clubber,
On behalf of the admissions committee at Aurora, it is with great pleasure that I extend our sincerest congratulations on your acceptance to our exclusive fashion technology program. We were impressed by your passion for innovation and your eagerness to improve your daily routine with the help of cutting-edge technology.
<br/>
Your enrollment in Aurora will grant you access to our state-of-the-art application, which will provide you with daily outfit recommendations tailored to your unique style preferences and weather conditions. We are confident that this innovative tool will enhance your day-to-day life and simplify your morning routine.
<br/>

We believe that you will thrive in our dynamic community of like-minded individuals who are dedicated to utilizing technology to solve real-world problems. We look forward to supporting you as you embark on this exciting journey with us.
<br/>

Congratulations again on your acceptance to Aurora. We are thrilled to welcome you to our program and can't wait to see the great things you will achieve with our application.
<br/>

Sincerely,
<br/>

Thomas,

Aurora Admissions Committee</p>
          </div>
          )}
              
      </main>
  </>
  )
}
