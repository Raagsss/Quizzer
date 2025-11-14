// Questions database organized by category and difficulty
const questionsDatabase = {
    general: {
        easy: [
            {
                question: "What is the capital of France?",
                options: ["London", "Berlin", "Paris", "Madrid"],
                correct: 2
            },
            {
                question: "How many continents are there?",
                options: ["5", "6", "7", "8"],
                correct: 2
            },
            {
                question: "What is 2 + 2?",
                options: ["3", "4", "5", "6"],
                correct: 1
            },
            {
                question: "Which planet is closest to the Sun?",
                options: ["Venus", "Earth", "Mercury", "Mars"],
                correct: 2
            },
            {
                question: "What is the largest ocean?",
                options: ["Atlantic", "Indian", "Arctic", "Pacific"],
                correct: 3
            },
            {
                question: "How many days are in a week?",
                options: ["5", "6", "7", "8"],
                correct: 2
            },
            {
                question: "What color do you get when you mix red and blue?",
                options: ["Green", "Yellow", "Purple", "Orange"],
                correct: 2
            },
            {
                question: "What is the largest mammal?",
                options: ["Elephant", "Blue Whale", "Giraffe", "Hippo"],
                correct: 1
            },
            {
                question: "How many sides does a triangle have?",
                options: ["2", "3", "4", "5"],
                correct: 1
            },
            {
                question: "What is the capital of Japan?",
                options: ["Seoul", "Beijing", "Tokyo", "Bangkok"],
                correct: 2
            }
        ],
        medium: [
            {
                question: "Who painted the Mona Lisa?",
                options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"],
                correct: 2
            },
            {
                question: "What is the chemical symbol for gold?",
                options: ["Go", "Gd", "Au", "Ag"],
                correct: 2
            },
            {
                question: "In which year did World War II end?",
                options: ["1943", "1944", "1945", "1946"],
                correct: 2
            },
            {
                question: "What is the smallest prime number?",
                options: ["0", "1", "2", "3"],
                correct: 2
            },
            {
                question: "Which gas makes up most of Earth's atmosphere?",
                options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Argon"],
                correct: 2
            },
            {
                question: "What is the speed of light in vacuum?",
                options: ["300,000 km/s", "150,000 km/s", "450,000 km/s", "600,000 km/s"],
                correct: 0
            },
            {
                question: "Who wrote 'Romeo and Juliet'?",
                options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
                correct: 1
            },
            {
                question: "What is the largest planet in our solar system?",
                options: ["Saturn", "Jupiter", "Neptune", "Uranus"],
                correct: 1
            },
            {
                question: "How many chambers does a human heart have?",
                options: ["2", "3", "4", "5"],
                correct: 2
            },
            {
                question: "What is the capital of Australia?",
                options: ["Sydney", "Melbourne", "Canberra", "Perth"],
                correct: 2
            }
        ],
        hard: [
            {
                question: "What is the Heisenberg Uncertainty Principle?",
                options: [
                    "Energy cannot be created or destroyed",
                    "Position and momentum cannot be simultaneously measured precisely",
                    "Light behaves as both wave and particle",
                    "Time dilation occurs at high speeds"
                ],
                correct: 1
            },
            {
                question: "Who developed the theory of relativity?",
                options: ["Isaac Newton", "Albert Einstein", "Stephen Hawking", "Niels Bohr"],
                correct: 1
            },
            {
                question: "What is the molecular formula for water?",
                options: ["H2O", "CO2", "NaCl", "O2"],
                correct: 0
            },
            {
                question: "In which year did the Berlin Wall fall?",
                options: ["1987", "1988", "1989", "1990"],
                correct: 2
            },
            {
                question: "What is the square root of 144?",
                options: ["10", "11", "12", "13"],
                correct: 2
            },
            {
                question: "Which programming language is known as the 'language of the web'?",
                options: ["Python", "Java", "JavaScript", "C++"],
                correct: 2
            },
            {
                question: "What is the longest river in the world?",
                options: ["Amazon", "Nile", "Yangtze", "Mississippi"],
                correct: 1
            },
            {
                question: "Who discovered penicillin?",
                options: ["Louis Pasteur", "Alexander Fleming", "Marie Curie", "Robert Koch"],
                correct: 1
            },
            {
                question: "What is the atomic number of carbon?",
                options: ["4", "5", "6", "7"],
                correct: 2
            },
            {
                question: "Which algorithm is used for secure data transmission?",
                options: ["MD5", "SHA-1", "RSA", "Base64"],
                correct: 2
            }
        ]
    },
    science: {
        easy: [
            {
                question: "What is H2O commonly known as?",
                options: ["Hydrogen", "Oxygen", "Water", "Salt"],
                correct: 2
            },
            {
                question: "What planet do we live on?",
                options: ["Mars", "Venus", "Earth", "Jupiter"],
                correct: 2
            },
            {
                question: "What is the closest star to Earth?",
                options: ["Alpha Centauri", "The Sun", "Sirius", "Betelgeuse"],
                correct: 1
            },
            {
                question: "How many bones are in an adult human body?",
                options: ["196", "206", "216", "226"],
                correct: 1
            },
            {
                question: "What gas do plants absorb from the atmosphere?",
                options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
                correct: 2
            }
        ],
        medium: [
            {
                question: "What is the speed of sound?",
                options: ["343 m/s", "300 m/s", "400 m/s", "500 m/s"],
                correct: 0
            },
            {
                question: "What is the chemical formula for table salt?",
                options: ["NaCl", "H2O", "CO2", "CaCO3"],
                correct: 0
            },
            {
                question: "What is the hardest natural substance?",
                options: ["Gold", "Iron", "Diamond", "Platinum"],
                correct: 2
            },
            {
                question: "What is the process by which plants make food?",
                options: ["Respiration", "Photosynthesis", "Digestion", "Fermentation"],
                correct: 1
            },
            {
                question: "What is the most abundant gas in Earth's atmosphere?",
                options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Argon"],
                correct: 2
            }
        ],
        hard: [
            {
                question: "What is the Schrödinger's cat thought experiment about?",
                options: [
                    "Quantum superposition",
                    "Relativity",
                    "Thermodynamics",
                    "Electromagnetism"
                ],
                correct: 0
            },
            {
                question: "What is the half-life of Carbon-14?",
                options: ["5,730 years", "10,000 years", "1,000 years", "50,000 years"],
                correct: 0
            },
            {
                question: "What is the formula for kinetic energy?",
                options: ["mv²", "½mv²", "mgh", "F=ma"],
                correct: 1
            },
            {
                question: "What is the charge of an electron?",
                options: ["Positive", "Negative", "Neutral", "Variable"],
                correct: 1
            },
            {
                question: "What is the Planck constant?",
                options: ["6.626 × 10⁻³⁴ J·s", "3.14", "9.8 m/s²", "6.022 × 10²³"],
                correct: 0
            }
        ]
    },
    history: {
        easy: [
            {
                question: "In which year did World War I begin?",
                options: ["1912", "1914", "1916", "1918"],
                correct: 1
            },
            {
                question: "Who was the first President of the United States?",
                options: ["Thomas Jefferson", "George Washington", "John Adams", "Benjamin Franklin"],
                correct: 1
            },
            {
                question: "Which empire was ruled by Julius Caesar?",
                options: ["Greek", "Roman", "Egyptian", "Persian"],
                correct: 1
            },
            {
                question: "In which year did the American Civil War end?",
                options: ["1863", "1864", "1865", "1866"],
                correct: 2
            },
            {
                question: "Who discovered America?",
                options: ["Vasco da Gama", "Christopher Columbus", "Ferdinand Magellan", "Marco Polo"],
                correct: 1
            }
        ],
        medium: [
            {
                question: "When did the French Revolution begin?",
                options: ["1787", "1789", "1791", "1793"],
                correct: 1
            },
            {
                question: "Who was known as the 'Iron Lady'?",
                options: ["Indira Gandhi", "Margaret Thatcher", "Angela Merkel", "Golda Meir"],
                correct: 1
            },
            {
                question: "Which war was fought between 1950-1953?",
                options: ["Vietnam War", "Korean War", "World War II", "Cold War"],
                correct: 1
            },
            {
                question: "Who was the leader of the Soviet Union during World War II?",
                options: ["Lenin", "Stalin", "Khrushchev", "Brezhnev"],
                correct: 1
            },
            {
                question: "In which year did the Berlin Wall fall?",
                options: ["1987", "1988", "1989", "1990"],
                correct: 2
            }
        ],
        hard: [
            {
                question: "What was the name of the operation that led to D-Day?",
                options: ["Operation Overlord", "Operation Barbarossa", "Operation Market Garden", "Operation Torch"],
                correct: 0
            },
            {
                question: "Who was the last Tsar of Russia?",
                options: ["Alexander II", "Nicholas II", "Peter the Great", "Catherine the Great"],
                correct: 1
            },
            {
                question: "When did the Renaissance period begin?",
                options: ["14th century", "15th century", "16th century", "17th century"],
                correct: 0
            },
            {
                question: "Which battle marked the turning point of World War II in Europe?",
                options: ["Battle of Britain", "Battle of Stalingrad", "Battle of Normandy", "Battle of the Bulge"],
                correct: 1
            },
            {
                question: "Who wrote 'The Communist Manifesto'?",
                options: ["Vladimir Lenin", "Karl Marx", "Friedrich Engels", "Joseph Stalin"],
                correct: 1
            }
        ]
    },
    technology: {
        easy: [
            {
                question: "What does 'HTML' stand for?",
                options: ["HyperText Markup Language", "High Tech Modern Language", "Home Tool Markup Language", "Hyperlink Text Markup Language"],
                correct: 0
            },
            {
                question: "What does 'CPU' stand for?",
                options: ["Central Processing Unit", "Computer Personal Unit", "Central Program Utility", "Computer Processing Unit"],
                correct: 0
            },
            {
                question: "What is the most popular programming language?",
                options: ["Python", "JavaScript", "Java", "C++"],
                correct: 1
            },
            {
                question: "What does 'URL' stand for?",
                options: ["Uniform Resource Locator", "Universal Resource Link", "Uniform Resource Link", "Universal Resource Locator"],
                correct: 0
            },
            {
                question: "What is the name of Google's browser?",
                options: ["Firefox", "Safari", "Chrome", "Edge"],
                correct: 2
            }
        ],
        medium: [
            {
                question: "What is the time complexity of binary search?",
                options: ["O(n)", "O(log n)", "O(n²)", "O(1)"],
                correct: 1
            },
            {
                question: "What does 'API' stand for?",
                options: ["Application Programming Interface", "Advanced Programming Interface", "Application Program Integration", "Automated Programming Interface"],
                correct: 0
            },
            {
                question: "What is the default port for HTTP?",
                options: ["80", "443", "8080", "3000"],
                correct: 0
            },
            {
                question: "What does 'SQL' stand for?",
                options: ["Structured Query Language", "Simple Query Language", "Standard Query Language", "System Query Language"],
                correct: 0
            },
            {
                question: "What is the main purpose of a firewall?",
                options: ["Speed up internet", "Block unauthorized access", "Store data", "Display graphics"],
                correct: 1
            }
        ],
        hard: [
            {
                question: "What is the time complexity of quicksort in average case?",
                options: ["O(n)", "O(n log n)", "O(n²)", "O(log n)"],
                correct: 1
            },
            {
                question: "What is the purpose of a CDN?",
                options: ["Content Delivery Network", "Computer Data Network", "Centralized Data Network", "Cloud Data Network"],
                correct: 0
            },
            {
                question: "What does 'REST' stand for in REST API?",
                options: ["Representational State Transfer", "Remote State Transfer", "Resource State Transfer", "Representative State Transfer"],
                correct: 0
            },
            {
                question: "What is the maximum value of a 32-bit signed integer?",
                options: ["2,147,483,647", "4,294,967,295", "1,073,741,824", "3,221,225,472"],
                correct: 0
            },
            {
                question: "What is the purpose of Docker?",
                options: ["Containerization", "Virtualization", "Compilation", "Optimization"],
                correct: 0
            }
        ]
    },
    sports: {
        easy: [
            {
                question: "How many players are on a soccer team?",
                options: ["9", "10", "11", "12"],
                correct: 2
            },
            {
                question: "Which sport is played at Wimbledon?",
                options: ["Golf", "Tennis", "Cricket", "Rugby"],
                correct: 1
            },
            {
                question: "How many rings are in the Olympic symbol?",
                options: ["4", "5", "6", "7"],
                correct: 1
            },
            {
                question: "What is the duration of a standard basketball game?",
                options: ["40 minutes", "48 minutes", "60 minutes", "90 minutes"],
                correct: 1
            },
            {
                question: "Which country won the FIFA World Cup in 2018?",
                options: ["Brazil", "Germany", "France", "Argentina"],
                correct: 2
            }
        ],
        medium: [
            {
                question: "What is the maximum score in a single frame of bowling?",
                options: ["10", "20", "30", "40"],
                correct: 0
            },
            {
                question: "How many sets are needed to win a standard tennis match?",
                options: ["2", "3", "4", "5"],
                correct: 1
            },
            {
                question: "What is the distance of a marathon?",
                options: ["26.2 miles", "24.2 miles", "28.2 miles", "30.2 miles"],
                correct: 0
            },
            {
                question: "Which sport uses a shuttlecock?",
                options: ["Tennis", "Badminton", "Volleyball", "Table Tennis"],
                correct: 1
            },
            {
                question: "How many players are on a basketball court at one time?",
                options: ["8", "10", "12", "14"],
                correct: 1
            }
        ],
        hard: [
            {
                question: "Who holds the record for most Olympic gold medals?",
                options: ["Usain Bolt", "Michael Phelps", "Carl Lewis", "Mark Spitz"],
                correct: 1
            },
            {
                question: "What is the maximum break in snooker?",
                options: ["147", "155", "160", "180"],
                correct: 0
            },
            {
                question: "In which year was the first modern Olympics held?",
                options: ["1894", "1896", "1900", "1904"],
                correct: 1
            },
            {
                question: "What is the scoring system in volleyball called?",
                options: ["Rally scoring", "Point scoring", "Set scoring", "Match scoring"],
                correct: 0
            },
            {
                question: "How many holes are in a standard golf course?",
                options: ["16", "17", "18", "19"],
                correct: 2
            }
        ]
    },
    geography: {
        easy: [
            {
                question: "What is the largest country by area?",
                options: ["China", "Canada", "Russia", "United States"],
                correct: 2
            },
            {
                question: "What is the smallest country in the world?",
                options: ["Monaco", "Vatican City", "San Marino", "Liechtenstein"],
                correct: 1
            },
            {
                question: "Which is the longest river in the world?",
                options: ["Amazon", "Nile", "Yangtze", "Mississippi"],
                correct: 1
            },
            {
                question: "What is the highest mountain in the world?",
                options: ["K2", "Mount Everest", "Kangchenjunga", "Lhotse"],
                correct: 1
            },
            {
                question: "Which ocean is the largest?",
                options: ["Atlantic", "Indian", "Arctic", "Pacific"],
                correct: 3
            }
        ],
        medium: [
            {
                question: "What is the capital of New Zealand?",
                options: ["Auckland", "Wellington", "Christchurch", "Hamilton"],
                correct: 1
            },
            {
                question: "Which country is known as the 'Land of the Rising Sun'?",
                options: ["China", "Japan", "South Korea", "Thailand"],
                correct: 1
            },
            {
                question: "What is the largest desert in the world?",
                options: ["Gobi", "Sahara", "Antarctic", "Arabian"],
                correct: 2
            },
            {
                question: "Which continent is the most populous?",
                options: ["Africa", "Europe", "Asia", "North America"],
                correct: 2
            },
            {
                question: "What is the deepest ocean trench?",
                options: ["Puerto Rico Trench", "Mariana Trench", "Java Trench", "Tonga Trench"],
                correct: 1
            }
        ],
        hard: [
            {
                question: "What is the capital of Bhutan?",
                options: ["Kathmandu", "Thimphu", "Dhaka", "Colombo"],
                correct: 1
            },
            {
                question: "Which country has the most time zones?",
                options: ["United States", "Russia", "China", "Canada"],
                correct: 1
            },
            {
                question: "What is the name of the strait between Europe and Asia?",
                options: ["Bosphorus", "Gibraltar", "Dover", "Messina"],
                correct: 0
            },
            {
                question: "Which country is completely surrounded by South Africa?",
                options: ["Botswana", "Lesotho", "Swaziland", "Namibia"],
                correct: 1
            },
            {
                question: "What is the largest lake in Africa?",
                options: ["Lake Victoria", "Lake Tanganyika", "Lake Malawi", "Lake Chad"],
                correct: 0
            }
        ]
    }
};


