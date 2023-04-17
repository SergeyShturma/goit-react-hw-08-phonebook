import s from './HomePage.module.css';

export default function HomePage() {
  return (
    <div className={s.container}>
      <p className={s.text}>Thank you for using our app!</p>
      <iframe
        title="Fun"
        className={s.gif}
        src="https://giphy.com/embed/fA81FF4mdE6lgeoJwb"
        alt="gif"
      ></iframe>
    </div>
  );
}
