import car1 from '../img/Bmw/BmwM4/exterior-image-167.png';
import car2 from '../img/Bmw/BmwM4/exterior-image-173.png';
import car3 from '../img/Bmw/BmwM4/exterior-image-171.png';
import car4 from '../img/Bmw/BmwM4/exterior-image-168.png';
import car5 from '../img/Bmw/BmwX3/front-left-side-47.png';
import car6 from '../img/Bmw/BmwX3/exterior-image-170.png';
import car7 from '../img/Bmw/BmwX3/interior-image-209.png';
import car8 from '../img/Bmw/BmwX3/grille-97.png';
import car9 from '../img/Lexus/Lexus LC 500h/front-left-side-47.png';
import car10 from '../img/Lexus/Lexus LC 500h/exterior-image-165.png';
import car11 from '../img/Lexus/Lexus LC 500h/exterior-image-168.png';
import car12 from '../img/Lexus/Lexus LC 500h/rear-left-view-121.png';
import car13 from '../img/Lexus/Lexus Nx/front-view-118.png';
import car14 from '../img/Lexus/Lexus Nx/front-left-side-47.png';
import car15 from '../img/Lexus/Lexus Nx/interior-image-208.png';
import car16 from '../img/Lexus/Lexus Nx/exterior-image-166.png';
import car17 from '../img/Lexus/Lexus Nx/rear-view-119.png';
import car18 from '../img/land rover/Screenshot 2024-11-07 174055.png';
import car19 from '../img/land rover/front-left-side-47.png';
import car20 from '../img/Porsche/exterior-image-165.png';
import car21 from '../img/Porsche/exterior-image-16.png';
import car22 from '../img/Roll/8UcS4-20240618213747.png';
import car23 from '../img/Roll/exterior-image-1.png';
import car24 from '../img/Aston Martin/front-left-side-47.png';
import car25 from '../img/Aston Martin/front-left-side-4.png';
import car26 from '../img/Jaguar/front-left-side-471.png';
import car27 from '../img/Jaguar/ipacejaguaripaceexterior.jpg';
import car28 from '../img/Bmw/front-left-side-47.png';
import car29 from '../img/Bmw/front-left-side-478.png';


