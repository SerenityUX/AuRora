import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useState } from "react";


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [step, setStep] = useState(0);
  const [selectedClothes, setSelectedClothes] = useState([]);
  const [zipCode, setZipCode] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <>
      <Head>
        <title>Aurora</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
          

        <main>
          <div>
          <h1>Aurora</h1>
            <ul>
              <li>Weather-based fashion app that suggests what to wear based on real-time weather data and user preferences.</li>
              <li>
                Includes a feature that allows users to save their favorite outfits for future use.
              </li>
              <li> 
                Helps users plan ahead for different weather conditions, making it easy to stay comfortable and stylish no matter the weather.
              </li>
            </ul>
          </div>

        
          <div>
            <p>What's your Zipcode?</p>
            <input type="zipcode" placeholder="Zip Code" value={zipCode} onChange={event => setZipCode(event.target.value)}/>
          </div>
          <div>
            <p>What's your Phone Number?</p>
          <input type="phone" placeholder="Phone Number" value={phone} onChange={event => setPhone(event.target.value)}/>
          <button
            onClick={() => console.log({user: {"zip": zipCode, "phone_number": phone}})}
          >Submit</button>
        </div>
        <h1></h1>
      </main>
    </>
  )
}
