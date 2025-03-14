import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BollytrixService {
  movies: any[] = [
    {
      "Title": "Aaghaaz",
      "Genre": "Thriller",
      "Year": "2000"
    },
    {
      "Title": "Aaj Ka Ravan",
      "Genre": "Drama",
      "Year": "2000"
    },
    {
      "Title": "Anjaane",
      "Genre": "Romance",
      "Year": "2000"
    },
    {
      "Title": "Anokha Moti",
      "Genre": "Family",
      "Year": "2000"
    },
    {
      "Title": "Apradhi Kaun",
      "Genre": "Thriller",
      "Year": "2000"
    },
    {
      "Title": "Astitva",
      "Genre": "Drama",
      "Year": "2000"
    },
    {
      "Title": "Baaghi",
      "Genre": "Action",
      "Year": "2000"
    },
    {
      "Title": "Badal",
      "Genre": "Action",
      "Year": "2000"
    },
    {
      "Title": "Bas Yaari Rakho",
      "Genre": "Comedy",
      "Year": "2000"
    },
    {
      "Title": "Bawandar",
      "Genre": "Drama",
      "Year": "2000"
    },
    {
      "Title": "Beti No.1",
      "Genre": "Comedy",
      "Year": "2000"
    },
    {
      "Title": "Bhai Thakur",
      "Genre": "Action",
      "Year": "2000"
    },
    {
      "Title": "Bichhoo",
      "Genre": "Action",
      "Year": "2000"
    },
    {
      "Title": "Billa No. 786",
      "Genre": "Action",
      "Year": "2000"
    },
    {
      "Title": "Bulandi",
      "Genre": "Drama",
      "Year": "2000"
    },
    {
      "Title": "Chal Mere Bhai",
      "Genre": "Comedy",
      "Year": "2000"
    },
    {
      "Title": "Champion",
      "Genre": "Action",
      "Year": "2000"
    },
    {
      "Title": "Deewane",
      "Genre": "Action",
      "Year": "2000"
    },
    {
      "Title": "Dhai Akshar Prem Ke",
      "Genre": "Romance",
      "Year": "2000"
    },
    {
      "Title": "Dhadkan",
      "Genre": "Romance",
      "Year": "2000"
    },
    {
      "Title": "Dil Ki Dhadkan",
      "Genre": "",
      "Year": "2000"
    },
    {
      "Title": "Dil Pe Mat Le Yaar",
      "Genre": "Drama",
      "Year": "2000"
    },
    {
      "Title": "Dr. Babasaheb Ambedkar",
      "Genre": "",
      "Year": "2000"
    },
    {
      "Title": "Dr Mukta",
      "Genre": "",
      "Year": "2000"
    },
    {
      "Title": "Dulhan Hum Le Jayenge",
      "Genre": "Comedy",
      "Year": "2000"
    },
    {
      "Title": "Fiza",
      "Genre": "Drama",
      "Year": "2000"
    },
    {
      "Title": "Gaja Gamini",
      "Genre": "Drama",
      "Year": "2000"
    },
    {
      "Title": "Gang",
      "Genre": "Crime",
      "Year": "2000"
    },
    {
      "Title": "Ghaath",
      "Genre": "Drama",
      "Year": "2000"
    },
    {
      "Title": "Hadh Kar Di Aapne",
      "Genre": "Comedy",
      "Year": "2000"
    },
    {
      "Title": "Hamara Dil Aapke Paas Hai",
      "Genre": "Drama",
      "Year": "2000"
    },
    {
      "Title": "Har Dil Jo Pyar Karega",
      "Genre": "Comedy",
      "Year": "2000"
    },
    {
      "Title": "Hari-Bhari",
      "Genre": "Drama",
      "Year": "2000"
    },
    {
      "Title": "Hera Pheri",
      "Genre": "Comedy",
      "Year": "2000"
    },
    {
      "Title": "Hey Ram",
      "Genre": "Drama",
      "Year": "2000"
    },
    {
      "Title": "Hum To Mohabbat Karega",
      "Genre": "Action",
      "Year": "2000"
    },
    {
      "Title": "Jallad No. 1",
      "Genre": "Drama",
      "Year": "2000"
    },
    {
      "Title": "Jis Desh Mein Ganga Rehta Hain",
      "Genre": "Drama",
      "Year": "2000"
    },
    {
      "Title": "Joru Ka Ghulam",
      "Genre": "Drama",
      "Year": "2000"
    },
    {
      "Title": "Josh",
      "Genre": "Action",
      "Year": "2000"
    },
    {
      "Title": "Jung",
      "Genre": "Drama",
      "Year": "2000"
    },
    {
      "Title": "Jungle",
      "Genre": "Romance",
      "Year": "2000"
    },
    {
      "Title": "Kabrastan",
      "Genre": "Horror",
      "Year": "2000"
    },
    {
      "Title": "Kahin Pyaar Na Ho Jaaye",
      "Genre": "Comedy",
      "Year": "2000"
    },
    {
      "Title": "Kaho Naa... Pyaar Hai",
      "Genre": "Romance",
      "Year": "2000"
    },
    {
      "Title": "Kairee",
      "Genre": "Drama",
      "Year": "2000"
    },
    {
      "Title": "Karobaar: The Business of Love",
      "Genre": "Drama",
      "Year": "2000"
    },
    {
      "Title": "Kharidaar",
      "Genre": "",
      "Year": "2000"
    },
    {
      "Title": "Khauff",
      "Genre": "Drama",
      "Year": "2000"
    },
    {
      "Title": "Khiladi 420",
      "Genre": "Action",
      "Year": "2000"
    },
    {
      "Title": "Krodh",
      "Genre": "Action",
      "Year": "2000"
    },
    {
      "Title": "Kunwara",
      "Genre": "Comedy",
      "Year": "2000"
    },
    {
      "Title": "Kurukshetra",
      "Genre": "Action",
      "Year": "2000"
    },
    {
      "Title": "Kya Kehna",
      "Genre": "Romance",
      "Year": "2000"
    },
    {
      "Title": "Le Chal Apne Sang",
      "Genre": "Romance",
      "Year": "2000"
    },
    {
      "Title": "Lekroo",
      "Genre": "",
      "Year": "2000"
    },
    {
      "Title": "Mela",
      "Genre": "Drama",
      "Year": "2000"
    },
    {
      "Title": "Meri Jung Ka Elaan",
      "Genre": "Drama",
      "Year": "2000"
    },
    {
      "Title": "Mission Kashmir",
      "Genre": "Drama",
      "Year": "2000"
    },
    {
      "Title": "Mohabbatein",
      "Genre": "Drama",
      "Year": "2000"
    },
    {
      "Title": "Nidaan",
      "Genre": "Drama",
      "Year": "2000"
    },
    {
      "Title": "Pandavas: The Five Warriors",
      "Genre": "Animation",
      "Year": "2000"
    },
    {
      "Title": "Papa the Great",
      "Genre": "Family",
      "Year": "2000"
    },
    {
      "Title": "Phir Bhi Dil Hai Hindustani",
      "Genre": "Comedy",
      "Year": "2000"
    },
    {
      "Title": "Pukar",
      "Genre": "Drama",
      "Year": "2000"
    },
    {
      "Title": "Raja Ko Rani Se Pyar Ho Gaya",
      "Genre": "Comedy",
      "Year": "2000"
    },
    {
      "Title": "Raju Chacha",
      "Genre": "Comedy",
      "Year": "2000"
    },
    {
      "Title": "Refugee",
      "Genre": "Drama",
      "Year": "2000"
    },
    {
      "Title": "The Revenge: Geeta Mera Naam",
      "Genre": "Action",
      "Year": "2000"
    },
    {
      "Title": "Saanjh",
      "Genre": "",
      "Year": "2000"
    },
    {
      "Title": "Second Generation",
      "Genre": "",
      "Year": "2000"
    },
    {
      "Title": "Shikaar",
      "Genre": "",
      "Year": "2000"
    },
    {
      "Title": "Shikari",
      "Genre": "Thriller",
      "Year": "2000"
    },
    {
      "Title": "Snip!",
      "Genre": "",
      "Year": "2000"
    },
    {
      "Title": "Sultaan",
      "Genre": "Action",
      "Year": "2000"
    },
    {
      "Title": "Tapish",
      "Genre": "",
      "Year": "2000"
    },
    {
      "Title": "Tarkieb",
      "Genre": "Suspense",
      "Year": "2000"
    },
    {
      "Title": "Tera Jadoo Chal Gayaa",
      "Genre": "Romance",
      "Year": "2000"
    },
    {
      "Title": "Tune Mera Dil Le Liyaa",
      "Genre": "",
      "Year": "2000"
    },
    {
      "Title": "Zindagi Zindabad",
      "Genre": "",
      "Year": "2000"
    },
    {
      "Title": "Abhay",
      "Genre": "Thriller",
      "Year": "2001"
    },
    {
      "Title": "Aamdani Atthanni Kharcha Rupaiya",
      "Genre": "Family Drama",
      "Year": "2001"
    },
    {
      "Title": "Aashiq",
      "Genre": "Action Comedy",
      "Year": "2001"
    },
    {
      "Title": "Ajnabee",
      "Genre": "Thriller",
      "Year": "2001"
    },
    {
      "Title": "Aks",
      "Genre": "Thriller",
      "Year": "2001"
    },
    {
      "Title": "Albela",
      "Genre": "Romance",
      "Year": "2001"
    },
    {
      "Title": "Aśoka",
      "Genre": "History",
      "Year": "2001"
    },
    {
      "Title": "Bas Itna Sa Khwaab Hai",
      "Genre": "Drama",
      "Year": "2001"
    },
    {
      "Title": "Be-Lagaam[3]",
      "Genre": "Action",
      "Year": "2001"
    },
    {
      "Title": "Bengal Tiger",
      "Genre": "Action",
      "Year": "2001"
    },
    {
      "Title": "Bhairav",
      "Genre": "",
      "Year": "2001"
    },
    {
      "Title": "Censor",
      "Genre": "Drama",
      "Year": "2001"
    },
    {
      "Title": "Chandni Bar",
      "Genre": "Drama",
      "Year": "2001"
    },
    {
      "Title": "Chhupa Rustam: A Musical Thriller",
      "Genre": "Thriller",
      "Year": "2001"
    },
    {
      "Title": "Chori Chori Chupke Chupke",
      "Genre": "Drama",
      "Year": "2001"
    },
    {
      "Title": "Daman",
      "Genre": "Drama",
      "Year": "2001"
    },
    {
      "Title": "Dattak",
      "Genre": "Drama",
      "Year": "2001"
    },
    {
      "Title": "Deewaanapan",
      "Genre": "Drama",
      "Year": "2001"
    },
    {
      "Title": "Dil Chahta Hai",
      "Genre": "Drama",
      "Year": "2001"
    },
    {
      "Title": "Dil Ne Phir Yaad Kiya",
      "Genre": "Romance",
      "Year": "2001"
    },
    {
      "Title": "Ehsaas: The Feeling",
      "Genre": "Drama",
      "Year": "2001"
    },
    {
      "Title": "Ek Rishtaa: The Bond of Love",
      "Genre": "Family Drama",
      "Year": "2001"
    },
    {
      "Title": "Farz",
      "Genre": "Action",
      "Year": "2001"
    },
    {
      "Title": "Gadar: Ek Prem Katha",
      "Genre": "Drama",
      "Year": "2001"
    },
    {
      "Title": "Grahan",
      "Genre": "Romance",
      "Year": "2001"
    },
    {
      "Title": "Hadh: Life on the Edge of Death",
      "Genre": "",
      "Year": "2001"
    },
    {
      "Title": "Hum Ho Gaye Aapke",
      "Genre": "Romance",
      "Year": "2001"
    },
    {
      "Title": "Indian",
      "Genre": "Action",
      "Year": "2001"
    },
    {
      "Title": "Ittefaq",
      "Genre": "Action",
      "Year": "2001"
    },
    {
      "Title": "Jodi No.1",
      "Genre": "Comedy",
      "Year": "2001"
    },
    {
      "Title": "Kabhi Khushi Kabhie Gham...",
      "Genre": "Drama",
      "Year": "2001"
    },
    {
      "Title": "Kasam",
      "Genre": "Action",
      "Year": "2001"
    },
    {
      "Title": "Kasoor",
      "Genre": "Thriller",
      "Year": "2001"
    },
    {
      "Title": "Kuch Khatti Kuch Meethi",
      "Genre": "Comedy",
      "Year": "2001"
    },
    {
      "Title": "Kyo Kii Main Jhuth Nahin Bolta",
      "Genre": "Comedy",
      "Year": "2001"
    },
    {
      "Title": "Lagaan: Once Upon a Time in India",
      "Genre": "Drama",
      "Year": "2001"
    },
    {
      "Title": "Lajja",
      "Genre": "Drama",
      "Year": "2001"
    },
    {
      "Title": "Love Ke Liye Kuchh Bhi Karega",
      "Genre": "Comedy",
      "Year": "2001"
    },
    {
      "Title": "Love You Hamesha",
      "Genre": "",
      "Year": "2001"
    },
    {
      "Title": "Maya",
      "Genre": "Drama",
      "Year": "2001"
    },
    {
      "Title": "Mitti",
      "Genre": "",
      "Year": "2001"
    },
    {
      "Title": "Moksha",
      "Genre": "Drama",
      "Year": "2001"
    },
    {
      "Title": "Monsoon Wedding",
      "Genre": "Comedy",
      "Year": "2001"
    },
    {
      "Title": "Mujhe Kucch Kehna Hai",
      "Genre": "Comedy",
      "Year": "2001"
    },
    {
      "Title": "Mujhe Meri Biwi Se Bachaao",
      "Genre": "Comedy",
      "Year": "2001"
    },
    {
      "Title": "Nayak",
      "Genre": "Drama",
      "Year": "2001"
    },
    {
      "Title": "Officer",
      "Genre": "Action",
      "Year": "2001"
    },
    {
      "Title": "One 2 Ka 4",
      "Genre": "Action",
      "Year": "2001"
    },
    {
      "Title": "Paagalpan",
      "Genre": "Romance",
      "Year": "2001"
    },
    {
      "Title": "Pyaar Ishq Aur Mohabbat",
      "Genre": "Romance",
      "Year": "2001"
    },
    {
      "Title": "Pyaar Tune Kya Kiya",
      "Genre": "Drama",
      "Year": "2001"
    },
    {
      "Title": "Pyaar Zindagi Hai",
      "Genre": "Romance",
      "Year": "2001"
    },
    {
      "Title": "Rahul",
      "Genre": "Drama",
      "Year": "2001"
    },
    {
      "Title": "Rehnaa Hai Terre Dil Mein",
      "Genre": "Romance",
      "Year": "2001"
    },
    {
      "Title": "Shirdi Sai Baba",
      "Genre": "",
      "Year": "2001"
    },
    {
      "Title": "Style",
      "Genre": "Romance",
      "Year": "2001"
    },
    {
      "Title": "Tamboo Mein Bamoo",
      "Genre": "Action",
      "Year": "2001"
    },
    {
      "Title": "Tera Mera Saath Rahen",
      "Genre": "Drama",
      "Year": "2001"
    },
    {
      "Title": "Tere Liye",
      "Genre": "",
      "Year": "2001"
    },
    {
      "Title": "Tum Bin",
      "Genre": "Romance",
      "Year": "2001"
    },
    {
      "Title": "Yaadein",
      "Genre": "Romance",
      "Year": "2001"
    },
    {
      "Title": "Yeh Raaste Hain Pyaar Ke",
      "Genre": "Drama",
      "Year": "2001"
    },
    {
      "Title": "Yeh Teraa Ghar Yeh Meraa Ghar",
      "Genre": "Drama",
      "Year": "2001"
    },
    {
      "Title": "Yeh Zindagi Ka Safar",
      "Genre": "Romance",
      "Year": "2001"
    },
    {
      "Title": "Zubeidaa",
      "Genre": "Drama",
      "Year": "2001"
    },
    {
      "Title": "16 December",
      "Genre": "Action",
      "Year": "2002"
    },
    {
      "Title": "23rd March 1931: Shaheed",
      "Genre": "Historical Drama",
      "Year": "2002"
    },
    {
      "Title": "Aankhen",
      "Genre": "Thriller",
      "Year": "2002"
    },
    {
      "Title": "Aap Mujhe Achche Lagne Lage",
      "Genre": "Romance",
      "Year": "2002"
    },
    {
      "Title": "Ab Ke Baras",
      "Genre": "Romance",
      "Year": "2002"
    },
    {
      "Title": "Agni Varsha",
      "Genre": "Period Drama",
      "Year": "2002"
    },
    {
      "Title": "Akhiyon Se Goli Maare",
      "Genre": "Comedy",
      "Year": "2002"
    },
    {
      "Title": "Annarth",
      "Genre": "Action",
      "Year": "2002"
    },
    {
      "Title": "Ansh: The Deadly Part",
      "Genre": "Action",
      "Year": "2002"
    },
    {
      "Title": "Awara Paagal Deewana",
      "Genre": "Action",
      "Year": "2002"
    },
    {
      "Title": "Baaja",
      "Genre": "Children's",
      "Year": "2002"
    },
    {
      "Title": "Badhaai Ho Badhaai",
      "Genre": "Comedy",
      "Year": "2002"
    },
    {
      "Title": "Bollywood Queen",
      "Genre": "Drama",
      "Year": "2002"
    },
    {
      "Title": "Bomb the System",
      "Genre": "",
      "Year": "2002"
    },
    {
      "Title": "Chalo Ishq Ladaaye",
      "Genre": "Comedy",
      "Year": "2002"
    },
    {
      "Title": "Chor Machaaye Shor",
      "Genre": "Comedy",
      "Year": "2002"
    },
    {
      "Title": "Company",
      "Genre": "Crime",
      "Year": "2002"
    },
    {
      "Title": "Deewangee",
      "Genre": "Thriller",
      "Year": "2002"
    },
    {
      "Title": "Desh Devi[2]",
      "Genre": "",
      "Year": "2002"
    },
    {
      "Title": "Devdas",
      "Genre": "Romance",
      "Year": "2002"
    },
    {
      "Title": "Dil Hai Tumhaara",
      "Genre": "Family",
      "Year": "2002"
    },
    {
      "Title": "Dil Vil Pyar Vyar",
      "Genre": "Romance",
      "Year": "2002"
    },
    {
      "Title": "Durga",
      "Genre": "Romance",
      "Year": "2002"
    },
    {
      "Title": "Ek Chhotisi Love Story",
      "Genre": "Erotic",
      "Year": "2002"
    },
    {
      "Title": "Encounter: The Killing",
      "Genre": "Social Drama",
      "Year": "2002"
    },
    {
      "Title": "Filhaal",
      "Genre": "Drama",
      "Year": "2002"
    },
    {
      "Title": "Ghaav: The Wound",
      "Genre": "Crime Drama",
      "Year": "2002"
    },
    {
      "Title": "Gunaah",
      "Genre": "Thriller",
      "Year": "2002"
    },
    {
      "Title": "Haan Maine Bhi Pyaar Kiya",
      "Genre": "Drama",
      "Year": "2002"
    },
    {
      "Title": "Hathyar",
      "Genre": "Drama",
      "Year": "2002"
    },
    {
      "Title": "Hum Kisise Kum Nahin",
      "Genre": "Action",
      "Year": "2002"
    },
    {
      "Title": "Hum Pyar Tumhi Se Kar Baithe",
      "Genre": "Romance",
      "Year": "2002"
    },
    {
      "Title": "Hum Tumhare Hain Sanam",
      "Genre": "Drama",
      "Year": "2002"
    },
    {
      "Title": "Humraaz",
      "Genre": "Thriller",
      "Year": "2002"
    },
    {
      "Title": "Jaani Dushman: Ek Anokhi Kahani",
      "Genre": "Fantasy",
      "Year": "2002"
    },
    {
      "Title": "Jang Aur Aman",
      "Genre": "Documentary",
      "Year": "2002"
    },
    {
      "Title": "Jeena Sirf Merre Liye",
      "Genre": "Romance",
      "Year": "2002"
    },
    {
      "Title": "Kaante",
      "Genre": "Action",
      "Year": "2002"
    },
    {
      "Title": "Kabhie Tum Kabhie Hum",
      "Genre": "Comedy",
      "Year": "2002"
    },
    {
      "Title": "Karz: The Burden of Truth",
      "Genre": "Action",
      "Year": "2002"
    },
    {
      "Title": "Kehtaa Hai Dil Baar Baar",
      "Genre": "Romance",
      "Year": "2002"
    },
    {
      "Title": "Kitne Door Kitne Paas",
      "Genre": "Romance",
      "Year": "2002"
    },
    {
      "Title": "Koi Mere Dil Se Poochhe",
      "Genre": "Drama",
      "Year": "2002"
    },
    {
      "Title": "Kranti",
      "Genre": "Action",
      "Year": "2002"
    },
    {
      "Title": "Kuch Tum Kaho Kuch Hum Kahein",
      "Genre": "Romance",
      "Year": "2002"
    },
    {
      "Title": "Kya Yehi Pyaar Hai",
      "Genre": "Romance",
      "Year": "2002"
    },
    {
      "Title": "Kyaa Dil Ne Kahaa",
      "Genre": "Romance",
      "Year": "2002"
    },
    {
      "Title": "Lal Salaam",
      "Genre": "",
      "Year": "2002"
    },
    {
      "Title": "Maa Tujhhe Salaam",
      "Genre": "Drama",
      "Year": "2002"
    },
    {
      "Title": "Maine Dil Tujhko Diya",
      "Genre": "Action",
      "Year": "2002"
    },
    {
      "Title": "Makdee",
      "Genre": "Comedy",
      "Year": "2002"
    },
    {
      "Title": "Maseeha",
      "Genre": "Action",
      "Year": "2002"
    },
    {
      "Title": "Mere Yaar Ki Shaadi Hai",
      "Genre": "Romance",
      "Year": "2002"
    },
    {
      "Title": "Mitr, My Friend",
      "Genre": "Drama",
      "Year": "2002"
    },
    {
      "Title": "Mohabbat Ho Gayi Hai Tumse",
      "Genre": "",
      "Year": "2002"
    },
    {
      "Title": "Mujhse Dosti Karoge!",
      "Genre": "Romance",
      "Year": "2002"
    },
    {
      "Title": "Mulaqaat",
      "Genre": "",
      "Year": "2002"
    },
    {
      "Title": "Na Tum Jaano Na Hum",
      "Genre": "Romance",
      "Year": "2002"
    },
    {
      "Title": "Nishad",
      "Genre": "Drama",
      "Year": "2002"
    },
    {
      "Title": "Om Jai Jagadish",
      "Genre": "Family",
      "Year": "2002"
    },
    {
      "Title": "Pitaah",
      "Genre": "Action",
      "Year": "2002"
    },
    {
      "Title": "Pyaar Diwana Hota Hai",
      "Genre": "Romance",
      "Year": "2002"
    },
    {
      "Title": "Pyar Ki Dhun",
      "Genre": "Romance",
      "Year": "2002"
    },
    {
      "Title": "Pyaasa",
      "Genre": "Action",
      "Year": "2002"
    },
    {
      "Title": "Raaz",
      "Genre": "Horror",
      "Year": "2002"
    },
    {
      "Title": "Reshma Aur Sultan",
      "Genre": "Action",
      "Year": "2002"
    },
    {
      "Title": "Rishtey",
      "Genre": "Drama",
      "Year": "2002"
    },
    {
      "Title": "Road",
      "Genre": "Thriller",
      "Year": "2002"
    },
    {
      "Title": "Saathiya",
      "Genre": "Drama",
      "Year": "2002"
    },
    {
      "Title": "Shaheed-E-Azam",
      "Genre": "Historical",
      "Year": "2002"
    },
    {
      "Title": "Shakti - The Power",
      "Genre": "Drama",
      "Year": "2002"
    },
    {
      "Title": "Shararat",
      "Genre": "Comedy",
      "Year": "2002"
    },
    {
      "Title": "Soch",
      "Genre": "Thriller",
      "Year": "2002"
    },
    {
      "Title": "Sur: The Melody of Life",
      "Genre": "Musical",
      "Year": "2002"
    },
    {
      "Title": "The Legend of Bhagat Singh",
      "Genre": "Historical",
      "Year": "2002"
    },
    {
      "Title": "Tumko Na Bhool Paayenge",
      "Genre": "Drama",
      "Year": "2002"
    },
    {
      "Title": "Tum Se Achcha Kaun Hai",
      "Genre": "Romance",
      "Year": "2002"
    },
    {
      "Title": "Waah! Tera Kya Kehna",
      "Genre": "Comedy",
      "Year": "2002"
    },
    {
      "Title": "Yeh Dil Aashiqanaa",
      "Genre": "Romance",
      "Year": "2002"
    },
    {
      "Title": "Yeh Hai Jalwa",
      "Genre": "Comedy",
      "Year": "2002"
    },
    {
      "Title": "Yeh Kaisi Mohabbat",
      "Genre": "Romance",
      "Year": "2002"
    },
    {
      "Title": "Yeh Kya Ho Raha Hai?",
      "Genre": "Comedy",
      "Year": "2002"
    },
    {
      "Title": "Yeh Mohabbat Hai",
      "Genre": "Action",
      "Year": "2002"
    },
    {
      "Title": "Zindagi Khoobsoorat Hai",
      "Genre": "",
      "Year": "2002"
    }
  ];

  constructor() {}
}

// console.log(JSON.stringify(movies, null, 2));
// const movies = textArray.slice(1).map(row => {const columns = row.split("\t"); return { Title: columns[0], Genre: columns[3]?.split(",")[0] || "", Year: "2000" }; });
// const textArray = Array.from(list).map(item => item.innerText);
// const list = document.querySelectorAll(".released tr");