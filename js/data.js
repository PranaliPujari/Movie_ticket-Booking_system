const mockMovies = [
  {
    id: 'm1',
    title: 'Crimson Sky',
    poster: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=600',
    banner: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=1200',
    genre: 'Action, Thriller, Drama',
    duration: '2h 15m',
    language: 'English',
    rating: '8.6',
    status: 'now_showing',
    synopsis: 'A young pilot discovers a hidden secret that could change the fate of an entire nation.',
    cast: 'Miles Teller, Jennifer Lawrence, Oscar Isaac'
  },
  {
    id: 'm8',
    title: 'Adyaksha',
    poster: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=600',
    banner: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=1200',
    genre: 'Action, Thriller, Comedy',
    duration: '2h 20m',
    language: 'Kannada',
    rating: '7.5',
    status: 'upcoming',
    synopsis: 'A powerful political thriller following the rise of a young leader who takes on the corrupt establishment with courage and conviction.',
    cast: 'Puneeth Rajkumar, Radhika Pandit'
  },
  {
    id: 'm16',
    title: 'Kaithi',
    poster: 'https://upload.wikimedia.org/wikipedia/en/7/79/Kaithi_2019_poster.jpg',
    banner: 'https://upload.wikimedia.org/wikipedia/en/7/79/Kaithi_2019_poster.jpg',
    genre: 'Action, Thriller',
    duration: '2h 25m',
    language: 'Tamil',
    rating: '8.4',
    status: 'now_showing',
    synopsis: 'An ex-convict races through one dangerous night to reunite with his daughter while helping police stop a deadly drug operation.',
    cast: 'Karthi, Narain, Dheena'
  },
  {
    id: 'm18',
    title: 'The Last Letter',
    poster: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&q=80&w=600',
    banner: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&q=80&w=1200',
    genre: 'Drama',
    duration: '2h 8m',
    language: 'English',
    rating: '8.2',
    status: 'now_showing',
    synopsis: 'Years after leaving home, a celebrated writer returns to settle an old family secret and finds a chance to begin again.',
    cast: 'Emma Thompson, Dev Patel, Olivia Colman'
  },
  {
    id: 'm19',
    title: 'Laughing Matters',
    poster: 'https://images.unsplash.com/photo-1527224857830-43a7acc85260?auto=format&fit=crop&q=80&w=600',
    banner: 'https://images.unsplash.com/photo-1527224857830-43a7acc85260?auto=format&fit=crop&q=80&w=1200',
    genre: 'Comedy',
    duration: '1h 52m',
    language: 'Hindi',
    rating: '7.8',
    status: 'now_showing',
    synopsis: 'A chaotic wedding weekend turns into a hilarious race against time when three friends lose the rings, the venue, and their plan.',
    cast: 'Ayushmann Khurrana, Bhumi Pednekar, Rajkummar Rao'
  },
  {
    id: 'm20',
    title: 'The Hollow House',
    poster: 'https://images.unsplash.com/photo-1505635552518-3448f4c4b6c6?auto=format&fit=crop&q=80&w=600',
    banner: 'https://images.unsplash.com/photo-1505635552518-3448f4c4b6c6?auto=format&fit=crop&q=80&w=1200',
    genre: 'Horror',
    duration: '1h 48m',
    language: 'English',
    rating: '7.6',
    status: 'upcoming',
    synopsis: 'A group of urban explorers enters an abandoned house where every room remembers the people who disappeared there.',
    cast: 'Mia Goth, Rahul Kohli, Victoria Pedretti'
  },
  {
    id: 'm21',
    title: 'Midnight Run',
    poster: 'https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&q=80&w=600',
    banner: 'https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&q=80&w=1200',
    genre: 'Action, Thriller',
    duration: '2h 12m',
    language: 'English',
    rating: '8.0',
    status: 'now_showing',
    synopsis: 'A former getaway driver has one night to cross the city and protect a witness from the crew he once betrayed.',
    cast: 'John Boyega, Ana de Armas, Idris Elba'
  },
  {
    id: 'm22',
    title: 'One More Weekend',
    poster: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&q=80&w=600',
    banner: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&q=80&w=1200',
    genre: 'Comedy',
    duration: '1h 46m',
    language: 'English',
    rating: '7.7',
    status: 'now_showing',
    synopsis: 'Four lifelong friends reunite for a quiet weekend that quickly becomes a chain of ridiculous plans, surprises, and unforgettable mistakes.',
    cast: 'Mindy Kaling, Simu Liu, Awkwafina'
  },
  {
    id: 'm23',
    title: 'A Place to Begin',
    poster: 'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&q=80&w=600',
    banner: 'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&q=80&w=1200',
    genre: 'Drama',
    duration: '2h 5m',
    language: 'Hindi',
    rating: '8.3',
    status: 'upcoming',
    synopsis: 'A young architect returns to her hometown and rebuilds more than an old house when she reconnects with the people she left behind.',
    cast: 'Konkona Sen Sharma, Vicky Kaushal, Shefali Shah'
  },
  {
    id: 'm24',
    title: 'Whispers in the Dark',
    poster: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=600',
    banner: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=1200',
    genre: 'Horror',
    duration: '1h 55m',
    language: 'English',
    rating: '7.9',
    status: 'now_showing',
    synopsis: 'A sound engineer recording an abandoned village begins to hear a voice that knows every secret she has tried to forget.',
    cast: 'Florence Pugh, Daniel Kaluuya, Toni Collette'
  },
  {
    id: 'm25',
    title: 'The Red Door',
    poster: 'https://images.unsplash.com/photo-1509248961158-e54f6934749c?auto=format&fit=crop&q=80&w=600',
    banner: 'https://images.unsplash.com/photo-1509248961158-e54f6934749c?auto=format&fit=crop&q=80&w=1200',
    genre: 'Horror, Thriller',
    duration: '2h 1m',
    language: 'Hindi',
    rating: '8.1',
    status: 'now_showing',
    synopsis: 'Every night at exactly midnight, a locked red door appears in a family home and opens onto a different nightmare.',
    cast: 'Taapsee Pannu, Vijay Varma, Tabu'
  },
];

const mockTheatres = [
  { id: 't1', name: 'Apsara and Sudha Cinemas', location: 'M.G. Road, City Center' },
  { id: 't2', name: 'PVR Cinemas, InOrbit Mall', location: 'InOrbit Mall, Whitefield' },
  { id: 't3', name: 'Laxmi Citypride Multiplex', location: 'Laxmi Road, Pune' },
  { id: 't4', name: 'Grand Theater Premium', location: '789 Luxury Blvd, Uptown' }
];

const mockShows = ['10:00 AM', '01:15 PM', '04:30 PM', '07:45 PM', '10:30 PM'];

function initData() {
  // Always refresh movies to get the latest list
  localStorage.setItem('movies', JSON.stringify(mockMovies));

  // Always refresh theatres to get the latest list
  localStorage.setItem('theatres', JSON.stringify(mockTheatres));
  if (!localStorage.getItem('shows')) {
    localStorage.setItem('shows', JSON.stringify(mockShows));
  }
  if (!localStorage.getItem('users')) {
    localStorage.setItem('users', JSON.stringify([{ email: 'admin@cinenova.com', password: 'admin', role: 'admin' }]));
  }
  if (!localStorage.getItem('bookings')) {
    localStorage.setItem('bookings', JSON.stringify([]));
  }
  if (!localStorage.getItem('seatMaps')) {
    localStorage.setItem('seatMaps', JSON.stringify({}));
  }
}

// Run initialization immediately when script loads
initData();

