import axios from 'axios';
import config from '../../config.json';

export const getProjects = async () => {
  const { data } = await axios.get(
    `https://api.github.com/users/${config.social.github}/repos`,
  );

  return data;
};

export const getBio = async () => {
  const data = `
G'day! I’m Apoorva Kothari.

I'm a self-taught Front-end developer and a college student currently pursuing my Bachelor's degree in Information Technology from Indian Institute of Information Technology, Lucknow. As someone who believes in the power of knowledge and continuous learning, I am constantly seeking new opportunities to expand my skills and stay ahead of the curve in this rapidly evolving industry.

Apart from developement, some things I like are
  >Acting 
  >Dacing
  >Travelling

  `;

  return data;
};

export const getWeather = async (city: string) => {
  const { data } = await axios.get(`https://wttr.in/${city}?ATm`);

  return data;
};

export const getQuote = async () => {
  const { data } = await axios.get('https://api.quotable.io/random');

  return {
    quote: `“${data.content}” — ${data.author}`,
  };
};
