import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useState } from "react";


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [step, setStep] = useState(0);
  const [phone, setPhone] = useState("");

  const weatherRanges = [
    {
      "type": "Extremely Cold and Dangerous",
      "temperatureRange": 
        {
          "min": -100,
          "max": 0
        }
      
    },
    {
      "type": "Freezing",
      "temperatureRange": 
        {
          "min": 0,
          "max": 32
        }
      
    },
    {
      "type": "Cool",
      "temperatureRange": 
        {
          "min": 33,
          "max": 70
        }
      
    },
    {
      "type": "Warm",
      "temperatureRange": 
        {
          "min": 71,
          "max": 95
        }
      
    },
    {
      "type": "Extremely Hot and Dangerous",
      "temperatureRange": 
        {
          "min": 96,
          "max": 150
        }
      
    }
  ]
  return (
    <>
      <Head>
        <title>Aurora</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
          

        <main>
           <p>Step {step + 1}</p>
        
          
        {step < 3 ? (
        <button onClick={() => setStep(step + 1)}>Next</button>  
        ) :
        (
          null
        )}

        {step == 0 ? (
          <div>
          <h1>Overview of Aurora</h1>
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
        ) : 
        (
          null
        )
        }
        {step == 1 ? (
          <div>
            <h1>Select Clothes You Like</h1>

          </div>
        ) : 
        (
          null
        )
        }
        {step == 2 ? (
          <div>
            <p>Zipcode</p>

          </div>
        ) : 
        (
          null
        )
        }
        {step == 3 ? (
          <div>
            <p>Phone Number</p>
            
          </div>
        ) : 
        (
          null
        )
        }
        <h1></h1>
      </main>
    </>
  )
}
