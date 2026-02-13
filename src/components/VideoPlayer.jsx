export default function VideoPlayer({ src }) {
  return (
    <iframe src={src} width="640" height="360" allow="autoplay; fullscreen" />
  );
}
