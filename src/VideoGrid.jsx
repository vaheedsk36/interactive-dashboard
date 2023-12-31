//TODO: sample video grid

const VideoGrid = () => {

    const VideoCard = ()=>{
        return(
            <div className="card rounded-0 bg-secondary my-1" style={{width:'100%',height:"20vh"}}>

            </div>
        )

    }
  return (
    <div
      className="col card rounded-0 bg-dark p-1"
      style={{
        width: "20vw",
        position: "absolute",
        top: 0,
        right: 0,
        bottom: 0,
      }}
    >
        {
            Array(5).fill(null).map((_,index)=>{
                return <VideoCard key={index}/>
            })
        }

    </div>
  );
};

export default VideoGrid;
