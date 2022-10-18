const joke = document.getElementById('joke');
const jokeBtn = document.getElementById('joke-btn');
const joke_api = 'https://icanhazdadjoke.com';

const quote = document.getElementById('quote');
const quoteAuthor = document.getElementById('author');
const quoteBtn = document.getElementById('quote-btn');
const quote_api = 'https://type.fit/api/quotes';

// get jokes
jokeBtn.addEventListener('click', () => {
  getJoke();
});

async function getJoke() {
  const res = await fetch(joke_api, {
    headers: {
      Accept: 'application/json',
    },
  });

  const data = await res.json();
  joke.textContent = data.joke;
}

// get quotes
quoteBtn.addEventListener('click', () => {
  getQuote();
});

async function getQuote() {
  const res = await fetch(quote_api);
  const data = await res.json();
  const index = Math.floor(Math.random() * data.length);
  const { text, author } = data[index];

  quote.textContent = `"${text}"`;
  quoteAuthor.textContent = `- ${author}`;
}
