import "./style.css";

const Background_Video = ({ id }) => {
  return (
    <>
      <div id="wrapper_black"></div>
      <video id="background_video" loop autoPlay muted>
        <source src={require(`./videos/bg${id}.mp4`)} type="video/mp4" />
        <source src={require(`./videos/bg${id}.mp4`)} type="video/ogg" />
      </video>
    </>
  );
};

export default Background_Video;