const Data1 = [
    {
      id: 1,
      name: "BMW M3",
      make: "BMW",
      model: "M3",
      year: 2024,
      color: "Alpine White",
      price: 74000,
      enginePower: "473 hp",
      mileage: "20 mpg",
      fuel: "Gasoline",
      photos: [
        car1 , car2 , car3, car4
      ]
    },
    {
      id: 2,
      name: "BMW X7",
      make: "BMW",
      model: "X7",
      year: 2023,
      color: "Black Sapphire",
      price: 105000,
      enginePower: "523 hp",
      mileage: "22 mpg",
      fuel: "Gasoline",
      photos: [
        car5 , car6 , car7, car8
      ]
    },
    {
      id: 3,
      name: "Lexus RX 500h",
      make: "Lexus",
      model: "RX 500h",
      year: 2024,
      color: "Caviar",
      price: 60000,
      enginePower: "366 hp",
      mileage: "30 mpg",
      fuel: "Hybrid",
      photos: [
        car9 , car10 , car11 , car12
      ]
    },
    {
      id: 4,
      name: "Lexus NX",
      make: "Lexus",
      model: "NX",
      year: 2023,
      color: "Eminent White Pearl",
      price: 45000,
      enginePower: "275 hp",
      mileage: "28 mpg",
      fuel: "Gasoline",
      photos: [
        car13 , car14 , car15, car16 , car17
      ]
    },
    {
      id: 5,
      name: "Land Rover Defender 110",
      make: "Land Rover",
      model: "Defender 110",
      year: 2024,
      color: "Pangea Green",
      price: 60000,
      enginePower: "395 hp",
      mileage: "20 mpg",
      fuel: "Gasoline",
      photos: [
        car18
      ]
    },
    {
      id: 6,
      name: "Land Rover Range Rover Velar",
      make: "Land Rover",
      model: "Range Rover Velar",
      year: 2023,
      color: "Narvik Black",
      price: 74000,
      enginePower: "247 hp",
      mileage: "23 mpg",
      fuel: "Gasoline",
      photos: [
        car19
      ]
    },
    {
      id: 7,
      name: "Porsche Taycan",
      make: "Porsche",
      model: "Taycan",
      year: 2024,
      color: "Carrara White",
      price: 90000,
      enginePower: "402 hp",
      mileage: "21 mpg",
      fuel: "Electric",
      photos: [
        car20
      ]
    },
    {
      id: 8,
      name: "Porsche Macan",
      make: "Porsche",
      model: "Macan",
      year: 2023,
      color: "Dolomite Silver",
      price: 59000,
      enginePower: "265 hp",
      mileage: "23 mpg",
      fuel: "Gasoline",
      photos: [
        car21
      ]
    },
    {
      id: 9,
      name: "Rolls-Royce Cullinan",
      make: "Rolls-Royce",
      model: "Cullinan",
      year: 2024,
      color: "Eternal Blue",
      price: 350000,
      enginePower: "563 hp",
      mileage: "14 mpg",
      fuel: "Gasoline",
      photos: [
        car22
      ]
    },
    {
      id: 10,
      name: "Rolls-Royce Ghost",
      make: "Rolls-Royce",
      model: "Ghost",
      year: 2023,
      color: "Marrakech Red",
      price: 400000,
      enginePower: "563 hp",
      mileage: "12 mpg",
      fuel: "Gasoline",
      photos: [
        car23
      ]
    },
    {
      id: 11,
      name: "Aston Martin DB11",
      make: "Aston Martin",
      model: "DB11",
      year: 2024,
      color: "Magnetic Silver",
      price: 205000,
      enginePower: "503 hp",
      mileage: "20 mpg",
      fuel: "Gasoline",
      photos: [
        car24
      ]
    },
    {
      id: 12,
      name: "Aston Martin Vantage",
      make: "Aston Martin",
      model: "Vantage",
      year: 2023,
      color: "Stratus White",
      price: 150000,
      enginePower: "503 hp",
      mileage: "18 mpg",
      fuel: "Gasoline",
      photos: [
        car25
      ]
    },
    {
      id: 13,
      name: "Jaguar F-PACE",
      make: "Jaguar",
      model: "F-PACE",
      year: 2024,
      color: "Eiger Grey",
      price: 70000,
      enginePower: "400 hp",
      mileage: "24 mpg",
      fuel: "Gasoline",
      photos: [
        car26
      ]
    },
    {
      id: 14,
      name: "Jaguar I-PACE",
      make: "Jaguar",
      model: "I-PACE",
      year: 2023,
      color: "Portofino Blue",
      price: 80000,
      enginePower: "394 hp",
      mileage: "234 miles",
      fuel: "Electric",
      photos: [
        car27
      ]
    },
    {
      id: 15,
      name: "BMW Z4",
      make: "BMW",
      model: "Z4",
      year: 2024,
      color: "Sapphire Black",
      price: 53000,
      enginePower: "382 hp",
      mileage: "27 mpg",
      fuel: "Gasoline",
      photos: [
        car28
      ]
    },
    {
      id: 16,
      name: "BMW 7 Series",
      make: "BMW",
      model: "7 Series",
      year: 2023,
      color: "Royal Burgundy",
      price: 115000,
      enginePower: "536 hp",
      mileage: "21 mpg",
      fuel: "Gasoline",
      photos: [
        car29
      ]
    },
    {
      id: 17,
      name: "Lexus UX 300e",
      make: "Lexus",
      model: "UX 300e",
      year: 2024,
      color: "Cadmium Orange",
      price: 45000,
      enginePower: "201 hp",
      mileage: "250 miles",
      fuel: "Electric",
      photos: [
        "url_to_photo_17.jpg"
      ]
    },
    {
      id: 18,
      name: "Lexus ES 350",
      make: "Lexus",
      model: "ES 350",
      year: 2023,
      color: "Nightfall Mica",
      price: 42000,
      enginePower: "302 hp",
      mileage: "43 mpg",
      fuel: "Gasoline",
      photos: [
        "url_to_photo_18.jpg"
      ]
    },
    {
      id: 19,
      name: "Land Rover Discovery",
      make: "Land Rover",
      model: "Discovery",
      year: 2024,
      color: "Iguana",
      price: 60000,
      enginePower: "355 hp",
      mileage: "19 mpg",
      fuel: "Gasoline",
      photos: [
        "url_to_photo_19.jpg"
      ]
    },
    {
      id: 20,
      name: "Land Rover Range Rover Sport",
      make: "Land Rover",
      model: "Range Rover Sport",
      year: 2023,
      color: "Santorini Black",
      price: 75000,
      enginePower: "395 hp",
      mileage: "20 mpg",
      fuel: "Gasoline",
      photos: [
        "url_to_photo_20.jpg"
      ]
    },
    {
      id: 21,
      name: "Porsche 911 Carrera",
      make: "Porsche",
      model: "911 Carrera",
      year: 2024,
      color: "Gentian Blue",
      price: 110000,
      enginePower: "379 hp",
      mileage: "24 mpg",
      fuel: "Gasoline",
      photos: [
        "url_to_photo_21.jpg"
      ]
    },
    {
      id: 22,
      name: "Porsche 718 Boxster",
      make: "Porsche",
      model: "718 Boxster",
      year: 2023,
      color: "Racing Yellow",
      price: 75000,
      enginePower: "300 hp",
      mileage: "28 mpg",
      fuel: "Gasoline",
      photos: [
        "url_to_photo_22.jpg"
      ]
    },
    {
      id: 23,
      name: "Rolls-Royce Dawn",
      make: "Rolls-Royce",
      model: "Dawn",
      year: 2024,
      color: "Storm Grey",
      price: 350000,
      enginePower: "563 hp",
      mileage: "15 mpg",
      fuel: "Gasoline",
      photos: [
        "url_to_photo_23.jpg"
      ]
    },
    {
      id: 24,
      name: "Rolls-Royce Wraith",
      make: "Rolls-Royce",
      model: "Wraith",
      year: 2023,
      color: "Black Badge",
      price: 330000,
      enginePower: "624 hp",
      mileage: "18 mpg",
      fuel: "Gasoline",
      photos: [
        "url_to_photo_24.jpg"
      ]
    },
    {
      id: 25,
      name: "Aston Martin DBX",
      make: "Aston Martin",
      model: "DBX",
      year: 2024,
      color: "Zaffre Blue",
      price: 200000,
      enginePower: "542 hp",
      mileage: "18 mpg",
      fuel: "Gasoline",
      photos: [
        "url_to_photo_25.jpg"
      ]
    },
    {
      id: 26,
      name: "Aston Martin Vantage Roadster",
      make: "Aston Martin",
      model: "Vantage Roadster",
      year: 2023,
      color: "Balmoral Green",
      price: 170000,
      enginePower: "503 hp",
      mileage: "19 mpg",
      fuel: "Gasoline",
      photos: [
        "url_to_photo_26.jpg"
      ]
    },
    {
      id: 27,
      name: "Jaguar XF",
      make: "Jaguar",
      model: "XF",
      year: 2024,
      color: "Yulong White",
      price: 61000,
      enginePower: "246 hp",
      mileage: "30 mpg",
      fuel: "Gasoline",
      photos: [
        "url_to_photo_27.jpg"
      ]
    },
    {
      id: 28,
      name: "Jaguar E-PACE",
      make: "Jaguar",
      model: "E-PACE",
      year: 2023,
      color: "Firenze Red",
      price: 47000,
      enginePower: "246 hp",
      mileage: "28 mpg",
      fuel: "Gasoline",
      photos: [
        "url_to_photo_28.jpg"
      ]
    },
    {
      id: 29,
      name: "BMW iX",
      make: "BMW",
      model: "iX",
      year: 2024,
      color: "Phytonic Blue",
      price: 85000,
      enginePower: "322 hp",
      mileage: "324 miles",
      fuel: "Electric",
      photos: [
        "url_to_photo_29.jpg"
      ]
    },
    {
      id: 30,
      name: "BMW i4",
      make: "BMW",
      model: "i4",
      year: 2023,
      color: "Skyscraper Grey",
      price: 70000,
      enginePower: "335 hp",
      mileage: "301 miles",
      fuel: "Electric",
      photos: [
        "url_to_photo_30.jpg"
      ]
    },
    {
      id: 31,
      name: "Lexus RZ 450e",
      make: "Lexus",
      model: "RZ 450e",
      year: 2024,
      color: "Sonic Copper",
      price: 60000,
      enginePower: "308 hp",
      mileage: "220 miles",
      fuel: "Electric",
      photos: [
        "url_to_photo_31.jpg"
      ]
    },
    {
      id: 32,
      name: "Lexus LC 500",
      make: "Lexus",
      model: "LC 500",
      year: 2023,
      color: "Nuclear Orange",
      price: 95000,
      enginePower: "471 hp",
      mileage: "25 mpg",
      fuel: "Gasoline",
      photos: [
        "url_to_photo_32.jpg"
      ]
    },
    {
      id: 33,
      name: "Land Rover Range Rover Evoque",
      make: "Land Rover",
      model: "Range Rover Evoque",
      year: 2024,
      color: "Pavillion Grey",
      price: 45000,
      enginePower: "246 hp",
      mileage: "28 mpg",
      fuel: "Gasoline",
      photos: [
        "url_to_photo_33.jpg"
      ]
    },
    {
      id: 34,
      name: "Land Rover Range Rover Classic",
      make: "Land Rover",
      model: "Range Rover Classic",
      year: 2023,
      color: "Burgundy",
      price: 75000,
      enginePower: "355 hp",
      mileage: "19 mpg",
      fuel: "Gasoline",
      photos: [
        "url_to_photo_34.jpg"
      ]
    },
    {
      id: 35,
      name: "Porsche 911 Turbo",
      make: "Porsche",
      model: "911 Turbo",
      year: 2024,
      color: "Carmine Red",
      price: 200000,
      enginePower: "640 hp",
      mileage: "18 mpg",
      fuel: "Gasoline",
      photos: [
        "url_to_photo_35.jpg"
      ]
    },
    {
      id: 36,
      name: "Porsche Panamera",
      make: "Porsche",
      model: "Panamera",
      year: 2023,
      color: "Crayon",
      price: 100000,
      enginePower: "325 hp",
      mileage: "23 mpg",
      fuel: "Gasoline",
      photos: [
        "url_to_photo_36.jpg"
      ]
    },
    {
      id: 37,
      name: "Rolls-Royce Phantom Tempus",
      make: "Rolls-Royce",
      model: "Phantom Tempus",
      year: 2024,
      color: "Purple Silk",
      price: 500000,
      enginePower: "563 hp",
      mileage: "12 mpg",
      fuel: "Gasoline",
      photos: [
        "url_to_photo_37.jpg"
      ]
    },
    {
      id: 38,
      name: "Rolls-Royce Black Badge",
      make: "Rolls-Royce",
      model: "Black Badge",
      year: 2023,
      color: "Black",
      price: 400000,
      enginePower: "624 hp",
      mileage: "15 mpg",
      fuel: "Gasoline",
      photos: [
        "url_to_photo_38.jpg"
      ]
    },
    {
      id: 39,
      name: "Aston Martin V12 Speedster",
      make: "Aston Martin",
      model: "V12 Speedster",
      year: 2024,
      color: "White Stone",
      price: 90000,
      enginePower: "700 hp",
      mileage: "18 mpg",
      fuel: "Gasoline",
      photos: [
        "url_to_photo_39.jpg"
      ]
    },
    {
      id: 40,
      name: "Aston Martin DBX707",
      make: "Aston Martin",
      model: "DBX707",
      year: 2023,
      color: "Sovereign Bronze",
      price: 250000,
      enginePower: "697 hp",
      mileage: "18 mpg",
      fuel: "Gasoline",
      photos: [
        "url_to_photo_40.jpg"
      ]
    },
    {
      id: 41,
      name: "Jaguar XF Sportbrake",
      make: "Jaguar",
      model: "XF Sportbrake",
      year: 2024,
      color: "Corris Grey",
      price: 70000,
      enginePower: "247 hp",
      mileage: "32 mpg",
      fuel: "Gasoline",
      photos: [
        "url_to_photo_41.jpg"
      ]
    },
    {
      id: 42,
      name: "Jaguar F-Type R",
      make: "Jaguar",
      model: "F-Type R",
      year: 2023,
      color: "Indus Silver",
      price: 110000,
      enginePower: "575 hp",
      mileage: "18 mpg",
      fuel: "Gasoline",
      photos: [
        "url_to_photo_42.jpg"
      ]
    },
    {
      id: 43,
      name: "BMW i7",
      make: "BMW",
      model: "i7",
      year: 2024,
      color: "Tanzanite Blue",
      price: 120000,
      enginePower: "536 hp",
      mileage: "324 miles",
      fuel: "Electric",
      photos: [
        "url_to_photo_43.jpg"
      ]
    },
    {
      id: 44,
      name: "BMW 4 Series",
      make: "BMW",
      model: "4 Series",
      year: 2023,
      color: "San Remo Green",
      price: 55000,
      enginePower: "382 hp",
      mileage: "26 mpg",
      fuel: "Gasoline",
      photos: [
        "url_to_photo_44.jpg"
      ]
    },
    {
      id: 45,
      name: "Lexus GX 460",
      make: "Lexus",
      model: "GX 460",
      year: 2024,
      color: "Nebula Grey",
      price: 60000,
      enginePower: "301 hp",
      mileage: "19 mpg",
      fuel: "Gasoline",
      photos: [
        "url_to_photo_45.jpg"
      ]
    },
    {
      id: 46,
      name: "Lexus IS 500",
      make: "Lexus",
      model: "IS 500",
      year: 2023,
      color: "Incognito",
      price: 70000,
      enginePower: "472 hp",
      mileage: "25 mpg",
      fuel: "Gasoline",
      photos: [
        "url_to_photo_46.jpg"
      ]
    },
    {
      id: 47,
      name: "Land Rover Range Rover Classic",
      make: "Land Rover",
      model: "Range Rover Classic",
      year: 2024,
      color: "Coniston Blue",
      price: 75000,
      enginePower: "355 hp",
      mileage: "19 mpg",
      fuel: "Gasoline",
      photos: [
        "url_to_photo_47.jpg"
      ]
    },
    {
      id: 48,
      name: "Land Rover Discovery Sport",
      make: "Land Rover",
      model: "Discovery Sport",
      year: 2023,
      color: "Fuji White",
      price: 47000,
      enginePower: "246 hp",
      mileage: "23 mpg",
      fuel: "Gasoline",
      photos: [
        "url_to_photo_48.jpg"
      ]
    },
    {
      id: 49,
      name: "Porsche 911 GT3",
      make: "Porsche",
      model: "911 GT3",
      year: 2024,
      color: "Shark Blue",
      price: 160000,
      enginePower: "502 hp",
      mileage: "15 mpg",
      fuel: "Gasoline",
      photos: [
        "url_to_photo_49.jpg"
      ]
    },
    {
      id: 50,
      name: "Porsche 911 Targa 4",
      make: "Porsche",
      model: "911 Targa 4",
      year: 2023,
      color: "Guards Red",
      price: 130000,
      enginePower: "379 hp",
      mileage: "22 mpg",
      fuel: "Gasoline",
      photos: [
        "url_to_photo_50.jpg"
      ]
    }
  ]


  export default Data1;