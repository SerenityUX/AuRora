import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useState } from "react";


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [step, setStep] = useState(0);
  const [selectedClothes, setSelectedClothes] = useState([]);

  const [phone, setPhone] = useState("");
  const clothingOptions = [
    {
      "name": "T-Shirt",
      "type": "Top",
      "styles": ["Casual", "Athletic"],
      "temperatureType": ["Cool", "Warm", "Hot", "Extremely Hot and Dangerous"]
    },
    {
      "name": "Polo Shirt",
      "type": "Top",
      "styles": ["Casual", "Athletic", "Professional"],
      "temperatureType": ["Cool", "Warm", "Hot", "Extremely Hot and Dangerous"]
    },
    {
      "name": "Sweater",
      "type": "Top",
      "styles": ["Casual", "Professional"],
      "temperatureType": ["Cool", "Freezing", "Extremely Cold and Dangerous"]
    },
    {
      "name": "Hoodie",
      "type": "Top",
      "styles": ["Athletic", "Streetwear"],
      "temperatureType": ["Cool", "Freezing", "Extremely Cold and Dangerous"]
    },
    {
      "name": "Blouse",
      "type": "Top",
      "styles": ["Professional"],
      "temperatureType": ["Cool", "Warm"]
    },
    {
      "name": "Tank Top",
      "type": "Top",
      "styles": ["Casual", "Athletic"],
      "temperatureType": ["Warm", "Hot", "Extremely Hot and Dangerous"]
    },
    {
      "name": "Button-Up Shirt",
      "type": "Top",
      "styles": ["Casual", "Professional"],
      "temperatureType": ["Cool", "Warm"]
    },
    {
      "name": "Sweatshirt",
      "type": "Top",
      "styles": ["Casual", "Athletic"],
      "temperatureType": ["Cool", "Freezing", "Extremely Cold and Dangerous"]
    },
    {
      "name": "Cardigan",
      "type": "Top",
      "styles": ["Casual", "Professional"],
      "temperatureType": ["Cool", "Freezing", "Extremely Cold and Dangerous"]
    },
    {
      "name": "Turtleneck",
      "type": "Top",
      "styles": ["Casual", "Professional"],
      "temperatureType": ["Cool", "Freezing", "Extremely Cold and Dangerous"]
    },
    {
      "name": "Jacket",
      "type": "Outerwear",
      "styles": ["Casual", "Professional"],
      "temperatureType": ["Cool", "Warm"]
    },
    {
      "name": "Parka",
      "type": "Outerwear",
      "styles": ["Casual", "Athletic"],
      "temperatureType": ["Cool", "Freezing", "Extremely Cold and Dangerous"]
    },
    {
      "name": "Raincoat",
      "type": "Outerwear",
      "styles": ["Casual", "Professional"],
      "temperatureType": ["Cool", "Warm"]
    },
    {
      "name": "Peacoat",
      "type": "Outerwear",
      "styles": ["Casual", "Professional"],
      "temperatureType": ["Cool", "Freezing", "Extremely Cold and Dangerous"]
    },
    {
      "name": "Bomber Jacket",
      "type": "Outerwear",
      "styles": ["Athletic", "Streetwear"],
      "temperatureType": ["Cool", "Warm"]
    },
    {
      "name": "Blazer",
      "type": "Outerwear",
      "styles": ["Professional"],
      "temperatureType": ["Cool", "Warm"]
    },
    {
      "name": "Leather Jacket",
      "type": "Outerwear",
      "styles": ["Casual", "Streetwear"],
      "temperatureType": ["Cool", "Warm"]
    },
    {
      "name": "Denim Jacket",
      "type": "Outerwear",
      "styles": ["Casual", "Streetwear"],
      "temperatureType": ["Cool", "Warm"]
    },
    {
      "name": "Vest",
      "type": "Outerwear",
      "styles": ["Casual", "Athletic"],
      "temperatureType": ["Cool", "Warm"]
    },
    {
      "name": "Jeans",
      "type": "Bottoms",
      "styles": ["Casual", "Professional"],
      "temperatureType": ["Cool", "Warm"]
    },
    {
      "name": "Khaki Pants",
      "type": "Bottoms",
      "styles": ["Casual", "Professional"],
      "temperatureType": ["Cool", "Warm"]
    },
    {
      "name": "Sweatpants",
      "type": "Bottoms",
      "styles": ["Casual", "Athletic"],
      "temperatureType": ["Cool", "Freezing", "Extremely Cold and Dangerous"]
    },
    {
      "name": "Leggings",
      "type": "Bottoms",
      "styles": ["Casual", "Athletic"],
      "temperatureType": ["Cool", "Warm"]
    },
    {
      "name": "Shorts",
      "type": "Bottoms",
      "styles": ["Casual", "Athletic"],
      "temperatureType": ["Warm", "Hot", "Extremely Hot and Dangerous"]
    },
    {
      "name": "Skirt",
      "type": "Bottoms",
      "styles": ["Casual", "Professional"],
      "temperatureType": ["Cool", "Warm"]
    },
    {
      "name": "Dress",
      "type": "Dresses",
      "styles": ["Casual", "Professional", "Formal"],
      "temperatureType": ["Cool", "Warm"]
    },
    {
      "name": "Sneakers",
      "type": "Shoes",
      "styles": ["Athletic", "Casual"],
      "temperatureType": ["Cool", "Warm"]
    },
    {
      "name": "Boots",
      "type": "Shoes",
      "styles": ["Casual", "Professional"],
      "temperatureType": ["Cool", "Freezing", "Extremely Cold and Dangerous"]
    },
    {
      "name": "Flip Flops",
      "type": "Shoes",
      "styles": ["Casual", "Beachwear"],
      "temperatureType": ["Warm", "Hot", "Extremely Hot and Dangerous"]
    },
    {
      "name": "Sandals",
      "type": "Shoes",
      "styles": ["Casual", "Beachwear"],
      "temperatureType": ["Warm", "Hot", "Extremely Hot and Dangerous"]
    },
    {
      "name": "High Heels",
      "type": "Shoes",
      "styles": ["Professional", "Formal"],
      "temperatureType": ["Cool", "Warm"]
    }
  ] 
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
            {clothingOptions.map((option) => 
            <div onClick={() => {
              if (!selectedClothes.includes(option.name)) {
                setSelectedClothes([...selectedClothes, option.name])
              } else {
                console.log("ok")
                setSelectedClothes(oldValues => {
                  return oldValues.filter(optionChoice => optionChoice.name !== option.name)
                })
              }
              console.log(selectedClothes)
            }}>
              <p>{option.name}</p>
            </div>
            )}
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
